
import React, { useState, useCallback } from 'react';
import { generateTravelTip } from '../services/geminiService';
import { SparklesIcon } from '../constants';

const GeminiTravelTips: React.FC = () => {
  const [topic, setTopic] = useState<string>('packing light');
  const [tip, setTip] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const quickTopics = ['finding cheap food', 'budget accommodation', 'free city activities', 'saving on flights'];

  const handleGenerateTip = useCallback(async (currentTopic: string) => {
    if (!currentTopic.trim()) {
      setError('Please enter a topic.');
      return;
    }
    setIsLoading(true);
    setError('');
    setTip('');
    try {
      const generatedTip = await generateTravelTip(currentTopic);
      setTip(generatedTip);
    } catch (e) {
      setError('An unexpected error occurred.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleGenerateTip(topic);
  }

  return (
    <section className="py-16 sm:py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-3">
            <SparklesIcon className="w-8 h-8 text-blue-500" />
            AI-Powered Travel Tips
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Get instant, smart advice for your budget travel questions.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., packing light"
              className="flex-grow w-full px-4 py-3 bg-slate-100 text-slate-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-colors duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Generating...' : 'Get Tip'}
            </button>
          </form>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {quickTopics.map(qt => (
                <button key={qt} onClick={() => {setTopic(qt); handleGenerateTip(qt);}} className="text-xs bg-slate-200 hover:bg-blue-100 text-slate-700 font-medium py-1 px-3 rounded-full transition-colors">
                    {qt}
                </button>
            ))}
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}
          
          <div className="mt-6 min-h-[100px] bg-slate-50 p-6 rounded-lg prose prose-sm max-w-none prose-p:text-slate-600 prose-headings:text-slate-800">
            {isLoading && (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            )}
            {tip && !isLoading && (
              <div dangerouslySetInnerHTML={{ __html: tip.replace(/\n/g, '<br />') }} />
            )}
            {!tip && !isLoading && <p className="text-slate-400 text-center">Your travel tip will appear here...</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiTravelTips;
