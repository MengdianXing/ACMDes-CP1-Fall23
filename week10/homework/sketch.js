let angle = 0;
let lastTriggerTime = 0;
let interval = 2000; // 2 seconds

// Variables for rectangle position
let rectX, rectY;

function setup() {
  createCanvas(800, 600);
  // Initialize rectangle position
  rectX = random(width);
  rectY = random(height);
}

function draw() {
  background(255,454,242);
  fill(100, 200, 255);
  // Repeated motion using trigonometric function
  let x = width / 2 + cos(angle) * 100;
  let y = height / 2 + sin(angle) * 100;
  ellipse(x, y, 50, 50);
  angle += 0.05;
  fill(302, 201, 288);
  // Draw the rectangle continuously
  rect(rectX, rectY, 60, 60);

  // Interval-based motion for updating rectangle position
  if (millis() - lastTriggerTime > interval) {
    lastTriggerTime = millis();
    rectX = random(width);
    rectY = random(height);
  }
}