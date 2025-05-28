function toggleNav() {
  // Check if nav already exists
  const existingNav = document.querySelector(".fullscreen-nav");
  if (existingNav) {
    existingNav.remove();
    return;
  }

  // Inject CSS once
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
      }
      .fullscreen-nav a {
        color: white;
        text-decoration: none;
        font-family: sans-serif;
        transition: opacity 0.3s;
      }
      .fullscreen-nav a:hover {
        opacity: 0.7;
      }
    `;
    document.head.appendChild(style);
  }

  // Create nav
  const nav = document.createElement("div");
  nav.className = "fullscreen-nav";
  nav.innerHTML = `
    <a href="#home">Home</a>
    <a href="#products">Produkter</a>
    <a href="#about">Om os</a>
    <a href="#contact">Kontakt</a>
    <a href="#" onclick="toggleNav()">Luk</a>
  `;
  document.body.appendChild(nav);
}
