//create playlist
var playlist = new Playlist();

var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "https://placeimg.com/640/480/any", "2:54");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "https://placeimg.com/640/480/any", "3:43");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

var playlistElement = document.getElementById('player-container');

playlist.renderInElement(playlistElement);
