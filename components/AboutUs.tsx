import React from 'react';
import { SparklesIcon, GlobeAltIcon } from '../constants';

const TeamMemberCard: React.FC<{ name: string; title: string; bio: string; imageUrl: string }> = ({ name, title, bio, imageUrl }) => (
    <div className="text-center">
        <img className="mx-auto h-32 w-32 rounded-full object-cover" src={imageUrl} alt={name} />
        <h3 className="mt-4 text-xl font-bold text-slate-800">{name}</h3>
        <p className="mt-1 text-blue-600 font-semibold">{title}</p>
        <p className="mt-2 text-slate-600">{bio}</p>
    </div>
);

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              About Cheaptic.com
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
              The future of budget travel, powered by passion and artificial intelligence.
            </p>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center flex items-center justify-center gap-2">
                <GlobeAltIcon className="w-7 h-7 text-blue-500" />
                Our Story
              </h3>
              <p className="text-slate-600 text-center max-w-3xl mx-auto">
                Founded in 2023 by a team of avid travelers, Cheaptic.com was born from a simple idea: everyone deserves to see the world. We were tired of the endless searching, confusing websites, and the feeling that great deals were always just out of reach. We knew there had to be a smarter, easier way to plan affordable adventures. That's why we built Cheaptic.com—a platform dedicated to making travel accessible, simple, and exciting for every budget-conscious traveler.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center flex items-center justify-center gap-2">
                <SparklesIcon className="w-7 h-7 text-blue-500" />
                The AI Advantage: How We Find Your Perfect Trip
              </h3>
              <p className="text-slate-600 text-center max-w-3xl mx-auto mb-4">
                Our secret sauce is technology. We leverage powerful artificial intelligence to scan through millions of data points on flights and destinations every day. Our smart algorithms identify patterns, predict price drops, and uncover hidden deals that other search engines miss. This means you spend less time searching and more time dreaming about your trip.
              </p>
              <p className="text-slate-600 text-center max-w-3xl mx-auto">
                This commitment to innovation is also behind our **AI-Powered Travel Tips** feature. We use Google's advanced Gemini model to provide you with instant, practical advice on everything from packing light to finding the best local food, giving you the knowledge of a seasoned traveler right at your fingertips.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                Meet the Team
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                <TeamMemberCard 
                  name="Alex Chen" 
                  title="Founder & CEO" 
                  bio="A lifelong backpacker who coded the first version of Cheaptic.com on a long bus ride through Vietnam. Alex is passionate about using tech to break down barriers to travel."
                  imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
                />
                <TeamMemberCard 
                  name="Maria Rodriguez" 
                  title="Head of Travel Content" 
                  bio="Maria has visited over 70 countries and curates our blog and destination guides. She believes the best stories are found off the beaten path."
                  imageUrl="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
                />
                <TeamMemberCard 
                  name="David Lee" 
                  title="Lead AI Engineer" 
                  bio="The brains behind our deal-finding algorithms. David is dedicated to building the smartest travel tools on the planet to help people save money."
                  imageUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;