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
Song.prototype.play = function () {
  this.isPlaying = true;
  console.log('Playing!');
}

//stop function
Song.prototype.pause = function () {
  this.isPlaying = false;
  console.log('Paused!');
};

//add to html
Song.prototype.toHTML = function () {
  var htmlString = '<img src="' + this.image + '">';
  htmlString += '<p>' + this.title + ' - '
  htmlString += '<span>' + this.artist + '</span>';
  htmlString += '<a href="#">Lyrics</a></p>';
  return htmlString;
};

Song.prototype.durationHTML = function () {
  var htmlString = '<span class="player-tracking-start">00:00';
  htmlString += '</span><span class="player-tracking-bar"><span class="player-inner-bar"></span></span>';
  htmlString += '<span class="player-tracking-end">';
  htmlString += this.duration + '</span>';
  return htmlString;
};
