
import React from 'react';
import Hero from './Hero';
import TravelDeals from './TravelDeals';
import PopularDestinations from './PopularDestinations';
import GeminiTravelTips from './GeminiTravelTips';
import CalendarWidget from './CalendarWidget';
import AboutUs from './AboutUs';
import Contact from './Contact';
import BlogPreview from './BlogPreview';
import { Article } from '../types';

interface HomePageProps {
  pageRefs: { [key: string]: React.RefObject<HTMLDivElement> };
  onViewArticle: (article: Article) => void;
}

const HomePage: React.FC<HomePageProps> = ({ pageRefs, onViewArticle }) => {
  return (
    <>
      <div ref={pageRefs.Home}>
        <Hero />
      </div>
      <div ref={pageRefs['Travel Deals']}>
        <TravelDeals />
      </div>
      <div ref={pageRefs.Destinations}>
        <PopularDestinations />
      </div>
      <div ref={pageRefs['AI Tips']}>
        <GeminiTravelTips />
      </div>
      <CalendarWidget />
      <div ref={pageRefs.Blog}>
          <BlogPreview onViewArticle={onViewArticle} />
      </div>
      <div ref={pageRefs['About Us']}>
        <AboutUs />
      </div>
      <div ref={pageRefs.Contact}>
        <Contact />
      </div>
    </>
  );
};

export default HomePage;