const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
function preload(){
  polygonImg=loadImage("polygon.png")
}
function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  b1=new Box(330,275);
  b2=new Box(360,275);
  b3=new Box(390,275);
  b4=new Box(420,275);
  b5=new Box(450,275);
  b6=new Box(300,275);
  b7=new Box(480,275);
  b8=new Box(330,235);
  b9=new Box(360,235);
  b10=new Box(390,235);
  b11=new Box(420,235);
  b12=new Box(450,235);
  b13=new Box(360,195);
  b14=new Box(390,195);
  b15=new Box(420,195);
  b16=new Box(390,155);
  b17=new Box(900,100);
  b18=new Box(900,140);
  b19=new Box(930,140);
  b20=new Box(870,140);
  b21=new Box(900,180);
  b22=new Box(930,180);
  b23=new Box(960,180);
  b24=new Box(870,180);
  b25=new Box(840,180);
  ground1=new Ground(600,390,1200,20);
  ground2=new Ground(390,305,250,20);
  ground3=new Ground(900,205,250,20);
  var options={
    density:1.2,
    restitution:0.1,
  }
  polygon=Bodies.circle(50,200,20,options);
  World.add(world,polygon);
  
  chain1=new SlingShot(this.polygon,{x:100,y:200});
}
function draw() {
  background(56,44,44); 
  Engine.update(engine);
  fill(135,206,234);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill(254,192,203);
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill(63,224,208);
  b13.display();
  b14.display();
  b15.display();
  fill(128,128,128);
  b16.display();
  fill(254,192,203);
  b17.display();
  fill(63,224,208);
  b18.display();
  b19.display();
  b20.display();
  fill(135,206,234);
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain1.fly();
}