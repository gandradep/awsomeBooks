import { upDate } from './modules/date.js';

import * as nav from './modules/displayListPage.js';

import * as modBook from './modules/bookList.js';

const myBookList = new modBook.BookList();
const form = document.getElementById('form');

/* setting date */
const date = document.getElementById('dateTime');
const refreshDate = () => {
  date.innerText = upDate();
};
setInterval(refreshDate, 1000);

/* page navegation events */
nav.addLink.addEventListener('click', () => {
  nav.addPage.classList = 'displayBlock';
  nav.listPage.classList = 'displayNone';
  nav.contactPage.classList = 'displayNone';
});
nav.contactLink.addEventListener('click', () => {
  nav.addPage.classList = 'displayNone';
  nav.listPage.classList = 'displayNone';
  nav.contactPage.classList = 'displayBlock';
});
nav.listLink.addEventListener('click', () => {
  nav.addPage.classList = 'displayNone';
  nav.listPage.classList = 'displayBlock';
  nav.contactPage.classList = 'displayNone';
});

/* manage book list */
myBookList.displayBookList();
form.addEventListener('submit', (event) => {
  event.preventDefault();
  myBookList.addBook(modBook.inputTitle.value, modBook.inputAuthor.value);
  myBookList.displayBookList();
  // myBookList.removeList();
});
modBook.bookInfo.addEventListener('click', (e) => {
  if (e.target.classList.contains('button')) {
    myBookList.removeList(e.target);
  }
});
