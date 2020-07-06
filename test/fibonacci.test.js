var fibonacci = require("../fibonacci")
var expect = require('chai').expect;

describe('fibonacci test', function () {
  it('fibonacci(10)', function () {
    expect(fibonacci(10)).to.be.deep.equal(55)
  });

  it('fibonacci(1)', function () {
    expect(fibonacci(1)).to.be.deep.equal(1)
  });

  it('fibonacci(2)', function () {
    expect(fibonacci(2)).to.be.deep.equal(1)
  })

})