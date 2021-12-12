const progress = document.querySelector(".progress_done");
setTimeout(() => {
  progress.style.width = progress.getAttribute("data-done") + "%";
  progress.style.opacity = 1;
}, 500);
