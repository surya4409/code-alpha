let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");
let repeatIcon = document.querySelector(".fa-repeat");
let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
  {
    img: "images/Nenu-Sailaja-Telugu.jpg",
    name: "Nenu Sailaja",
    artist: "Devi Sri Prasad",
    music: "D:/Task3 Music Player/music/Nenu sailaja.mp3",
  },
  {
    img: "images/Theme-Of-Kalki-From-Kalki-2898-AD.jpg",
    name: "Theme of kalki",
    artist: "Gowtham Bharadwaj",
    music: "D:/Task3 Music Player/music/Theme of Kalki.mp3",
  },
  {
    img: "images/Ta-Takkara-Complex-Song-From-Kalki-2898-AD.jpg",
    name: "Ta Takkara",
    artist: "Sanjith Hegde",
    music: "D:/Task3 Music Player/music/Ta Takara kalki.mp3",
  },
  {
    img: "images/Shape-of-you.jpg",
    name: "Shape of you",
    artist: "Ed Sheeran",
    music: "D:/Task3 Music Player/music/Shape of you.mp3",
  },
];

loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();

  curr_track.src = music_list[track_index].music;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
  track_name.textContent = music_list[track_index].name;
  track_artist.textContent = music_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + music_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  track_art.classList.add("rotate");
  wave.classList.add("loader");
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  track_art.classList.remove("rotate");
  wave.classList.remove("loader");
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  if (isRandom) {
    let random_index = Math.floor(Math.random() * music_list.length);
    track_index = random_index;
  } else {
    track_index = (track_index + 1) % music_list.length;
  }
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  track_index = (track_index - 1 + music_list.length) % music_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

function randomTrack() {
  isRandom = !isRandom;
  randomIcon.classList.toggle("randomActive");
}

function repeatTrack() {
  isRepeat = !isRepeat;
  repeatIcon.classList.toggle("repeatActive");
}

randomIcon.addEventListener('click', randomTrack);
repeatIcon.addEventListener('click', repeatTrack);
