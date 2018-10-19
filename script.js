$( document ).ready(function() {
    console.log( "ready!" );


// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
    mouseConstraint = Matter.MouseConstraint;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
		options: {
            width: 1680,
            height: 880,
            background: '#FFFFFF',
            showAngleIndicator: false,
            wireframes: false,
        }
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(840, 878, 1680, 10, { isStatic: true });
var poop = Bodies.rectangle(600, 50, 80, 80, {
                render: {
                    sprite: {
                        texture:  '/img/poop.png'
                    }
                }}
            );

var poop2 = Bodies.rectangle(900, 50, 80, 80, {
                render: {
                    sprite: {
                        texture:  '/img/poop.png'
                    }
                }}
            );

var emojis =[boxA, boxB, ground, poop];



// $('body').on('click', function () {
//    emojis.push(poop2);
//    console.log(emojis.length)
// });

var ball = function (x, y) {

    return Bodies.circle(x, y, 23, {
        density: 0.0005,
        frictionAir: 0.06,
        restitution: 0.3,
        friction: 0.01,
        render: {
            sprite: {
                texture:  '/img/poop.png'
            }
        }
    });
}

var x;
var y;

$('body').on('click', function (e) {
    World.add(engine.world, ball());
    x = e.pageX;
    y = e.pageY;
})


// add all of the bodies to the world
World.add(engine.world, emojis);

console.log(emojis.length)

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

});
