const dark = document.getElementById("dark-mode");
const light = document.getElementById("light-mode");
const toggle = document.getElementById("sunMoon");
const icon = toggle.querySelector("i");

// dark.addEventListener("click", () => {
//   document.body.style.backgroundColor = "black";
// });
// light.addEventListener("click", () => {
//   document.body.style.backgroundColor = "white";
// });

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon", "light-mode");
    icon.classList.add("fa-sun", "dark-mode");
    console.log("if");
  } else {
    icon.classList.remove("fa-sun", "dark-mode");
    icon.classList.add("fa-moon", "light-mode");
    console.log("else");
  }
});
