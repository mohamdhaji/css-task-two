var toggleButton = document.querySelector(".toggle-button");
var backdrop = document.querySelector(".backdrop");
var mobileNav = document.querySelector(".mobile-nav");

toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
  console.log("hi");
});

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
});
