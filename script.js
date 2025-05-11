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