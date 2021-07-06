// Assigning variables to sections in the HTML
const bookList = document.querySelector('.book-list');
const form = document.querySelector('.form');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.add-btn');
const removeBtn = document.createElement('button');
const li = document.createElement('li');

let books = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.addBook = function () {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const title = document.createElement('p');
      const author = document.createElement('p');
      title.innerHTML = titleInput.value;
      author.innerHTML = authorInput.value;
      removeBtn.innerHTML = 'Remove';
      li.appendChild(title);
      li.appendChild(author);
      li.appendChild(removeBtn);
      bookList.appendChild(li);
      localStorage.setItem('book', JSON.stringify(books));
      titleInput.value = '';
      authorInput.value = '';
    });
  }
  this.removeBook = function() {
    removeBtn.addEventListener('click', function () {
      bookList.removeChild(li);
      localStorage.removeItem('book');
    });
  };
}
textBook = new Book(titleInput, authorInput);
textBook.addBook();
textBook.removeBook();

// let localList = JSON.parse(localStorage.getItem('book'));

// if (localStorage.length > 0) {
//   localList.forEach((book) => {
//     const li = document.createElement('li');
//     const title = document.createElement('p');
//     const author = document.createElement('p');
//     const removeBtn = document.createElement('button');
//     removeBtn.innerHTML = 'remove';
//     title.innerHTML = book.title;
//     author.innerHTML = book.author;
//     li.appendChild(title);
//     li.appendChild(author);
//     li.appendChild(removeBtn);
//     bookList.appendChild(li);
//     removeBtn.addEventListener('click', function () {
//       bookList.removeChild(li);
//       localStorage.removeItem('book');
//     });
//   });
// }

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const li = document.createElement('li');
//   const title = document.createElement('p');
//   const author = document.createElement('p');
//   const removeBtn = document.createElement('button');
//   const theBook = new book(titleInput.value, authorInput.value);
//   books.push(theBook);
//   removeBtn.innerHTML = 'remove';
//   title.innerHTML = theBook.title;
//   author.innerHTML = theBook.author;
//   li.appendChild(title);
//   li.appendChild(author);
//   li.appendChild(removeBtn);
//   bookList.appendChild(li);
//   localStorage.setItem('book', JSON.stringify(books));
//   titleInput.value = '';
//   authorInput.value = '';
//   removeBtn.addEventListener('click', function () {
//     bookList.removeChild(li);
//     localStorage.removeItem('book');
//   });
// });
