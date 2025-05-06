// Blokowanie pinch zoom
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

document.addEventListener('touchmove', function (e) {
  if (e.scale !== 1) {
    e.preventDefault();
  }
}, { passive: false });

// Blokowanie double-tap zoom
let lastTouchEnd = 0;
document.addEventListener('touchend', function (e) {
  const now = new Date().getTime();
  if (now - lastTouchEnd <= 300) {
    e.preventDefault();
  }
  lastTouchEnd = now;
}, false);
