import React, { useState } from 'react';
import { Calendar, Users, Send } from 'lucide-react';
import { content, t } from '../data/content';

interface BookingProps {
  currentLanguage: 'es' | 'en' | 'fr' | 'cz';
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

  const bookingContent = t(content.booking, currentLanguage);

  // Allow Booking section to set contextual SEO when mounted or language changes
  React.useEffect(() => {
    if (typeof setPageSeo === 'function') {
      const seo = (content as any).seoPages?.booking?.[currentLanguage];
      if (seo) setPageSeo(seo);
    }
  }, [currentLanguage, setPageSeo]);

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

  const buildMessage = () => {
    const formatDateEuropean = (dateString: string) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    };
    return `${bookingContent.pricing.message}

👤 *Name:* ${formData.firstName} ${formData.lastName}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}

🗓️ *${bookingContent.form.checkin}:* ${formatDateEuropean(formData.checkin)}
🗓️ *${bookingContent.form.checkout}:* ${formatDateEuropean(formData.checkout)}
👥 *${bookingContent.form.guests}:* ${formData.guests}

${formData.message ? `\n💬 *${bookingContent.form.message}:*\n${formData.message}` : ''}`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/5352446361?text=${encodedMessage}`, '_blank');
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
                      currentLanguage === 'es'
                        ? 'Carlos'
                        : currentLanguage === 'fr'
                          ? 'Pierre'
                          : currentLanguage === 'cz'
                            ? 'Jan'
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
                      currentLanguage === 'es'
                        ? 'García'
                        : currentLanguage === 'fr'
                          ? 'Dupont'
                          : currentLanguage === 'cz'
                            ? 'Novák'
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
                    placeholder="+53 5 2446361"
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
                    currentLanguage === 'es'
                      ? '¿Tiene alguna solicitud o pregunta especial?'
                      : currentLanguage === 'fr'
                        ? 'Avez-vous des demandes ou questions spéciales ?'
                        : currentLanguage === 'cz'
                          ? 'Máte nějaké speciální požadavky nebo dotazy?'
                          : 'Do you have any special requests or questions?'
                  }
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 px-4 rounded-lg font-semibold text-base transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
