import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import WedcationAmbalaPage from './pages/WedcationAmbalaPage';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedVenues from './components/FeaturedVenues';
import Locations from './components/Locations';
import Experiences from './components/Experiences';
import UpcomingHotels from './components/UpcomingHotels';
import OurStory from './components/OurStory';
import AwardsAccolades from './components/AwardsAccolades';
import Press from './components/Press';
import TivoliRoyalPalacePage from './pages/TivoliRoyalPalacePage';
import TivoliHeritagePalacePage from './pages/TivoliHeritagePalacePage';
import TivoliLotusCourtPage from './pages/TivoliLotusCourtPage';
import OmniaDwarkaExpresswayPage from './pages/OmniaDwarkaExpresswayPage';
import WedcationIsranaPage from './pages/WedcationIsranaPage';
import TivoliL2Page from './pages/TivoliL2Page';
import HotelPage from './pages/HotelPage';
import People from './pages/Investors';
import RoyalcourtokhlaPage from './pages/RoyalcourtokhlaPage';
import DigitalQRPage from './pages/DigitalQRPage';
import LocationsPage from './pages/LocationsPage';
import BrandsPage from './pages/BrandsPage';
import SustainabilityPage from './pages/SustainabilityPage';
import OurStoryPage from './pages/OurStoryPage';
import UpperHseSultanpurPage from './pages/UpperHseSultanpurPage';
import OmniaGreaterNoidaPage from './pages/OmniaGreaterNoidaPage';
import TivoliBijwasanPage from './pages/TivoliBijwasanPage';
import Career from './pages/Career';

