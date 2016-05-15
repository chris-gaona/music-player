//create playlist object
function Playlist(songs) {
  this.songs = songs;
  this.nowPlayingIndex = 0;
}

//play song
Playlist.prototype.play = function () {
  // var currentSong = this.songs[this.nowPlayingIndex];
  // currentSong.play();
  // console.log(currentSong.duration);
  console.log('Playing!');
};

//stop song
Playlist.prototype.pause = function () {
  // var currentSong = this.songs[this.nowPlayingIndex];
  // currentSong.pause();
  console.log('Paused!');
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

Playlist.prototype.renderAudioTag = function (element) {
  element.html(this.songs[this.nowPlayingIndex].addAudio());
};

Playlist.prototype.renderLyricsInElement = function (element) {
  element.html(this.songs[this.nowPlayingIndex].addLyrics());
};
