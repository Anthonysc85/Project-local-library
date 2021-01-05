const totalBooksCount = (books) => {
  return books.length;}


const totalAccountsCount = (accounts) => {
  return accounts.length;
}

const booksBorrowedCount = (books) => {
  let borrowed = 0;
  for(let i=0;i<books.length;i++){
    let borrow = books[i].borrows;
    for(let j =0;j<borrow.length;j++){
      let status = borrow[j].returned;
      if(status === false){
        borrowed++
      }
    }
  }
  return borrowed;
}

//Helper function for following functions
const splicer = (obj) => {
  return obj.splice(0, 5);
}

const getMostCommonGenres = (books) => {
  let genres = books.map((book) => book.genre)
    let genresList = Array.from(new Set(genres));
    let object = genresList.reduce((acc, genre1) => {
     let newObject = {name: genre1, count: books.reduce((count, book) => {
       if (book.genre === genre1) count++;
       return count;
    }, 0)};
    
    acc.push(newObject);
    return acc;
  }, []);
  let sorted = object.sort((first, second) => (second.count - first.count));
  return splicer(sorted);
  
}

const getMostPopularBooks = (books) => {
  let popBooks = [];
  for (let i = 0; i < books.length; i++) {
    let bookObj = {};
    bookObj.name = books[i].title;
    bookObj.count = books[i].borrows.length;
    popBooks.push(bookObj)
  }
  const list = popBooks.sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1);
  return splicer(list)
}

const getMostPopularAuthors = (books, authors) => {
  let arr = []
  //let author = {}
  for (let i=0;i<authors.length;i++){
    let author = {}
    author.name = `${authors[i].name.first} ${authors[i].name.last}`
    author.count = 0
    for (let j=0; j<books.length; j++){
      //let bookArr=[]
      if (books[j].authorId===authors[i].id){
        //bookArr.push(...books[j].borrows)
        author.count += books[j].borrows.length
      }
    }
    arr.push(author)
  }
  const final = arr.sort((auth1, auth2)=> auth1.count < auth2.count ? 1:-1)
  return splicer(final)
}


module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
