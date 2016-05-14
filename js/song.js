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
Song.prototype.play = function () {
  this.isPlaying = true;
  console.log('Playing!');
}

// TODO: WILL PROBABLY REMOVE
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

Song.prototype.addAudio = function () {
  var htmlString = '<audio src="' + this.song + '" id="audio-player"></audio>';
  return htmlString;
};
