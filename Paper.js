class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.5,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius = radius;
      Body.setAngle(this.body, radius);
      //this.image = loadImage("paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      //image(this.image, 0, 0, this.width, this.height);
      fill("blue");
      stroke("neon");
      circle(0, 0, this.radius)
      pop();
    }
  };