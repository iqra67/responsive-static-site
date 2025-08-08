document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const images = document.querySelectorAll(".gallery-image");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = button.getAttribute("data-category");

      images.forEach((img) => {
        const imgCategory = img.getAttribute("data-category");

        if (category === "all" || imgCategory === category) {
          img.classList.remove("d-none");
        } else {
          img.classList.add("d-none");
        }
      });
    });
  });
});
