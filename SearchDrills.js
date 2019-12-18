// Question 03: Find a book
// Find out section where book is located based on subject. Then find book within section. 
// Searching linearly because I can't walk logarithmically IRL.

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

function findABook(library, searchDewey, searchTitle) {
  for(let i = 0; i < library.length; i++) {
    if(searchDewey < library[i].dewey) return 'Book not found';
    if(searchDewey === library[i].dewey) {
      if(searchTitle === library[i].title) return 'Book found!';
    }
  }
  return 'Book not found';
}

// console.log(findABook(library, '005.44684', 'Will return not found'));
// console.log(findABook(library, '220.52081', 'Windows Vista for Dummies'));