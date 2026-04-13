import React, { use } from 'react';
import BookCard from './BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {

    const books = use(booksPromise)
    console.log(books)

    return (
        <div className='my-20 container mx-auto min-h-lvh'>
            <h2 className='font-bold text-3xl text-center'>Books</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>

                {
                    books.map((book,index) => <BookCard key={index} book={book}></BookCard>)
                }
            </div>

        </div>
    );
};

export default AllBooks;