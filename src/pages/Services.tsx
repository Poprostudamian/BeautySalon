import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      category: 'Manicure',
      services: [
        {
          name: 'Klasyczny Manicure',
          duration: '45 minut',
          price: '150 zł',
          description: 'Tradycyjny manicure z pielęgnacją skórek, modelowaniem i aplikacją zwykłego lakieru'
        },
        {
          name: 'Manicure Hybrydowy',
          duration: '60 minut',
          price: '180 zł',
          description: 'Długotrwały lakier hybrydowy z utwardzaniem UV/LED dla odpornego na odpryski wykończenia'
        },
        {
          name: 'Francuski Manicure',
          duration: '50 minut',
          price: '160 zł',
          description: 'Eleganckie klasyczne francuskie końcówki z naturalną bazą i białymi tipami'
        },
        {
          name: 'Luksusowy Spa Manicure',
          duration: '75 minut',
          price: '260 zł',
          description: 'Zabieg premium z peelingiem, maską, masażem i lakierem premium'
        }
      ]
    },
    {
      category: 'Pedicure',
      services: [
        {
          name: 'Klasyczny Pedicure',
          duration: '45 minut',
          price: '160 zł',
          description: 'Kompleksowa pielęgnacja stóp z kąpielą, peelingiem, pielęgnacją skórek i lakierem'
        },
        {
          name: 'Pedicure Hybrydowy',
          duration: '60 minut',
          price: '200 zł',
          description: 'Długotrwały pedicure z lakierem hybrydowym o przedłużonej trwałości i wysokim połysku'
        },
        {
          name: 'Luksusowy Spa Pedicure',
          duration: '90 minut',
          price: '300 zł',
          description: 'Najwyższy relaks z masażem gorącymi kamieniami, zabiegiem parafinowym i pielęgnacją premium'
        },
        {
          name: 'Pedicure Medyczny',
          duration: '60 minut',
          price: '240 zł',
          description: 'Specjalistyczny zabieg dla problemów zdrowotnych stóp i terapeutyczna pielęgnacja'
        }
      ]
    },
    {
      category: 'Nail Art i Przedłużanie',
      services: [
        {
          name: 'Indywidualny Nail Art',
          duration: '90 minut',
          price: '220 zł+',
          description: 'Ręcznie malowane wzory, desenie i artystyczne kreacje dostosowane do Twojego stylu'
        },
        {
          name: 'Przedłużanie Akrylowe',
          duration: '120 minut',
          price: '260 zł',
          description: 'Mocne, trwałe przedłużenie paznokci z indywidualną długością i kształtem'
        },
        {
          name: 'Przedłużanie Żelowe',
          duration: '120 minut',
          price: '280 zł',
          description: 'Naturalnie wyglądające przedłużenia żelowe z elastycznym, lekkim uczuciem'
        },
        {
          name: 'Nail Art 3D',
          duration: '120 minut',
          price: '320 zł+',
          description: 'Wymiarowy nail art z kryształkami, cyrkoniami i elementami rzeźbiarskimi'
        }
      ]
    },
    {
      category: 'Zabiegi Specjalistyczne',
      services: [
        {
          name: 'Naprawa Paznokci',
          duration: '30 minut',
          price: '100 zł',
          description: 'Naprawa złamanych, popękanych lub uszkodzonych paznokci profesjonalnymi technikami'
        },
        {
          name: 'Zabieg Skórek',
          duration: '30 minut',
          price: '80 zł',
          description: 'Głęboko nawilżający i odżywczy zabieg dla zdrowych skórek'
        },
        {
          name: 'Zabieg Parafinowy',
          duration: '20 minut',
          price: '60 zł',
          description: 'Nawilżający zabieg parafinowy dla dłoni lub stóp (usługa dodatkowa)'
        },
        {
          name: 'Wzmacnianie Paznokci',
          duration: '45 minut',
          price: '120 zł',
          description: 'Specjalistyczny zabieg wzmacniający słabe, łamliwe lub uszkodzone paznokcie'
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nasze Usługi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Od klasycznego manicure po skomplikowany nail art - oferujemy kompleksowe usługi pielęgnacji paznokci 
            używając produktów premium i eksperckich technik dla oszałamiających, długotrwałych rezultatów.
          </p>
          <Link
            to="/booking"
            className="inline-flex bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-200"
          >
            Zarezerwuj Wizytę
          </Link>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {category.category}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                    <span className="text-2xl font-bold text-pink-500">{service.price}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  
                  <div className="mt-6">
                    <Link
                      to="/booking"
                      className="inline-flex bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors duration-200"
                    >
                      Zarezerwuj
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Membership Program */}
      <section className="py-20 bg-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Dołącz do Naszego Członkostwa VIP
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Otrzymaj 15% zniżki na wszystkie usługi, priorytetowe rezerwacje i ekskluzywne korzyści tylko za 120 zł/miesiąc
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-pink-400 rounded-lg p-6">
              <h3 className="font-semibold mb-2">15% Zniżki na Wszystko</h3>
              <p className="text-pink-100 text-sm">Wszystkie usługi, przez cały rok</p>
            </div>
            <div className="bg-pink-400 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Priorytetowe Rezerwacje</h3>
              <p className="text-pink-100 text-sm">Pomiń kolejkę, rezerwuj pierwszy</p>
            </div>
            <div className="bg-pink-400 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Specjał Urodzinowy</h3>
              <p className="text-pink-100 text-sm">Darmowa usługa w Twoje urodziny</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Dowiedz Się Więcej o Członkostwie
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;