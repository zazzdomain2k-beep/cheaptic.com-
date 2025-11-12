import React, { useState, useCallback, useRef } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import ArticlePage from './components/ArticlePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import Footer from './components/Footer';
import { Page, Article } from './types';
import { MOCK_ARTICLES } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<'Home' | 'Blog' | 'Article' | 'Privacy' | 'Terms'>('Home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  
  const pageRefs = {
    Home: useRef<HTMLDivElement>(null),
    'Travel Deals': useRef<HTMLDivElement>(null),
    Destinations: useRef<HTMLDivElement>(null),
    'AI Tips': useRef<HTMLDivElement>(null),
    Blog: useRef<HTMLDivElement>(null),
    'About Us': useRef<HTMLDivElement>(null),
    Contact: useRef<HTMLDivElement>(null),
  };

  const handleNavClick = useCallback((page: Page) => {
    if (page === 'Blog') {
      setView('Blog');
      setSelectedArticle(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'Privacy Policy') {
      setView('Privacy');
      setSelectedArticle(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'Terms of Service') {
      setView('Terms');
      setSelectedArticle(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setView('Home');
      setSelectedArticle(null);
      // Ensures the DOM is updated before trying to scroll
      setTimeout(() => {
        let ref;
        switch(page) {
          case 'Home':
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
          case 'Travel Deals': ref = pageRefs['Travel Deals']; break;
          case 'Destinations': ref = pageRefs.Destinations; break;
          case 'AI Tips': ref = pageRefs['AI Tips']; break;
          case 'About Us': ref = pageRefs['About Us']; break;
          case 'Contact': ref = pageRefs.Contact; break;
          default: ref = pageRefs.Home;
        }
        
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
  }, [pageRefs]);

  const handleViewArticle = (article: Article) => {
    setSelectedArticle(article);
    setView('Article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    setView('Blog');
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const renderContent = () => {
    switch (view) {
      case 'Article':
        return selectedArticle ? <ArticlePage article={selectedArticle} onBack={handleBackToBlog} /> : <BlogPage articles={MOCK_ARTICLES} onViewArticle={handleViewArticle} />;
      case 'Blog':
        return <BlogPage articles={MOCK_ARTICLES} onViewArticle={handleViewArticle} />;
      case 'Privacy':
        return <PrivacyPolicyPage />;
      case 'Terms':
        return <TermsOfServicePage />;
      case 'Home':
      default:
        return <HomePage pageRefs={pageRefs} onViewArticle={handleViewArticle} />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Header onNavClick={handleNavClick} />
      <main>
        {renderContent()}
      </main>
      <Footer onNavClick={handleNavClick} />
    </div>
  );
};

export default App;