const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var doll;

function preload (){
  bg = loadImage ("snow2.jpg")
  dollimg=loadAnimation ("doll 1.png","doll 2.png","doll 3.png")
}
function setup() {
  engine=Engine.create();
  world= engine.world;
  createCanvas(800,400);
doll = createSprite(150,300)
doll.addAnimation("runner",dollimg)
doll.velocityX = 2;
}

function draw() {
  background(bg);  
  drawSprites();
}