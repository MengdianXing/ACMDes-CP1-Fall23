class Cat {
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.speed = 0.09;
    this.stepSize = 170;
  }
  
  
  display() {
    push(); // Start a new drawing state
    translate(this.x, this.y);

    // Drawing a cat with ears, body, and eyes
    fill(200, 100, 50); // Brown color for the cat
    ellipse(0, 0, 30, 20); // Cat's body
    triangle(-15, -20, -5, -10, -15, -10); // Left ear
    triangle(15, -20, 5, -10, 15, -10); // Right ear

    fill(255); // White for the eyes
    ellipse(-5, 0, 5, 5); // Left eye
    ellipse(5, 0, 5, 5); // Right eye

    fill(0); // Black for the pupils
    ellipse(-5, 0, 2, 2); // Left pupil
    ellipse(5, 0, 2, 2); // Right pupil

    pop(); // Restore original drawing state

  }
  
  move(){
    this.x += random(-this.speed, this.speed) * this.stepSize;
    this.y += random(-this.speed, this.speed) * this.stepSize;
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
}