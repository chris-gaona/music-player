//create playlist
var playlist = new Playlist();

//add new songs to song.js
var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "https://placeimg.com/640/480/any", "02:54", "Yes Sir");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "https://placeimg.com/640/480/any", "03:43", "Yes Sir");
var anotherSong = new Song("Another Song That's Good", "Magic Mike", "https://placeimg.com/640/480/any", "03:24", "Yes Sir");
var didYouKnowAbout = new Song("Did You Know About Me?", "Shades of Gray", "https://placeimg.com/640/480/any", "04:03", "Yes Sir");

//add newly created songs to playlist songs array
playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);
playlist.add(anotherSong);
playlist.add(didYouKnowAbout);

//get element to place html string
var playlistElement = $('#player-container');
var durationElement = $('#duration');

//pass into playlist.js the element to render in
playlist.renderInElement(playlistElement);
playlist.renderDurationInElement(durationElement);

var playButton = $('#play');
playButton.on('click', function() {
  //creates toggle effect for play & pause icons
  if (playButton.children().hasClass('fa-play')) {
    console.log("play");
    playButton.children().removeClass('fa-play');
    playButton.children().addClass('fa fa-pause');
    playlist.play();
    move();
    // playlist.renderInElement(playlistElement);
  } else if (playButton.children().hasClass('fa-pause')) {
    console.log("pause");
    playButton.children().removeClass('fa-pause');
    playButton.children().addClass('fa fa-play');
    playlist.pause();
    stop();
    // playlist.renderInElement(playlistElement);
  }
});

var timer;

function move() {
  var elem = $('#player-inner-bar');
  var width = 1;
  var timer = setInterval(progress, 50);
  function progress() {
    if (width >= 100) {
      clearInterval(timer);
    } else {
      width++;
      elem.css('width', width + '%');
      // document.getElementById("label").innerHTML = width * 1  + '%';
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
  move();
});

var prevButton = $('#previous');
prevButton.on('click', function() {
  playlist.previous();
  playlist.renderInElement(playlistElement);
  playlist.renderDurationInElement(durationElement);
  move();
});
