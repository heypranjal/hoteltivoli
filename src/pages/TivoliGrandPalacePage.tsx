@@ .. @@
 import React, { useState, useEffect, useRef } from 'react';
 import { useParams, Navigate } from 'react-router-dom';
-import { MapPin, Phone, Mail, Star, Users, Calendar, Share2, Heart, Wifi, School, Dumbbell, Utensils, Car, Wine, Space, Coffee } from 'lucide-react';
+import { MapPin, Phone, Mail, Star, Users, Calendar, Share2, Heart, Wifi, School, Dumbbell, Utensils, Car, Wine, Space, Coffee, ChevronLeft, ChevronRight } from 'lucide-react';

@@ .. @@
           {/* Spaces Section */}
-          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
-            {/* Banquet Hall */}
-            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
+          <div className="relative">
+            <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 flex gap-4 scrollbar-hide">
+              {/* Banquet Hall */}
+              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group snap-start shrink-0 w-[calc(100%-1rem)] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                <div className="relative aspect-[4/3]">
                   <img
                     src="https://pbkxpylwatscfjzbmwur.supabase.co/storage/v1/object/public/homepage_image//banquet.jpg"
                     alt="Banquet Hall"
                     className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                   />
                   <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs">
                     Capacity: 1000
                   </div>
                 </div>
                 <div className="p-4">
                   <h4 className="font-serif text-lg text-neutral-800 mb-2">Banquet Hall</h4>
                   <ul className="space-y-2 text-sm text-neutral-600">
                     <li>• Fully air-conditioned space</li>
                     <li>• Professional sound system</li>
                     <li>• LED lighting setup</li>
                     <li>• Dedicated entrance</li>
                   </ul>
                 </div>
-            </div>
+              </div>
               
               {/* Lawn Area */}
-              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
+              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group snap-start shrink-0 w-[calc(100%-1rem)] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                 <div className="relative aspect-[4/3]">
                   <img
                     src='https://oawudxprjjgsdtsvroqt.supabase.co/storage/v1/object/public/tivoli-dining-photo//lawn%20area.jpg'
                     alt="Lawn Area"
                     className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                   />
                   <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs">
                     Capacity: 2000
                   </div>
                 </div>
                 <div className="p-4">
                   <h4 className="font-serif text-lg text-neutral-800 mb-2">Lawn Area</h4>
                   <ul className="space-y-2 text-sm text-neutral-600">
                     <li>• Sprawling outdoor space</li>
                     <li>• Perfect for day events</li>
                     <li>• Landscaped gardens</li>
                     <li>• Outdoor lighting available</li>
                   </ul>
                 </div>
-              </div>
+              </div>
+            </div>
+            
+            {/* Navigation Buttons */}
+            <button 
+              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10 -ml-4 hidden md:flex"
+              onClick={() => {
+                const container = document.querySelector('.scroll-smooth');
+                container?.scrollBy({ left: -container.clientWidth / 2, behavior: 'smooth' });
+              }}
+            >
+              <ChevronLeft className="w-5 h-5 text-neutral-600" />
+            </button>
+            <button 
+              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10 -mr-4 hidden md:flex"
+              onClick={() => {
+                const container = document.querySelector('.scroll-smooth');
+                container?.scrollBy({ left: container.clientWidth / 2, behavior: 'smooth' });
+              }}
+            >
+              <ChevronRight className="w-5 h-5 text-neutral-600" />
+            </button>
           </div>