class Mouse {
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.speed = 0.3; // Slower speed
    this.stepSize = 15; // Farther movement
    this.caught = false;
  }
  
  display(){
    if (!this.caught) {
      push(); // Start a new drawing state
      translate(this.x, this.y);

      // Drawing a mouse with body and ears
      fill(150, 150, 150); // Gray color for the mouse
      ellipse(0, 0, 15, 10); // Mouse's body
      ellipse(-5, -5, 5, 5); // Left ear
      ellipse(5, -5, 5, 5); // Right ear

      pop(); // Restore original drawing state
    }
  }
  
  move(){
    if (!this.caught) {
      this.x += random(-this.speed, this.speed) * this.stepSize;
      this.y += random(-this.speed, this.speed) * this.stepSize;
      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height);
    }
  }
}
