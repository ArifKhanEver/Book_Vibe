import React, { createContext, useState } from 'react';

export const BookContext = createContext();


const BookProvider = ({children}) => {

    const [markedBooks, setMarkedBooks] = useState([]);

    const handleMarkAsRead = (currentBook)=> {

        const isExistBook = markedBooks.find(book=> book.bookId == currentBook.bookId);

        if(isExistBook){
            alert('The Book is already in the list');
        }else {
            setMarkedBooks([...markedBooks, currentBook])
            alert(`${currentBook.bookName} is added to the Read List`)
        }
        console.log(currentBook)
    }

    console.log(markedBooks)

    const data = {
        markedBooks,
        setMarkedBooks,
        handleMarkAsRead
    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};



export default BookProvider;