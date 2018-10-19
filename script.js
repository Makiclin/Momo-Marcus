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
            background: 'transparent',
            showAngleIndicator: false,
            wireframes: false,
        }
});


$('body').on('click', function(e) {
var bleep = new Audio('./audio/like.mp3');

var bleep2 = new Audio('./audio/like.mp3');

var playFirst = true;

function playSound() {
  if (playFirst) {
    bleep.play();
  } else {
    bleep2.play();
  }
  playFirst = !playFirst;
}

playSound();

});


$('body').on('contextmenu', function(e) {
var bleep = new Audio('./audio/youknow.wav');

var bleep2 = new Audio('./audio/youknow.wav');

var playFirst = true;

function playSound() {
  if (playFirst) {
    bleep.play();
  } else {
    bleep2.play();
  }
  playFirst = !playFirst;
}

playSound();

});


// create two boxes and a ground
var ground = Bodies.rectangle(840, 900, 1680, 10, { isStatic: true });
var wall1 = Bodies.rectangle(-10, 0, 10, 2000, { isStatic: true });
var wall2 = Bodies.rectangle(1690, 0, 10, 2000, { isStatic: true });

var basis =[ground,wall1,wall2];



// $('body').on('click', function () {
//    emojis.push(poop2);
//    console.log(emojis.length);
// });

$('body').on('click', function(e) {

  var scale = (Math.random() * 1)+0.5;
  var size = scale * 55;

  var xPos = e.pageX
  var yPos = e.pageY


  var poop = function () {


      return Bodies.circle(xPos, yPos, size, {
          density: 0.0005,
          frictionAir: 0.06,
          restitution: 0.3,
          friction: 0.25,
          render: {
              sprite: {
                  texture:  '/img/poop.png',
                  xScale: scale,
                  yScale: scale,
              }
          }
      });
  }


      World.add(engine.world, poop());

});






$('body').on('contextmenu', function(e) {



  var xPos = e.pageX
  var yPos = e.pageY


  var scale = (Math.random() * 1)+0.5;
  var size = scale * 55;


  var poop = function () {


      return Bodies.circle(xPos, yPos, size, {
          density: 0.0005,
          frictionAir: 0.06,
          restitution: 0.3,
          friction: 0.25,
          render: {
              sprite: {
                  texture:  '/img/youknow.png',
                  xScale: scale,
                  yScale: scale,
              }
          }
      });
  }


      World.add(engine.world, poop());

});


// }


// add all of the bodies to the world
World.add(engine.world, basis);



// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

});
