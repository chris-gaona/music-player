'use strict';

var expect = require('chai').expect;
var Song = require('../js/song.js');
var Playlist = require('../js/playlist.js');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      expect([1,2,3].indexOf(5)).to.equal(-1);
      expect([1,2,3].indexOf(0)).to.equal(-1);
    });
  });
});

describe('song.js', function () {
  describe('Test function', function () {
    it('should return 0 if no items are passed in', function () {
      var song = new Song([]);

      expect(song.getTotal()).to.equal(0);
    });
  });

  var song = new Song("Forgiven", "Jesus Culture", "https://placeimg.com/640/480/any", "songs/03 Forgiven.mp3");

  describe('toHTML function', function () {
    it('should return a string with the song content', function () {
      expect(song.toHTML()).to.equal('<img src="https://placeimg.com/640/480/any"><p>Forgiven - <span>Jesus Culture</span></p>');
    });
  });

  describe('addAudio function', function () {
    it('should return a string with the song to play in the audio tag', function () {
      expect(song.addAudio()).to.equal('<audio src="songs/03 Forgiven.mp3" id="audio-player" preload>Your browser does not support the audio element.</audio>')
    });
  });

  describe('addLyrics function', function () {
    it('should return a string with the song lyrics', function () {
      if (this.lyrics === undefined) {
        expect(song.addLyrics()).to.equal('<div class="lyrics">Hmmm...there aren\'t any words in this song I guess!</div>');
      } else {
        expect(song.addLyrics()).to.equal('<div class="lyrics">lyrics</div>');
      }
    });
  });
});

var playlist = new Playlist([
  new Song("Forgiven", "Jesus Culture", "https://placeimg.com/640/480/any", "songs/03 Forgiven.mp3"),
  new Song("Forgiven", "Jesus Culture", "https://placeimg.com/640/480/any", "songs/03 Forgiven.mp3"),
  new Song("Forgiven", "Jesus Culture", "https://placeimg.com/640/480/any", "songs/03 Forgiven.mp3"),
]);

describe('playlist.js', function () {
  describe('next function', function () {
    it('should add 1 to nowPlayingIndex to play the next song in playlist', function () {
      playlist.nowPlayingIndex = 0;

      playlist.next();
      expect(playlist.nowPlayingIndex).to.equal(1);
      playlist.next();
      expect(playlist.nowPlayingIndex).to.equal(2);
      playlist.next();
      expect(playlist.nowPlayingIndex).to.equal(0);
    });
  });

  describe('previous function', function () {
    it('should reduce 1 from nowPlayingIndex to play the previous song in playlist', function () {
      playlist.nowPlayingIndex = 0;

      playlist.previous();
      expect(playlist.nowPlayingIndex).to.equal(2);
      playlist.previous();
      expect(playlist.nowPlayingIndex).to.equal(1);
      playlist.previous();
      expect(playlist.nowPlayingIndex).to.equal(0);
    });
  });
});
