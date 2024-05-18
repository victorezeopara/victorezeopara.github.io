const div1 = document.querySelector(".text1");
const display = document.querySelector(".message");
let counter = 0;

div1.addEventListener("click", () => {
  console.log("you just clicked");
  display.textContent = "you just clicked " + counter++ + " times";
});

hello;
