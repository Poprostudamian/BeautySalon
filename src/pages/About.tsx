import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Star, Users, Heart, Shield, Clock } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Anna Kowalczyk',
      role: 'Właścicielka i Główna Stylistka',
      experience: '12 lat doświadczenia',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Specjalistka w nail art i przedłużaniu paznokci z międzynarodowymi certyfikatami'
    },
    {
      name: 'Magdalena Nowak',
      role: 'Specjalistka ds. Manicure',
      experience: '8 lat doświadczenia',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Ekspertka w klasycznych technikach manicure i pielęgnacji naturalnych paznokci'
    },
    {
      name: 'Katarzyna Wiśniewska',
      role: 'Specjalistka ds. Pedicure',
      experience: '10 lat doświadczenia',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Certyfikowana w luksusowych zabiegach spa i terapeutycznej pielęgnacji stóp'
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: 'Pasja',
      description: 'Kochamy to co robimy i to widać w każdym detalu naszej pracy'
    },
    {
      icon: <Shield className="h-8 w-8 text-pink-500" />,
      title: 'Bezpieczeństwo',
      description: 'Najwyższe standardy higieny i sterylizacji dla Twojego bezpieczeństwa'
    },
    {
      icon: <Star className="h-8 w-8 text-pink-500" />,
      title: 'Doskonałość',
      description: 'Dążymy do perfekcji w każdym zabiegu i obsłudze klienta'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                O Vip Nails
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Od 2018 roku jesteśmy wiodącym salonem paznokci w Warszawie, 
                zapewniając wyjątkową obsługę i oszałamiające rezultaty dla naszych cennych klientek.
              </p>
              <Link
                to="/booking"
                className="inline-flex bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-200"
              >
                Zarezerwuj Wizytę
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Salon Vip Nails"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nasza Historia</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Vip Nails zostało założone w 2018 roku z prostą misją: zapewnienie luksusowej pielęgnacji paznokci 
              w przystępnej cenie. Nasza założycielka, Anna Kowalczyk, z ponad 12-letnim doświadczeniem w branży 
              beauty, marzyła o stworzeniu miejsca, gdzie każda klientka czuje się wyjątkowo.
            </p>
          </div>
          
          <div className="bg-pink-50 rounded-2xl p-8 mb-12">
            <blockquote className="text-center">
              <p className="text-xl italic text-gray-700 mb-4">
                "Wierzymy, że każda kobieta zasługuje na piękne paznokcie i moment relaksu. 
                Nasza misja to nie tylko stworzenie pięknych paznokci, ale także zapewnienie 
                doświadczenia, które sprawia, że nasze klientki czują się pewnie i pięknie."
              </p>
              <footer className="text-pink-600 font-semibold">- Anna Kowalczyk, Założycielka</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nasze Wartości</h2>
            <p className="text-xl text-gray-600">
              Te fundamentalne zasady kierują wszystkim co robimy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Poznaj Nasz Zespół</h2>
            <p className="text-xl text-gray-600">
              Licencjonowane specjalistki z pasją do sztuki paznokci
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-pink-500 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nagrody i Wyróżnienia</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-pink-400 rounded-lg p-6">
              <Award className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Najlepszy Salon Paznokci 2024</h3>
              <p className="text-pink-100">Nagrody Wyboru Miasta</p>
            </div>
            <div className="bg-pink-400 rounded-lg p-6">
              <Star className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ocena 5 Gwiazdek</h3>
              <p className="text-pink-100">Opinie Google i Yelp</p>
            </div>
            <div className="bg-pink-400 rounded-lg p-6">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ponad 1000 Zadowolonych Klientek</h3>
              <p className="text-pink-100">I stale rosnąca liczba co miesiąc</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;