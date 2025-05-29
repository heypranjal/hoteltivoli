import React from 'react';
import { Leaf, Recycle, Heart, Globe, Droplets, Sun, Wind, Sprout } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Sustainability"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <Leaf className="w-12 h-12 text-[#CD9F59]" />
            </div>
            <h1 className="font-serif text-[44px] mb-6">Our Commitment to Sustainability</h1>
            <p className="text-xl font-light">
              Empowering the future through responsible practices in hospitality, environment, and community.
            </p>
          </div>
        </div>
      </div>

      {/* ESG Sections */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] text-[#CD9F59] font-sans mb-4 block">
              Tivoli Chhatarpur
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-800 mb-4">
              ESG Highlights
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Sustainability efforts at Tivoli New Delhi, Chhatarpur
            </p>
          </div>

          {/* Environmental */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <Globe className="w-8 h-8 text-[#CD9F59]" />
              <h3 className="font-serif text-2xl text-neutral-800">Environmental Initiatives</h3>
            </div>
            <ul className="list-disc list-inside text-neutral-700 space-y-4 pl-4">
              <li><strong>Waste Management & Composting:</strong> On-site composting generates 100–150 kg manure monthly, reducing landfill impact.</li>
              <li><strong>Solar Power:</strong> 65-watt rooftop solar panels generate 300–400 kWh/month, cutting carbon emissions.</li>
              <li><strong>Rainwater Harvesting:</strong> 17 pits store 5,000–7,000 litres of water for sustainable groundwater recharge.</li>
              <li><strong>Water Reuse:</strong> 2,000 litres of treated greywater reused daily for maintenance and landscaping.</li>
              <li><strong>High-Pressure Pump (HTP):</strong> Increases water use efficiency for cleaning and facility upkeep.</li>
              <li><strong>Green Transport:</strong> 5 EVs in use — 2 golf carts and 3 electric vehicles with dry lithium batteries.</li>
            </ul>
          </div>

          {/* Social Responsibility */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <Heart className="w-8 h-8 text-[#CD9F59]" />
              <h3 className="font-serif text-2xl text-neutral-800">Social Responsibility</h3>
            </div>
            <ul className="list-disc list-inside text-neutral-700 space-y-4 pl-4">
              <li><strong>Inclusive Employment:</strong> Active hiring of individuals with disabilities, promoting workplace diversity.</li>
              <li><strong>Community Awareness:</strong> Educating staff and guests on sustainable practices and eco-conscious behavior.</li>
            </ul>
          </div>

          {/* Governance */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Recycle className="w-8 h-8 text-[#CD9F59]" />
              <h3 className="font-serif text-2xl text-neutral-800">Governance</h3>
            </div>
            <ul className="list-disc list-inside text-neutral-700 space-y-4 pl-4">
              <li><strong>Compliance Systems:</strong> Ongoing monitoring of composting, recycling, water, and energy systems.</li>
              <li><strong>Policy Commitment:</strong> Long-term ESG compliance is embedded in operational and strategic decisions.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
