//create song object
var Song = function(title, artist, image, song, lyrics) {
  this.title = title;
  this.artist = artist;
  this.image = image;
  this.song = song;
  this.lyrics = lyrics;
  this.isPlaying = false;
}

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

Song.prototype.addLyrics = function () {
  var htmlString;

  if (this.lyrics === undefined) {
    console.log('true');
    htmlString = "<div class='lyrics'>Hmmm...there aren\'t any words in this song I guess!</div>";
  } else {
    htmlString = '<div class="lyrics">' + this.lyrics + '</div>';
  }
  return htmlString;
};

Song.prototype.getTotal = function () {
  return 0;
};

module.exports = Song;
