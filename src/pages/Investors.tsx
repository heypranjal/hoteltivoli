import React from 'react';
import { Linkedin } from 'lucide-react';
import Navigation from '../components/Navigation';

const leaders = [
  {
    name: 'Mr. Rohit Gupta',
    role: 'Chairman',
    bio: 'Providing visionary leadership with a focus on sustainable growth.',
    image: 'https://oawudxprjjgsdtsvroqt.supabase.co/storage/v1/object/public/ourpeople//Rohit%20Gupta.jpg',
    linkedin: 'https://www.linkedin.com/in/rohit-gupta-472a158/',
  },
  {
    name: 'Mr. Ishan Gupta',
    role: 'Director',
    bio: 'Driving innovation and strategy across all verticals.',
    image: 'https://oawudxprjjgsdtsvroqt.supabase.co/storage/v1/object/public/ourpeople//Ishaan%20Gupta.jpg',
    linkedin: 'https://www.linkedin.com/in/ishan-gupta-6b279958/',
  },
  {
    name: 'Mr. Akshay Gupta',
    role: 'Director',
    bio: 'Overseeing operational excellence and guest satisfaction.',
    image: 'https://oawudxprjjgsdtsvroqt.supabase.co/storage/v1/object/public/ourpeople//Akshay%20Gupta.jpg',
    linkedin: 'https://www.linkedin.com/in/akshay-gupta-15baab116/',
  },
  {
    name: 'Mr. Aryaman Gupta',
    role: 'Director',
    bio: 'Fostering growth and modernizing brand experiences.',
    image: 'https://oawudxprjjgsdtsvroqt.supabase.co/storage/v1/object/public/ourpeople//Aaryaman%20Gupta.jpg',
    linkedin: 'https://www.linkedin.com/in/aryaman-gupta-11394a146/',
  },
  {
    name: 'Mr. Amit Kumar Sood',
    role: 'CEO',
    bio: 'Leading strategic direction and long-term vision of the group.',
    image: 'https://oawudxprjjgsdtsvroqt.supabase.co/storage/v1/object/public/ourpeople//amit%20sood%20Linkedin.jpg',
    linkedin: 'https://www.linkedin.com/in/amit-kumar-sood-51b2306a/',
  },
  {
    name: 'Mr. Sanjay Kasal',
    role: 'Corp GM',
    bio: 'Ensuring operational success and team synergy across locations.',
    image: 'https://oawudxprjjgsdtsvroqt.supabase.co/storage/v1/object/public/ourpeople//Sanjay%20Kasal.jpg',
    linkedin: 'https://www.linkedin.com/in/sanjaykasal/',
  },
  {
    name: 'Mr. Haider Ali',
    role: 'VP Sales & Marketing',
    bio: 'Crafting high-impact campaigns and boosting brand visibility.',
    image: 'https://oawudxprjjgsdtsvroqt.supabase.co/storage/v1/object/public/ourpeople//Haider%20ali.jpg',
    linkedin: 'https://www.linkedin.com/in/strategybyhaiderali/',
  },
  {
    name: 'Mr. Vikas Lal',
    role: 'VP Projects & Asset Management',
    bio: 'Managing infrastructure, assets, and project delivery.',
    image: 'https://oawudxprjjgsdtsvroqt.supabase.co/storage/v1/object/public/ourpeople//vikas%20lal.jpeg',
    linkedin: 'https://www.linkedin.com/in/vikas-b-95a7a6101/',
  },
];

export default function People() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[40vh] bg-[#001d3d]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-serif text-[44px] mb-4">Leadership Team</h1>
            <p className="text-lg font-light max-w-2xl mx-auto">
              Meet the visionary leaders driving excellence at Tivoli Hotels & Resorts
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] text-[#CD9F59] font-sans mb-4 block">
              Our Leadership
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Visionary leaders driving our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {leaders.map((leader) => (
              <div key={leader.name} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-[#CD9F59] transform rotate-45" />
                  <div className="absolute inset-2 overflow-hidden rounded-full">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-neutral-800 mb-2 flex items-center justify-center gap-2">
                  {leader.name}
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0077B5] hover:text-[#005f8d] transition"
                    aria-label={`LinkedIn profile of ${leader.name}`}
                  >
                    <Linkedin size={20} />
                  </a>
                </h3>
                <p className="text-[#CD9F59] font-bold mb-4">{leader.role}</p>
                <p className="text-neutral-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
