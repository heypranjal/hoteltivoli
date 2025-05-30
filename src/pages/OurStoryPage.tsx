import React from 'react';
import { Calendar, Users, Award, Building, Quote, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const timeline = [
  {
    year: 1931,
    title: 'The Beginning',
    description: 'It all started decades ago as the vision of the young and ambitious entrepreneur, Mr. Balak Ram Gupta..',
    image: 'https://oawudxprjjgsdtsvroqt.supabase.co/storage/v1/object/public/ourpeople//our%20story1.jpg'
  },
  {
    year: 1995,
    title: 'Your Celebration, Our Signature',
    description: 'Ove the past decades Tivoli has established itself as the most happening place in town for Parties, Weddings, MICE (Meetings, Incentives, Conferencing, Exhibits) Events and FamilyCelebrations alike.',

    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    year: 2005,
    title: 'The New Era of Leadership',
    description: 'As the wheels of time rolled, the reins passed into the hands of the newer generation that owns the vivacity, dedication and intellect of three dynamic personalities - Mr. R.R.Gupta, Chairman, Mr. Puneet Gupta and Mr. Rohit Gupta.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    year: 2010,
    title: 'Elevating Hospitality Standards',
    description: " This is a result of the group's uncompromising dedication towards providing the best of decor, catering, lodging and banqueting services at various different scales.",
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80'
  },
  {
    year: 2015,
    title: 'Sustainability Focus',
    description: "Following Mr. Balak Ram's tradition of flawless hospitality, Mr. RR Gupta & his sons Mr.Puneet Gupta & Mr. Rohit Gupta have led Tivoli to being one of the most well-recognized and respected Hospitality Group in the country.",
    image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    year: 2020,
    title: 'Legacy Reinvented, Hospitality Redefined',
    description: 'Launched innovative digital services and contactless experiences.',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80'
  },
 
];

const leaders = [
  {
    name: 'Rajesh Khanna',
    role: 'Founder & Chairman',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    bio: 'With over 40 years of experience in luxury hospitality, Rajesh has been the visionary force behind Tivoli\'s growth and success.'
  },
  {
    name: 'Priya Sharma',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    bio: 'A seasoned hospitality executive with a passion for innovation and sustainable luxury experiences.'
  },
  {
    name: 'Arun Patel',
    role: 'Chief Operating Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    bio: 'Brings extensive operational expertise and a commitment to maintaining Tivoli\'s high standards across all properties.'
  }
];

const values = [
  {
    title: 'Excellence',
    description: 'Striving for perfection in every detail of the guest experience'
  },
  {
    title: 'Innovation',
    description: 'Continuously evolving to exceed modern luxury expectations'
  },
  {
    title: 'Sustainability',
    description: 'Committed to responsible luxury and environmental stewardship'
  },
  {
    title: 'Heritage',
    description: 'Honoring our rich history while embracing the future'
  }
];

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Tivoli Legacy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="font-serif text-[44px] mb-6">Our Story</h1>
            <p className="text-xl font-light">
              A legacy of luxury hospitality spanning over three decades
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm uppercase tracking-[0.2em] text-[#CD9F59] font-sans mb-4 block">
              Our Legacy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-800 mb-8">
              A Journey of Excellence
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Since our founding in 1931, Tivoli Hotels & Resorts has been dedicated to creating 
              extraordinary experiences and setting new standards in luxury hospitality. What began 
              as a single property in Delhi has grown into a collection of prestigious hotels and 
              resorts, each embodying our commitment to unparalleled service and timeless elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] text-[#CD9F59] font-sans mb-4 block">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-800 mb-4">
              Milestones Through the Years
            </h2>
          </div>

          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div key={event.year} className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
                    </div>
                  </div>
                  <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="text-[#CD9F59] font-serif text-3xl mb-4">
                        {event.year}
                      </div>
                      <h3 className="font-serif text-2xl text-neutral-800 mb-4">
                        {event.title}
                      </h3>
                      <p className="text-neutral-600">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Values */}
      <section className="py-20 bg-[#001d3d] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] text-[#CD9F59] font-sans mb-4 block">
              Our Values
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-[#CD9F59] flex items-center justify-center mx-auto mb-6">
                  <div className="w-3 h-3 bg-[#CD9F59] transform rotate-45" />
                </div>
                <h3 className="font-serif text-xl mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-800 mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Join us in creating the next chapter of luxury hospitality
          </p>
         <Link to="/career">
  <button className="px-8 py-3 bg-[#CD9F59] text-white rounded-lg hover:bg-[#B88D47] transition-colors">
    Explore Careers
  </button>
</Link>
        </div>
      </section>
    </div>
  );
}