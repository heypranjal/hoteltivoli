import React from 'react';
import ContactForm from '../pages/ContactForm';
import Navigation from '../components/Navigation';

export default function CareerPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        {/* Hero Section */}
        <div
          className="relative h-[40vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://pbkxpylwatscfjzbmwur.supabase.co/storage/v1/object/public/homepage_image//image4.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white text-center tracking-wide drop-shadow-lg">
              Join Our Team
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Introduction */}
          <section className="mb-16 text-center">
            <p className="text-xl leading-relaxed text-neutral-700 max-w-3xl mx-auto">
              Welcome to the career section of <span className="text-[#CD9F59] font-medium">Tivoli</span>! We believe
              our success is built on the passion, dedication, and talent of our people. If you're looking to grow in
              the hospitality industry and help craft unforgettable guest experiences — you're in the right place.
            </p>
          </section>

          {/* Why Work With Us */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif text-center text-neutral-800 mb-10 tracking-wide">
              Why Work With Us?
            </h2>
            <div className="grid md:grid-cols-2 gap-10 text-[17px] text-neutral-700">
              {[
                {
                  icon: '✨',
                  title: 'A Culture of Excellence',
                  desc: 'Be part of a team that strives for the highest standards in service and guest satisfaction.',
                },
                {
                  icon: '📈',
                  title: 'Professional Growth',
                  desc: "We're committed to your development with continuous training and advancement opportunities.",
                },
                {
                  icon: '🤝',
                  title: 'Inclusive Environment',
                  desc: 'We value diversity and cultivate a workplace where every voice is heard and respected.',
                },
                {
                  icon: '🎁',
                  title: 'Competitive Benefits',
                  desc: 'Enjoy an exceptional benefits package that supports your well-being and future.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-[#CD9F59] text-3xl mr-4">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Current Openings */}
          <section className="mb-20 text-center">
            <h2 className="text-3xl font-serif mb-6 text-neutral-800 tracking-wide">Current Openings</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              We invite you to explore open roles. Even if a perfect match isn't listed, we encourage you to apply.
              We're always eager to connect with talented professionals who align with our values.
            </p>
          </section>

          {/* Call to Action */}
          <section className="mb-20 text-center">
            <h2 className="text-3xl font-serif text-neutral-800 mb-6 tracking-wide">Apply Today</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Ready to begin your journey with <span className="text-[#CD9F59] font-medium">Tivoli</span>? Please fill
              out the application form and upload your resume. We look forward to learning more about you.
            </p>
          </section>

          {/* Contact Form */}
          <div className="shadow-xl border border-[#CD9F59]/20 rounded-2xl p-8 bg-white">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
