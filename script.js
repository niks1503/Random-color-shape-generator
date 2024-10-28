let color_btn = document.querySelector(".color_button");
let shape_btn = document.querySelector(".shape_button");
let circle_div = document.querySelector(".circle_div");
let shape = document.querySelector("#square");

function generateColor() {
  let string = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += string[Math.floor(Math.random() * 16)];
  }

  return color;
}

color_btn.addEventListener("click", function () {
  circle_div.style.backgroundColor = generateColor();
});

function randomShape() {
  let arr = [
    "square",
    "round",
    "diamond",
    "triangle",
    "arrow",
    "frame",
    "star",
    "cross",
    "left-point",
    "right-point",
    "parallal",
    "cheg",
  ];
  let idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

shape_btn.addEventListener("click", function () {
  let ele = randomShape();
  shape.id = ele;
});
