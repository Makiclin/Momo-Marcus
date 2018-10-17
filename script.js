$( document ).ready(function() {
    console.log( "ready!" );


// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
		options: {
            width: 800,
            height: 600,
            background: '#0f0f13',
            showAngleIndicator: false,
            // wireframes: false,
        }
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
var poop = Bodies.rectangle(600, 50, 100, 100, {
                render: {
                    sprite: {
                        texture:  '/img/poop.png'
                    }
                }}
            );

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground, poop]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

});
