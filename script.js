document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".view-gallery-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const galleryId = btn.getAttribute("data-gallery");
      const galleryDiv = document.getElementById(`gallery-${galleryId}`);

      // Toggle visibility
      galleryDiv.classList.toggle("d-none");
      
    });
  });
});