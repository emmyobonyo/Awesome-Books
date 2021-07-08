const bookList = document.querySelector('.book-list');
const form = document.querySelector('.form');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const date = new Date();
const day = date.getDay();
const dates = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
document.getElementById(
  'date'
).innerHTML = `${days[day]} ${dates}th ${months[month]} ${year}`;

const books = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  listItem() {
    const list = document.createElement('li');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const removeBtn = document.createElement('button');
    const div = document.createElement('div');
    div.className = 'div-flex';
    removeBtn.innerHTML = 'remove';
    title.innerHTML = this.title;
    author.innerHTML = ` by  ${this.author}`;
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
  const TheBook = new Book(titleInput.value, authorInput.value);
  books.push(TheBook);
  TheBook.listItem(TheBook.title, TheBook.author);
  localStorage.setItem('book', JSON.stringify(books));
  titleInput.value = '';
  authorInput.value = '';
});
const localList = JSON.parse(localStorage.getItem('book'));

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
    author.innerHTML = ` by  ${book.author}`;
    div.appendChild(title);
    div.appendChild(author);
    list.appendChild(div);
    list.appendChild(removeBtn);
    bookList.appendChild(list);
    removeBtn.addEventListener('click', () => {
      bookList.removeChild(list);
      localStorage.removeItem('book');
    });
  });
}
function listItemsNone() {
  document.getElementById('list-items').style.display = 'block';
  document.getElementById('forms').style.display = 'none';
  document.getElementById('contact-info').style.display = 'none';
}

function addNewNone() {
  document.getElementById('list-items').style.display = 'none';
  document.getElementById('forms').style.display = 'block';
  document.getElementById('contact-info').style.display = 'none';
}

function contactNone() {
  document.getElementById('list-items').style.display = 'none';
  document.getElementById('forms').style.display = 'none';
  document.getElementById('contact-info').style.display = 'block';
}

listItemsNone();
addNewNone();
contactNone();
