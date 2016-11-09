'use strict';

var booksApp = {};

booksApp.getBooks = function(q) {
  var request = new XMLHttpRequest(),
  _this = this;
  request.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=' + q + '&maxResults=20&orderBy=newest', true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      _this.createBookList(data.items);
    } else {
      console.log('something went wrong');
    }
  };
  request.onerror = function() {
    console.log('Something went wrong');
  };
  request.send();
};

booksApp.createBookList = function(books){
  var newList = document.createElement('ul');

  for (var i = 0; i < books.length; i++) {
    var book = this.createBook(books[i]);
    var row = this.createBookRow(book.title, book.description, book.thm, book.alt);
    newList.appendChild(row);
  };
  document.getElementById('app').appendChild(newList);
};

booksApp.createBookRow = function(title, description, imgSrc, alt) {
  var listItem = document.createElement('li'),
  summary = this.createSummary(description, 200);

  var bookContainer = document.createElement('article'),
  bookTitle = document.createElement('h1'),
  bookDscr = document.createElement('p'),
  bookThm = document.createElement('img');

  bookTitle.appendChild(document.createTextNode(title));
  bookDscr.appendChild(document.createTextNode(summary));
  bookThm.setAttribute('src', imgSrc);
  bookThm.setAttribute('alt', alt);

  listItem.appendChild(bookContainer);
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookThm);
  bookContainer.appendChild(bookDscr);
  return listItem;
};

booksApp.createBook = function(book) {
  return {
    title: book.volumeInfo.title,
    description: book.volumeInfo.description,
    thm: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : './no-image.jpg',
    alt: book.volumeInfo.imageLinks ? book.volumeInfo.title + ' cover' : 'No cover available'
  }
};

booksApp.createSummary = function(description, charCount) {
  var summary = description.substring(0, charCount) + '...';
  return summary;
};

booksApp.getBooks("javascript");
