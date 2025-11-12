import React from 'react';

interface LegalPageWrapperProps {
    title: string;
    children: React.ReactNode;
}

const LegalPageWrapper: React.FC<LegalPageWrapperProps> = ({ title, children }) => {
    return (
        <div className="bg-white py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-center mb-10">
                        {title}
                    </h1>
                    <div className="prose lg:prose-lg max-w-none prose-p:text-slate-700 prose-headings:text-slate-900">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalPageWrapper;
