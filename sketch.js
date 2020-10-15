const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,bodies;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;


 var options={
   isStatic:true
 }
ground=Bodies.rectangle(200,390,400,20,options);
World.add(world,ground);
console.log(ground);

var options={
  restitution:2
}

ball=Bodies.circle(40,20,30,options);
World.add(world,ball);
 
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
}