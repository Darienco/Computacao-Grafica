var myRectangle = {
  x: 0,
  y: 75,
  width: 100,
  height: 50
};

function myTriangulo(x,y) {
  
  width = 100;
  height = 100;

  context.beginPath();
  context.moveTo(x+300,y+125);
  context.lineTo(x+380,y+45);
  context.lineTo(x+450,y+125);
  context.closePath();
  context.stroke();
  context.fillStyle = 'blue';
  context.fill();
}

function myCirculo(x,y) {
  
  context.beginPath();
  context.arc(x+75, y+75, 50, 0, Math.PI * 2, true); 
  context.closePath();
  context.fillStyle = 'yellow';
  context.fill();
}

var lastTime = 0;





function drawBackground(){
  context.drawImage(backzin,0,0, canvas.width, canvas.height);
}

function update(){
  var newX = 0;
  if (reverse){
    newX = myRectangle.x-10;
    if(newX > 0) {
      myRectangle.x = newX;
    } else {
      reverse = false;
    }
  } else {
    newX = myRectangle.x+10;
    
    if(newX < canvas.width - myRectangle.width) {
      myRectangle.x = newX;
    } else {
      reverse = true;
    }
  }
}

function draw(){
  context.beginPath();
  context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
  context.fillStyle = 'red';
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.stroke();

  myTriangulo(50,50);
  myTriangulo(500,80);
  myCirculo(832,421)
  myCirculo(333, 100);
  myCirculo(555,332)
}

function animate(time) {
  context.clearRect(0,0,canvas.width,canvas.height);
  drawBackground();
  update();
  draw();
  
  window.requestNextAnimationFrame(animate);
}

var canvas = document.getElementById("animation-screen");
canvas.width = window.innerWidth-25;
canvas.height = window.innerHeight-25;
var context = canvas.getContext("2d");
var reverse = false;
var fpsUpdate = 0;
var fpsValue = 0;
var backzin = new Image();
    backzin.src = "background.jpg";

window.requestNextAnimationFrame =  window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.oRequestAnimationFrame
  || window.msRequestAnimationFrame;

animate(new Date());