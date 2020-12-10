class Box {
  constructor(x, y) {

    this.BboxImg = loadImage("Images/dustbin.png");


var options = {
      'restitution': 0.8,
      'friction': 1.0,
      'density': 1.5,
      'isStatic': true
    }
    this.angle = 0;
    push();
    this.Bbody = Bodies.rectangle(x, y+70, 200, 20, options);
    this.x = x;
    this.y = y;
    this.width = width/10;
    this.height = height/20 ;
    pop();

    this.Rbody = Bodies.rectangle(x+100, y+100, 20, 100, options);
    
    this.Lbody = Bodies.rectangle(x-100, y+100, 20, 100, options);
    Body.setAngle(this.Lbody, this.angle);
    Body.setAngle(this.Rbody, (-1) * this.angle);


    World.add(world, this.Bbody);
    World.add(world, this.Lbody);
    World.add(world, this.Rbody);
  }
  display() {
    var Bpos = this.Bbody.position;
    var Lpos = this.Lbody.position;
    var Rpos = this.Rbody.position;

   /* var angle = this.body.angle;
    push();
    translate(Lpos.x, Lpos.y);
    rotate(this.angle);
    rectMode(CENTER);
    fill("black");
    //rect(Lpos.x, (-1)*Lpos.y, 20, 200);
    pop();

    push();
    translate(Rpos.x, Rpos.y);
    rotate((-1) * this.angle);
    rectMode(CENTER);
    fill("black");
    rect(0, -120, 20, 200);
    pop();

    console.log("Lpos.x: "+Lpos.x);
    console.log("Lpos.y: "+Lpos.y);*/

    push();
    //translate(Bpos.x, Bpos.y);
    rotate((-1)*this.angle);
    imageMode(CENTER);
    
    fill("black");
    image(this.BboxImg, this.x, this.y-30, this.width, this.height+200)
    
    pop();
  }
};
