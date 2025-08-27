let ball;

function setup() {
    createCanvas(600, 400);
    background(220);
    world.gravity.y =10;

    ball = new Sprite();
    ball.x = 100;
    ball.y = 200;
    ball.diameter = 50;
    ball.color = 'red';
    ball.vel.x = 3;
    ball.vel.y =3; 
    ball.bounciness = 1; 
    ball.collider = "dynamic";

    

    

}

function draw() {

    if(mouse.presses('left')) {
        new Sprite(mouse.x,200,30,30,'dynamic')
    }

    
}
