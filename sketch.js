    const Engine = Matter.Engine;
    const World= Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;

var block1 ,block2 ,block3 ,block4 ,block5 ,block6 ,block7 ,block8, block9, block10, block11, block12, 
    block13, block14, block15, block16;

var blocks1 ,blocka2 ,blocks3 ,blocks4 ,blocks5 ,blocks6 ,blocks7 ,blocks8, blocks9;

var engine, world;

var ground1 ,sling1, ground2, poly1, polyImg;

function preload(){

polyImg = loadImage("polygon.png");
    
} 

function setup(){
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;
Engine.update(engine);

ground1 = new Ground(390,300,250,10);
ground2 = new Ground(700,200,200,10); 

//level one 
block1 = new Block(300,275,30,40); 
block2 = new Block(330,275,30,40); 
block3 = new Block(360,275,30,40); 
block4 = new Block(390,275,30,40); 
block5 = new Block(420,275,30,40); 
block6 = new Block(450,275,30,40); 
block7 = new Block(480,275,30,40); 

//level two 
block8 = new Block(330,235,30,40); 
block9 = new Block(360,235,30,40); 
block10 = new Block(390,235,30,40); 
block11 = new Block(420,235,30,40); 
block12 = new Block(450,235,30,40); 

//level three 
block13 = new Block(360,195,30,40);
 block14 = new Block(390,195,30,40); 
 block15 = new Block(420,195,30,40); 
 
 //top 
 block16 = new Block(390,155,30,40); 
 
 //set 2 for second stand //level one 
 blocks1 = new Block(640,175,30,40); blocks2 = new Block(670,175,30,40); 
 blocks3 = new Block(700,175,30,40); 
 blocks4 = new Block(730,175,30,40); 
 blocks5 = new Block(760,175,30,40); 
 
 //level two 
 blocks6 = new Block(670,135,30,40); 
 blocks7 = new Block(700,135,30,40); 
 blocks8 = new Block(730,135,30,40); 
 
 //top 
 blocks9 = new Block(700,95,30,40);
 
 fill("yellow");

 poly1 = Bodies.circle(50,200,20);
 World.add(world,poly1);

 sling1 = new Slingshot(this.poly1,{x:100,y:200});
 
}

function draw(){
background(0);
Engine.run(engine);

ground1.display();
ground2.display();

imageMode(CENTER);
image(polyImg, poly1.position.x, poly1.position.y, 40, 40);

sling1.display();

fill(0,182,255);
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

fill("pink");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

fill(0,255,255);
block13.display();
block14.display();
block15.display();

fill("grey");
block16.display();

fill(0,182,255);
blocks1.display();
blocks2.display();
blocks3.display();
blocks4.display();
blocks5.display();

fill(0,255,255);
blocks6.display();
blocks7.display();
blocks8.display();

fill("pink");
blocks9.display();

}

function mouseDragged(){
 Matter.Body.setPosition(this.poly1,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling1.fly();
}