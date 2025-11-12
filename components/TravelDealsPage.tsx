
import React from 'react';
import { MOCK_TRAVEL_DEALS } from '../constants';
import { TravelDeal } from '../types';

const TravelDealCard: React.FC<{deal: TravelDeal}> = ({ deal }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <img src={deal.imageUrl} alt={`Travel to ${deal.to}`} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-slate-500">{deal.from}</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <p className="text-sm text-slate-500">{deal.to}</p>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{deal.to}</h3>
        <p className="text-xs text-slate-500 mb-4">Departure: {deal.departureDate}</p>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-extrabold text-blue-600">${deal.price}</p>
          <a href="#" className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};


const TravelDealsPage: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Today's Top Travel Deals
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Explore our curated list of the best flight deals available right now. Book your next adventure for less!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {MOCK_TRAVEL_DEALS.map(deal => (
            <TravelDealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelDealsPage;