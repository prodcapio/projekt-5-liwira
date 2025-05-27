document.querySelectorAll('.footer-link-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const parent = btn.closest('.footer-link');
    parent.classList.toggle('active');
  });
});