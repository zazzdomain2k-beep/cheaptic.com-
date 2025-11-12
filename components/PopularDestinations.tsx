
import React from 'react';
import { Destination } from '../types';
import { MOCK_DESTINATIONS } from '../constants';

const DestinationCard: React.FC<{ destination: Destination }> = ({ destination }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-xl group h-96">
      <img src={destination.imageUrl} alt={destination.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-bold">{destination.name}</h3>
        <p className="text-sm text-slate-300">{destination.country}</p>
        <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
            {destination.description}
        </p>
      </div>
    </div>
  );
};

const PopularDestinations: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Popular Destinations
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Get inspired for your next trip with these trending locations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_DESTINATIONS.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
