// Utilities for seasonal price calculation
export interface PricingConfig {
  lowSeason: number;    // €/night low season
  highSeason: number;   // €/night high season
  cleaningFee: number;  // Final cleaning
  touristTax: number;   // Tourist tax per person/night
}

export const defaultPricing: PricingConfig = {
  lowSeason: 180,
  highSeason: 250,
  cleaningFee: 80,
  touristTax: 2.5
};

// Season definition
export const getSeasonType = (date: Date): 'high' | 'low' => {
  const month = date.getMonth() + 1; // 1-12
  const day = date.getDate();
  
  // High season:
  // - Mid-April (April 15) - June (June 30)
  // - September - October (October 31)
  // - November - Mid-April (April 14)
  
  if (month === 4 && day >= 15) return 'high'; // Mid-April
  if (month >= 5 && month <= 6) return 'high'; // May-June
  if (month >= 9 && month <= 10) return 'high'; // September-October
  if (month >= 11 || month <= 3) return 'high'; // November-March
  if (month === 4 && day <= 14) return 'high'; // First half of April
  
  // Low season: July-August
  return 'low';
};

export const getPriceForDate = (date: Date, pricing: PricingConfig = defaultPricing): number => {
  const season = getSeasonType(date);
  return season === 'high' ? pricing.highSeason : pricing.lowSeason;
};

export const calculateStayTotal = (
  checkinDate: string, 
  checkoutDate: string, 
  guests: number,
  pricing: PricingConfig = defaultPricing
) => {
  const checkin = new Date(checkinDate);
  const checkout = new Date(checkoutDate);
  
  if (checkin >= checkout) {
    throw new Error('Checkout date must be after check-in date');
  }
  
  let totalNights = 0;
  let totalAccommodation = 0;
  const nightlyBreakdown: Array<{date: string, price: number, season: 'high' | 'low'}> = [];
  
  // Calculate price for each night
  const currentDate = new Date(checkin);
  while (currentDate < checkout) {
    const nightPrice = getPriceForDate(currentDate, pricing);
    const season = getSeasonType(currentDate);
    
    totalAccommodation += nightPrice;
    totalNights++;
    
    nightlyBreakdown.push({
      date: currentDate.toISOString().split('T')[0],
      price: nightPrice,
      season
    });
    
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  const touristTaxTotal = guests * totalNights * pricing.touristTax;
  const subtotal = totalAccommodation + pricing.cleaningFee;
  const total = subtotal + touristTaxTotal;
  
  return {
    nights: totalNights,
    accommodationTotal: totalAccommodation,
    cleaningFee: pricing.cleaningFee,
    touristTax: touristTaxTotal,
    subtotal,
    total,
    breakdown: nightlyBreakdown,
    averagePerNight: Math.round(totalAccommodation / totalNights)
  };
};

export const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const getSeasonLabel = (season: 'high' | 'low', language: 'hr' | 'en' = 'hr'): string => {
  if (language === 'en') {
    return season === 'high' ? 'High Season' : 'Low Season';
  }
  return season === 'high' ? 'Visoka Sezona' : 'Niska Sezona';
};