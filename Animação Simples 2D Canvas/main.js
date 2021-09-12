var myRectangle = {
    x: 0,
    y: 500,
    width: 200,
    height: 200,
    speed: 5,
    img: new Image()
};

var lastTime = 0;


function drawBackground() {
    context.drawImage(bar, 0, 0, canvas.width, canvas.height);
}



function update() {


    myRectangle.x += myRectangle.speed;
    myRectangle.y -= myRectangle.speed;

    checkColisao();

}

function checkColisao() {
    const imgLargura = myRectangle.img.width * 0.15;
    const imgAltura = myRectangle.img.height * 0.15;

    if (myRectangle.x + imgLargura >= canvas.width || myRectangle.x <= 0) {

        myRectangle.x += myRectangle.speed *= -1;
        myRectangle.y -= myRectangle.y - myRectangle.speed * -1;
    }

    if (myRectangle.y + imgAltura >= canvas.height - 50 || myRectangle.y <= 0) {

        myRectangle.y -= myRectangle.y - myRectangle.speed * -1;
        myRectangle.y += myRectangle.speed *= -1;
        myRectangle.x += myRectangle.speed *= -1;
    }
}




function draw() {
    context.beginPath();
    context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
    context.drawImage(myRectangle.img, myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height)

}

function animate(time) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    update();
    draw();
    window.requestNextAnimationFrame(animate);
}

var canvas = document.getElementById("animation-screen");
canvas.width = window.innerWidth - 25;
canvas.height = window.innerHeight - 25;
var context = canvas.getContext("2d");

var bar = new Image();
bar.src = "background.jpg";
myRectangle.img.src = "cerveja.jpg"

window.requestNextAnimationFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame;

animate(new Date());