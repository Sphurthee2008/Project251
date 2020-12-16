
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,basket,ground;
var engine,world

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,200,15.5);
	
	basket2 = new Side(965,410,20,100);
	basket = new Side(1035,410,20,130);
	basket1 = new Basket(1000,450,80,20);

	ground = new Ground(width/2,470,width,20);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

  Engine.update(engine);

  paper.display();
  basket.display();
  basket2.display();
  basket1.display();
  ground.display();


}

function keyPressed (){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:60 , y:-40});
	}
}