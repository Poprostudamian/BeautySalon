import React from 'react';
import { Star, ThumbsUp, MessageSquare } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Anna Kowalska',
      date: '15 sierpnia 2025',
      rating: 5,
      service: 'Manicure Hybrydowy',
      review: 'Absolutnie niesamowite doświadczenie! Personel był bardzo profesjonalny i uprzejmy. Mój manicure hybrydowy wygląda perfekcyjnie i już po tygodniu nadal wygląda jak świeży. Salon jest nienagannie czysty, a atmosfera bardzo relaksująca. Zdecydowanie wrócę!',
      helpful: 12
    },
    {
      name: 'Magdalena Nowak',
      date: '10 sierpnia 2025',
      rating: 5,
      service: 'Nail Art',
      review: 'Jestem pod wrażeniem umiejętności artystycznych zespołu! Poprosiłam o skomplikowany wzór kwiatowy i rezultat przekroczył moje oczekiwania. Każdy detal był perfekcyjny. To prawdziwa sztuka na paznokciach!',
      helpful: 8
    },
    {
      name: 'Katarzyna Wiśniewska',
      date: '5 sierpnia 2025',
      rating: 5,
      service: 'Spa Pedicure',
      review: 'Najbardziej relaksujący pedicure jakiego kiedykolwiek miałam! Masaż był niesamowity, a moje stopy są teraz miękkie jak jedwab. Obsługa była wyjątkowa, a rezultaty długotrwałe. Gorąco polecam!',
      helpful: 15
    },
    {
      name: 'Joanna Kowalczyk',
      date: '1 sierpnia 2025',
      rating: 5,
      service: 'Przedłużanie Żelowe',
      review: 'Po latach prób z różnymi salonami, w końcu znalazłam swoje miejsce! Przedłużenia żelowe są naturalne i wygodne. Personel wysłuchał wszystkich moich próśb i stworzył dokładnie to, o czym marzyłam.',
      helpful: 6
    },
    {
      name: 'Maria Jankowska',
      date: '28 lipca 2025',
      rating: 5,
      service: 'Francuski Manicure',
      review: 'Klasyczny francuski manicure w wykonaniu Vip Nails to prawdziwa perfekcja! Linie są idealne, lakier trwały, a całe doświadczenie było bardzo przyjemne. Personel jest kompetentny i miły.',
      helpful: 9
    },
    {
      name: 'Agnieszka Wójcik',
      date: '25 lipca 2025',
      rating: 5,
      service: 'Luksusowy Spa Manicure',
      rating: 5,
      review: 'To był najbardziej luksusowy zabieg paznokci jakiego kiedykolwiek doświadczyłam! Od masażu dłoni po końcowe wykończenie - każdy element był doskonały. Czuję się jak gwiazda!',
      helpful: 11
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Opinie Klientek
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Przeczytaj, co mówią nasze zadowolone klientki o swoich doświadczeniach w Vip Nails
          </p>
          
          {/* Rating Summary */}
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">{totalReviews}</span> opinii
            </div>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                    <p className="text-sm text-pink-500 font-medium">{review.service}</p>
                  </div>
                  
                  <div className="mt-2 sm:mt-0">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{review.review}</p>

                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-500 transition-colors duration-200">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">Pomocne ({review.helpful})</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-500 transition-colors duration-200">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">Odpowiedz</span>
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
            Podziel Się Swoim Doświadczeniem
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Chcielibyśmy usłyszeć o Twojej wizycie w Luxe Nails. Twoja opinia pomaga nam lepiej Cię obsługiwać!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Napisz Opinię
            </a>
            <a
              href="/booking"
              className="inline-flex border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-500 transition-colors duration-200"
            >
              Zarezerwuj Wizytę
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;