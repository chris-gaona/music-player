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

// TODO: WILL PROBABLY REMOVE
// Song.prototype.durationHTML = function () {
//   var htmlString = '<span class="player-tracking-start">00:00</span>';
//   htmlString += '<progress id="seekbar" value="0" max="1"></progress>';
//   htmlString += '<span class="player-tracking-end">';
//   htmlString += this.duration + '</span>';
//   return htmlString;
// };

// Song.prototype.toSeconds = function () {
//   var ms = this.split(':');
//   return (+ms[0]) * 60 + (+ms[1] || 0);
// }
//
// Song.prototype.toMMSS = function () {
//     var sec_num = parseInt(this, 10); // don't forget the second param
//     var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
//     var seconds = sec_num - (hours * 3600) - (minutes * 60);
//
//     if (minutes < 10) {minutes = "0" + minutes;}
//     if (seconds < 10) {seconds = "0" + seconds;}
//     return minutes + ':' + seconds;
// }
