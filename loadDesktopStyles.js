
(function() {
  const minDesktopWidth = 1025;
  const desktopCssHref = 'mediaquery.css';

  function ensureDesktopCss() {
    const existing = document.querySelector(`link[href="${desktopCssHref}"]`);
    const isDesktop = window.innerWidth >= minDesktopWidth;

    if (isDesktop && !existing) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = desktopCssHref;
      link.setAttribute('data-dynamic', 'true');
      document.head.appendChild(link);
    } else if (!isDesktop && existing) {
      existing.remove();
    }
  }

  // Load once on start
  ensureDesktopCss();

  // Re-evaluate on resize
  window.addEventListener('resize', ensureDesktopCss);
})();



