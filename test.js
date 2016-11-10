var assert = require('assert'),
should = require('should'),
jsdom = require('jsdom'),
html = '<div id="app"></div>',
scripts = ['./public/books.js', './public/app.js'];

describe('Books App', function() {
  it('should return 20 books', function(){
    jsdom.env({
      html: html,
      scripts: scripts,
      url: 'http://localhost',
      done: function(err, window) {
        ("foo").should.be.exactly(5).and.be.a.Number();
        console.log(err);
        window.close();
      }
    });
  });
});
