window.addEventListener('DOMContentLoaded', () => {
  const audio = new Audio('assets/day0_reflection.mp3');
  audio.play().catch((e) => {
    console.log('Autoplay failed:', e);
  });
});
