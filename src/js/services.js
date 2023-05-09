const items = document.querySelectorAll(".accordion-item");

items.forEach((item) => {
  const toggle = item.querySelector(".toggle");
  const icon = item.querySelector("img");

  item.addEventListener("click", () => {
    toggle.classList.toggle("hidden");
    icon.src = toggle.classList.contains("hidden")
      ? "/public/assets/icons/plus.svg"
      : "/public/assets/icons/minus.svg";
  });
});
