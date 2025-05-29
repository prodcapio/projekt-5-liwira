// Create overlay
const loadingOverlay = document.createElement("div");
loadingOverlay.style.position = "fixed";
loadingOverlay.style.top = "0";
loadingOverlay.style.left = "0";
loadingOverlay.style.width = "100vw";
loadingOverlay.style.height = "100vh";
loadingOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
loadingOverlay.style.display = "flex";
loadingOverlay.style.flexDirection = "column";
loadingOverlay.style.alignItems = "center";
loadingOverlay.style.justifyContent = "center";
loadingOverlay.style.zIndex = "9999";
loadingOverlay.style.opacity = "1";
loadingOverlay.style.transition = "opacity 0.4s ease";

// Create loading image
const loadingImage = document.createElement("img");
loadingImage.src = "images/gif/loadingif.gif";
loadingImage.style.width = "30vw";
loadingImage.style.maxWidth = "100%";
loadingImage.style.height = "auto";
loadingImage.alt = "Loading...";

// Create progress bar container
const progressBarContainer = document.createElement("div");
progressBarContainer.style.width = "15vw";
progressBarContainer.style.height = "1vw";
progressBarContainer.style.backgroundColor = "#444";
progressBarContainer.style.borderRadius = "9999px";
progressBarContainer.style.marginTop = "24px";
progressBarContainer.style.overflow = "hidden";

// Create progress bar fill
const progressBarFill = document.createElement("div");
progressBarFill.style.width = "0%";
progressBarFill.style.height = "100%";
progressBarFill.style.backgroundColor = "#ffffff";
progressBarFill.style.borderRadius = "9999px";
progressBarFill.style.transition = "width 0.1s ease";

// Append fill to container and image + container to overlay
progressBarContainer.appendChild(progressBarFill);
loadingOverlay.appendChild(loadingImage);
loadingOverlay.appendChild(progressBarContainer);

// Disable scroll and add overlay after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(loadingOverlay);
  document.body.style.overflow = "hidden";
});

// Simulate loading progress
let simulatedProgress = 0;
const interval = setInterval(() => {
  if (simulatedProgress < 95) {
    simulatedProgress += Math.random() * 1.5;
    progressBarFill.style.width = `${simulatedProgress}%`;
  }
}, 100);

// Track page load
const loadStart = performance.now();

window.addEventListener("load", () => {
  const loadEnd = performance.now();
  const elapsed = loadEnd - loadStart;
  const minDuration = 500;
  const delay = Math.max(0, minDuration - elapsed);

  setTimeout(() => {
    clearInterval(interval);
    progressBarFill.style.width = "100%";

    setTimeout(() => {
      loadingOverlay.style.opacity = "0";

      setTimeout(() => {
        loadingOverlay.remove();
        document.body.style.overflow = "";
      }, 400);
    }, 300); // Small pause to show 100%
  }, delay);
});
