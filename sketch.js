
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
var options1 = {
    isStatic:true
}
ground = Bodies.rectangle(200,380,400,30,options1)
World.add(world,ground)
var options = {
    restitution:1.0
}
ball = Bodies.circle(200,200,40,options)
World.add(world,ball)
}
 
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
       boxes.push( new Box(mouseX,mouseY,40,40))
    }
}
 
function draw() {
    // Draw all the elements including the slider that 
Engine.update(engine)
    background(51);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,500,30)
ellipse(ball.position.x,ball.position.y,40,40)
    // Use a for loop to show all the boxes
for(var i=0;i<boxes.length;i++){
    boxes[i].show()
}
}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x, y, w, h) {

    // add options such as friction and restitution. Experiment with the values
 
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box
this.body = Bodies.rectangle(x,y,w,h)
 this.w=w
 this.h=h
World.add(world,this.body)
    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
        var position = this.body.position
        var angle = this.body.angle
        push()
        translate(position.x,position.y)
        rotate(angle)

        rectMode(CENTER)
        fill(random(1,255),random(1,255),random(1,255))
        rect(0,0,this.w,this.h)
        pop()
    }
}