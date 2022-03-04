var path, boy;
var pathImage;
var boyImage;
var leftBoundary, rightBoundary;

function preload(){
  //imagens pré-carregadas
  pathImage = loadImage("path.png");
  boyImage = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
path = createSprite(200,200);
path.addImage(pathImage);
path.velocityY = 3
path.scale = 1.1
boy = createSprite(200,300,30,30);
boy.addAnimation("JakeRunning",boyImage);
boy.scale = 0.08
rightBoundary = createSprite(410,0,100,800);
rightBoundary.visible = false;
leftBoundary = createSprite(0,0,100,800);
leftBoundary.visible = false;
  //crie sprite aqui
}

function draw() {
  background(0);
drawSprites();
boy.x = World.mouseX;
if(path.y>400){
path.y = height/2;
}
edges = createEdgeSprites();
boy.collide(edges[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary);

}
