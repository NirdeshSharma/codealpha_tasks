// 🎯 Element Selectors
const audio = document.getElementById("audio-player");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const volume = document.getElementById("volume");
const fileUpload = document.getElementById("file-upload");
const trackInfo = document.getElementById("track-info");

// 📁 Playlist State
let playlist = [];
let currentTrack = 0;

// 🖱️ Click anywhere on player to trigger file upload
document.querySelector(".music-player").addEventListener("click", () => {
  fileUpload.click();
});

// 📤 Handle file upload
fileUpload.addEventListener("change", (e) => {
  playlist = Array.from(e.target.files);
  if (playlist.length > 0) {
    loadTrack(0);
    playAudio();
  }
});

// ▶️ Play / ⏸️ Pause Toggle
playBtn.addEventListener("click", () => {
  if (!audio.src) return;

  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
});

// ⏭️ Next Track
nextBtn.addEventListener("click", () => {
  if (currentTrack < playlist.length - 1) {
    loadTrack(++currentTrack);
    playAudio();
  }
});

// ⏮️ Previous Track
prevBtn.addEventListener("click", () => {
  if (currentTrack > 0) {
    loadTrack(--currentTrack);
    playAudio();
  }
});

// 🔊 Volume Control
volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

// 🎵 Load and Display Track
function loadTrack(index) {
  const file = playlist[index];
  audio.src = URL.createObjectURL(file);
  trackInfo.textContent = `Playing: ${file.name}`;
  currentTrack = index;
  playBtn.textContent = "▶️";
}

// ▶️ Auto Play
function playAudio() {
  audio.play();
  playBtn.textContent = "⏸️";
}
