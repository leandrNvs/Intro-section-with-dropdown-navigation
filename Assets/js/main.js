const openMenu = document.querySelector(".open-navbar");
const closeMenu = document.querySelector(".close-navbar");
const navbar = document.querySelector(".header__container");

openMenu.addEventListener("click", () => {
  navbar.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  navbar.classList.remove("active");
});

const dropdownButtons = document.querySelectorAll(".dropdown-btn");

dropdownButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const nextSibling = this.nextElementSibling;
    const icon = this.querySelector("img");

    if (nextSibling.style.maxHeight === "") {
      nextSibling.style.maxHeight = nextSibling.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
    } else {
      nextSibling.style.maxHeight = null;
      icon.style.transform = "rotate(0deg)";
    }
  });
});
