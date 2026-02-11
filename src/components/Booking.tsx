import React, { useState } from 'react';
import { Calendar, Users, Send, Euro } from 'lucide-react';
import { siteConfig, content } from '../data/content';

// Inline pricing config and utilities
const PRICING = {
  lowSeason: 180,
  highSeason: 250,
  cleaningFee: 80,
  touristTax: 2.5,
};

const getSeasonType = (date: Date): 'high' | 'low' => {
  const month = date.getMonth() + 1;
  // High season: April 15 - June 30, September - March
  if ((month === 4 && date.getDate() >= 15) || (month >= 5 && month <= 6))
    return 'high';
  if (month >= 9 || month <= 3) return 'high';
  return 'low'; // July-August
};

const calculateStayTotal = (
  checkinDate: string,
  checkoutDate: string,
  guests: number,
) => {
  const checkin = new Date(checkinDate);
  const checkout = new Date(checkoutDate);
  if (checkin >= checkout) throw new Error('Invalid dates');

  let nights = 0,
    accommodationTotal = 0;
  const breakdown: Array<{
    date: string;
    price: number;
    season: 'high' | 'low';
  }> = [];
  const currentDate = new Date(checkin);

  while (currentDate < checkout) {
    const season = getSeasonType(currentDate);
    const price = season === 'high' ? PRICING.highSeason : PRICING.lowSeason;
    accommodationTotal += price;
    nights++;
    breakdown.push({
      date: currentDate.toISOString().split('T')[0],
      price,
      season,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const touristTax = guests * nights * PRICING.touristTax;
  const subtotal = accommodationTotal + PRICING.cleaningFee;
  const total = subtotal + touristTax;

  return {
    nights,
    accommodationTotal,
    cleaningFee: PRICING.cleaningFee,
    touristTax,
    subtotal,
    total,
    breakdown,
    averagePerNight: Math.round(accommodationTotal / nights),
  };
};

const formatPrice = (amount: number): string =>
  new Intl.NumberFormat('hr-HR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

const getSeasonLabel = (
  season: 'high' | 'low',
  language: 'hr' | 'en' | 'it' = 'hr',
): string => {
  if (language === 'en') {
    return season === 'high' ? 'High Season' : 'Low Season';
  }
  if (language === 'it') {
    return season === 'high' ? 'Alta stagione' : 'Bassa stagione';
  }
  return season === 'high' ? 'Visoka Sezona' : 'Niska Sezona';
};

interface BookingProps {
  currentLanguage: 'hr' | 'en' | 'it';
  setPageSeo?: (seo: any) => void;
}

const Booking: React.FC<BookingProps> = ({ currentLanguage, setPageSeo }) => {
  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    guests: '2',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [priceCalculation, setPriceCalculation] = useState<any>(null);

  const bookingContent = content.booking[currentLanguage];

  // Allow Booking section to set contextual SEO when mounted or language changes
  React.useEffect(() => {
    if (typeof setPageSeo === 'function') {
      const seo = (content as any).seoPages?.booking?.[currentLanguage];
      if (seo) setPageSeo(seo);
    }
  }, [currentLanguage, setPageSeo]);

  // Calculate price when dates or guests change
  React.useEffect(() => {
    if (formData.checkin && formData.checkout && formData.guests) {
      try {
        const calculation = calculateStayTotal(
          formData.checkin,
          formData.checkout,
          parseInt(formData.guests),
        );
        setPriceCalculation(calculation);
      } catch (error) {
        setPriceCalculation(null);
      }
    } else {
      setPriceCalculation(null);
    }
  }, [formData.checkin, formData.checkout, formData.guests]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message
    const formatDateEuropean = (dateString: string) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    };

    // const priceText = priceCalculation
    //   ? `\n\n💰 *${bookingContent.pricing.total}: ${formatPrice(priceCalculation.total)}*`
    //   : '';

    const message = `${bookingContent.pricing.message}

👤 *Name:* ${formData.firstName} ${formData.lastName}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}

🗓️ *${bookingContent.form.checkin}:* ${formatDateEuropean(formData.checkin)}
🗓️ *${bookingContent.form.checkout}:* ${formatDateEuropean(formData.checkout)}
👥 *${bookingContent.form.guests}:* ${formData.guests}

${formData.message ? `\n💬 *${bookingContent.form.message}:*\n${formData.message}` : ''}`;

    // WhatsApp destination number (no + or spaces)
    const phoneNumber = '385921066913';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {bookingContent.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {bookingContent.subtitle}
          </p>
        </div>

        {/* <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8"> */}
        {/* Pricing Info */}
        {/* <div className="lg:col-span-1">
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Euro size={20} className="mr-2 text-blue-600" />
                  {bookingContent.pricing.title}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between items-center">
                    <span>{bookingContent.pricing.lowSeason}:</span>
                    <span className="font-semibold">
                      €180{bookingContent.pricing.pricePerNight}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{bookingContent.pricing.highSeason}:</span>
                    <span className="font-semibold">
                      €250{bookingContent.pricing.pricePerNight}
                    </span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between items-center text-sm">
                    <span>{bookingContent.pricing.finalCleaning}:</span>
                    <span>€80</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>{bookingContent.pricing.touristTax}:</span>
                    <span>€2.50/persona/noć</span>
                  </div>
                </div>
              </div>

          //     {/* Price Calculation */}
        {/* //     {priceCalculation && ( */}
        {/* //       <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border border-blue-100">
          //         <h3 className="text-xl font-semibold text-gray-900 mb-4">
          //           {bookingContent.pricing.priceCalculation}
          //         </h3>

          //         <div className="space-y-3">
          //           <div className="flex justify-between items-center">
          //             <span className="text-gray-700">
          //               {priceCalculation.nights}{' '}
          //               {currentLanguage === 'hr' ? 'noći' : 'nights'}
          //             </span>
          //             <span className="font-semibold">
          //               {formatPrice(priceCalculation.accommodationTotal)}
          //             </span>
          //           </div>

          //           <div className="text-xs text-gray-600 ml-4 space-y-1">
          //             {priceCalculation.breakdown.map( */}
        {/* //               (night: any, index: number) => (
          //                 <div key={index} className="flex justify-between">
          //                   <span>
          //                     {new Date(night.date).toLocaleDateString('it-IT')}
          //                   </span>
          //                   <span>
          //                     {formatPrice(night.price)}
          //                     <span className="ml-1 text-xs">
          //                       ({getSeasonLabel(night.season, currentLanguage)}
          //                       )
          //                     </span>
          //                   </span>
          //                 </div>
          //               ),
          //             )}
          //           </div>

          //           <div className="flex justify-between items-center">
          //             <span className="text-gray-700">
          //               {bookingContent.pricing.finalCleaning}
          //             </span>
          //             <span className="font-semibold">
          //               {formatPrice(priceCalculation.cleaningFee)}
          //             </span>
          //           </div> */}

        {/* //           <div className="flex justify-between items-center">
          //             <span className="text-gray-700">
          //               {bookingContent.pricing.touristTax}
          //             </span>
          //             <span className="font-semibold">
          //               {formatPrice(priceCalculation.touristTax)}
          //             </span>
          //           </div>

          //           <hr className="border-blue-200" />

          //           <div className="flex justify-between items-center text-lg font-bold text-blue-900">
          //             <span>{bookingContent.pricing.total}</span>
          //             <span>{formatPrice(priceCalculation.total)}</span>
          //           </div>

          //           <div className="text-center text-sm text-gray-600 mt-2">
          //             {currentLanguage === 'hr' */}
        {/* //               ? `Prosječno: ${formatPrice(priceCalculation.averagePerNight)}/noć`
          //               : `Average: ${formatPrice(priceCalculation.averagePerNight)}/night`}
          //           </div>
          //         </div>
          //       </div> */}
        {/* //     )}
          //   </div>
          // </div> */}

        {/* Booking Form */}
        <div className="w-full lg:w-1/2 mx-auto rounded-2xl p-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form
              onSubmit={handleWhatsAppSubmit}
              className="space-y-4 md:space-y-6"
            >
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar size={16} className="inline mr-1" />
                    {bookingContent.form.checkin} *
                  </label>
                  <input
                    type="date"
                    name="checkin"
                    value={formData.checkin}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar size={16} className="inline mr-1" />
                    {bookingContent.form.checkout} *
                  </label>
                  <input
                    type="date"
                    name="checkout"
                    value={formData.checkout}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users size={16} className="inline mr-1" />
                    {bookingContent.form.guests} *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {bookingContent.form.firstName} *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder={
                      currentLanguage === 'hr'
                        ? 'Marko'
                        : currentLanguage === 'it'
                          ? 'Marco'
                          : 'John'
                    }
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {bookingContent.form.lastName} *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder={
                      currentLanguage === 'hr'
                        ? 'Horvat'
                        : currentLanguage === 'it'
                          ? 'Rossi'
                          : 'Smith'
                    }
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {bookingContent.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {bookingContent.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+385 91 234 5678"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {bookingContent.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={
                    currentLanguage === 'hr'
                      ? 'Imate li posebne zahtjeve ili pitanja?'
                      : currentLanguage === 'it'
                        ? 'Hai richieste o domande speciali?'
                        : 'Do you have any special requests or questions?'
                  }
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-blue-900">
                  📱 {bookingContent.pricing.whatsappRedirect}
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>{bookingContent.pricing.submitButton}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Booking;
