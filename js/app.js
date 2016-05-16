//add new songs to song.js
var playlistArray = [
  new Song("Good Good Father", "Chris Tomlin", "https://placeimg.com/640/480/any", "songs/Chris Tomlin - Good Good Father (Audio).mp3", "Oh, I've heard a thousand stories of what they think you're like<br>But I've heard the tender<br>whisper of love in the dead of night<br>And you tell me that you're pleased<br>And that I'm never alone<br><br>You're a Good, Good Father<br>It's who you are, it's who you are, it's who you are<br>And I'm loved by you<br>It's who I am, it's who I am, it's who I am<br><br>Oh, and I've seen many searching for answers far and wide<br>But I know we're all searching<br>For answers only you provide<br>Cause you know just what we need<br>Before we say a word<br><br>You're a Good, Good Father<br>It's who you are, it's who you are, it's who you are<br>And I'm loved by you<br>It's who I am, it's who I am, it's who I am<br><br>Cause you are perfect in all of your ways<br>You are perfect in all of your ways<br>You are perfect in all of your ways to us<br>You are perfect in all of your ways<br>You are perfect in all of your ways<br>You are perfect in all of your ways to us<br><br>Oh, it's love so undeniable<br>I, I can hardly speak<br>Peace so unexplainable<br>I, I can hardly think<br><br>As you call me deeper still [x3]<br>Into love, love, love<br><br>[x3:]<br>You're a Good, Good Father<br>It's who you are, it's who you are, it's who you are<br>And I'm loved by you<br>It's who I am, it's who I am, it's who I am<br><br>You're a Good, Good Father<br>(You are perfect in all of your ways)<br>It's who you are, it's who you are, it's who you are<br>And I'm loved by you<br>(You are perfect in all of your ways)<br>It's who I am, it's who I am it's who I am"),
  new Song("Forgiven", "Jesus Culture", "https://placeimg.com/640/480/any", "songs/03 Forgiven.mp3"),
  new Song("Come Away", "Jesus Culture", "https://placeimg.com/640/480/any", "songs/01 Come Away _ Let Me In.mp3", "Come away with me, Come away with me<br>It's never too late, it's not too late<br>It's not too late for you<br><br>I have a plan for you<br>It's gonna be wild<br>It's gonna be great<br>It's gonna be full of me<br><br>Open up your heart and let me in")
];

var playlist = new Playlist(playlistArray);

//get element to place html string
var playlistElement = $('#player-container');
var durationElement = $('#duration');
var audioElementContainer = $('#audio-tag-container');
var lyricsElementContainer = $('#lyrics');

//pass into playlist.js the element to render in
playlist.renderInElement(playlistElement);
playlist.renderAudioTag(audioElementContainer);
playlist.renderLyricsInElement(lyricsElementContainer);

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

    if ($('#seekbar').prop('value') === 1) {
      playButton.children().removeClass('fa-pause');
      playButton.children().addClass('fa fa-play');
      document.getElementById('audio-player').pause();
    }
  });
}
timeUpdate();

$('#seekbar').on('click', function(e) {
  var value_clicked = e.offsetX * this.max / this.offsetWidth;
  var newValue = document.getElementById('audio-player').duration * value_clicked;

  document.getElementById('audio-player').currentTime = newValue;
});

var nextButton = $('#next');
nextButton.on('click', function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
  playlist.renderAudioTag(audioElementContainer);
  playlist.renderLyricsInElement(lyricsElementContainer);

  if (playButton.children().hasClass('fa-pause')) {
    playButton.children().removeClass('fa-pause');
    playButton.children().addClass('fa fa-play');
  }

  getMetaData();
  timeUpdate();
  $('#seekbar').attr("value", 0);
  playButton.click();

  $('#lyrics, #lyrics .lyrics').removeClass('visible');
});

var prevButton = $('#previous');
prevButton.on('click', function() {
  playlist.previous();
  playlist.renderInElement(playlistElement);
  playlist.renderAudioTag(audioElementContainer);
  playlist.renderLyricsInElement(lyricsElementContainer);

  if (playButton.children().hasClass('fa-pause')) {
    playButton.children().removeClass('fa-pause');
    playButton.children().addClass('fa fa-play');
  }

  getMetaData();
  timeUpdate();
  $('#seekbar').attr("value", 0);
  playButton.click();

  $('#lyrics, #lyrics .lyrics').removeClass('visible');
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

$('#expand').on('click', function() {
  $('#lyrics, #lyrics .lyrics').toggleClass('visible');
});
