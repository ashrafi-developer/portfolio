// Dropdown
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});


// // All , Projects , ... Btn

// Select buttons and projects container
const filterButtons = document.querySelectorAll('[id^="filter-"]');
const projectsContainer = document.getElementById("projects-container");

// Add event listeners to filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filterCategory = button.id.replace("filter-", "");
    const projectCards = projectsContainer.querySelectorAll("[data-category]");

    // Show or hide projects based on category
    projectCards.forEach((card) => {
      if (filterCategory === "all" || card.dataset.category === filterCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // Update button styles
    filterButtons.forEach((btn) => btn.classList.remove("underline", "text-white"));
    button.classList.add("underline", "text-white");
  });
});
  
// cart more

document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project_hover");

    projectCards.forEach((card) => {
      const moreBtn = card.querySelector(".more-btn");
      const closeBtn = card.querySelector(".close-btn");
      const hiddenDetails = card.querySelector(".hidden-details");

      moreBtn.addEventListener("click", () => {
        hiddenDetails.classList.remove("opacity-0", "pointer-events-none");
        hiddenDetails.classList.add("opacity-100", "pointer-events-auto");
      });

      closeBtn.addEventListener("click", () => {
        hiddenDetails.classList.add("opacity-0", "pointer-events-none");
        hiddenDetails.classList.remove("opacity-100", "pointer-events-auto");
      });
    });
  });

// Form 
