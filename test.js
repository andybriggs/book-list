var assert = require('assert');
var app;
before(function() {
  app = require('./public/books.js');
  console.log(app);
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
