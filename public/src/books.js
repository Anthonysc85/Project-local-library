const findAuthorById = (authors, id) => {
  for (let i = 0; i < authors.length;i++){
   if (authors[i].id === id){
     return authors[i];
   }
 }
}

const findBookById = (books, id) => {
 for (let i = 0; i < books.length; i++) {
   if (books[i].id === id) {
     return books[i];
   }
 }
}

const partitionBooksByBorrowedStatus = (books) => {
 let array = [];
 let borrowedBooks = books.filter((book) => book.borrows[0].returned === false);
   array.push(borrowedBooks);
 let returned = books.filter((books) => books.borrows[0].returned === true);
   array.push(returned)
 return array
}

const getBorrowersForBook = (book, accounts) => {
 let borrowers = [];
 accounts.forEach((account) => (book.borrows.forEach((transaction) => {
   if(transaction.id === account.id){
     let accountObj = {...account};
     accountObj.returned = transaction.returned;
     borrowers.push(accountObj);
   }
 })))
 return borrowers.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
