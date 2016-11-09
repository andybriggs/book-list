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

    var book = {
      title: books[i].volumeInfo.title,
      description: books[i].volumeInfo.description,
      thm: books[i].volumeInfo.imageLinks ? books[i].volumeInfo.imageLinks.smallThumbnail : './no-image.jpg'
    };

    var row = this.createBookRow(book.title, book.description, book.thm);
    newList.appendChild(row);

  };
  document.getElementById('app').appendChild(newList);
};

booksApp.createBookRow = function(title, description, imgSrc) {
  var listItem = document.createElement('li'),
  summary = this.createSummary(description, 200);

  bookContainer = document.createElement('article'),
  bookTitle = document.createElement('h1'),
  bookDscr = document.createElement('p'),
  bookThm = document.createElement('img');

  bookTitle.appendChild(document.createTextNode(title));
  bookDscr.appendChild(document.createTextNode(summary));
  bookThm.setAttribute('src', imgSrc);

  listItem.appendChild(bookContainer);
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookThm);
  bookContainer.appendChild(bookDscr);
  return listItem;
};

booksApp.createSummary = function(description, charCount) {
  var summary = description.substring(0, charCount) + '...';
  return summary;
};

booksApp.getBooks("javascript");
