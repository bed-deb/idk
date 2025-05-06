// Blokuje pinch-zoom
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

// Blokuje double-tap zoom bez psucia kliknięć
let lastTouchTime = 0;
document.addEventListener('touchstart', function (e) {
  const currentTime = new Date().getTime();
  if (currentTime - lastTouchTime < 300) {
    e.preventDefault();
  }
  lastTouchTime = currentTime;
}, { passive: false });

// Blokuje zoom przez przypadkowy scale > 1
document.addEventListener('touchmove', function (e) {
  if (e.scale && e.scale !== 1) {
    e.preventDefault();
  }
}, { passive: false });
