
import React from 'react';
import { Article } from '../types';

interface BlogPageProps {
  articles: Article[];
  onViewArticle: (article: Article) => void;
}

const BlogCard: React.FC<{ article: Article, onViewArticle: (article: Article) => void }> = ({ article, onViewArticle }) => (
    <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group cursor-pointer flex flex-col"
        onClick={() => onViewArticle(article)}
    >
        <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm text-slate-500 mb-2">{article.publishDate}</p>
            <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">{article.title}</h3>
            <p className="text-slate-600 text-sm mb-4 flex-grow">{article.excerpt}</p>
            <button 
                onClick={() => onViewArticle(article)}
                className="font-semibold text-blue-600 group-hover:text-blue-800 transition-colors duration-300 self-start"
            >
                Read More &rarr;
            </button>
        </div>
    </div>
);


const BlogPage: React.FC<BlogPageProps> = ({ articles, onViewArticle }) => {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            The Cheaptic Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Your source for budget travel tips, destination guides, and inspiration.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {articles.map(article => (
            <BlogCard key={article.id} article={article} onViewArticle={onViewArticle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
