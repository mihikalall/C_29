const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var object;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
   world = engine.world;
  ground = new Ground(325,250,230,20)
  
  box1 = new Box (280,220,30,40)
  box2 = new Box (310,220,30,40)
  box3 = new Box (340,220,30,40)
  box4 = new Box (370,220,30,40)
  box5 = new Box (400,220,30,40)
  box6 = new Box (250,220,30,40)
  box7 = new Box (280,180,30,40)
  box8 = new Box (310,180,30,40)
  box9 = new Box (340,180,30,40)
  box10 = new Box (370,180,30,40)
  box11 = new Box (310,140,30,40)
  box12 = new Box (340,140,30,40)
  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon)
}

function draw() {
  background("black");  

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  ellipse(polygon.body.position.x,polygon.body.position.y,20,20);
  drawSprites();
}