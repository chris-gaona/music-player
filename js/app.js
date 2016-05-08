//create playlist
var playlist = new Playlist();

//add new songs to song.js
var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "https://placeimg.com/640/480/any", "2:54");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "https://placeimg.com/640/480/any", "3:43");

//add newly created songs to playlist songs array
playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

//get element to place html string
var playlistElement = document.getElementById('player-container');

//pass into playlist.js the element to render in
playlist.renderInElement(playlistElement);

var playButton = document.getElementById('play');
playButton.onclick = function() {
  //creates toggle effect for play & pause icons
  if (playButton.children[0].classList.contains('fa-play')) {
    playButton.children[0].classList.remove('fa-play');
    playButton.children[0].className = 'fa fa-pause';
  } else {
    playButton.children[0].classList.remove('fa-pause');
    playButton.children[0].className = 'fa fa-play';
  }

  playlist.play();
  playlist.renderInElement(playlistElement);
}

var stopButton = function() {
  stopButton.onclick = function() {

  }
}

var nextButton = document.getElementById('next');
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}
