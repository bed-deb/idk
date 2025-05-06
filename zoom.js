// Blokowanie pinch zoom
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

// Pozostawiamy tylko to, co konieczne:
document.addEventListener('touchmove', function (e) {
  if (e.scale !== 1) {
    e.preventDefault();
  }
}, { passive: false });
