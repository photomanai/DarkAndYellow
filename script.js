const nav_btn = document.getElementById("nav_btn");

document.addEventListener("DOMContentLoaded", (event) => {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.setAttribute("draggable", "false");
  });
});

window.addEventListener("scroll", () => {
  const value = window.scrollY;

  if (value >= 700) {
    nav_btn.style.display = "block";
  } else {
    nav_btn.style.display = "none";
  }
});

// document.addEventListener("mousemove", function (e) {
//   var cursor = document.querySelector(".cursor");
//   cursor.style.left = e.clientX + "px";
//   cursor.style.top = e.clientY + "px";
// });
