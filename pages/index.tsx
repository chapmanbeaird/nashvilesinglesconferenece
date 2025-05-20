import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import RegisterButton from '../components/RegisterButton';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  // Replace this with your actual Eventbrite registration link
  const registrationLink = "https://www.eventbrite.com/e/nashville-singles-conference-2025-tickets-placeholder";

  return (
    <div>
      <Header />
      
      {/* Hero Section with Conference Flyer */}
      <div className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Conference Flyer - Vertical Image */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative w-full max-w-md h-[600px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/CONFERENCE FLYER.JPG" 
                  alt="Nashville Singles Conference 2025 Flyer"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Nashville Singles Conference 2025</h1>
              <p className="text-xl md:text-2xl mb-4">August 29–31, 2025 | Franklin, TN</p>
              <p className="text-xl mb-4">For Single Adults Ages 36+</p>
              <p className="text-xl mb-4">Theme: "The Lord is My Song"</p>
              <p className="italic mb-6">"I will trust, and not be afraid; for the Lord Jehovah is my strength and my song." – 2 Nephi 22:2</p>
              <RegisterButton url={registrationLink} size="large" className="mt-4" />
            </div>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <Section 
        id="about" 
        title="A Weekend to Inspire, Connect, and Celebrate"
        bgColor="bg-gray-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-6">
            Join us in beautiful Nashville, Tennessee, for a joyful and uplifting weekend designed for Latter-day Saint single adults ages 36 and up. The Nashville Singles Conference 2025 offers an incredible blend of spiritual nourishment, meaningful connections, heartfelt music, and Southern hospitality. Whether you're coming for the fellowship, the fun, or the faith-building moments—we've got something for you!
          </p>
          <div className="mt-8">
            <RegisterButton url={registrationLink} />
          </div>
        </div>
      </Section>
      
      {/* Registration Section */}
      <Section 
        id="registration" 
        title="Registration" 
        subtitle="Secure your spot for this unforgettable weekend"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Early Bird</h3>
                <p className="text-gray-600 mb-4">through July 31, 2025</p>
                <p className="text-4xl font-bold text-primary">$85</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Regular</h3>
                <p className="text-gray-600 mb-4">starting August 1, 2025</p>
                <p className="text-4xl font-bold text-primary">$125</p>
              </div>
            </div>
            <div className="mt-6">
              <RegisterButton url={registrationLink} size="large" className="px-12 py-4 text-xl" />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Your registration includes:</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>6 delicious meals (dinner Friday, 3 meals Saturday, 2 meals Sunday)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Workshops, keynote speakers & spiritual classes</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Live entertainment, themed dances & musical performances</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Snacks, drinks, photo ops & fun surprises throughout the weekend!</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-20 text-center py-10 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">All events will be held at:</h2>
            <p className="text-2xl font-semibold mb-2">The Franklin Stake Center</p>
            <p className="text-xl">1100 Grey Fox Lane, Franklin, TN 37064</p>
          </div>
        </div>
      </Section>
      
      {/* Highlights Section */}
      <Section 
        id="highlights" 
        title="Conference Highlights" 
        subtitle="Here's a glimpse of what you can look forward to"
        bgColor="bg-gray-50"
      >
        {/* Featured Entertainment Image */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/JACK SETTLE BAND.jpeg" 
                alt="Live Music Entertainment"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        
        {/* Other Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Uplifting Keynotes & Workshops</h3>
            <p>
              Dive into workshops on healing after divorce, strengthening self-worth, financial preparedness, and deepening your understanding of temple covenants. Choose from engaging classes taught by inspiring speakers and knowlegable instructors.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Unforgettable Musical Experiences</h3>
            <p>
              Enjoy live performances from Nashville hit songwriters, a professional honky-tonk band, and a musical fireside to close the weekend. Attend a class on hymns and music, a song writing workshop—or simply soak in the power of music to lift the soul.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Dances, Fun & Entertainment</h3>
            <p>
              Kick up your boots at our country-themed dance night with live music and line dancing, and join us for a totally rad '80s dance party. You'll also find plenty of opportunities to mingle, play games, and make new friends.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Spiritual Nourishment</h3>
            <p>
              Take part in a special Single Adult Sacrament Meeting and uplifting classes focused on personal revelation, family history, gospel art, and Christ-centered living.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Service & Connection</h3>
            <p>
              Engage in meaningful service projects and connect with other single adults from all over the region in a supportive, faith-filled environment.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Accommodations Section */}
      <Section 
        id="accommodations" 
        title="Where to Stay" 
        subtitle="Franklin offers plenty of comfortable accommodations close to the venue"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">The Harpeth Hotel</h3>
            <p className="mb-4">Luxury boutique hotel in downtown Franklin</p>
            <a 
              href="https://www.hilton.com/en/hotels/bnasqqq-the-harpeth-franklin-downtown/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
            >
              <span>Visit Website</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Holiday Inn Express & Suites - Berry Farms</h3>
            <p className="mb-4">Convenient and modern with complimentary breakfast</p>
            <a 
              href="https://www.ihg.com/holidayinnexpress/hotels/us/en/franklin/bnafa/hoteldetail" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
            >
              <span>Visit Website</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Franklin Marriott Cool Springs</h3>
            <p className="mb-4">Well-appointed with easy access to shopping and dining</p>
            <a 
              href="https://www.marriott.com/en-us/hotels/bnacs-franklin-marriott-cool-springs/overview/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
            >
              <span>Visit Website</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </Section>
      
      {/* Discover Franklin Section */}
      <Section 
        id="discover" 
        title="Discover Franklin" 
        subtitle="Extend your stay or explore during free time!"
        bgColor="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 mb-4 rounded overflow-hidden">
              <Image 
                src="/images/2018-franklin-tennessee.jpg" 
                alt="Historic Downtown Franklin"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Historic Downtown Franklin</h3>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 mb-4 rounded overflow-hidden">
              <Image 
                src="/images/Factory-at-Franklin-rennovation-rendering-1.jpg" 
                alt="The Factory at Franklin"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">The Factory at Franklin</h3>
            <p className="text-sm text-gray-600">Shops & eateries</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 mb-4 rounded overflow-hidden">
              <Image 
                src="/images/leipersfork.jpeg" 
                alt="Leiper's Fork village"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Leiper's Fork village</h3>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 mb-4 rounded overflow-hidden">
              <Image 
                src="/images/cheekwood.jpg" 
                alt="Cheekwood Gardens"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Cheekwood Gardens</h3>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 mb-4 rounded overflow-hidden">
              <Image 
                src="/images/countrymusichof.jpeg" 
                alt="Country Music Hall of Fame"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Country Music Hall of Fame</h3>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 mb-4 rounded overflow-hidden">
              <Image 
                src="/images/parthenon.webp" 
                alt="The Parthenon replica in Nashville"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">The Parthenon replica in Nashville</h3>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 mb-4 rounded overflow-hidden">
              <Image 
                src="/images/nashville-tennessee-temple-5824.jpg" 
                alt="Nashville Temple"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Temple session opportunities at the Nashville Temple</h3>
          </div>
        </div>
      </Section>
      
      {/* Call to Action Section */}
      <Section 
        id="cta" 
        title="Be a Part of It" 
        subtitle="Whether you're coming solo or with friends, the Nashville Singles Conference is a warm, welcoming event to grow spiritually, connect socially, and enjoy a memorable weekend in Music City."
      >
        <div className="text-center">
          <p className="text-xl mb-8">Don't wait—register early and save your spot!</p>
          <RegisterButton url={registrationLink} size="large" />
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Home;
