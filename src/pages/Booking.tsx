import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    date: new Date(),
    time: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { name: 'Klasyczny Manicure', duration: '45 min', price: '150 zł' },
    { name: 'Manicure Hybrydowy', duration: '60 min', price: '180 zł' },
    { name: 'Francuski Manicure', duration: '50 min', price: '160 zł' },
    { name: 'Luksusowy Spa Manicure', duration: '75 min', price: '260 zł' },
    { name: 'Klasyczny Pedicure', duration: '45 min', price: '160 zł' },
    { name: 'Pedicure Hybrydowy', duration: '60 min', price: '200 zł' },
    { name: 'Luksusowy Spa Pedicure', duration: '90 min', price: '300 zł' },
    { name: 'Indywidualny Nail Art', duration: '90 min', price: '220 zł+' },
    { name: 'Przedłużanie Akrylowe', duration: '120 min', price: '260 zł' },
    { name: 'Przedłużanie Żelowe', duration: '120 min', price: '280 zł' }
  ];

  const timeSlots = [
    '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setFormData(prev => ({
        ...prev,
        date: date
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Rezerwacja złożona:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-r from-pink-50 to-purple-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rezerwacja Potwierdzona!</h2>
          <p className="text-gray-600 mb-6">
            Dziękujemy za wybór Luxe Nails! Otrzymaliśmy Twoją prośbę o wizytę i skontaktujemy się z Tobą w ciągu 24 godzin, aby potwierdzić rezerwację.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Szczegóły Rezerwacji:</h3>
              <p className="text-gray-600">Usługa: {formData.service}</p>
              <p className="text-gray-600">Data: {formData.date.toLocaleDateString('pl-PL')}</p>
              <p className="text-gray-600">Godzina: {formData.time}</p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-200"
            >
              Zarezerwuj Kolejną Wizytę
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Zarezerwuj Swoją Wizytę
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Wybierz preferowaną usługę, datę i godzinę. Skontaktujemy się z Tobą, aby potwierdzić dostępność i finalizować rezerwację.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <User className="h-6 w-6 text-pink-500 mr-3" />
                Informacje Osobiste
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Imię *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Twoje imię"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nazwisko *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Twoje nazwisko"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                    placeholder="twoj.email@przykład.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                    placeholder="+48 123 456 789"
                  />
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Wybierz Usługę
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <label key={index} className="cursor-pointer">
                    <input
                      type="radio"
                      name="service"
                      value={service.name}
                      checked={formData.service === service.name}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      formData.service === service.name
                        ? 'border-pink-500 bg-pink-50'
                        : 'border-gray-300 bg-white hover:border-pink-300'
                    }`}>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{service.name}</h3>
                        <span className="text-pink-500 font-bold">{service.price}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Date and Time Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Date Selection */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 text-pink-500 mr-3" />
                  Wybierz Datę
                </h2>
                
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  minDate={new Date()}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Wybierz datę"
                />
              </div>

              {/* Time Selection */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Clock className="h-6 w-6 text-pink-500 mr-3" />
                  Wybierz Godzinę
                </h2>
                
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <label key={time} className="cursor-pointer">
                      <input
                        type="radio"
                        name="time"
                        value={time}
                        checked={formData.time === time}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`p-2 text-center rounded-lg border transition-all duration-200 ${
                        formData.time === time
                          ? 'border-pink-500 bg-pink-500 text-white'
                          : 'border-gray-300 bg-white hover:border-pink-300'
                      }`}>
                        <span className="text-sm font-medium">{time}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 text-pink-500 mr-3" />
                Dodatkowe Uwagi
              </h2>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Specjalne Życzenia lub Uwagi
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Daj nam znać jeśli masz jakieś alergie, preferencje lub specjalne życzenia..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-pink-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Zarezerwuj Wizytę
              </button>
              <p className="text-sm text-gray-500 mt-4">
                * Skontaktujemy się z Tobą w ciągu 24 godzin, aby potwierdzić wizytę
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Informacje o Rezerwacji
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <Calendar className="h-8 w-8 text-pink-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Elastyczne Terminy</h3>
                <p className="text-gray-600 text-sm">Otwarte 7 dni w tygodniu z wieczornymi terminami</p>
              </div>
              
              <div className="p-4">
                <Phone className="h-8 w-8 text-pink-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Szybkie Potwierdzenie</h3>
                <p className="text-gray-600 text-sm">Odpowiadamy w ciągu 24 godzin wszystkich dni tygodnia</p>
              </div>
              
              <div className="p-4">
                <MessageSquare className="h-8 w-8 text-pink-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Łatwe Zmiany</h3>
                <p className="text-gray-600 text-sm">Anuluj lub zmień wizytę do 24 godzin przed terminem</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;