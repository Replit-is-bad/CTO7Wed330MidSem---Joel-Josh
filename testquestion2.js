
let ball;

function setup() {
    createCanvas(600, 400);
    background(220);
    world.gravity.y =10;

    ball = new Sprite();
    ball.x = 100;
    ball.y = 200;
    ball.diameter = 50;
    ball.vel.x = 3;
    ball.vel.y =3; 
    ball.bounciness = 1; 
    ball.collider = "dynamic";


    floor = new Sprite();
    floor.x = 300;
    floor.y = height-20;
    floor.width = 600;
    floor.height = 30;
    floor.collider ='static';
}

function draw() {

    if(mouse.presses('left')) {
        new Sprite(mouse.x,200,30,30,'dynamic')
    }

    
}
