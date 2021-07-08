const bookList = document.querySelector('.book-list');
const form = document.querySelector('.form');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');

let books = [];

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
    const div = document.createElement('div');
    div.className = 'div-flex';
    removeBtn.innerHTML = 'remove';
    title.innerHTML = titleName;
    author.innerHTML = ' by ' + authorName;
    div.appendChild(title);
    div.appendChild(author);
    list.appendChild(div);
    list.appendChild(removeBtn);
    bookList.appendChild(list);
    titleInput.value = '';
    authorInput.value = '';
    removeBtn.addEventListener('click', function () {
      bookList.removeChild(list);
    });
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const theBook = new book(titleInput.value, authorInput.value);
  books.push(theBook);
  theBook.listItem(theBook.title, theBook.author);

  localStorage.setItem('book', JSON.stringify(books));
  titleInput.value = '';
  authorInput.value = '';
});
let localList = JSON.parse(localStorage.getItem('book'));

if (localStorage.length > 0) {
  localList.forEach((book) => {
    const list = document.createElement('li');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const removeBtn = document.createElement('button');
    const div = document.createElement('div');
    div.className = 'div-flex';
    removeBtn.innerHTML = 'remove';
    title.innerHTML = book.title;
    author.innerHTML = ' by ' + book.author;
    div.appendChild(title);
    div.appendChild(author);
    list.appendChild(div);
    list.appendChild(removeBtn);
    bookList.appendChild(list);
    removeBtn.addEventListener('click', function () {
      bookList.removeChild(list);
      localStorage.removeItem('book');
    });
  });
}

list.addEventListener('click', () => {
  form.classList.add('display-non');
  bookList.classList.toggle('display-block');
});

addNew.addEventListener('click', () => {
  bookList.classList.add('display-non');
  form.classList.toggle('display-block');
});
