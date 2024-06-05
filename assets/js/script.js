// nav bar
const stickyTop = document.querySelector(".sticky-top");
const myOffcanvas = document.querySelector(".offcanvas");
const rootElement = document.querySelector(":root");
const audioWrapper = document.querySelector(".audio-icon-wrapper");
const song = document.querySelector("#song");
const audioIcon = document.querySelector("#audio-wrapper i");
let isPlaying = false;

myOffcanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
});

myOffcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

// fitur waktu mundur
simplyCountdown(".simply-countdown", {
  year: 2024, // required
  month: 6, // required
  day: 24, // required
  hours: 8, // Default is 0 [0-23] integer
  words: {
    //words displayed into the countdown
    days: { singular: "Hari", plural: "Hari" },
    hours: { singular: "Jam", plural: "Jam" },
    minutes: { singular: "Menit", plural: "Menit" },
    seconds: { singular: "Detik", plural: "Detik" },
  },
});

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  playAudio();
}

function playAudio() {
  song.volume = 0.1;
  song.play();
  audioWrapper.style.display = "flex";
  isPlaying = true;
}

audioWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    song.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }
  isPlaying = !isPlaying;
};

disableScroll();