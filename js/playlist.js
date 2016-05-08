//create playlist object
var Playlist = function() {
  this.songs = [];
  this.nowPlayingIndex = 0;
}

//add songs to playlist
Playlist.prototype.add = function (song) {
  this.songs.push(song);
};

//play song
Playlist.prototype.play = function () {
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.play();
};

//stop song
Playlist.prototype.stop = function () {
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.stop();
};

//next song
Playlist.prototype.next = function () {
  this.stop();
  this.nowPlayingIndex++;
  if (this.nowPlayingIndex >= this.songs.length) {
    this.nowPlayingIndex = 0;
  }
  this.play();
};

//render html string in html page
Playlist.prototype.renderInElement = function (element) {
  element.innerHTML = this.songs[this.nowPlayingIndex].toHTML();

};
