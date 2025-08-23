import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      category: 'Manicures',
      services: [
        {
          name: 'Classic Manicure',
          duration: '45 minutes',
          price: '$35',
          description: 'Traditional manicure with cuticle care, shaping, and regular polish application'
        },
        {
          name: 'Gel Manicure',
          duration: '60 minutes',
          price: '$45',
          description: 'Long-lasting gel polish application with UV/LED curing for chip-resistant finish'
        },
        {
          name: 'French Manicure',
          duration: '50 minutes',
          price: '$40',
          description: 'Elegant classic French tips with natural base and white tip design'
        },
        {
          name: 'Luxury Spa Manicure',
          duration: '75 minutes',
          price: '$65',
          description: 'Premium treatment with exfoliation, mask, massage, and premium polish'
        }
      ]
    },
    {
      category: 'Pedicures',
      services: [
        {
          name: 'Classic Pedicure',
          duration: '45 minutes',
          price: '$40',
          description: 'Complete foot care with soak, scrub, cuticle care, and polish'
        },
        {
          name: 'Gel Pedicure',
          duration: '60 minutes',
          price: '$50',
          description: 'Long-lasting gel polish pedicure with extended wear and high gloss'
        },
        {
          name: 'Luxury Spa Pedicure',
          duration: '90 minutes',
          price: '$75',
          description: 'Ultimate relaxation with hot stone massage, paraffin treatment, and premium care'
        },
        {
          name: 'Medical Pedicure',
          duration: '60 minutes',
          price: '$60',
          description: 'Specialized treatment for foot health issues and therapeutic care'
        }
      ]
    },
    {
      category: 'Nail Art & Extensions',
      services: [
        {
          name: 'Custom Nail Art',
          duration: '90 minutes',
          price: '$55+',
          description: 'Hand-painted designs, patterns, and artistic creations tailored to your style'
        },
        {
          name: 'Acrylic Extensions',
          duration: '120 minutes',
          price: '$65',
          description: 'Strong, durable nail extensions with custom length and shape'
        },
        {
          name: 'Gel Extensions',
          duration: '120 minutes',
          price: '$70',
          description: 'Natural-looking gel extensions with flexible, lightweight feel'
        },
        {
          name: '3D Nail Art',
          duration: '120 minutes',
          price: '$80+',
          description: 'Dimensional nail art with gems, rhinestones, and sculptural elements'
        }
      ]
    },
    {
      category: 'Specialty Treatments',
      services: [
        {
          name: 'Nail Repair',
          duration: '30 minutes',
          price: '$25',
          description: 'Fix broken, cracked, or damaged nails with professional techniques'
        },
        {
          name: 'Cuticle Treatment',
          duration: '30 minutes',
          price: '$20',
          description: 'Deep moisturizing and conditioning treatment for healthy cuticles'
        },
        {
          name: 'Paraffin Treatment',
          duration: '20 minutes',
          price: '$15',
          description: 'Moisturizing paraffin wax treatment for hands or feet (add-on service)'
        },
        {
          name: 'Nail Strengthening',
          duration: '45 minutes',
          price: '$30',
          description: 'Specialized treatment to strengthen weak, brittle, or damaged nails'
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
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From classic manicures to intricate nail art, we offer comprehensive nail care services 
            using premium products and expert techniques for stunning, long-lasting results.
          </p>
          <Link
            to="/booking"
            className="inline-flex bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-200"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                      <span className="text-2xl font-bold text-pink-500">{service.price}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{service.duration}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <Link
                      to="/booking"
                      className="inline-flex bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-200"
                    >
                      Book This Service
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Package Deals
            </h2>
            <p className="text-xl text-gray-600">
              Save money with our special combination packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Complete Hand & Foot',
                services: ['Gel Manicure', 'Gel Pedicure'],
                originalPrice: '$95',
                packagePrice: '$85',
                savings: '$10'
              },
              {
                name: 'Luxury Spa Package',
                services: ['Luxury Spa Manicure', 'Luxury Spa Pedicure'],
                originalPrice: '$140',
                packagePrice: '$120',
                savings: '$20'
              },
              {
                name: 'Nail Art Special',
                services: ['Custom Nail Art', 'Gel Pedicure'],
                originalPrice: '$105',
                packagePrice: '$95',
                savings: '$10'
              }
            ].map((package_, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-pink-100">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{package_.name}</h3>
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 line-through">{package_.originalPrice}</div>
                    <div className="text-3xl font-bold text-pink-500">{package_.packagePrice}</div>
                    <div className="text-sm text-green-600 font-semibold">Save {package_.savings}</div>
                  </div>
                  <div className="mb-6">
                    <p className="text-gray-600 mb-2">Includes:</p>
                    <ul className="text-sm text-gray-700">
                      {package_.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center justify-center mb-1">
                          <Star className="h-4 w-4 text-pink-400 mr-2" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/booking"
                    className="inline-flex bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-200"
                  >
                    Book Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Program */}
      <section className="py-20 bg-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our VIP Membership
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Get 15% off all services, priority booking, and exclusive member perks for just $29/month
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-pink-400 rounded-lg p-6">
              <h3 className="font-semibold mb-2">15% Off Everything</h3>
              <p className="text-pink-100 text-sm">All services, all year long</p>
            </div>
            <div className="bg-pink-400 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Priority Booking</h3>
              <p className="text-pink-100 text-sm">Skip the wait, book first</p>
            </div>
            <div className="bg-pink-400 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Birthday Special</h3>
              <p className="text-pink-100 text-sm">Free service on your birthday</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Learn More About Membership
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;