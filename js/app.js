//create playlist
var playlist = new Playlist();

//add new songs to song.js
var goodGoodFather = new Song("Good Good Father", "Chris Tomlin", "https://placeimg.com/640/480/any", "songs/Chris Tomlin - Good Good Father (Audio).mp3");
var forgiven = new Song("Forgiven", "Jesus Culture", "https://placeimg.com/640/480/any", "songs/03 Forgiven.mp3");
var comeAway = new Song("Come Away", "Jesus Culture", "https://placeimg.com/640/480/any", "songs/01 Come Away _ Let Me In.mp3");

//add newly created songs to playlist songs array
playlist.add(goodGoodFather);
playlist.add(forgiven);
playlist.add(comeAway);

//get element to place html string
var playlistElement = $('#player-container');
var durationElement = $('#duration');
var audioElement = $('#audio-tag-container');

//pass into playlist.js the element to render in
playlist.renderInElement(playlistElement);
playlist.renderAudioTag(audioElement);

var playButton = $('#play');
playButton.on('click', function() {
  togglePlayPause();
});

function togglePlayPause() {
  //creates toggle effect for play & pause icons
  if (playButton.children().hasClass('fa-play')) {
    playButton.children().removeClass('fa-play');
    playButton.children().addClass('fa fa-pause');
    document.getElementById('audio-player').play();

  } else if (playButton.children().hasClass('fa-pause')) {
    playButton.children().removeClass('fa-pause');
    playButton.children().addClass('fa fa-play');
    document.getElementById('audio-player').pause();
  }
}

function getMetaData() {
  $('#audio-player').on('loadedmetadata', function() {
    var minutes = Math.floor(this.duration / 60);
    var seconds = Math.floor(this.duration % 60);

    if (minutes < 10) {minutes   = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}

    $('#start').html('00:00');
    $('#end').html((minutes + ':' + seconds).toString());
  });
}
getMetaData();

function timeUpdate() {
  $('#audio-player').on('timeupdate', function() {
    var minutes = Math.floor(this.duration / 60);
    var seconds = Math.floor(this.duration % 60);

    var moveMinutes = Math.floor(this.currentTime / 60);
    var moveSeconds = Math.floor(this.currentTime % 60);

    if (minutes < 10) {minutes   = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}
    if (moveMinutes < 10) {moveMinutes   = "0" + moveMinutes;}
    if (moveSeconds < 10) {moveSeconds = "0" + moveSeconds;}

    $('#seekbar').attr("value", this.currentTime / this.duration);
    $('#start').html((moveMinutes + ':' + moveSeconds).toString());
    $('#end').html((minutes + ':' + seconds).toString());
  });
}
timeUpdate();


var nextButton = $('#next');
nextButton.on('click', function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
  playlist.renderAudioTag(audioElement);

  if (playButton.children().hasClass('fa-pause')) {
    playButton.children().removeClass('fa-pause');
    playButton.children().addClass('fa fa-play');
  }

  getMetaData();
  timeUpdate();
});

var prevButton = $('#previous');
prevButton.on('click', function() {
  playlist.previous();
  playlist.renderInElement(playlistElement);
  playlist.renderAudioTag(audioElement);

  if (playButton.children().hasClass('fa-pause')) {
    playButton.children().removeClass('fa-pause');
    playButton.children().addClass('fa fa-play');
  }

  getMetaData();
  timeUpdate();
});
