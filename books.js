var bookList = {
  getBooks: function() {
    var request = new XMLHttpRequest(),
    _this = this;
    request.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=20&orderBy=newest', true);
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
  },
  createBookList: function(books) {
    var newList = document.createElement('ul');
    for (var i = 0; i < books.length; i++) {
      var listItem = document.createElement('li'),
      bookTitle = document.createElement('h2'),
      bookDscr = document.createElement('div');

      bookTitle.appendChild(document.createTextNode(books[i].volumeInfo.title));
      bookDscr.appendChild(document.createTextNode(books[i].volumeInfo.description));

      listItem.appendChild(bookTitle);
      listItem.appendChild(bookDscr);
      newList.appendChild(listItem);
    };
    document.getElementById('app').appendChild(newList);
  },
};

bookList.getBooks();
