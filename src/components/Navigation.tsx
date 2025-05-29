import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Hotel, MapPin } from 'lucide-react';


const brands = [
  { id: 'tivoli', name: 'The Tivoli', path: '/brands/tivoli' },
  { id: 'wedcation', name: 'Wedcation', path: '/brands/wedcation' },
  { id: 'upper-hse', name: 'The Upper HSE', path: '/brands/upper-hse' },
  { id: 'omnia', name: 'Omnia', path: '/brands/omnia' }
];

const locations = [
  { id: 'delhi', name: 'Delhi', path: '/locations/delhi' },
  { id: 'noida', name: 'Noida', path: '/locations/noida' },
  { id: 'greater-noida', name: 'Greater Noida', path: '/locations/greater-noida' },
  { id: 'ambala', name: 'Ambala', path: '/locations/ambala' },
  { id: 'israna', name: 'Israna', path: '/locations/israna' }
];

export default function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [showSecondaryNav, setShowSecondaryNav] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowSecondaryNav(currentScrollY <= lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 py-1 md:py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`${isHomePage ? 'text-white' : 'text-neutral-800'} md:hidden mr-4`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/" className="text-white hover:text-white/90 font-serif text-2xl md:text-3xl tracking-wider transition-colors">
              TIVOLI
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-white text-sm uppercase tracking-widest font-sans font-light transition-colors">Hotels</Link>
              <div className="relative group">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'brands' ? null : 'brands')}
                  className="text-white text-sm uppercase tracking-widest font-sans font-light transition-colors flex items-center"
                >
                  <span>Brands</span>
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === 'brands' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute left-0 top-full pt-2 transition-opacity duration-300 z-50 ${activeDropdown === 'brands' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} group-hover:opacity-100 group-hover:pointer-events-auto`}>
                  <div className="bg-white py-2 rounded-lg shadow-xl min-w-[200px]">
                    {brands.map((brand) => (
                      <Link
                        key={brand.id}
                        to={brand.path}
                        className="flex items-center px-4 py-2 text-sm text-neutral-600"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <Hotel className="w-4 h-4 mr-2" />
                        {brand.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'locations' ? null : 'locations')}
                  className="text-white text-sm uppercase tracking-widest font-sans font-light transition-colors flex items-center"
                >
                  <span>Locations</span>
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === 'locations' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute left-0 top-full pt-2 transition-opacity duration-300 z-50 ${activeDropdown === 'locations' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} group-hover:opacity-100 group-hover:pointer-events-auto`}>
                  <div className="bg-white py-2 rounded-lg shadow-xl min-w-[200px]">
                    {locations.map((location) => (
                      <Link
                        key={location.id}
                        to={location.path}
                        className="flex items-center px-4 py-2 text-sm text-neutral-600"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        {location.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <button className="text-white text-sm uppercase tracking-widest font-sans font-light transition-colors">Offers</button>
              <button className="text-white text-sm uppercase tracking-widest font-sans font-light transition-colors">
                Loyalty
              </button>
              <Link to="/our-story" className="text-white text-sm uppercase tracking-widest font-sans font-light transition-colors">
                Our Story
              </Link>
              <Link to="/sustainability" className="text-white text-sm uppercase tracking-widest font-sans font-light transition-colors">Sustainability</Link>
              <Link to="/people" className="text-white text-sm uppercase tracking-widest font-sans font-light transition-colors">
                People
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary Navigation */}
      <div className={`transition-all duration-300 relative z-10 ${showSecondaryNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-end py-4">
            <a 
              href="/career"
              rel="noopener noreferrer" 
              className="mr-8 text-sm font-sans uppercase tracking-wider text-white/90 hover:text-white transition-colors"
            >
              Career
            </a>
            <a 
              href="/weddings"
              className="text-sm font-sans uppercase tracking-wider text-white/90 hover:text-white transition-colors"
            >
              Weddings
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white transform transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link 
            to="/" 
            className="font-serif text-2xl text-neutral-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            TIVOLI
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-neutral-600" />
          </button>
        </div>
        <div className="py-4">
          <div className="space-y-1">
            <Link
              to="/"
              className="block px-4 py-3 text-neutral-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hotels
            </Link>
            <div className="border-b border-neutral-100">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'brands' ? null : 'brands')}
                className="w-full flex items-center justify-between px-4 py-3 text-neutral-600 hover:bg-neutral-50 hover:text-[#CD9F59] transition-colors"
              >
                Brands
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'brands' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'brands' && (
                <div className="bg-neutral-50">
                  {brands.map((brand) => (
                    <Link
                      key={brand.id}
                      to={brand.path}
                      className="block px-4 py-3 text-neutral-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="border-b border-neutral-100">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'career' ? null : 'career')}
                className="w-full flex items-center justify-between px-4 py-3 text-neutral-600 hover:bg-neutral-50 hover:text-[#CD9F59] transition-colors"
              >
                Career
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'career' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'career' && (
                <div className="bg-neutral-50">
                  <Link
                    to="/career/venues"
                    className="block px-8 py-2 text-sm text-neutral-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Meeting Venues
                  </Link>
                  <Link
                    to="/meetings/packages"
                    className="block px-8 py-2 text-sm text-neutral-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Meeting Packages
                  </Link>
                  <Link
                    to="/meetings/request"
                    className="block px-8 py-2 text-sm text-neutral-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Request for Proposal
                  </Link>
                </div>
              )}
            </div>
            <div className="border-b border-neutral-100">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'weddings' ? null : 'weddings')}
                className="w-full flex items-center justify-between px-4 py-3 text-neutral-600 hover:bg-neutral-50 hover:text-[#CD9F59] transition-colors"
              >
                Weddings
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'weddings' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'weddings' && (
                <div className="bg-neutral-50">
                  <Link
                    to="/weddings/venues"
                    className="block px-8 py-2 text-sm text-neutral-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Wedding Venues
                  </Link>
                  <Link
                    to="/weddings/packages"
                    className="block px-8 py-2 text-sm text-neutral-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Wedding Packages
                  </Link>
                  <Link
                    to="/weddings/request"
                    className="block px-8 py-2 text-sm text-neutral-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Request for Proposal
                  </Link>
                </div>
              )}
            </div>
            <div className="border-b border-neutral-100">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'locations' ? null : 'locations')}
                className="w-full flex items-center justify-between px-4 py-3 text-neutral-600 hover:bg-neutral-50 hover:text-[#CD9F59] transition-colors"
              >
                Locations
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'locations' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'locations' && (
                <div className="bg-neutral-50">
                  {locations.map((location) => (
                    <Link
                      key={location.id}
                      to={location.path}
                      className="flex items-center px-8 py-2 text-sm text-neutral-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      {location.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#"
              className="block px-4 py-3 text-neutral-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Offers
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-neutral-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Loyalty
            </a>
            <Link
              to="/our-story"
              className="block px-4 py-3 text-neutral-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Story
            </Link>
            <Link
              to="/sustainability"
              className="block px-4 py-3 text-neutral-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sustainability
            </Link>
            <Link
              to="/people"
              className="block px-4 py-3 text-neutral-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              People
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}