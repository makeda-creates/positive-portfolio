
const projects = [
  {
    category: "01 / BRANDING",
    title: "Bayou Botanicals",
    description:
      "A self-initiated concept for a botanical brand. " +
      "Explore a visual identity, packaging, typography " +
      "and a palette inspired by plants and twilight."
  },
  {
    category: "02 / CAMPAIGN",
    title: "Jazz in the Garden",
    description:
      "A fictional music-event campaign exploring poster " +
      "design, editorial layouts, social graphics and " +
      "a distinctive visual direction."
  },
  {
    category: "03 / DIGITAL",
    title: "The Little Recipe Lab",
    description:
      "A concept for a playful recipe-book interface. " +
      "The next stage would include user flows, accessible " +
      "interface design and a coded interactive prototype."
  },
  {
    category: "04 / SCHOOL WORK",
    title: "School Work",
    description:
      "A growing collection of projects from my Computing " +
      "and Graphics studies. More school work is coming soon."
  }
];

const dialog = document.querySelector("#project-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogCategory = document.querySelector("#dialog-category");
const dialogDescription = document.querySelector("#dialog-description");
const closeButton = document.querySelector(".close-dialog");

document.querySelectorAll("[data-project]").forEach((card) => {
  card.addEventListener("click", () => {
    const project = projects[Number(card.dataset.project)];

    dialogCategory.textContent = project.category;
    dialogTitle.textContent = project.title;
    dialogDescription.textContent = project.description;

    dialog.showModal();
  });
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", () => {
  const isDay = document.body.classList.toggle("day-mode");

  themeButton.textContent = isDay ? "Night mode ☾" : "Day mode ☼";
  themeButton.setAttribute("aria-pressed", String(isDay));
});

const fireflyField = document.querySelector(".fireflies");

for (let i = 0; i < 24; i++) {
  const firefly = document.createElement("span");

  firefly.className = "firefly";
  firefly.style.left = `${Math.random() * 100}%`;
  firefly.style.top = `${Math.random() * 100}%`;
  firefly.style.animationDelay = `${Math.random() * 4}s`;
  firefly.style.animationDuration = `${3 + Math.random() * 4}s`;

  fireflyField.appendChild(firefly);
}
