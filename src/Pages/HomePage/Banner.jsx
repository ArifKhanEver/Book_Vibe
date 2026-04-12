import React from 'react';
import { Link } from 'react-router';
import BannerImg from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="hero bg-[#1313130d] rounded-3xl min-h-[550px] mt-6 px-10 md:px-20 lg:px-32">
                    <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
                        
                        <div className="lg:w-1/3 flex justify-center lg:justify-end">
                            <img
                                src={BannerImg} 
                                className="max-w-xs md:max-w-sm rounded-lg"
                                alt="Book Cover"
                            />
                        </div>

                        <div className="lg:w-2/3">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#131313] leading-tight mb-8">
                                Books to freshen up <br className="hidden md:block" /> your bookshelf
                            </h1>
                            
                            <Link to="/listed-books">
                                <button className="btn bg-[#23BE0A] hover:bg-[#1fa808] text-white px-7 py-4 h-auto text-lg font-bold border-none rounded-lg capitalize">
                                    View The List
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;