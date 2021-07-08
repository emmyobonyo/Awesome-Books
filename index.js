const bookList = document.querySelector('.book-list');
const form = document.querySelector('.form');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');

const addNew = document.querySelector('.add-new');

const books = [];

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
    removeBtn.addEventListener('click', () => {
      bookList.removeChild(list);
    });
  }
}

form.addEventListener('submit', (e) => {
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
listItemsNone = () => {
  document.getElementById('list-items').style.display = 'block';
  document.getElementById('forms').style.display = 'none';
  document.getElementById('contact-info').style.display = 'none';
};

addNewNone = () => {
  document.getElementById('list-items').style.display = 'none';
  document.getElementById('forms').style.display = 'block';
  document.getElementById('contact-info').style.display = 'none';
};

contactNone = () => {
  document.getElementById('list-items').style.display = 'none';
  document.getElementById('forms').style.display = 'none';
  document.getElementById('contact-info').style.display = 'block';
};
