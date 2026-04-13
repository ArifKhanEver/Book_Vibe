
const getReadListsFromLocalDB =()=> {
    const allLocalReadList = localStorage.getItem('readList');
    if(allLocalReadList) {
        return JSON.parse(allLocalReadList);
    }
    return [];
}

const getWishListsFromLocalDB =()=> {
    const allLocalWishList = localStorage.getItem('wishList');
    if(allLocalWishList) {
        return JSON.parse(allLocalWishList);
    }
    return [];
}

const addReadListToLocalDB =(book)=>{
    const allLocalReadBooks = getReadListsFromLocalDB();

    const isAlreadyExist = allLocalReadBooks.find(bk => bk.bookId == book.bookId)

    if(!isAlreadyExist) {
        allLocalReadBooks.push(book)
        localStorage.setItem("readList", JSON.stringify(allLocalReadBooks))
    }
}

const addWishListToLocalDB =(book)=>{
    const allLocalWishBooks = getWishListsFromLocalDB();

    const isAlreadyExist = allLocalWishBooks.find(bk => bk.bookId == book.bookId)

    if(!isAlreadyExist) {
        allLocalWishBooks.push(book)
        localStorage.setItem("wishList", JSON.stringify(allLocalWishBooks))
    }
}

export {getReadListsFromLocalDB, addReadListToLocalDB,getWishListsFromLocalDB, addWishListToLocalDB}