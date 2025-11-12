
import React from 'react';
import { Article } from '../types';

interface ArticlePageProps {
  article: Article;
  onBack: () => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article, onBack }) => {
  if (!article) {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-2xl font-bold">Article not found.</h1>
            <button
                onClick={onBack}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            >
                &larr; Back to Blog
            </button>
        </div>
    );
  }
  
  return (
    <article className="bg-white">
        <div className="w-full h-64 md:h-96 bg-slate-200">
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto py-12 sm:py-16">
                <button
                    onClick={onBack}
                    className="mb-8 font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                    &larr; Back to Blog
                </button>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                    {article.title}
                </h1>
                <p className="mt-4 text-slate-500">Published on {article.publishDate}</p>

                <div 
                    className="mt-8 prose lg:prose-lg max-w-none prose-p:text-slate-700 prose-headings:text-slate-900"
                    dangerouslySetInnerHTML={{ __html: article.content }} 
                />
            </div>
        </div>
    </article>
  );
};

export default ArticlePage;
