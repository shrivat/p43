function setup() {
  createCanvas(900,900);
  iss=createSprite(400, 200, 50, 50);
  iss.addImage(issimg)
  spaceCraft=createSprite(600, 300)
  spaceCraft.addImage(spaceCraft1)
  spaceCraft.scale=0.3
  isDocking=false
}

function draw() {
  background(space);  
  drawSprites();
  console.log(spaceCraft.x)
  console.log(spaceCraft.y)
  if(spaceCraft.x<=366&&spaceCraft.y<=285){
    textSize(25)
    fill("white")
    text("Docking Succesful!",300, 500)
    isDocking=true
  }
  if(isDocking===false){

  
  if(keyDown("w")){
    spaceCraft.y-=2
  }

  if(keyDown("a")){
    spaceCraft.x-=2
  }

  if(keyDown("d")){
    spaceCraft.x+=2
  }

  if(keyDown("s")){
    spaceCraft.y+=2
   } }
}

function preload(){
  space=loadImage("spacebg.jpg")
  issimg=loadImage("iss.png")
  spaceCraft1=loadImage("spacecraft1.png")
  spaceCraft2=loadImage("spacecraft2.png")
  spaceCraft3=loadImage("spacecraft3.png")
  spaceCraft4=loadImage("spacecraft4.png")
}