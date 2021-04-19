const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,box1,box2,box3,paper1

var edges;

function preload()
{
	boximage = loadImage('box.png');
}

function setup() {
	
	
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	box1 = new Box(1100,495,150,15);
	box2 = new Box(1185,420,15,170);
	box3 = new Box(1015,420,15,170);
	
	ground1 = new Ground(700,550,1400,30);
	
	paper1 = new Paper(200,300);
	
	launcher1= new launcher(paper1.body,{x:600,y:150});

	 Engine.run(engine);
  
}


function draw() {
	background("pink");
    textSize(30);
	textFont("Georgia");
	fill("black");
	text("Can you please help me to put this paper ball in the dustbin?",100,50);

	Engine.update(engine);
	
	edges=createEdgeSprites();
	
	ground1.display();
	box3.display();
	box1.display();
	box2.display();
	image(boximage,1000,330,200,200);
	paper1.display();
	launcher1.display();
	
  drawSprites();
}
		
function mouseDragged(){
    Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher1.fly();
}
