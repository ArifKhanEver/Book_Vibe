import React, { createContext, useState } from 'react';
  import { Flip, toast } from 'react-toastify';

export const BookContext = createContext();


const BookProvider = ({children}) => {

    const [markedBooks, setMarkedBooks] = useState([]);
    const [wishedBooks, setWishedBooks] = useState([]);

    const handleMarkAsRead = (currentBook)=> {

        const isExistBook = markedBooks.find(book=> book.bookId == currentBook.bookId);

        if(isExistBook){
            toast.error('The Book is already in the list',{
                transition: Flip,
                theme:"colored"
            });
        }else {
            setMarkedBooks([...markedBooks, currentBook])
            toast.success(`${currentBook.bookName} is added to the Read List`,{
                transition: Flip,
                theme:"colored"
            })
        }
    
    }


    const handleWishedBooks = (currentBook)=> {

        const isExistBook = wishedBooks.find(book=> book.bookId == currentBook.bookId);

        const existInMarked = markedBooks.find(book=> book.bookId == currentBook.bookId)


        if(existInMarked){
            toast.warning('This Book is Exist in the Read List',{
                transition: Flip,
                theme:"colored"
            })
            return;
        }

        if(isExistBook){
            toast.error('The Book is already in the wish list',{
                transition: Flip,
                theme:"colored"
            });
        }else {
            setWishedBooks([...wishedBooks, currentBook])
            toast.info(`${currentBook.bookName} is added to the Wish List`,{
                transition: Flip,
                theme:"colored"
            })
        }
    }


    const data = {
        markedBooks,
        setMarkedBooks,
        handleMarkAsRead,
        wishedBooks,
        setWishedBooks,
        handleWishedBooks
    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};



export default BookProvider;