// Redirect any button clicks with [data-link]
document.querySelectorAll("[data-link]").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = btn.getAttribute("data-link");
  });
});

// Auto-update copyright year
document.getElementById("copyright").textContent =
  `© ${new Date().getFullYear()} Drop The Book. All rights reserved.`;
