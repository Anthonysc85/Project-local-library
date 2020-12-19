const findAccountById = (accounts, id) => {
  for(let i = 0; i < accounts.length; i++) {
    if(accounts[i].id === id){
      return accounts[i];
    }
  }
  
  }
  
                                    
                                    

const sortAccountsByLastName = (accounts) => {
  return accounts.sort((accountA, accountB) => accountA.name.last < accountB.name.last ? -1 : 1);
}

const numberOfBorrows = (account, books) => {
  let borrows = 0;
  for ( let key in books) {
    let bookObj = books[key]
    const borrowed = bookObj.borrows.filter((book) => book.id === account.id).length;
    borrows += borrowed
  }
  return borrows
}

const booksInPossession = (account, books, authors) => {
  let possessed = [];
  for (let key in books) {
    let bookObj = books[key];
    let booksPossessed = bookObj.borrows.some((book) => (book.id === account.id && book.returned === false));
    if (booksPossessed) {
      bookObj.author = authors.find((author) => author.id === bookObj.authorId)
      possessed.push(bookObj);
    }
  }
  return possessed;
  
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
