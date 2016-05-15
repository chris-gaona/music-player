//add new songs to song.js
var playlistArray = [
  new Song("Good Good Father", "Chris Tomlin", "https://placeimg.com/640/480/any", "songs/Chris Tomlin - Good Good Father (Audio).mp3"),
  new Song("Forgiven", "Jesus Culture", "https://placeimg.com/640/480/any", "songs/03 Forgiven.mp3"),
  new Song("Come Away", "Jesus Culture", "https://placeimg.com/640/480/any", "songs/01 Come Away _ Let Me In.mp3")
];

var playlist = new Playlist(playlistArray);

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
  getMetaData();
  timeUpdate();
});

function togglePlayPause() {
  //creates toggle effect for play & pause icons
  if (playButton.children().hasClass('fa-play')) {
    playButton.children().removeClass('fa-play');
    playButton.children().addClass('fa fa-pause');
    document.getElementById('audio-player').play();
    // playlist.play();

  } else if (playButton.children().hasClass('fa-pause')) {
    playButton.children().removeClass('fa-pause');
    playButton.children().addClass('fa fa-play');
    document.getElementById('audio-player').pause();
    // playlist.pause();
  }
}

function getMetaData() {
  $('audio').on('loadedmetadata', function() {
    console.log(this.volume);
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

$('#seekbar').on('click', function(e) {
  var value_clicked = e.offsetX * this.max / this.offsetWidth;

  var anotherNumber = document.getElementById('audio-player').duration * value_clicked;

  document.getElementById('audio-player').currentTime = anotherNumber;
});

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
  $('#seekbar').attr("value", 0);
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
  $('#seekbar').attr("value", 0);
});

$('#volume-control').on('click', function() {
  if ($(this).children().hasClass('fa-volume-up')) {
    $(this).children().removeClass('fa-volume-up').addClass('fa-volume-off');
    document.getElementById('audio-player').volume = 0;
  } else {
    $(this).children().removeClass('fa-volume-off').addClass('fa-volume-up');
    document.getElementById('audio-player').volume = 1;
  }
});
