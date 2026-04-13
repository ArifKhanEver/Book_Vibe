import React, { createContext, useState } from 'react';
import { Flip, toast } from 'react-toastify';
import { addReadListToLocalDB, addWishListToLocalDB, getReadListsFromLocalDB, getWishListsFromLocalDB } from '../Utilities/LocalDB';

export const BookContext = createContext();


const BookProvider = ({children}) => {

    const [markedBooks, setMarkedBooks] = useState(getReadListsFromLocalDB());
    const [wishedBooks, setWishedBooks] = useState(getWishListsFromLocalDB());


    const handleMarkAsRead = (currentBook)=> {

        const isExistBook = markedBooks.find(book=> book.bookId == currentBook.bookId);

        addReadListToLocalDB(currentBook);

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

        addWishListToLocalDB(currentBook);

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
        handleMarkAsRead,
        wishedBooks,
        handleWishedBooks
    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;