import React from 'react';
import Hero from './Hero';
import TravelDeals from './TravelDeals';
import PopularDestinations from './PopularDestinations';
import GeminiTravelTips from './GeminiTravelTips';
import CalendarWidget from './CalendarWidget';
import Contact from './Contact';
import BlogPreview from './BlogPreview';
import { Article, Page } from '../types';

interface HomePageProps {
  pageRefs: { [key: string]: React.RefObject<HTMLDivElement> };
  onViewArticle: (article: Article) => void;
  onNavClick: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ pageRefs, onViewArticle, onNavClick }) => {
  return (
    <>
      <div ref={pageRefs.Home}>
        <Hero />
      </div>
      <div>
        <TravelDeals onNavClick={onNavClick} />
      </div>
      <div ref={pageRefs.Destinations}>
        <PopularDestinations />
      </div>
      <div ref={pageRefs['AI Tips']}>
        <GeminiTravelTips />
      </div>
      <CalendarWidget />
      <div ref={pageRefs.Blog}>
          <BlogPreview onViewArticle={onViewArticle} onNavClick={onNavClick} />
      </div>
      <div ref={pageRefs.Contact}>
        <Contact />
      </div>
    </>
  );
};

export default HomePage;