import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skontaktuj Się z Nami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Masz pytania? Chcesz zarezerwować wizytę? Jesteśmy tutaj, aby pomóc! 
            Skontaktuj się z nami w dowolny sposób - z radością odpowiemy na wszystkie Twoje pytania.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Informacje Kontaktowe</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                    <p className="text-gray-600">(22) 123-4567</p>
                    <p className="text-sm text-gray-500">Pon-Sob: 9:00-19:00, Nie: 10:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                    <p className="text-gray-600">ul. Piękna 123</p>
                    <p className="text-gray-600">00-001 Warszawa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@luxenails.pl</p>
                    <p className="text-sm text-gray-500">Odpowiadamy w ciągu 24 godzin</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Godziny Otwarcia</h3>
                    <div className="text-gray-600">
                      <p>Poniedziałek - Sobota: 9:00 - 19:00</p>
                      <p>Niedziela: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-12 p-6 bg-pink-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Szybkie Akcje</h3>
                <div className="space-y-3">
                  <a
                    href="/booking"
                    className="block w-full bg-pink-500 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-200"
                  >
                    Zarezerwuj Wizytę
                  </a>
                  <a
                    href="tel:+48221234567"
                    className="block w-full border-2 border-pink-500 text-pink-500 text-center py-3 px-4 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-colors duration-200"
                  >
                    Zadzwoń Teraz
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <MessageSquare className="h-6 w-6 text-pink-500 mr-3" />
                  Wyślij Nam Wiadomość
                </h2>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-center font-medium">
                      Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Imię i Nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                      placeholder="Wprowadź swoje imię i nazwisko"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Adres Email *
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
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Temat *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                    >
                      <option value="">Wybierz temat</option>
                      <option value="appointment">Zapytanie o Wizytę</option>
                      <option value="services">Pytania o Usługi</option>
                      <option value="pricing">Informacje o Cenach</option>
                      <option value="membership">Członkostwo VIP</option>
                      <option value="feedback">Opinia lub Skarga</option>
                      <option value="other">Inne</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Wiadomość *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                      placeholder="Napisz swoją wiadomość tutaj..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-200"
                  >
                    Wyślij Wiadomość
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Znajdź Nas</h2>
            <p className="text-xl text-gray-600">
              Przyjdź i zobacz nasz piękny salon w centrum Warszawy
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center text-gray-500">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-pink-500" />
                <p className="text-lg font-semibold text-gray-900 mb-2">Luxe Nails</p>
                <p className="text-gray-600">ul. Piękna 123, 00-001 Warszawa</p>
                <p className="text-sm text-gray-500 mt-4">
                  Wbudowana mapa będzie dostępna w pełnej wersji strony
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;