
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Contact Us
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
          {submitted ? (
            <div className="text-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg" role="alert">
                <strong className="font-bold">Thank you!</strong>
                <span className="block sm:inline"> Your message has been sent successfully.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-3 bg-slate-100 border-transparent rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 bg-slate-100 border-transparent rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-4 py-3 bg-slate-100 border-transparent rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
