import React from 'react';
import { Article, Page } from '../types';
import { MOCK_ARTICLES } from '../constants';

interface BlogPreviewProps {
    onViewArticle: (article: Article) => void;
    onNavClick: (page: Page) => void;
}

const ArticleCard: React.FC<{article: Article, onViewArticle: (article: Article) => void}> = ({ article, onViewArticle }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
      onClick={() => onViewArticle(article)}
    >
      <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-sm text-slate-500 mb-2">{article.publishDate}</p>
        <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">{article.title}</h3>
        <p className="text-slate-600 text-sm mb-4">{article.excerpt}</p>
        <button 
            className="font-semibold text-blue-600 group-hover:text-blue-800 transition-colors duration-300"
        >
          Read More &rarr;
        </button>
      </div>
    </div>
  );
};

const BlogPreview: React.FC<BlogPreviewProps> = ({ onViewArticle, onNavClick }) => {
  const previewArticles = MOCK_ARTICLES.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Our Blog
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Get the latest tips, tricks, and inspiration for your next budget-friendly adventure.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewArticles.map(article => (
            <ArticleCard key={article.id} article={article} onViewArticle={onViewArticle} />
          ))}
        </div>
        <div className="mt-12 text-center">
            <button
                onClick={() => onNavClick('Blog')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
                View All Articles
            </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;