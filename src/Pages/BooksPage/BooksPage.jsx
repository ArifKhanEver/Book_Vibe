import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import ListedBook from './ListedBook';

const BooksPage = () => {

    const {markedBooks} = useContext(BookContext);
    console.log("listedBooks",markedBooks)
    return (
        <div className="container mx-auto px-6 py-10">
        {/* Header Title */}
            <div className="bg-[#1313130d] rounded-2xl py-8 mb-8">
                <h1 className="text-3xl font-bold text-center text-[#131313]">Books</h1>
            </div>

            {/* Sort Dropdown */}
            <div className="flex justify-center mb-12">
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-white px-8 hover:bg-[#1fa808] border-none text-lg">
                        Sort By <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>

            {/* Tabs Section */}
            <div role="tablist" className="tabs tabs-lifted justify-start mb-8">
                <a role="tab" className="tab tab-active [--tab-bg:white] [--tab-border-color:#1313134D] text-[#131313CC] text-lg">Read Books</a>
                <a role="tab" className="tab text-[#13131380] text-lg border-b border-[#1313134D]">Wishlist Books</a>
            </div>

            {/* Horizontal Book Card */}
            <div className="flex flex-col gap-6">

            {
                markedBooks.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)
            }

            </div>
        </div>
    );
};

export default BooksPage;