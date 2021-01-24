class Monster {
    constructor(x, y, width, height) {
      var options = {
        isStatic: false,
        restitution: 0.8,
        friction: 1.0,
        density: 0.04
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/Monster-01.png");
      World.add(world, this.body);
    }
    display() {
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
      pop();
    }
  };