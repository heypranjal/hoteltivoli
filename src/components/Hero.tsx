import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MobileBookingButton } from '@/components/ui/mobile-booking-button';
import { cn } from '@/lib/utils';

const carouselImages = [
  'https://pbkxpylwatscfjzbmwur.supabase.co/storage/v1/object/public/homepage_image//image1.jpg',
  'https://pbkxpylwatscfjzbmwur.supabase.co/storage/v1/object/public/homepage_image//image2.jpg',
  'https://pbkxpylwatscfjzbmwur.supabase.co/storage/v1/object/public/homepage_image//image3.jpg',
  'https://pbkxpylwatscfjzbmwur.supabase.co/storage/v1/object/public/homepage_image//image4.jpg'
];

export default function Hero() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isPortrait, setIsPortrait] = React.useState(false);
  const [showMobileBooking, setShowMobileBooking] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  React.useEffect(() => {
    const checkLayout = () => {
      setIsMobile(window.innerWidth < 768);
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    checkLayout();
    window.addEventListener('resize', checkLayout);
    return () => window.removeEventListener('resize', checkLayout);
  }, []);

  const toggleMobileBooking = () => {
    setShowMobileBooking(!showMobileBooking);
    if (!showMobileBooking) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  return (
    <div className="relative h-[50vh] md:h-[60vh]">
      {/* Hero Image */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
            <img 
              src={image}
              alt={`Luxury Hotel ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevImage}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white p-1 md:p-2 hover:bg-black/20 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextImage}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white p-1 md:p-2 hover:bg-black/20 rounded-full transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentImageIndex ? "bg-white" : "bg-white/50"
            )}
          />
        ))}
      </div>
      
      {/* Booking Widget */}
      <MobileBookingButton
        onClick={toggleMobileBooking}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      >
        <span className="font-serif text-base tracking-wide text-white px-6 py-2 block">
          Book Your Stay
        </span>
      </MobileBookingButton>
    </div>
  );
}