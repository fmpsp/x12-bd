// Parallax effect on certain elements

// let latestScroll = 0;
// let ticking = false;

// function onScroll() {
//   latestScroll = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       updateParallax(latestScroll);
//       ticking = false;
//     });
//     ticking = true;
//   }
// }

// function updateParallax(scrollY) {
//   const img = document.querySelector('.landing-text');
//   img.style.transform = `translate(-50%, ${scrollY * 1}px)`;
// }

// window.addEventListener('scroll', onScroll);


const audio = document.getElementById("my-audio");
const button = document.querySelector(".audio-button");
const playPause = document.getElementById("play-pause")
let isPlaying = false;
audio.volume = 0.3;

function toggleAudio() {
    if (isPlaying) {
    audio.pause();
    playPause.classList.remove('fa-stop');
    playPause.classList.add('fa-play');
    } else {
    audio.play();
    playPause.classList.remove('fa-play');
    playPause.classList.add('fa-stop');
    }
    isPlaying = !isPlaying;
}