function App() {
  return (
    <div className="min-h-screen bg-white">

      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <Hero />
            <main>
              <FeaturedVenues />
              <OurStory />
              <Locations />
              <Experiences />
              <AwardsAccolades />
              <Press />
              <UpcomingHotels />
            </main>
          </>
        } />
        <Route path="/people" element={<People />} />
        <Route path="/career" element={<Career />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations/:location" element={<LocationsPage />} />
        <Route path="/brands/:brand" element={<LocationsPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/sustainability" element={<SustainabilityPage />} />
        <Route path="/delhi/upper-hse-sultanpur" element={<UpperHseSultanpurPage />} />
        <Route path="/delhi/bijwasan" element={<TivoliBijwasanPage />} />
        <Route path="/delhi/royal-court-okhla" element={<RoyalcourtokhlaPage />} />
        <Route path="/digital-qr" element={<DigitalQRPage />} />
        <Route path="/palwal-haryana/:hotelSlug" element={<TivoliRoyalPalacePage />} />
        <Route path="/rewari-haryana/:hotelSlug" element={<TivoliHeritagePalacePage />} />
        <Route path="/tivoli-l2" element={<TivoliL2Page />} />
        <Route path="/noida/:hotelSlug" element={<TivoliLotusCourtPage />} />
        <Route path="/delhi/omnia-dwarka-expressway" element={<OmniaDwarkaExpresswayPage />} />
        <Route path="/greater-noida/:hotelSlug" element={<OmniaGreaterNoidaPage />} />
        <Route path="/ambala/:hotelSlug" element={<WedcationAmbalaPage />} />
        <Route path="/israna/:hotelSlug" element={<WedcationIsranaPage />} />
        <Route path="/:location/:hotelSlug" element={<HotelPage />} />
        <Route path="/:brand/:hotelSlug" element={<HotelPage />} />
      </Routes>
      <footer className="bg-[#001d3d] text-white py-6 md:py-10">
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Head Office */}
            <div className="space-y-4">
              <div>
                <h4 className="font-sans text-xs uppercase tracking-widest mb-2">Head Office</h4>
                <div className="space-y-3">
                  <div className="flex items-start text-neutral-300">
                    <MapPin className="w-4 h-4 mr-2 mt-1 text-[#CD9F59]" />
                    <div>
                      <p className="font-medium text-sm">Tivoli Hospitality Group</p>
                      <p className="font-light text-xs text-neutral-400">1-Chhatrpur, New Delhi-110074, India</p>
                    </div>
                  </div>
                  <a href="mailto:amit.sood@thetivolihotels.com" className="flex items-center text-neutral-300 hover:text-[#CD9F59] transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="font-light text-xs">amit.sood@thetivolihotels.com</span>
                  </a>
                  <a href="tel:+9108588850354" className="flex items-center text-neutral-300 hover:text-[#CD9F59] transition-colors">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="font-light text-xs">+91 85888 50354</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Tivoli Net */}
            <div className="space-y-3 md:space-y-4">
              <h4 className="font-sans text-xs uppercase tracking-widest mb-1">Tivoli Net</h4>
              <p className="text-neutral-400 text-xs font-light mb-1">Regional Sales & Reservations</p>
              <div className="space-y-2">
                <p className="text-neutral-300 font-medium text-sm">The Tivoli</p>
                <p className="text-neutral-300 font-medium text-sm">Omnia</p>
                <p className="text-neutral-300 font-medium text-sm">The Upper HSE</p>
                <p className="text-neutral-300 font-medium text-sm">Wedcation</p>
              </div>
              <div className="space-y-3">
                <a href="/tivolinet" className="flex items-center text-neutral-300 hover:text-[#CD9F59] transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="font-light text-xs">View All Regional Offices</span>
                </a>
                <a href="tel:+911244567890" className="flex items-center text-neutral-300 hover:text-[#CD9F59] transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-light text-xs">Central Reservations: 085888 50354</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <h4 className="font-sans text-xs uppercase tracking-widest mb-1">Hotel Locations</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-neutral-300">
                  <MapPin className="w-4 h-4 mr-2 mt-1 text-[#CD9F59]" />
                  <div>
                    <p className="font-medium text-sm">Delhi</p>
                    <p className="font-light text-xs text-neutral-400">The Tivoli-New Delhi, Tivoli Royal Court-Okhla</p>
                  </div>
                </li>
                <li className="flex items-start text-neutral-300">
                  <MapPin className="w-4 h-4 mr-2 mt-1 text-[#CD9F59]" />
                  <div>
                    <p className="font-medium text-sm">Noida</p>
                    <p className="font-light text-xs text-neutral-400">Tivoli Lotus Court, Omnia by Tivoli-Noida</p>
                  </div>
                </li>
                <li className="flex items-start text-neutral-300">
                  <MapPin className="w-4 h-4 mr-2 mt-1 text-[#CD9F59]" />
                  <div>
                    <p className="font-medium text-sm">Ambala</p>
                    <p className="font-light text-xs text-neutral-400">Wedcation by Tivoli-Ambala</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-3 md:space-y-4 md:col-span-3">
              <h4 className="font-sans text-xs uppercase tracking-widest mb-1">Find Us</h4>
              <div className="w-full h-[100px] md:h-[150px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.6733831702897!2d77.18273957549579!3d28.496635075739174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e25a8f714c1%3A0x9bc15e7b965ec179!2sThe%20Tivoli!5e0!3m2!1sen!2sin!4v1710934800000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
         <div className="mt-5 md:mt-8 pt-4 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <p className="text-neutral-400 text-xs">
                © 2025 Tivoli Hotels & Resorts. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs text-neutral-400">
                <a href="https://docs.google.com/document/d/1u-V_fFaQ38qcNdsPJHTkgSfqM5ZNQr8IO0cRCJdkQZ8/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-[#CD9F59] transition-colors">Privacy Policy</a>
                <a href="https://docs.google.com/document/d/1ZhGmgPL8-UrSvSTQdR8RMRV3XYZvSFCyYXpghNfKop0/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-[#CD9F59] transition-colors">Terms of Service</a>
                <a href="/digital-qr" target="_blank" rel="noopener noreferrer" className="hover:text-[#CD9F59] transition-colors">Digital QR</a>
                <a href="#" className="hover:text-[#CD9F59] transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;