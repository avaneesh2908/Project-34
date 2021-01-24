class Ball {
    constructor(x, y, radius) {
      var options = {
        isStatic: true,
        restitution: 0.8,
        friction: 1.0,
        density: 0.04
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("images/Superhero-01.png","images/Superhero-02.png");
      World.add(world, this.body);
    }
    display() {
      var pos =this.body.position;
      push();
      imageMode(RADIUS);
      image(this.image, pos.x-100, pos.y-50, this.radius, this.radius);
      pop();
    }
};