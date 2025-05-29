document.addEventListener("DOMContentLoaded", () => {
  const burgerIcon = document.getElementById("burger-icon");

  burgerIcon.addEventListener("click", () => {
    const existingNav = document.querySelector(".fullscreen-nav");

    if (existingNav) {
      existingNav.classList.remove("show");
      setTimeout(() => existingNav.remove(), 300);
      burgerIcon.src = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg";
      return;
    }

    // Inject style once
    if (!document.getElementById("fullscreen-nav-style")) {
      const style = document.createElement("style");
      style.id = "fullscreen-nav-style";
      style.textContent = `
        .fullscreen-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(25, 23, 22, 0.95);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
          font-size: 2rem;
          z-index: 9999;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .fullscreen-nav.show {
          opacity: 1;
        }
        .fullscreen-nav a {
          color: white;
          text-decoration: none;
          font-family: sans-serif;
          font-weight: 300;
          transition: all 0.3s ease;
        }
        .fullscreen-nav a:hover {
          color: #fbf5e9;
          text-decoration: underline;
          font-weight: 600;
        }
      `;
      document.head.appendChild(style);
    }

    // Create nav menu
    const nav = document.createElement("div");
    nav.className = "fullscreen-nav";
    nav.innerHTML = `
      <a href="index.html">Forside</a>
      <a href="gavekurv.html">Gavekurv</a>
      <a href="omos.html">Om Os</a>
      <a href="bygselv.html">Byg Selv</a>
      <a href="#" id="close-nav-link">Luk</a>
    `;
    document.body.appendChild(nav);

    setTimeout(() => nav.classList.add("show"), 10);
    burgerIcon.src = "icons/white/medium/close_m.svg";

    // Luk via "Luk"-link
    document.getElementById("close-nav-link").addEventListener("click", (e) => {
      e.preventDefault();
      burgerIcon.click();
    });
  });
});
