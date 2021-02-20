var canvas;
var box, changerA, changerB, changerC, changerD

function preload(){
   
}


function setup(){
    canvas = createCanvas(770,600);
    changerA = createSprite(100, 580, 170, 20)
    changerA.shapeColor = "blue"
    changerB = createSprite(290, 580, 170, 20)
    changerB.shapeColor = "yellow"
    changerC = createSprite(480, 580, 170, 20)
    changerC.shapeColor = "red"
    changerD = createSprite(670, 580, 170, 20)
    changerD.shapeColor = "green"

    box = createSprite(random(20,750), 300, 50, 50)
    box.shapeColor = "white"
    box.velocityX = 4;
    box.velocityY = 9;
    
}



function draw() {
    background("black");
   
    

    createEdgeSprites()
    
  
    
    

    if(changerA.isTouching(box) && box.bounceOff(changerA)){
        box.shapeColor = "blue"
    }
    if(changerB.isTouching(box) && box.bounceOff(changerB)){
        box.shapeColor = "yellow"
    }
    if(changerC.isTouching(box) && box.bounceOff(changerC)){
        box.shapeColor = "red"
    }
    if(changerD.isTouching(box) && box.bounceOff(changerD)){
        box.shapeColor = "green"
    }
                     
   
    
    
drawSprites()
box.bounceOff(Edges)
}

