
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5
var ground;


function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;
  
 bobDiameter=100; 
 bobStartPositionX=500;
 bobStartPositionY=500;
 ground=new Ground(500,100,500,30);
 bob1=new bob(bobStartPositionX,bobStartPositionY,bobDiameter);
 bob2=new bob(bobStartPositionX-bobDiameter*2,bobStartPositionY,bobDiameter);
 bob3=new bob(bobStartPositionX-bobDiameter*1,bobStartPositionY,bobDiameter);
 bob4=new bob(bobStartPositionX+bobDiameter*2,bobStartPositionY,bobDiameter);
 bob5=new bob(bobStartPositionX+bobDiameter*1,bobStartPositionY,bobDiameter);

rope1=new Rope(bob1.body,ground.body,0,0)
rope2=new Rope(bob2.body,ground.body,-bobDiameter*2,0)
rope3=new Rope(bob3.body,ground.body,-bobDiameter*1,0)
rope4=new Rope(bob4.body,ground.body,+bobDiameter*2,0)
rope5=new Rope(bob5.body,ground.body,+bobDiameter*1,0)

}
function draw(){
  background(0)
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}
function keyPressed() { if (keyCode === UP_ARROW) { Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-50,y:-45}); } }

function drawLine(constraint) { bobBodyPosition=constraint.bodyA.position
   groundBodyPosition=constraint.bodyB.position
    groundBodyOffset=constraint.pointB; groundBodyX=groundBodyPosition.x+goundBodyOffset.x 
    groundBodyY=groundBodyPosition.y+goundBodyOffset.y 
    line(bobBodyPosition.x, bobBodyPosition.y, groundBodyX,groundBodyY); }
