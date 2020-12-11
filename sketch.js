
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dayImage,boyImage,boy;

function preload()
{
	dayImage=loadImage("Plucking mangoes/1.jpg");
	boyImage=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mangoes(1350,340,50);
	mango2 = new Mangoes(1300,400,50);
	mango3 = new Mangoes(1200,400,50);
	mango4 = new Mangoes(1400,250,50);
	mango5 = new Mangoes(1250,410,50);
	mango6 = new Mangoes(1250,360,50);
	mango7 = new Mangoes(1520,400,50);
	mango8 = new Mangoes(1300,290,50);
	mango9 = new Mangoes(1420,330,50);
	mango10 = new Mangoes(1410,400,50);
	mango11 = new Mangoes(1480,350,50);
	ground = new Ground(800,690,1600,20);
	tree = new Tree(1350,450,500);
	stone = new Stone(300,300,10);
	 
	launcher = new Launcher(stone.body,{x:240,y:580});
	boy = createSprite(300,635,20,20);
	boy.addImage(boyImage);
	boy.scale=0.1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(dayImage);
  ground.display();
  tree.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  stone.display();
  launcher.display();
  
  drawSprites(); 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition({x:40,y:620});
		launcher.attach(stone.body);
	}
}


