import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/3997390/pexels-photo-3997390.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Elegant nail art design',
      category: 'Nail Art'
    },
    {
      src: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Classic manicure',
      category: 'Manicures'
    },
    {
      src: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Gel polish finish',
      category: 'Gel Polish'
    },
    {
      src: 'https://images.pexels.com/photos/3997982/pexels-photo-3997982.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Intricate nail art',
      category: 'Nail Art'
    },
    {
      src: 'https://images.pexels.com/photos/3997348/pexels-photo-3997348.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Pedicure treatment',
      category: 'Pedicures'
    },
    {
      src: 'https://images.pexels.com/photos/8134865/pexels-photo-8134865.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'French manicure',
      category: 'French Tips'
    },
    {
      src: 'https://images.pexels.com/photos/6621471/pexels-photo-6621471.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Colorful nail design',
      category: 'Nail Art'
    },
    {
      src: 'https://images.pexels.com/photos/5938608/pexels-photo-5938608.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Acrylic extensions',
      category: 'Extensions'
    },
    {
      src: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Salon interior',
      category: 'Salon'
    },
    {
      src: 'https://images.pexels.com/photos/6621468/pexels-photo-6621468.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Sparkly nail design',
      category: 'Nail Art'
    },
    {
      src: 'https://images.pexels.com/photos/5069434/pexels-photo-5069434.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Professional nail care',
      category: 'Manicures'
    },
    {
      src: 'https://images.pexels.com/photos/8134868/pexels-photo-8134868.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Detailed nail art',
      category: 'Nail Art'
    }
  ];

  const categories = ['All', 'Nail Art', 'Manicures', 'Pedicures', 'Extensions', 'French Tips', 'Gel Polish', 'Salon'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of stunning nail designs, treatments, and transformations. 
            Get inspired for your next visit to Luxe Nails.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-semibold">{image.category}</p>
                    <p className="text-xs mt-1">Click to view larger</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors duration-200"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Before & After Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Before & After Transformations
            </h2>
            <p className="text-xl text-gray-600">
              See the amazing transformations our expert technicians achieve
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Nail Repair & Art</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-600 mb-2">BEFORE</p>
                  <img
                    src="https://images.pexels.com/photos/6621471/pexels-photo-6621471.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Before treatment"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-pink-500 mb-2">AFTER</p>
                  <img
                    src="https://images.pexels.com/photos/3997390/pexels-photo-3997390.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="After treatment"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <p className="text-gray-600 text-center mt-4">
                Complete nail restoration with custom gel extensions and intricate nail art
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Spa Pedicure Treatment</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-600 mb-2">BEFORE</p>
                  <img
                    src="https://images.pexels.com/photos/5069434/pexels-photo-5069434.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Before pedicure"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-pink-500 mb-2">AFTER</p>
                  <img
                    src="https://images.pexels.com/photos/3997348/pexels-photo-3997348.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="After pedicure"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <p className="text-gray-600 text-center mt-4">
                Luxury spa pedicure with callus removal, moisturizing treatment, and gel polish
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Book your appointment today and let our expert technicians create beautiful nails just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="inline-flex bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Book Appointment
            </a>
            <a
              href="/services"
              className="inline-flex border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-500 transition-colors duration-200"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;