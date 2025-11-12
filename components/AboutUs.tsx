
import React from 'react';
import { GlobeAltIcon, CurrencyDollarIcon, HeartIcon } from '../constants';

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Mission
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              Making world travel accessible to everyone, regardless of budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                <GlobeAltIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Explore More</h3>
              <p className="text-slate-600">
                We believe travel broadens the mind. Our platform is designed to help you discover new places and cultures without breaking the bank.
              </p>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                <CurrencyDollarIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Save Smart</h3>
              <p className="text-slate-600">
                Using smart technology, we find the best deals on flights, ensuring you get the most value for your money on every trip.
              </p>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                <HeartIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Travel Simply</h3>
              <p className="text-slate-600">
                Booking travel should be easy. We focus on a clean, intuitive user experience so you can book your next adventure with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
