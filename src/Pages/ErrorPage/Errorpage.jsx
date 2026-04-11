import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
            {/* Minimalist Graphic Area */}
            <div className="relative">
                <h1 className="text-[12rem] font-black text-gray-100 leading-none select-none">
                    404
                </h1>
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-gray-800 whitespace-nowrap">
                    Oops! Page not found
                </p>
            </div>

            {/* Message Area */}
            <div className="text-center mt-4">
                <p className="text-gray-500 max-w-sm mx-auto mb-10">
                    The page you are looking for might have been removed, 
                    had its name changed, or is temporarily unavailable.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                        onClick={() => navigate('/')}
                        className="w-full sm:w-auto px-8 py-3 bg-black text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition-all duration-300"
                    >
                        Go to Homepage
                    </button>
                    
                    <button 
                        onClick={() => navigate(-1)}
                        className="w-full sm:w-auto px-8 py-3 border border-gray-200 text-gray-600 text-sm font-bold uppercase tracking-widest rounded-full hover:bg-gray-50 transition-all duration-300"
                    >
                        Go Back
                    </button>
                </div>
            </div>

            {/* Decorative Element */}
            <div className="fixed bottom-10 text-gray-300 text-xs tracking-widest uppercase">
                &copy; {new Date().getFullYear()} Book Vibe™
            </div>
        </div>
    );
};

export default ErrorPage;