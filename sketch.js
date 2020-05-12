// You could have multiple flags like: start, launch to indicate the state of the game.
var flag = (200,200,10,10);
var ground,cannon,cannonball,ball,bg;
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
function preload() {
    backgroundImg = loadImage("assets/bg.jpg");
}
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    tanker = new Tanker(200,400,50,50);
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background(backgroundImg);
    Engine.update(engine);
    ground.display();
    tanker.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}