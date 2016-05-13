//create song object
var Song = function(title, artist, image, duration) {
  this.title = title;
  this.artist = artist;
  this.image = image;
  this.duration = duration;
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
  htmlString += '</p>';
  return htmlString;
};

Song.prototype.durationHTML = function () {
  var htmlString = '<span class="player-tracking-start">00:00';
  htmlString += '</span><span class="player-tracking-bar"><span id="player-inner-bar"></span></span>';
  htmlString += '<span class="player-tracking-end">';
  htmlString += this.duration + '</span>';
  return htmlString;
};

// Song.prototype.toSeconds = function () {
//   var hms = this.split(':');
//   return (+hms[0]) * 60 * 60 + (+hms[1]) * 60 + (+hms[2] || 0);
// }
