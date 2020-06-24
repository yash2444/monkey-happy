//Global Variables
var monkey, banana, jungle, gameoverimg, restartimg, ground, bananaimg, obstacle, obstacleimg, jungleimg, groundimg,mokeyimg,stone,stoneimg,invisibleground,score, rand, ran;

var fruitsGroup;
var stoneGroup;


function preload(){
  jungleimg=loadImage("jungle.jpg")
  groundimg=loadImage("ground.jpg");
  
  monkeyimg=loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png"," Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaimg=loadImage("Banana.png");
  stoneimg=loadImage("stone.png");
}


function setup() {
  createCanvas(600,400);
  fruitsGroup=new Group();
  stoneGroup=new Group();
  jungle=createSprite(300,200,600,400);
  jungle.addImage("jungle2", jungleimg);
 
 
  
  monkey=createSprite(100,380,10,10);
 monkey.addAnimation("monkeyrun", monkeyimg);
  monkey.scale=0.1;
  
  
 
  
  invisibleground=createSprite(300,380,600,10);
}  


function draw(){
  text(200,200,"score"+score);
 background(255);
  invisibleground.visible=false;
  monkey.collide(invisibleground);
  
   if (frameCount%60===0){
   
 banana=createSprite(200,60,5,5);
  banana.addImage("fruit",bananaimg);
  banana.scale=0.1
 rand=random(100,300);
  banana.x = rand;
     banana.lifetime=300
     banana.velocityX=-5;
     fruitsGroup.add(banana);
 }
  if (frameCount%80===0){
      
   
  stone=createSprite(200,370,5,5);
  stone.scale=0.1;
  stone.addImage("stone2", stoneimg);
 ran=random(400,500);
 stone.x = ran;
stone.lifetime=300;
    stone.velocityX=-5;      
    stoneGroup.add(stone);
  
  }
  
  
  jungle.velocityX=-5;
  if (jungle.x<300){
  jungle.x=jungle.width/2;
}
  
  if (keyDown("space") && monkey.y>300){
    monkey.velocityY=-20;
    
  }
  
   if (fruitsGroup.isTouching(monkey)){
     score=score+1;
     fruitsGroup.destroyEach();
     switch(score){
         case 1: monkey.scale=0.2;
         break;
         case 2: monkey.scale=0.4;
         break;
         case 3: monkey.scale=0.8;
         break;
         case 4: monkey.scale=0.1;
         break;
         case 5: monkey.scale=1.2;
         break;
         default:break;
     }
         
   }
  
  if (stoneGroup.isTouching(monkey)){
   score=score-1;
    stoneGroup.destroyEach()
    if (monkey.scale>0.2){
      monkey.scale=0.2
    }
      
  }

  monkey.velocityY=monkey.velocityY+0.8;

  
drawSprites();

     
   }
