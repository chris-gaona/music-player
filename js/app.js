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
var playlistElement = document.getElementById('player-container');
var durationElement = document.getElementById('duration');

//pass into playlist.js the element to render in
playlist.renderInElement(playlistElement);
playlist.renderDurationInElement(durationElement);

var playButton = document.getElementById('play');
playButton.onclick = function() {
  //creates toggle effect for play & pause icons
  if (playButton.children[0].classList.contains('fa-play')) {
    playButton.children[0].classList.remove('fa-play');
    playButton.children[0].className = 'fa fa-pause';
    playlist.play();
    // playlist.renderInElement(playlistElement);
  } else {
    playButton.children[0].classList.remove('fa-pause');
    playButton.children[0].className = 'fa fa-play';
    playlist.pause();
    // playlist.renderInElement(playlistElement);
  }

  // var start = new Date();
  // var maxTime = 835000;
  // var timeoutVal = Math.floor(maxTime/100);
  // animateUpdate();
  //
  // function updateProgress(percentage) {
  //   $('#pbar_innerdiv').css("width", percentage + "%");
  //   $('#pbar_innertext').text(percentage + "%");
  // }
  //
  // function animateUpdate() {
  //   var now = new Date();
  //   var timeDiff = now.getTime() - start.getTime();
  //   var perc = Math.round((timeDiff/maxTime)*100);
  //   console.log(perc);
  //     if (perc <= 100) {
  //      updateProgress(perc);
  //      setTimeout(animateUpdate, timeoutVal);
  //     }
  // }
}

var nextButton = document.getElementById('next');
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
  playlist.renderDurationInElement(durationElement);
}

var prevButton = document.getElementById('previous');
prevButton.onclick = function() {
  playlist.previous();
  playlist.renderInElement(playlistElement);
  playlist.renderDurationInElement(durationElement);
}
