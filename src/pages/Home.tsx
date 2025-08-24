import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Shield, Users, Award } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-pink-500" />,
      title: 'Higiena Przede Wszystkim',
      description: 'Wszystkie narzędzia sterylizowane, jednorazowe przedmioty i najwyższe standardy czystości'
    },
    {
      icon: <Users className="h-8 w-8 text-pink-500" />,
      title: 'Ekspertki z Licencjami',
      description: 'Licencjonowane specjalistki z wieloletnim doświadczeniem i ciągłym szkoleniem'
    },
    {
      icon: <Award className="h-8 w-8 text-pink-500" />,
      title: 'Produkty Premium',
      description: 'Tylko najlepsze lakiery, żele i zabiegi od zaufanych marek'
    }
  ];

  const testimonials = [
    {
      name: 'Anna Kowalska',
      rating: 5,
      text: 'Absolutnie niesamowita obsługa! Moje paznokcie nigdy nie wyglądały lepiej. Personel jest tak profesjonalny, a salon nienagannie czysty.'
    },
    {
      name: 'Maria Nowak',
      rating: 5,
      text: 'Przychodzę tu od miesięcy i zawsze jestem pod wrażeniem. Nail art jest niesamowity, a moje manicure trzymają się tygodniami!'
    },
    {
      name: 'Katarzyna Wiśniewska',
      rating: 5,
      text: 'W końcu znalazłam swój salon paznokci! Atmosfera jest tak relaksująca, a efekty zawsze perfekcyjne. Gorąco polecam!'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Luksusowa Pielęgnacja 
                <span className="text-pink-500 block">Którą Zasługujesz</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Doświadcz najlepszego w sztuce paznokci i rozpieszczaniu w Vip Nails. 
                Nasze ekspertki używają produktów premium, aby stworzyć oszałamiające, trwałe rezultaty.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/booking"
                  className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-600 transition-colors duration-200"
                >
                  Zarezerwuj Termin
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-500 hover:text-white transition-colors duration-200"
                >
                  Zobacz Usługi
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Profesjonalny manicure"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dlaczego Warto Nas Wybrać
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Jesteśmy zobowiązani do zapewnienia wyjątkowej obsługi i rezultatów, które przekraczają Twoje oczekiwania
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nasze Usługi Premium
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Od klasycznego manicure po skomplikowany nail art - oferujemy wszystko czego potrzebujesz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Klasyczny Manicure',
                price: 'Od 150 zł',
                image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Lakier Hybrydowy',
                price: 'Od 180 zł',
                image: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Nail Art',
                price: 'Od 220 zł',
                image: 'https://images.pexels.com/photos/3997982/pexels-photo-3997982.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Spa Pedicure',
                price: 'Od 200 zł',
                image: 'https://images.pexels.com/photos/3997348/pexels-photo-3997348.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-pink-500 font-semibold">{service.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-200"
            >
              Zobacz Wszystkie Usługi
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Co Mówią Nasze Klientki
            </h2>
            <p className="text-xl text-gray-600">
              Nie wierz nam na słowo - posłuchaj naszych zadowolonych klientek
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gotowa na Przemianę Swoich Paznokci?
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Zarezerwuj wizytę już dziś i doświadcz różnicy Luxe Nails
          </p>
          <Link
            to="/booking"
            className="inline-flex bg-white text-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Zarezerwuj Wizytę
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;