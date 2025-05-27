/*
(function() {
  const minDesktopWidth = 769;
  const desktopCssHref = 'mediaquery.css';

  function ensureDesktopCss() {
    const existing = document.querySelector(`link[href="${desktopCssHref}"]`);
    const isDesktop = window.innerWidth >= minDesktopWidth;

    console.log(`Current width: ${window.innerWidth}, isDesktop: ${isDesktop}`);

    if (isDesktop && !existing) {
      console.log("Adding desktop stylesheet...");
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = desktopCssHref;
      link.setAttribute('data-dynamic', 'true');
      document.head.appendChild(link);
    } else if (!isDesktop && existing) {
      console.log("Removing desktop stylesheet...");
      existing.remove();
    }
  }

  // Load once on start
  window.addEventListener('DOMContentLoaded', ensureDesktopCss);

  // Re-evaluate on resize
  window.addEventListener('resize', ensureDesktopCss);

  link.href = desktopCssHref + '?v=' + new Date().getTime();
})();
