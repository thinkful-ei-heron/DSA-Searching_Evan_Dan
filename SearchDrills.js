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
  { author: 'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: "Jane's Fighting Ships" },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

function findABook(library, searchDewey, searchTitle) {
  for (let i = 0; i < library.length; i++) {
    if (searchDewey < library[i].dewey) return 'Book not found';
    if (searchDewey === library[i].dewey) {
      if (searchTitle === library[i].title) return 'Book found!';
    }
  }
  return 'Book not found';
}

// console.log(findABook(library, '005.44684', 'Will return not found'));
// console.log(findABook(library, '220.52081', 'Windows Vista for Dummies'));

//Question 5:

let BinarySearchTree = require('./BST');

function preOrder(bst) {
  console.log(bst.key);
  if (bst.left) preOrder(bst.left);
  if (bst.right) preOrder(bst.right);
}

function inOrder(bst) {
  if (bst.left) inOrder(bst.left);
  console.log(bst.key);
  if (bst.right) inOrder(bst.right);
}

function postOrder(bst) {
  if (bst.left) postOrder(bst.left);
  if (bst.right) postOrder(bst.right);
  console.log(bst.key);
}

function main() {
  const bst = new BinarySearchTree();
  bst.insert(25);
  bst.insert(15);
  bst.insert(50);
  bst.insert(10);
  bst.insert(24);
  bst.insert(35);
  bst.insert(70);
  bst.insert(4);
  bst.insert(12);
  bst.insert(18);
  bst.insert(31);
  bst.insert(44);
  bst.insert(66);
  bst.insert(90);
  bst.insert(22);

  //preOrder(bst);
  //inOrder(bst);
  postOrder(bst);
}

// main();


// Question 06: Find the next commanding officer
let Queue = require('./Queue');

function starTrekkie(BST) {
  let values = [];
  const queue = new Queue;
  queue.enqueue(BST);
  while (queue.first) {
    let node = queue.dequeue();
    values.push(node.value);
    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }
  return values;
}

function starTrekBST() {
  const trekBST = new BinarySearchTree();
  trekBST.insert(10, 'Captain Picard');
  trekBST.insert(6, 'Commander Riker');
  trekBST.insert(5, 'Lt. Cmdr. Worf');
  trekBST.insert(4, 'Lietuenant security Officer');
  trekBST.insert(7, 'Lt. Cmdr. LaForge');
  trekBST.insert(11, 'Commander Data');
  trekBST.insert(13, 'Lt. Cmdr. Crusher');
  trekBST.insert(12, 'Lieutenant Selar');
  console.log(starTrekkie(trekBST));
}

// starTrekBST();


// Question 07: Max Profit

const companyShares = [128, 97, 121, 123, 98, 97, 105];

//Buy 97, sell 123
function maxProfit(companyShares) {
  //iterate through buy prices
  let maxPrice = Number.NEGATIVE_INFINITY;
  for(let i=0; i<companyShares.length; i++) {
    for(let k=i+1; k<companyShares.length; k++) {
      let result = companyShares[k] - companyShares[i];
      if(result > maxPrice) maxPrice = result;
    }
  }
  return maxPrice;
}

console.log(maxProfit(companyShares));