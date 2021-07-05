const bookList = document.querySelector('.book-list')
const form = document.querySelector('.form')
const titleInput = document.querySelector('.title-input')
const authorInput = document.querySelector('.author-input')
const addBtn = document.querySelector('.add-btn')

function book(title, author) {
    this.title = title
    this.author = author
}


form.addEventListener('submit', function(e) {
    e.preventDefault();
    const li = document.createElement('li')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const removeBtn = document.createElement('button')
    const theBook = new book(titleInput.value, authorInput.value)
    removeBtn.innerHTML = 'remove'
    title.innerHTML = theBook.title
    author.innerHTML = theBook.author
    li.appendChild(author)
    li.appendChild(title)
    li.appendChild(removeBtn)
    bookList.appendChild(li)
    titleInput.value = ''
    authorInput.value = ''
    localStorage.setItem('title',JSON.stringify(theBook.title))
    localStorage.setItem('author',JSON.stringify(theBook.author))
    removeBtn.addEventListener('click', function(e) {
        bookList.removeChild(li)
    })
    console.log(book);
})
console.log(localStorage);



