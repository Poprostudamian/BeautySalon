import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Wszystkie' },
    { id: 'manicure', name: 'Manicure' },
    { id: 'pedicure', name: 'Pedicure' },
    { id: 'nail-art', name: 'Nail Art' },
    { id: 'extensions', name: 'Przedłużanie' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'nail-art',
      title: 'Kwiatowy Nail Art',
      image: 'https://images.pexels.com/photos/3997982/pexels-photo-3997982.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Delikatne ręcznie malowane kwiaty z perłowymi akcentami'
    },
    {
      id: 2,
      category: 'manicure',
      title: 'Klasyczny Francuski',
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Ponadczasowa elegancja z perfekcyjnymi białymi tipami'
    },
    {
      id: 3,
      category: 'extensions',
      title: 'Przedłużenia Żelowe',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Naturalne przedłużenia z subtelnym różowym odcieniem'
    },
    {
      id: 4,
      category: 'pedicure',
      title: 'Luksusowy Pedicure',
      image: 'https://images.pexels.com/photos/3997348/pexels-photo-3997348.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Spa pedicure z masażem i lakierem hybrydowym'
    },
    {
      id: 5,
      category: 'nail-art',
      title: 'Geometryczne Wzory',
      image: 'https://images.pexels.com/photos/3992649/pexels-photo-3992649.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Nowoczesne geometryczne desenie w złocie i różu'
    },
    {
      id: 6,
      category: 'manicure',
      title: 'Manicure Hybrydowy',
      image: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Długotrwały hybryd w klasycznym czerwonym kolorze'
    },
    {
      id: 7,
      category: 'extensions',
      title: 'Akrylowe z Nail Art',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Długie akrylowe paznokcie z błyszczącymi zdobieniami'
    },
    {
      id: 8,
      category: 'nail-art',
      title: 'Świąteczny Design',
      image: 'https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Festiwalowy nail art z brokatem i kryształkami'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Galeria Naszych Prac
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Przeglądaj naszą kolekcję pięknych paznokci i zainspiruj się na swoją następną wizytę
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Przed i Po
            </h2>
            <p className="text-xl text-gray-600">
              Zobacz niesamowite przemiany naszych klientek
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Odbudowa Paznokci</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-600 mb-2">PRZED</p>
                  <img
                    src="https://images.pexels.com/photos/5069434/pexels-photo-5069434.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Przed zabiegiem"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-pink-500 mb-2">PO</p>
                  <img
                    src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Po zabiegu"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <p className="text-gray-600 text-center mt-4">
                Kompletna odbudowa paznokci z indywidualnymi przedłużeniami żelowymi i skomplikowanym nail art
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Zabieg Spa Pedicure</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-600 mb-2">PRZED</p>
                  <img
                    src="https://images.pexels.com/photos/5069434/pexels-photo-5069434.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Przed pedicure"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-pink-500 mb-2">PO</p>
                  <img
                    src="https://images.pexels.com/photos/3997348/pexels-photo-3997348.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Po pedicure"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <p className="text-gray-600 text-center mt-4">
                Luksusowy spa pedicure z usuwaniem zrogowaceń, zabiegiem nawilżającym i lakierem hybrydowym
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gotowa na Swoją Przemianę?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Zarezerwuj wizytę już dziś i pozwól naszym ekspertkom stworzyć piękne paznokcie specjalnie dla Ciebie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="inline-flex bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Zarezerwuj Wizytę
            </a>
            <a
              href="/services"
              className="inline-flex border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-500 transition-colors duration-200"
            >
              Zobacz Usługi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;