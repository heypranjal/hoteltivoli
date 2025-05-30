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
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
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
            <Link to="/" className="text-white font-serif text-2xl md:text-3xl tracking-wider">
              TIVOLI
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-white text-sm uppercase tracking-widest">Hotels</Link>

              {/* Brands Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'brands' ? null : 'brands')}
                  className="text-white text-sm uppercase tracking-widest flex items-center"
                >
                  Brands
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'brands' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute left-0 top-full pt-2 z-50 transition-opacity duration-300 ${activeDropdown === 'brands' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
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

              {/* Locations Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'locations' ? null : 'locations')}
                  className="text-white text-sm uppercase tracking-widest flex items-center"
                >
                  Locations
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'locations' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute left-0 top-full pt-2 z-50 transition-opacity duration-300 ${activeDropdown === 'locations' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                  <div className="bg-white py-2 rounded-lg shadow-xl min-w-[200px]">
                    {locations.map((loc) => (
                      <Link
                        key={loc.id}
                        to={loc.path}
                        className="flex items-center px-4 py-2 text-sm text-neutral-600"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <button className="text-white text-sm uppercase tracking-widest">Offers</button>
              <button className="text-white text-sm uppercase tracking-widest">Loyalty</button>
              <Link to="/our-story" className="text-white text-sm uppercase tracking-widest">Our Story</Link>
              <Link to="/sustainability" className="text-white text-sm uppercase tracking-widest">Sustainability</Link>
              <Link to="/people" className="text-white text-sm uppercase tracking-widest">People</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Nav */}
      <div className={`transition-all duration-300 relative z-10 ${showSecondaryNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="hidden md:flex justify-end py-4">
            <a href="/career" className="mr-8 text-sm uppercase tracking-wider text-white/90 hover:text-white">Career</a>
            <a href="/weddings" className="text-sm uppercase tracking-wider text-white/90 hover:text-white">Weddings</a>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/" className="font-serif text-2xl text-neutral-800" onClick={() => setIsMobileMenuOpen(false)}>TIVOLI</Link>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-neutral-100 rounded-full" aria-label="Close menu">
            <X className="w-6 h-6 text-neutral-600" />
          </button>
        </div>

        <div className="py-4 space-y-1">
          <Link to="/" className="block px-4 py-3 text-neutral-600" onClick={() => setIsMobileMenuOpen(false)}>Hotels</Link>

          {/* Brands (mobile) */}
          <div className="border-b">
            <button onClick={() => setActiveDropdown(activeDropdown === 'brands' ? null : 'brands')} className="w-full flex justify-between px-4 py-3 text-neutral-600 hover:bg-neutral-50">
              Brands
              <ChevronDown className={`w-4 h-4 ${activeDropdown === 'brands' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'brands' && (
              <div className="bg-neutral-50">
                {brands.map((brand) => (
                  <Link key={brand.id} to={brand.path} className="block px-8 py-2 text-sm text-neutral-600" onClick={() => setIsMobileMenuOpen(false)}>
                    {brand.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations (mobile) */}
          <div className="border-b">
            <button onClick={() => setActiveDropdown(activeDropdown === 'locations' ? null : 'locations')} className="w-full flex justify-between px-4 py-3 text-neutral-600 hover:bg-neutral-50">
              Locations
              <ChevronDown className={`w-4 h-4 ${activeDropdown === 'locations' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'locations' && (
              <div className="bg-neutral-50">
                {locations.map((loc) => (
                  <Link key={loc.id} to={loc.path} className="block px-8 py-2 text-sm text-neutral-600" onClick={() => setIsMobileMenuOpen(false)}>
                    {loc.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Career (mobile) */}
          <Link to="/career" className="block px-4 py-3 text-neutral-600" onClick={() => setIsMobileMenuOpen(false)}>Career</Link>

          {/* Weddings (mobile) */}
          <Link to="/weddings" className="block px-4 py-3 text-neutral-600" onClick={() => setIsMobileMenuOpen(false)}>Weddings</Link>

          {/* Other links */}
          <Link to="/our-story" className="block px-4 py-3 text-neutral-600" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
          <Link to="/sustainability" className="block px-4 py-3 text-neutral-600" onClick={() => setIsMobileMenuOpen(false)}>Sustainability</Link>
          <Link to="/people" className="block px-4 py-3 text-neutral-600" onClick={() => setIsMobileMenuOpen(false)}>People</Link>
        </div>
      </div>
    </nav>
  );
}
