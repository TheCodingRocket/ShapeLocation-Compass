// Move the mouse across the canvas to leave a trail
function setup() {
  //slow down the frameRate to make it more visible
  frameRate(10);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(244, 248, 252);
  line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);
}
