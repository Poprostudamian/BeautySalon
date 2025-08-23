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
    { name: 'Classic Manicure', duration: '45 min', price: '$35' },
    { name: 'Gel Manicure', duration: '60 min', price: '$45' },
    { name: 'French Manicure', duration: '50 min', price: '$40' },
    { name: 'Luxury Spa Manicure', duration: '75 min', price: '$65' },
    { name: 'Classic Pedicure', duration: '45 min', price: '$40' },
    { name: 'Gel Pedicure', duration: '60 min', price: '$50' },
    { name: 'Luxury Spa Pedicure', duration: '90 min', price: '$75' },
    { name: 'Custom Nail Art', duration: '90 min', price: '$55+' },
    { name: 'Acrylic Extensions', duration: '120 min', price: '$65' },
    { name: 'Gel Extensions', duration: '120 min', price: '$70' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
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
    // Here you would typically send the data to your backend
    console.log('Booking submitted:', formData);
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing Luxe Nails! We've received your appointment request and will contact you within 24 hours to confirm your booking.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-200"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to treat yourself? Schedule your appointment online and we'll take care of the rest. 
            We'll confirm your booking within 24 hours.
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
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter your last name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Choose Your Service
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <label
                    key={index}
                    className={`relative cursor-pointer rounded-lg border-2 p-4 hover:border-pink-300 transition-colors duration-200 ${
                      formData.service === service.name ? 'border-pink-500 bg-pink-50' : 'border-gray-200 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="service"
                      value={service.name}
                      checked={formData.service === service.name}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{service.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-500">{service.duration}</span>
                        <span className="text-sm font-semibold text-pink-500">{service.price}</span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Date and Time Selection */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Calendar className="h-6 w-6 text-pink-500 mr-3" />
                Select Date & Time
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <DatePicker
                    selected={formData.date}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                    placeholderText="Select a date"
                    dateFormat="MMMM d, yyyy"
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 text-pink-500 mr-3" />
                Additional Notes
              </h2>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests or Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Let us know if you have any allergies, preferences, or special requests..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-pink-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Book Appointment
              </button>
              <p className="text-sm text-gray-500 mt-4">
                * We'll contact you within 24 hours to confirm your appointment
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Booking Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cancellation Policy</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Please provide 24-hour notice for cancellations</li>
                <li>• Same-day cancellations may incur a fee</li>
                <li>• No-shows will be charged 50% of service cost</li>
                <li>• We understand emergencies happen - please call us</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Please arrive 10 minutes early for check-in</li>
                <li>• All tools are sterilized between clients</li>
                <li>• We accept cash, cards, and digital payments</li>
                <li>• Complimentary beverages and WiFi available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;