//create playlist object
function Playlist(songs) {
  this.songs = songs;
  this.nowPlayingIndex = 0;
}

//next song
Playlist.prototype.next = function () {
  this.nowPlayingIndex++;
  if (this.nowPlayingIndex >= this.songs.length) {
    this.nowPlayingIndex = 0;
  }
};

//previous song
Playlist.prototype.previous = function () {
  if (this.nowPlayingIndex === 0) {
    this.nowPlayingIndex = this.songs.length;
  }
  this.nowPlayingIndex--;
};

//render html string in html page
Playlist.prototype.renderInElement = function (element) {
  element.html(this.songs[this.nowPlayingIndex].toHTML());
};

Playlist.prototype.renderAudioTag = function (element) {
  element.html(this.songs[this.nowPlayingIndex].addAudio());
};

Playlist.prototype.renderLyricsInElement = function (element) {
  element.html(this.songs[this.nowPlayingIndex].addLyrics());
};
