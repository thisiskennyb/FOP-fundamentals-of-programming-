document.querySelector("#turnRed").addEventListener("click", turnRedFunction);
document.querySelector("#turnBlue").addEventListener("click", turnBlueFunction);
document.querySelector("#turnGreen").addEventListener("click", turnGreenFunction);
document.querySelector("#turnYellow").addEventListener("click", turnYellowFunction);
document.querySelector("#turnOrange").addEventListener("click", turnOrangeFunction);
document.querySelector("#turnRandom").addEventListener("click", turnRandomFunction);


function turnRedFunction() {
  document.querySelector("body").style.backgroundColor = "red";
}

function turnBlueFunction() {
  document.querySelector("body").style.backgroundColor = "blue";
}

function turnGreenFunction() {
  document.querySelector("body").style.backgroundColor = "green";
}

function turnYellowFunction() {
  document.querySelector("body").style.backgroundColor = "yellow";
}

function turnOrangeFunction() {
  document.querySelector("body").style.backgroundColor = "orange";
}

function turnRandomFunction() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
  document.body.style.backgroundColor = rgbColor;
}
