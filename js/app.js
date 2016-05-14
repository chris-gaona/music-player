//create playlist
var playlist = new Playlist();

//add new songs to song.js
var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "https://placeimg.com/640/480/any", "01:54");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "https://placeimg.com/640/480/any", "03:43");
var anotherSong = new Song("Another Song That's Good", "Magic Mike", "https://placeimg.com/640/480/any", "03:24");
var didYouKnowAbout = new Song("Did You Know About Me?", "Shades of Gray", "https://placeimg.com/640/480/any", "04:03");

//add newly created songs to playlist songs array
playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);
playlist.add(anotherSong);
playlist.add(didYouKnowAbout);

// $('#button').on('click', function() {
//     document.getElementById('audio-player').play();
// });

//get element to place html string
var playlistElement = $('#player-container');
var durationElement = $('#duration');

//pass into playlist.js the element to render in
playlist.renderInElement(playlistElement);
playlist.renderDurationInElement(durationElement);

var flag;
var timer;
var width;
// var maxWidth;
var playButton = $('#play');
playButton.on('click', function() {
  if (flag === undefined) {
    stop();
    width = 0;
    flag = true;
    move();
    togglePlayPause();

  } else if (!flag) {
    flag = true;
    move();
    togglePlayPause();

  } else {
    stop();
    flag = false;
    togglePlayPause();
  }
});

function togglePlayPause() {
  //creates toggle effect for play & pause icons
  if (playButton.children().hasClass('fa-play')) {
    playButton.children().removeClass('fa-play');
    playButton.children().addClass('fa fa-pause');
    playlist.play();

  } else if (playButton.children().hasClass('fa-pause')) {
    playButton.children().removeClass('fa-pause');
    playButton.children().addClass('fa fa-play');
    playlist.pause();
  }
}

// var ms;
// var a;
// var seconds;
// var percentage;

// function defineWidth() {
//   maxWidth = $('#duration .player-tracking-end').text();
//   ms = maxWidth;
//   // ms = '04:12';   // your input string
//   // var startSeconds = 252;
//   a = ms.split(':'); // split it at the colons
//
//   // minutes are worth 60 seconds. Hours are worth 60 minutes.
//   seconds = (+a[0]) * 60 + (+a[1]);
//
//   console.log(seconds);
// }

function move() {
  var elem = $('#player-inner-bar');
  timer = setInterval(progress, 350);
  $('player-tracking-start').html(width)
  function progress() {
    if (width === 100) {
      clearInterval(timer);
    } else {
      width++;
      elem.css('width', width + '%');
    }
  }
}

function stop() {
  clearInterval(timer);
}

var nextButton = $('#next');
nextButton.on('click', function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
  playlist.renderDurationInElement(durationElement);
  flag = undefined;
  width = 0;
  if (playButton.children().hasClass('fa-play')) {
    playButton.children().removeClass('fa-play');
    playButton.children().addClass('fa fa-pause');
  }
  move();
});

var prevButton = $('#previous');
prevButton.on('click', function() {
  playlist.previous();
  playlist.renderInElement(playlistElement);
  playlist.renderDurationInElement(durationElement);
  flag = undefined;
  width = 0;
  if (playButton.children().hasClass('fa-play')) {
    playButton.children().removeClass('fa-play');
    playButton.children().addClass('fa fa-pause');
  }
  move();
});
