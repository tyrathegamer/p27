
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,roof;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=createSprite(450,150,550,60);
	roofbody=Matter.Bodies.rectangle(450,150,550,60,{isStatic:true})
	
	ball=new Ball(100,250);
	ball2=new Ball(170,250);
    ball3=new Ball(240,250);
	ball4=new Ball(310,250);
	ball5=new Ball(380,250);
	chain1=new Chain(ball.body,{x: 200, y:150});
	chain2=new Chain(ball2.body,{x: 325, y:150});
	chain3=new Chain(ball3.body,{x: 450, y:150});
	chain4=new Chain(ball4.body,{x: 575, y:150});
	chain5=new Chain(ball5.body,{x: 700, y:150});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.x=roofbody.position.x;
  roof.y=roofbody.position.y;
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}
	function keyPressed() {
		if (keyCode === UP_ARROW){
				Matter.Body.applyForce(ball.body,ball.body.position,{x:-85,y:-85})

		}
	}
