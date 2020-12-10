
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper;
var box, boxImg;
var world, engine;
var b1, b2;

function preload() {
	boxImg = loadImage("Images/dustbin.png");
}

function setup() {
	createCanvas(1800, 400);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	ground = new Ground(900, 380, 1800, 20);

	box = new Box(1300, 290);
	
	
	
	paper = new Paper(200, 220, 70, 70);

	b1 = new Ground(1220, 280, 20, 180);
	b2 = new Ground(1380, 280, 20, 180);

	
	Engine.run(engine);

}


function draw() {
	background("grey");
	

	paper.display();
	ground.display();
	box.display();


	
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(paper.body, paper.body.position, { x: 1130, y: -1130 });
	}
}

