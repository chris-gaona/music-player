//create song object
var Song = function(title, artist, image, song) {
  this.title = title;
  this.artist = artist;
  this.image = image;
  this.song = song;
  this.isPlaying = false;
}

// TODO: WILL PROBABLY REMOVE
//play function
// Song.prototype.play = function () {
//   this.song.play();
//   this.isPlaying = true;
// }

// TODO: WILL PROBABLY REMOVE
//stop function
// Song.prototype.pause = function () {
//   this.song.pause();
//   this.isPlaying = false;
// };

// Song.prototype.metadata = function () {
//
// };

//add to html
Song.prototype.toHTML = function () {
  var htmlString = '<img src="' + this.image + '">';
  htmlString += '<p>' + this.title + ' - '
  htmlString += '<span>' + this.artist + '</span>';
  htmlString += '</p>';
  return htmlString;
};

Song.prototype.addAudio = function () {
  var htmlString = '<audio src="' + this.song + '" id="audio-player" preload>Your browser does not support the audio element.</audio>';
  return htmlString;
};
