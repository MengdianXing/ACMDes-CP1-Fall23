let cat;
let mice = []
const numMice = 12;

function setup() {
  createCanvas(600, 600);
  cat = new Cat();
  for (let i = 0; i < numMice; i++) {
    mice.push(new Mouse());
  }
}

function draw() {
  background(220);
  let activeMice = 0; // count how many mice still alive
  for (let m of mice) {
    if (!m.caught) {
      activeMice++;
      m.move();
      m.display();
      if (dist(cat.x, cat.y, m.x, m.y) < 15) {
        m.caught = true;
      }
    }
  }

  if (activeMice > 0) {
    cat.move();
  }
  cat.display();
}
function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      let newMouse = new Mouse();
      newMouse.x = mouseX;
      newMouse.y = mouseY;
      mice.push(newMouse);
  }
}