import React from 'react';
import { Award, Shield, Heart, Users, Clock, Star } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Elena Rodriguez',
      position: 'Owner & Master Nail Artist',
      experience: '15 years',
      specialties: ['3D Nail Art', 'Gel Extensions', 'Nail Restoration'],
      image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sarah Kim',
      position: 'Senior Nail Technician',
      experience: '8 years',
      specialties: ['Classic Manicures', 'French Tips', 'Spa Treatments'],
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Maria Santos',
      position: 'Nail Artist & Colorist',
      experience: '6 years',
      specialties: ['Color Theory', 'Ombre Designs', 'Seasonal Nail Art'],
      image: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Jessica Chen',
      position: 'Pedicure Specialist',
      experience: '10 years',
      specialties: ['Medical Pedicures', 'Foot Care', 'Callus Treatment'],
      image: 'https://images.pexels.com/photos/3997348/pexels-photo-3997348.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const certifications = [
    'State Board Licensed Nail Technicians',
    'Infection Control Certified',
    'CND Shellac Certified',
    'OPI Gel Color Certified',
    'NSI Acrylic Systems Certified',
    'First Aid & CPR Certified'
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-pink-500" />,
      title: 'Hygiene Excellence',
      description: 'Hospital-grade sterilization and single-use implements for every client'
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: 'Client Care',
      description: 'Personalized service and attention to detail for every guest'
    },
    {
      icon: <Award className="h-8 w-8 text-pink-500" />,
      title: 'Professional Excellence',
      description: 'Ongoing education and training to stay current with trends and techniques'
    },
    {
      icon: <Users className="h-8 w-8 text-pink-500" />,
      title: 'Community Focus',
      description: 'Supporting our local community and building lasting relationships'
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
                About Luxe Nails
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Founded in 2010 with a passion for nail artistry and exceptional client care, 
                Luxe Nails has become the premier destination for luxury nail services in our community.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to hygiene, creativity, and professionalism has earned us thousands 
                of satisfied clients and a reputation for excellence that speaks for itself.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Luxe Nails salon interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-pink-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-center mb-8">
              Elena Rodriguez started Luxe Nails with a simple vision: to create a space where artistry meets wellness, 
              where every client leaves feeling beautiful and confident. What began as a small salon with just two chairs 
              has grown into a full-service nail studio that serves hundreds of clients each month.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p>
                  To provide exceptional nail care services in a clean, relaxing environment while building 
                  lasting relationships with our clients. We believe that beautiful nails are an extension 
                  of your personal style and we're here to help you express yourself.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p>
                  To be the leading nail salon in our community, known for innovation, artistry, and 
                  uncompromising standards of hygiene and customer service. We continuously evolve 
                  to meet our clients' needs and exceed their expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Luxe Nails
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
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

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our licensed professionals bring years of experience and artistic passion to every service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-pink-500 font-semibold mb-2">{member.position}</p>
                <div className="flex items-center justify-center mb-4">
                  <Clock className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-600 text-sm">{member.experience} experience</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold mb-2">Specialties:</p>
                  <ul className="space-y-1">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <li key={specialtyIndex} className="flex items-center justify-center">
                        <Star className="h-3 w-3 text-pink-400 mr-1" />
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Certifications & Standards
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We maintain the highest professional standards through continuous education, 
                rigorous certification requirements, and strict adherence to health and safety protocols.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Shield className="h-5 w-5 text-pink-500" />
                    </div>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Hygiene Promise</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Autoclave Sterilization</h4>
                    <p className="text-gray-600 text-sm">All metal implements are sterilized using hospital-grade autoclaves</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Single-Use Items</h4>
                    <p className="text-gray-600 text-sm">Files, buffers, and orange wood sticks are never reused</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fresh Liners</h4>
                    <p className="text-gray-600 text-sm">New protective liners for every pedicure session</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">EPA-Approved Disinfectants</h4>
                    <p className="text-gray-600 text-sm">Professional-grade cleaning solutions for all surfaces</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Awards & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-pink-400 rounded-lg p-6">
              <Award className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Nail Salon 2024</h3>
              <p className="text-pink-100">City's Choice Awards</p>
            </div>
            <div className="bg-pink-400 rounded-lg p-6">
              <Star className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">5-Star Rating</h3>
              <p className="text-pink-100">Google & Yelp Reviews</p>
            </div>
            <div className="bg-pink-400 rounded-lg p-6">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">1000+ Happy Clients</h3>
              <p className="text-pink-100">And growing every month</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;