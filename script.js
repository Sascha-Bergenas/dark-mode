const dark = document.getElementById("dark-mode");
const light = document.getElementById("light-mode");

dark.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
});
light.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});
