/**
 * VenueBookingForm Component
 * A premium lead capture form for venue bookings
 */
import React, { useState } from 'react';
import { Calendar, Users, Phone, Mail, ChevronDown } from 'lucide-react';

const eventTypes = [
  { id: 'wedding', label: 'Wedding' },
  { id: 'mice', label: 'MICE' },
  { id: 'birthday', label: 'Birth Day Party' },
  { id: 'cocktail', label: 'Cock Tail Party' },
  { id: 'other', label: 'Other' }
];

export default function VenueBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    eventDate: '',
    pax: '',
    phone: '',
    email: '',
    eventType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="bg-[#F8F9FA] py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-sm uppercase tracking-[0.2em] text-[#CD9F59] font-sans mb-3 block">
            Book Your Event
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-neutral-800 mb-2">
            Plan Your Special Occasion
          </h2>
          <div className="w-20 h-[1px] bg-[#CD9F59] mx-auto" />
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-[#CD9F59]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">Name</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#CD9F59] transition-colors"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            {/* Event Type Select */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">Event Type</label>
              <div className="relative">
                <select
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#CD9F59] transition-colors appearance-none"
                >
                  <option value="">Select event type</option>
                  {eventTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
              </div>
            </div>

            {/* Event Date Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">Event Date</label>
              <div className="relative">
                <input
                  type="date"
                  required
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#CD9F59] transition-colors"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
              </div>
            </div>

            {/* Pax Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">Number of Guests</label>
              <div className="relative">
                <input
                  type="number"
                  required
                  value={formData.pax}
                  onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#CD9F59] transition-colors"
                  placeholder="Enter guest count"
                />
                <Users className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
              </div>
            </div>

            {/* Phone Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#CD9F59] transition-colors"
                  placeholder="Enter phone number"
                />
                <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">Email (Optional)</label>
              <div className="relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-[#CD9F59] transition-colors"
                  placeholder="Enter email address"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-[#CD9F59] text-white rounded-lg hover:bg-[#B88D47] transition-colors duration-300 font-medium tracking-wide"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}