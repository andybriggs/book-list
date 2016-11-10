var assert = require('assert');
var jsdom = require("jsdom");

global.document = jsdom.jsdom('./public/index.html');
global.window = document.defaultView;

describe('Book list app', function() {

  it('should return -1 when the value is not present', function() {
    assert.equal(-1, [1,2,3].indexOf(4));
    console.log(global.window);
  });

});
