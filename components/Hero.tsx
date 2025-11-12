
import React from 'react';
import FlightSearchWidget from './FlightSearchWidget';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-24 md:py-32 lg:py-40" 
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=1&blur=2')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Travel More, Spend Less
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Discover unbeatable flight deals to your dream destinations. Your next adventure starts here.
          </p>
        </div>
        <FlightSearchWidget />
      </div>
    </section>
  );
};

export default Hero;