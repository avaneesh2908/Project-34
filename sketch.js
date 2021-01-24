const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage;

function preload() {
    backgroundImage = loadImage("images/GamingBackground.png");
}

function setup() {
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,570,1000,20);

    box1 = new Box(500,520,70,70);
    box2 = new Box(610,520,70,70);
    box3 = new Box(720,520,70,70);
    box4 = new Box(500,440,70,70);
    box5 = new Box(720,440,70,70);
    box6 = new Box(610,440,70,70);
    box7 = new Box(500,360,70,70);
    box8 = new Box(720,360,70,70);
    box9 = new Box(610,360,70,70);
    box10 = new Box(500,280,70,70);
    box11 = new Box(720,280,70,70);
    box12 = new Box(610,280,70,70);
    box13 = new Box(500,200,70,70);
    box14 = new Box(720,200,70,70);
    box15 = new Box(610,200,70,70);
    box16 = new Box(500,120,70,70);
    box17 = new Box(720,120,70,70);
    box18 = new Box(610,120,70,70);

    ball = new Ball(200,200,250);

    slingshot = new Slingshot(ball.body,{x: 200,y: 50});

    monster = new Monster(900,300,200,200);
}

function draw() {
    background(backgroundImage);
    Engine.update(engine);

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
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    ball.display();

    slingshot.display();

    monster.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});
}