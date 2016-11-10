// Failed test setup
var jsdom = require('jsdom'),
should = require('should');

describe('Books App', function() {
  jsdom.env({
    html: '<body><div id="app"></div></body>',
    scripts: ['./public/books.js', './public/app.js'],
    done: function (err, window) {
      it('should have 20 list items', function(){
        (20).should.be.exactly(20);
      });
    }
  });
});
