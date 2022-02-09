var PC, PCimg, missile, missilepng, bldg1, bldg2, bldg3, bldg4,bdlg5, bullet;
var missilegroup, bulletgroup;
var heart1,heart2,heart3;
var heart1img,heart2img,heart3img;
var bldg1img, bldg2img, sky;

var life=0;
var gameState ="start";



function preload(){
//preload images
PCimg = loadImage("PC.png");
missilepng = loadImage("missile.png");
heart1img = loadImage("heart.png");
heart2img = loadImage("heart.png");
heart3img = loadImage("heart.png");
bldg1img = loadImage("bldg1.png");
bldg2img = loadImage("bldg2.png");
sky = loadImage("sky.jpg")
}

function setup(){
//create canvas
    createCanvas(800,800);
//create sprites and their images   
    

    bldg1 = createSprite(150,660,30,100);
    bldg1.addImage("bldg1",bldg1img);
    //bldg1.debug=true;
    bldg1.setCollider("rectangle",0,30,75,190);

    
    bldg3 = createSprite(270,660,30,100);
    bldg3.addImage("bldg3",bldg1img);
    //bldg3.debug=true;
    bldg3.setCollider("rectangle",0,30,75,190);

    
    bldg4 = createSprite(550,660,30,100);
    bldg4.addImage("bldg4",bldg1img);
    //bldg4.debug=true;
    bldg4.setCollider("rectangle",0,30,75,190);

    bldg2 = createSprite(400,650,50,200);
    bldg2.addImage("bldg2",bldg2img);
    //bldg2.debug=true;
    bldg2.setCollider("rectangle",0,0,120,280)

    bldg5 = createSprite(700,650,50,200);
    bldg5.addImage("bldg5",bldg2img);
    //bldg5.debug=true;
    bldg5.setCollider("rectangle",0,0,120,280)

    ground = createSprite(400,790,800,20)
    PC = createSprite(400,760,20,20);
    PC.addImage("PC",PCimg);
    PC.scale=0.2
    //bullet = createSprite(PC.x, 450, 10, 10);
  
  
  //bullet.visible = false;

    heart1=createSprite(680,60,20,20);
    heart1.addImage("heart1",heart1img);
    heart1.scale=0.1
    heart1.visible=true;

    heart2=createSprite(710,60,20,20);
    heart2.addImage("heart2",heart2img);
    heart2.scale=0.1
    heart2.visible=true;


    heart3=createSprite(740,60,20,20);
    heart3.addImage("heart3",heart3img);
    heart3.scale=0.1
    heart3.visible=true;

//create missile and bullet group
    missilegroup=new Group();
    bulletgroup=new Group();
    
    
}

function draw(){
    background(sky);
//controls for PC character

    if(gameState==="start"){
        fill("black");
        textSize(30);
        text("please press 's' to start the game",200,400);
        if(keyDown("s")){
            life=3;
            gameState='play'
        }
    }
    if(gameState==='play'){

        if(life===2){
            heart3.visible=false;

        }
        if(life===1){
            heart3.visible=false;
            heart2.visible=false;

        }

        if(life===0){
            heart3.visible=false;
            heart2.visible=false;
            heart1.visible=false;
            gameState='end';
        }

    if(keyDown("Left")){
        PC.x=PC.x-5;
    }
    if(keyDown("Right")){
        PC.x=PC.x+5
    }
    if(keyDown("Space")){
        bullet = createSprite(PC.x,750,5,5);
        //bullet.x=PC.x
        //bullet.visible=true;
        bullet.velocityY=-5;
        bulletgroup.add(bullet);

    }
//game rules
     if(missilegroup.isTouching(bulletgroup)){

        for( var i=0; i<missilegroup.length;i++){
            for(var j=0;j<bulletgroup.length;j++){
                if(missilegroup[i].isTouching(bulletgroup[j])){
                    missilegroup[i].destroy();
                    bulletgroup[j].destroy();

                }
           }
        }
     }

    if(missilegroup.isTouching(PC)|| missilegroup.isTouching(bldg1)){

        for(var i=0;i<missilegroup.length;i++){
            if(missilegroup[i].isTouching(PC)){
                missilegroup[i].destroy();
                life=life-1;
            }
            else if(missilegroup[i].isTouching(bldg1)){
                missilegroup[i].destroy();
                bldg1.destroy();
                life=life-1;
            }
        }
    }
    if(missilegroup.isTouching(PC)|| missilegroup.isTouching(bldg2)){

         for(var i=0;i<missilegroup.length;i++){
            if(missilegroup[i].isTouching(PC)){
                        missilegroup[i].destroy();
                        life=life-1;
            }
            else if(missilegroup[i].isTouching(bldg2)){
                missilegroup[i].destroy();
                bldg2.destroy();
                life=life-1;
            }
        }
    }
    if(missilegroup.isTouching(PC)|| missilegroup.isTouching(bldg3)){

        for(var i=0;i<missilegroup.length;i++){
            if(missilegroup[i].isTouching(PC)){
                        missilegroup[i].destroy();
                        life=life-1;
            }
            else if(missilegroup[i].isTouching(bldg3)){
                missilegroup[i].destroy();
                bldg3.destroy();
                life=life-1;
            }
        }
    }
    if(missilegroup.isTouching(PC)|| missilegroup.isTouching(bldg4)){

        for(var i=0;i<missilegroup.length;i++){
        if(missilegroup[i].isTouching(PC)){
            missilegroup[i].destroy();
            life=life-1;
            }
            
            else if(missilegroup[i].isTouching(bldg4)){
                missilegroup[i].destroy();
                bldg4.destroy();
                life=life-1;
            }
        }
    }
    if(missilegroup.isTouching(PC)|| missilegroup.isTouching(bldg5)){

        for(var i=0;i<missilegroup.length;i++){
            if(missilegroup[i].isTouching(PC)){
                missilegroup[i].destroy();
                life=life-1;
             }
            else if(missilegroup[i].isTouching(bldg5)){
                missilegroup[i].destroy();
                bldg5.destroy();
                life=life-1;
            }
        }

     }


    spawnMissiles();
    drawSprites();
    }
    if(gameState==='end'){
        textSize(30);
        text("game over",300,400);
    }
    
}

function spawnMissiles(){
//spawn missiles
    if(frameCount % 60===0){
        missile=createSprite(Math.round(random(0,800)),0,40,40);
        missile.velocityY=+2;
        missile.addImage("missile",missilepng);
        missile.scale=0.03;
        missile.lifetime=800;
        missilegroup.add(missile);
    }
}