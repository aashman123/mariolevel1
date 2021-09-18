var bgImage, marioAlive, marioDead, mario, bg;
function preload() {
  bgImage = loadImage("images/bgnew.jpg");
  marioAlive = loadAnimation(
    "images/mar1.png",
    "images/mar2.png",
    "images/mar3.png",
    "images/mar4.png",
    "images/mar5.png",
    "images/mar6.png",
    "images/mar7.png"
  );
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(500, 300, 1000, 600);
  bg.addImage(bgImage);
  mario = createSprite(50, 440, 50, 50);
  mario.addAnimation("alive", marioAlive);
  mario.scale = 0.25;
  bg.scale = 0.375;
  ground = createSprite(500, 520, 1000, 20);
  ground.visible = false;
}

function draw() {
  if (keyDown("space")) {
    mario.velocityY = -10;
  }
  mario.velocityY = mario.velocityY + 0.3;
  mario.collide(ground);
  drawSprites();
}
