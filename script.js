$(window).keypress(function (e) {
  if (e.key === ' ' || e.key === 'Spacebar') {
    // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
    e.preventDefault()
    $( ".insContainer" ).addClass("hide");
  }
})



var frequency = function(actionTarget, milliseconds, callback) {
  var mouseDown = 0;
  $(window).click(function() {
    if (mouseDown < actionTarget) mouseDown++;
  });
  var loop = setInterval(function() {
    callback(mouseDown / (actionTarget));
    mouseDown -= (1 - (actionTarget / milliseconds));
    if (mouseDown < 0) mouseDown = 0;
  }, milliseconds);
  this.stop = function() {
    clearInterval(loop);
  }
};

var rfrequency = function(actionTarget, milliseconds, callback) {
  var contextmenu = 0;
  $(window).contextmenu(function() {
    if (contextmenu < actionTarget) contextmenu++;
  });
  var loop = setInterval(function() {
    callback(contextmenu / (actionTarget));
    contextmenu -= (1 - (actionTarget / milliseconds));
    if (contextmenu < 0) contextmenu = 0;
  }, milliseconds);
  this.stop = function() {
    clearInterval(loop);
  }
};



var clickf=[];
var rclickf=[];

var clickEmoji = '/img/cool.png';
var rightClickEmoji =  '/img/youknow.png';


$( document ).ready(function() {


frequency(100, 1000, function(freq) {

    document.getElementById("result").innerHTML = Number(freq).toFixed(2);
    clickf.push(Number(freq));

    // console.log(clickf.slice(-1)[0]);

    if(clickf.slice(-1)[0] > 0.03 && clickf.slice(-1)[0] < 0.06){
      clickEmoji = '/img/vomiting.png';
      document.getElementById("my_camera").classList.add("gray50");
      document.getElementById("my_camera").classList.remove("gray90");
    }else{document.getElementById("my_camera").classList.remove("gray50");clickEmoji = '/img/cool.png';}

    if(clickf.slice(-1)[0] > 0.06){
      clickEmoji = '/img/poop.png';
      document.getElementById("my_camera").classList.add("gray90");
    }


});

rfrequency(100, 1000, function(freq) {

    document.getElementById("rresult").innerHTML = Number(freq).toFixed(2);
    rclickf.push(Number(freq));

    // console.log(clickf.slice(-1)[0]);

    if(rclickf.slice(-1)[0] > 0.02 && rclickf.slice(-1)[0] < 0.06){
      rightClickEmoji = '/img/dizzy.png';
      document.getElementById("my_camera").classList.add("gray50");
      document.getElementById("my_camera").classList.remove("gray90");
    }else{document.getElementById("my_camera").classList.remove("gray50");rightClickEmoji =  '/img/youknow.png';}

    if(rclickf.slice(-1)[0] > 0.06){
      rightClickEmoji = '/img/poop.png';
      document.getElementById("my_camera").classList.add("gray90");
    }


});




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
var bleep = new Audio('./audio/like_google.m4a');

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
                  texture:  clickEmoji,
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
          rotate:20,
          render: {
              sprite: {
                  texture:  rightClickEmoji,
                  xScale: scale,
                  yScale: scale,
                  rotate:20,
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
