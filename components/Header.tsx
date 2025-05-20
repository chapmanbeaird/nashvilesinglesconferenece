import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header>
      {/* Main Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            {/* Flag on Left */}
            <div className="w-full md:w-1/5 flex justify-center md:justify-start mb-2 md:mb-0">
              <div className="relative w-20 h-20 md:w-24 md:h-24 overflow-visible flex items-center justify-center">
                <Image 
                  src="/images/Flag_of_Tennessee.svg.png" 
                  alt="Tennessee Flag"
                  width={120}
                  height={120}
                  className="scale-150"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
            
            {/* Title in Center */}
            <div className="w-full md:w-4/5 text-center md:text-left relative">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">Nashville Singles Conference 2025</h1>
              <p className="text-base md:text-lg mt-1">August 29–31, 2025 | Franklin, TN</p>
              
              {/* Fun crooked badge */}
              <div className="absolute -top-1 md:top-0 right-4 md:right-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white text-blue-800 px-3 py-1 rounded-lg shadow-md">
                  <p className="font-bold text-sm md:text-base">For Single Adults Ages 36+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="bg-blue-700 text-white shadow-md">
        <div className="container mx-auto py-2">
          <nav>
            <ul className="flex flex-wrap justify-center space-x-2 md:space-x-8">
              <li><a href="#about" className="text-lg font-semibold hover:text-yellow-300 transition-colors px-3 py-2">About</a></li>
              <li><a href="#highlights" className="text-lg font-semibold hover:text-yellow-300 transition-colors px-3 py-2">Highlights</a></li>
              <li><a href="#registration" className="text-lg font-semibold hover:text-yellow-300 transition-colors px-3 py-2">Registration</a></li>
              <li><a href="#accommodations" className="text-lg font-semibold hover:text-yellow-300 transition-colors px-3 py-2">Accommodations</a></li>
              <li><a href="#discover" className="text-lg font-semibold hover:text-yellow-300 transition-colors px-3 py-2">Discover Franklin</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
