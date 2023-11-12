//set uo initial parameters
const radius = 100; 
let blobs = []; 
const colors = ['#ff0000', '#00ff00', '#0000ff'];
const positionOffset = 30;

// Define the Blobs class
class Blobs {
  constructor(offset, scale, x, y, tSpeed, color) {
    this.offset = offset;
    this.scale = scale;
    this.x = x; 
    this.y = y;
    this.tSpeed = tSpeed; 
    this.c = color;
    this.t = 0;
    this.s = 0;
  }

  //method to display the blob
  display() {
    push();
    fill(this.c);
    translate(this.x, this.y);
    this.s = lerp(this.s, 1, 1);
    scale(this.s);
    noiseDetail(0.7, 0.5);
    beginShape();
    for (let i = 0; i < TWO_PI; i += radians(1)){
      let x = this.offset * cos(i) + this.offset;
      let y = this.offset * sin(i) + this.offset;
      let r = radius + map(noise(x, y, this.t), 0, 1, -this.scale, this.scale);
      let x1 = r * cos(i);
      let y1 = r * sin(i); 
      vertex(x1, y1);

    }
    endShape();
    this.t += this.tSpeed;
    pop();
  }
}

function generateBlobs(positionX, positionY) {
  const offset = random (0.4, 100)
  new Array(3).fill(1).map((_, i) => {
    const scale = random(20, 80)
    
    const x = positionX + random(-positionOffset, positionOffset)
    const y = positionY + random(-positionOffset, positionOffset)
    
    const tSpeed = random(0.02, 0.1)
    const color = colors[i % 3]
    
    let blob = new Blobs (offset, scale, x, y, tSpeed, color)
    blobs.push(blob)
    
    
  });
}

function setup() {
  createCanvas(900, 900);
  colorMode(HSB, 360, 1,1)
  generateBlobs(100, 100)
  generateBlobs(350, 100)
  generateBlobs(600, 100)
  generateBlobs(100, 350)
  generateBlobs(350, 350)
  generateBlobs(600, 350)
  generateBlobs(100, 600)
  generateBlobs(350, 600)
  generateBlobs(600, 600)
  
  
}

function draw() {
  clear()
  noStroke()
  background(100, 0, 0);
  blendMode(SCREEN)
  blobs.forEach(blob => blob.display())
}