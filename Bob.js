class bob {
  constructor(x, y, r, angle) {
    var options = { 
      density: 1, 
      frictionAir: 0.005};

    this.body = Bodies.rectangle(x, y, r, options);
    
    this.r = r;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("white")
    ellipse(0, 0, this.r,this.r);
    pop();
  }
}