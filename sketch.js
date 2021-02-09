const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var canvas;
var spaceship,spaceshipImage;

var backgroundImage;

var scene;


function preload(){
 spaceshipImage=loadImage("Spaceship.jpg");
 backgroundImage=loadImage("background 1.jpg");

}

function setup() {
  
 canvas= createCanvas(displayWidth,displayHeight-170);
 
  scene=createSprite(0,0,displayWidth,displayHeight);
  scene.addImage(backgroundImage);
  scene.scale=7;
 // scene.x=scene.width/2;

  engine=Engine.create();
  world=engine.world;

  spaceship=createSprite(displayWidth/2,600,100,50);
  spaceship.addImage(spaceshipImage);
  spaceship.scale=0.1;
}

function draw() {
  //background(backgroundImage); 
  background(0);
 scene.velocityX=+3; 

  if(scene.x<0){
  scene.x=scene.width/2;

  }
  //Engine.update(engine);
  drawSprites();
}