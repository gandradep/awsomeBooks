import { BookTemplate } from './bookTemplate.js';

export const inputTitle = document.getElementById('title');
export const inputAuthor = document.getElementById('author');
export const bookInfo = document.getElementById('bookInfo');
let btnList = [];

export class BookList {
  constructor() {
    this.bookArray = [];
  }

  addBook = (title, author) => {
    const bookAdded = new BookTemplate(title, author);
    this.bookArray.push(bookAdded);
    localStorage.setItem('BookLibrary', JSON.stringify(this.bookArray));
    inputTitle.value = '';
    inputAuthor.value = '';
  }

  displayBookList = () => {
    if (localStorage.getItem('BookLibrary') !== null) {
      this.bookArray = JSON.parse(localStorage.getItem('BookLibrary'));
    }
    bookInfo.innerText = '';
    this.bookArray.forEach((item) => {
      const container = document.createElement('div');
      container.classList = 'dFlex container paddingStart';
      if (this.bookArray.indexOf(item) % 2 === 0) {
        container.classList.add('bgGray');
      }
      const p = document.createElement('p');
      const titleHtml = document.createElement('span');
      const by = document.createElement('span');
      by.innerText = ' by ';
      const authorHtml = document.createElement('span');
      const remove = document.createElement('button');
      remove.classList = 'button';
      titleHtml.innerText = item.title;
      authorHtml.innerText = item.author;
      remove.innerText = 'Remove!';
      p.append(titleHtml, by, authorHtml);
      container.append(p, remove);
      bookInfo.append(container);
    });
    btnList = Array.from(document.querySelectorAll('button'));
  }

  removeList = (index) => {
    this.bookArray.splice(btnList.indexOf(index), 1);
    localStorage.setItem('BookLibrary', JSON.stringify(this.bookArray));
    this.displayBookList();
  }
}
