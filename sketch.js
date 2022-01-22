const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj

var leftSide,rightSide;
var world, engine;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
    

	// Crie a bola aqui
	var ball_options = {
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
	
	
	
	ball = Bodies.circle(50,300,25,ball_options);
	World.add(world,ball);

	
	//Crie o chão e as paredes esquerda e direita (USANDO A CLASSE ground.js)
groundObj = new ground(800, 600, 1600, 20);
rightSide = new ground(1100,600,20,200);
leftSide = new ground(850,600,20,200);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  

 // desenha a bola aqui (ellipse...)
    ellipse(ball.position.x,ball.position.y,25)
 // desenhe o chão e paredes aqui (display)
 //groundObj.display();
groundObj.display();
rightSide.display();
leftSide.display();
}

// SE precionar a tela UP -> deve ser aplicada uma força na bola
function keyPressed() {
  	if (keyCode === UP_ARROW) {
		// Aplique a força aqui
		Matter.Body.applyForce(ball, ball.position, {X:-0.001,y:-0.001})
  	}
}