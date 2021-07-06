// // Assigning variables to sections in the HTML
// const bookList = document.querySelector('.book-list');
// const form = document.querySelector('.form');
// const titleInput = document.querySelector('.title-input');
// const authorInput = document.querySelector('.author-input');
// const addBtn = document.querySelector('.add-btn');

// // let books = [];
// function Book(title, author) {
//   this.title = title;
//   this.author = author;
//   this.addBook = function () {
//     form.addEventListener('submit', function (e) {
//       e.preventDefault();
//       const li = document.createElement('li');
//       const title = document.createElement('p');
//       const author = document.createElement('p');
//       const removeBtn = document.createElement('button');
//       title.innerHTML = titleInput.value;
//       author.innerHTML = authorInput.value;
//       removeBtn.innerHTML = 'Remove';
//       li.appendChild(title);
//       li.appendChild(author);
//       li.appendChild(removeBtn);
//       bookList.appendChild(li);
//       // localStorage.setItem('book', JSON.stringify(books));
//       titleInput.value = '';
//       authorInput.value = '';
//       removeBtn.addEventListener('click', function () {
//         bookList.removeChild(li);
//         localStorage.removeItem('book');
//       });
//     });
//   };
// }
// textBook = new Book(titleInput, authorInput);
// textBook.addBook();

const bookList = document.querySelector('.book-list');
const form = document.querySelector('.form');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.add-btn');

class book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  listItem(titleName, authorName) {
    const list = document.createElement('li');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'remove';
    title.innerHTML = titleName;
    author.innerHTML = authorName;
    list.appendChild(title);
    list.appendChild(author);
    list.appendChild(removeBtn);
    bookList.appendChild(list);
    removeBtn.addEventListener('click', function () {
      bookList.removeChild(list);
      localStorage.removeItem('book');
    });
  }
}

let books = [];
let localList = JSON.parse(localStorage.getItem('book'));

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const theBook = new book(titleInput.value, authorInput.value);
  books.push(theBook);
  theBook.listItem(theBook.title, theBook.author);
  localStorage.setItem('book', JSON.stringify(books));
  titleInput.value = '';
  authorInput.value = '';
});

const listItem = (titleName, authorName) => {
  const list = document.createElement('li');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const removeBtn = document.createElement('button');
  removeBtn.innerHTML = 'remove';
  title.innerHTML = titleName;
  author.innerHTML = authorName;
  list.appendChild(title);
  list.appendChild(author);
  list.appendChild(removeBtn);
  bookList.appendChild(list);
  removeBtn.addEventListener('click', function () {
    bookList.removeChild(list);
    localStorage.removeItem('book');
  });
};

if (localStorage.length > 0) {
  localList.forEach((book) => {
    listItem(book.title, book.author);
  });
}
