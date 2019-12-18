// Question 03: Find a book
// Find out section where book is located based on subject. Then find book within section.

function findABook(sectionNumber, title) {
  const bookshelfArray = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  let bookshelf = null;
  const books = ['A book', 'Second Book', 'Third Book'];
  for(let i = 0; i < bookshelfArray.length; i++) {
    if(sectionNumber === bookshelfArray[i]) bookshelf = bookshelfArray[i];
  }
  for(let i = 0; i < books.length; i++) {
    if(title === books[i]) return [i];
  }
}

findABook(200, 'A book');