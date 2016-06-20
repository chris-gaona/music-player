'use strict';

var expect = require('chai').expect;
var Song = require('../js/song.js');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      expect([1,2,3].indexOf(5)).to.equal(-1);
      expect([1,2,3].indexOf(0)).to.equal(-1);
    });
  });
});

describe('Test function', function () {
  it('should return 0 if no items are passed in', function () {
    var summary = new Song([]);

    expect(summary.getTotal()).to.equal(0);
  });
});

describe('toHTML function', function () {
  it('should return a string with the song content', function () {
    var summary = new Song("Forgiven", "Jesus Culture", "https://placeimg.com/640/480/any", "songs/03 Forgiven.mp3");

    expect(summary.toHTML()).to.equal('<img src="https://placeimg.com/640/480/any"><p>Forgiven - <span>Jesus Culture</span></p>');
  });
});
