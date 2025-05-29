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
loadingImage.style.width = "50vw";
loadingImage.style.maxWidth = "300px";
loadingImage.style.height = "auto";
loadingImage.alt = "Loading...";

// Create progress bar container
const progressBarContainer = document.createElement("div");
progressBarContainer.style.width = "60vw";
progressBarContainer.style.maxWidth = "200px";
progressBarContainer.style.height = "12px";
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

// Append to DOM
progressBarContainer.appendChild(progressBarFill);
loadingOverlay.appendChild(loadingImage);
loadingOverlay.appendChild(progressBarContainer);

// Disable scroll and add overlay after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(loadingOverlay);
  document.body.style.overflow = "hidden";
});

// Real-time loading simulation based on document.readyState
let progress = 0;

function updateProgress() {
  if (document.readyState === "complete") {
    progress = 100;
  } else if (document.readyState === "interactive") {
    progress = Math.min(progress + 1.5, 90);
  } else {
    progress = Math.min(progress + 0.5, 75);
  }

  progressBarFill.style.width = `${progress}%`;

  if (progress < 100) {
    requestAnimationFrame(updateProgress);
  }
}

// Start updating as soon as script runs
requestAnimationFrame(updateProgress);

// Once page is fully loaded
window.addEventListener("load", () => {
  progress = 100;
  progressBarFill.style.width = "100%";

  setTimeout(() => {
    loadingOverlay.style.opacity = "0";

    setTimeout(() => {
      loadingOverlay.remove();
      document.body.style.overflow = "";
    }, 400);
  }, 300);
});
