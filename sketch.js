const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box123= new Box(600, 100, 70, 70);
  box145 = new Box(600, 100, 70, 70);
  box167 = new Box(600, 100, 70, 70);
  box178 = new Box(600, 100, 70, 70);
  box168 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70,70);
  box4 = new Box(900, 100, 70,70);
  box5 = new Box(900, 100,70,70);
  box500 = new Box(900, 100,70,70);

  box6=new Box(800,95,70,70);
  box76=new Box(800,95,70,70);
  box68=new Box(800,95,70,70);
  box69=new Box(800,95,70,70);
  box60=new Box(800,95,70,70);


 
  box14=new Box(700,85,70,70);
  box16=new Box(700,85,70,70);
  box18=new Box(700,85,70,70);
  box19=new Box(700,85,70,70);
  box10=new Box(700,85,70,70);











}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box76.display();
  box68.display();
  box69.display();
  box60.display();
  box16.display();
  box18.display();
  box19.display();
  box10.display();
  box14.display();
  box123.display();
  box145.display();
  box167.display();
  box178.display();
  box168.display();
  box500.display();

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}