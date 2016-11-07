var request = new XMLHttpRequest();
request.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=javascript', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    console.log(data);
  } else {
    console.log('something went wrong');
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
