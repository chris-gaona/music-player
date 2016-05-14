//create playlist object
var Playlist = function() {
  this.songs = [];
  this.nowPlayingIndex = 0;
};

//add songs to playlist
Playlist.prototype.add = function (song) {
  this.songs.push(song);
};

// TODO: WILL PROBABLY REMOVE
//play song
Playlist.prototype.play = function () {
  // var currentSong = this.songs[this.nowPlayingIndex];
  // currentSong.play();
  // element.play();
};

// TODO: WILL PROBABLY REMOVE
//stop song
Playlist.prototype.pause = function () {
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.pause();
};

//next song
Playlist.prototype.next = function () {
  this.pause();
  this.nowPlayingIndex++;
  if (this.nowPlayingIndex >= this.songs.length) {
    this.nowPlayingIndex = 0;
  }
  this.play();
  console.log('Next song!');
};

//previous song
Playlist.prototype.previous = function () {
  this.pause();
  if (this.nowPlayingIndex === 0) {
    this.nowPlayingIndex = this.songs.length;
  }
  this.nowPlayingIndex--;
  this.play();
  console.log('Previous song!');
};

//render html string in html page
Playlist.prototype.renderInElement = function (element) {
  element.html(this.songs[this.nowPlayingIndex].toHTML());
};

// Playlist.prototype.renderDurationInElement = function (element) {
//   element.html(this.songs[this.nowPlayingIndex].durationHTML());
// };

Playlist.prototype.renderAudioTag = function (element) {
  element.html(this.songs[this.nowPlayingIndex].addAudio());
};
