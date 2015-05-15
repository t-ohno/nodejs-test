var expect = require('expect.js');
var calc = require('../calc.js');

describe('calc', function(){
  it('add', function(){
    expect(2).to.be(calc.add(1, 1));
  });
});
