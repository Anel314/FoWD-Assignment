var nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    nav.classList.remove("hideNavbarBackground");
    nav.classList.add("showNavbarBackground");
  } else {
    nav.classList.remove("showNavbarBackground");
    nav.classList.add("hideNavbarBackground");
  }
  console.log(window.scrollY);
});
