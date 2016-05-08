//create song object
var Song = function(title, artist, image, duration, lyrics) {
  this.title = title;
  this.artist = artist;
  this.image = image;
  this.duration = duration;
  this.lyrics = lyrics;
  this.isPlaying = false;
}

//play function
Song.prototype.play = function() {
  this.isPlaying = true;
}

//stop function
Song.prototype.stop = function () {
  this.isPlaying = false;
};

//add to html
Song.prototype.toHTML = function () {
  var htmlString = '<img src="' + this.image + '">';
  htmlString += '<p>' + this.title + ' - '
  htmlString += '<span>' + this.artist + '</span>';
  htmlString += '<a href="#">Lyrics</a></p>';
  return htmlString;
};
