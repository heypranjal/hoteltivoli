/**
 * DigitalQRPage Component
 * Digital QR experience page for The Tivoli-New Delhi featuring:
 * - Digital Menu with Service Directory and IRD Menu
 * - Review and Reward system
 * - Special Offers and Promotions
 * - Digital Concierge
 * - In-house Experiences
 * - Unique Hotel Offerings
 * - Special Offers
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, Gift, Headphones, Utensils, Moon, Sun, Trees as Tree, Calendar, ChefHat, Flame, Palmtree, Briefcase } from 'lucide-react';
import Navigation from '@/components/Navigation';

const sections = {
  digitalMenu: [
    { 
      title: 'Service Directory',
      icon: ExternalLink,
      link: '#', // Replace with actual Google Drive link
      description: 'Access our comprehensive service directory'
    },
    { 
      title: 'IRD Menu',
      icon: ExternalLink,
      link: 'https://drive.google.com/file/d/1KacWTxsSsxajDde6-c95Bvfv7KL81RmX/view?usp=sharing',
      description: 'Browse our in-room dining menu'
    },
    {
      title: 'The Tivoli-Doll House',
      icon: ExternalLink,
      link: 'https://spalba.com/properties/51dvYlEQCd?share=true',
      description: 'Experience our unique Doll House collection'
    }
  ],
  inHouseExperience: [
    {
      title: 'Pool Side Dinner',
      icon: Moon,
      description: 'Dine under the stars by our stunning pool',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80'
    },
    {
      title: 'Candle Night Dinner',
      icon: Moon,
      description: 'Romantic dining experience by candlelight',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Nature Breakfast',
      icon: Sun,
      description: 'Start your day with breakfast in our garden',
      image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ],
  uniqueOfferings: [
    {
      title: 'Celebrate Your Special Day',
      icon: Calendar,
      description: 'Custom celebrations tailored just for you',
      image: 'https://images.unsplash.com/photo-1464808322410-1a934aab61e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Unique Session with Chef',
      icon: ChefHat,
      description: 'Interactive cooking sessions with our master chefs',
      image: 'https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Bonfire at Lawn',
      icon: Flame,
      description: 'Cozy evening gatherings under the stars',
      image: 'https://images.unsplash.com/photo-1475518112798-86ae358241eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ],
  specialOffers: [
    {
      title: 'Tivoli Weekend Escapes',
      icon: Palmtree,
      description: 'Special weekend packages with exclusive benefits',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Tivoli Leisure Escapes',
      icon: Tree,
      description: 'Extended stay packages for ultimate relaxation',
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
    },
    {
      title: 'Tivoli Business Stays',
      icon: Briefcase,
      description: 'Corporate packages with premium amenities',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ]
};

export default function DigitalQRPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-[#001d3d]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-serif text-[44px] mb-4">Digital Experience</h1>
            <p className="text-lg font-light max-w-2xl mx-auto">
              Enhance your stay with our digital services and exclusive offerings
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Digital Menu Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-neutral-800 mb-4">Digital Menu</h2>
            <div className="w-20 h-1 bg-[#CD9F59] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.digitalMenu.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-full bg-[#CD9F59]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#CD9F59]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-neutral-800 mb-2">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Review and Digital Concierge Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#CD9F59]/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#CD9F59]" />
                </div>
                <h3 className="font-serif text-xl text-neutral-800">Review and Reward</h3>
              </div>
              <p className="text-neutral-600 mb-6">Share your experience and earn rewards points for your next stay.</p>
              <button className="px-6 py-3 bg-[#CD9F59] text-white rounded-lg hover:bg-[#B88D47] transition-colors">
                Write a Review
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#CD9F59]/10 flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-[#CD9F59]" />
                </div>
                <h3 className="font-serif text-xl text-neutral-800">Digital Concierge</h3>
              </div>
              <p className="text-neutral-600 mb-6">24/7 assistance at your fingertips. Let us help you make the most of your stay.</p>
              <button className="px-6 py-3 bg-[#CD9F59] text-white rounded-lg hover:bg-[#B88D47] transition-colors">
                Contact Concierge
              </button>
            </div>
          </div>
        </section>

        {/* In House Experience */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-neutral-800 mb-4">In House Experience</h2>
            <div className="w-20 h-1 bg-[#CD9F59] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.inHouseExperience.map((experience) => (
              <div key={experience.title} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-xl text-white mb-2">{experience.title}</h3>
                    <p className="text-white/90 text-sm">{experience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Unique Hotel Offerings */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-neutral-800 mb-4">Unique Hotel Offerings</h2>
            <div className="w-20 h-1 bg-[#CD9F59] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.uniqueOfferings.map((offering) => (
              <div key={offering.title} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-xl text-white mb-2">{offering.title}</h3>
                    <p className="text-white/90 text-sm">{offering.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Offers */}
        <section>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-neutral-800 mb-4">Special Offers</h2>
            <div className="w-20 h-1 bg-[#CD9F59] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.specialOffers.map((offer) => (
              <div key={offer.title} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-xl text-white mb-2">{offer.title}</h3>
                    <p className="text-white/90 text-sm">{offer.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}