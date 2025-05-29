  window.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("a");

    navLinks.forEach(link => {
      const href = link.getAttribute("href");

      // Compare file names only, e.g., "index.html" === "index.html"
      if (href && href.endsWith(currentPage)) {
        link.style.textDecoration = "underline";
        link.style.textUnderlineOffset = "4px"; // optional: better spacing
        link.style.fontWeight = "600"; // optional: visual emphasis
      }
    });
  });

