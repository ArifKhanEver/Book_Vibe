import React, { useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BookContext } from '../../Context/BookProvider';
import ListedBook from './ListedBook';

const BooksPage = () => {

    const {markedBooks,wishedBooks} = useContext(BookContext);
    const [sortingType, setSortingType] = useState('')

    let filteredReadList = markedBooks;
    let filteredWishList = wishedBooks;

    if(sortingType === 'Rating'){
        filteredReadList = [...markedBooks].sort((a,b)=> a.rating - b.rating);
        filteredWishList = [...wishedBooks].sort((a,b)=> a.rating - b.rating);
    }else if(sortingType === 'Pages'){
        filteredReadList = [...markedBooks].sort((a,b)=> a.totalPages - b.totalPages);
        filteredWishList = [...wishedBooks].sort((a,b)=> a.totalPages - b.totalPages);
    }else if(sortingType === 'Year of Published'){
        filteredReadList = [...markedBooks].sort((a,b)=> a.yearOfPublishing - b.yearOfPublishing);
        filteredWishList = [...wishedBooks].sort((a,b)=> a.yearOfPublishing - b.yearOfPublishing);
    }

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
                        Sort By {sortingType} <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                        <li><a onClick={()=>setSortingType('Rating')}>Rating</a></li>
                        <li><a onClick={()=>setSortingType('Pages')}>Number of pages</a></li>
                        <li><a onClick={()=>setSortingType('Year of Published')}>Year of Published</a></li>
                    </ul>
                </div>
            </div>

            {/* Tabs Section */}
            
            <Tabs>
                <TabList>
                    <Tab><a role="tab" className=" text-[#13131380] text-lg">Read Books</a></Tab>
                    <Tab><a role="tab" className=" text-[#13131380] text-lg">Wishlist Books</a></Tab>
                </TabList>

                <TabPanel>
                    <div className="flex flex-col gap-6 mt-8">

                    {
                        markedBooks.length == 0? <h1 className='h-[50vh] bg-gray-100 grid place-content-center text-3xl font-semibold text-gray-500 rounded-2xl'>No Read list data Found </h1>: sortingType !== ""? filteredReadList.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>) : markedBooks.map((book,index) => <ListedBook key={index} book={book}></ListedBook>)
                    }

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex flex-col gap-6 mt-8">

                    {
                        wishedBooks.length == 0? <h1 className='h-[50vh] bg-gray-100 grid place-content-center text-3xl font-semibold text-gray-500 rounded-2xl'>No Wish list data Found </h1>: sortingType !== ""? filteredWishList.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>) : wishedBooks.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)
                    }

                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default BooksPage;