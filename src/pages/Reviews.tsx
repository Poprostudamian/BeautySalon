import React, { useState } from 'react';
import { Star, ThumbsUp, MessageSquare, Calendar, Filter } from 'lucide-react';

const Reviews = () => {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'rating'>('newest');

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      date: '2025-01-15',
      service: 'Luxury Spa Manicure',
      review: 'Absolutely incredible experience! The attention to detail was phenomenal and my nails have never looked better. The staff was so professional and the salon atmosphere was very relaxing. I will definitely be returning and have already recommended Luxe Nails to all my friends.',
      helpful: 12,
      verified: true
    },
    {
      id: 2,
      name: 'Maria Garcia',
      rating: 5,
      date: '2025-01-12',
      service: 'Custom Nail Art',
      review: 'Elena did the most amazing nail art for my wedding! She listened to all my ideas and created something even more beautiful than I imagined. The quality is outstanding and my nails still look perfect after two weeks. Worth every penny!',
      helpful: 8,
      verified: true
    },
    {
      id: 3,
      name: 'Jessica Chen',
      rating: 5,
      date: '2025-01-10',
      service: 'Gel Pedicure',
      review: 'I\'ve been coming to Luxe Nails for over a year now and I\'m consistently impressed with their service. The hygiene standards are impeccable, the staff is friendly, and the results are always perfect. My gel pedicures last for weeks!',
      helpful: 15,
      verified: true
    },
    {
      id: 4,
      name: 'Amanda Rodriguez',
      rating: 5,
      date: '2025-01-08',
      service: 'Acrylic Extensions',
      review: 'Finally found a salon that does acrylics the right way! They took their time to make sure everything was perfect and the shape is exactly what I wanted. No lifting or chipping after 3 weeks. The best nail salon in the city!',
      helpful: 6,
      verified: true
    },
    {
      id: 5,
      name: 'Rachel Thompson',
      rating: 4,
      date: '2025-01-05',
      service: 'Classic Manicure',
      review: 'Great service and lovely staff. My manicure looked beautiful and lasted well. The only reason I\'m giving 4 stars instead of 5 is because I had to wait about 15 minutes past my appointment time, but the quality of service made up for it.',
      helpful: 3,
      verified: true
    },
    {
      id: 6,
      name: 'Lisa Park',
      rating: 5,
      date: '2025-01-03',
      service: 'Gel Manicure',
      review: 'I love this place! The technicians are skilled and really take their time to do quality work. The salon is always clean and has a relaxing atmosphere. I get compliments on my nails all the time thanks to Luxe Nails!',
      helpful: 9,
      verified: true
    },
    {
      id: 7,
      name: 'Michelle Davis',
      rating: 5,
      date: '2025-01-01',
      service: 'French Manicure',
      review: 'Perfect French manicure every time! I\'ve been getting my nails done here for 6 months and I\'ve never been disappointed. The staff remembers my preferences and always delivers exactly what I want. Highly recommend!',
      helpful: 4,
      verified: true
    },
    {
      id: 8,
      name: 'Nicole Williams',
      rating: 5,
      date: '2024-12-28',
      service: 'Luxury Spa Pedicure',
      review: 'The luxury spa pedicure is absolutely worth the splurge! It was so relaxing and my feet feel amazing. The hot stone massage was incredible and the attention to detail was perfect. This is definitely my new favorite treat!',
      helpful: 11,
      verified: true
    }
  ];

  const filteredReviews = reviews.filter(review => 
    filterRating === 'all' || review.rating === filterRating
  );

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / totalReviews) * 100
  }));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our valued clients have to say about their experience at Luxe Nails. 
            Your feedback helps us maintain our high standards of excellence.
          </p>
        </div>
      </section>

      {/* Reviews Overview */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Overall Rating */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-2">
                <span className="text-4xl font-bold text-gray-900 mr-2">
                  {averageRating.toFixed(1)}
                </span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">Based on {totalReviews} reviews</p>
            </div>

            {/* Rating Distribution */}
            <div className="col-span-2">
              <div className="space-y-2">
                {ratingDistribution.map((item) => (
                  <div key={item.rating} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 w-12">
                      <span className="text-sm text-gray-600">{item.rating}</span>
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-8">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-6 bg-gray-50 sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter by rating:</span>
              <select
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-pink-500 focus:border-pink-500"
              >
                <option value="all">All ratings</option>
                <option value={5}>5 stars</option>
                <option value={4}>4 stars</option>
                <option value={3}>3 stars</option>
                <option value={2}>2 stars</option>
                <option value={1}>1 star</option>
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'rating')}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-pink-500 focus:border-pink-500"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="rating">Highest rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sortedReviews.map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                      {review.verified && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Verified Client
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(review.date)}</span>
                      </div>
                      <span>•</span>
                      <span>{review.service}</span>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{review.review}</p>

                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-500 transition-colors duration-200">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">Helpful ({review.helpful})</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-500 transition-colors duration-200">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">Reply</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Write a Review CTA */}
      <section className="py-20 bg-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Share Your Experience
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            We'd love to hear about your visit to Luxe Nails. Your feedback helps us serve you better!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Write a Review
            </a>
            <a
              href="/booking"
              className="inline-flex border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-500 transition-colors duration-200"
            >
              Book Your Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;