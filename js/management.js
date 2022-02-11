/**                     УПРАВЛЕНИЕ                  */
pjs.mouseControl.initControl();
var key = pjs.keyControl;
key.initControl();

var vector = pjs.vector.v2d;
var point = pjs.vector.point;

var speed=4;

visible = function(){
   
    heroAnimationLeft.setVisible(false);
    heroAnimationUp.setVisible(false);
    heroAnimationUpClone.setVisible(false); //клон
    heroAnimationUpLeft.setVisible(false);
    heroAnimationUpLeftClone.setVisible(false); //клон
    heroAnimationUpRight.setVisible(false);
    heroAnimationUpRightClone.setVisible(false);     //клон
    heroAnimationStay.setVisible(false);

};

var moving = function(){
    heroAnimationRight.moveTimeC( playerRect.getPositionC(), 0 );
    heroAnimationLeft.moveTimeC( playerRect.getPositionC(), 0 );
    heroAnimationUp.moveTimeC( playerRect.getPositionC(), 0 );
    heroAnimationUpLeft.moveTimeC( playerRect.getPositionC(), 0 );
    heroAnimationUpRight.moveTimeC( playerRect.getPositionC(), 0 );
    heroAnimationStay.moveTimeC( playerRect.getPositionC(), 0 );

    heroAnimationUpRightClone.moveTimeC( playerRect.getPositionC(), 0 );
    heroAnimationUpLeftClone.moveTimeC( playerRect.getPositionC(), 0 );
    heroAnimationUpClone.moveTimeC( playerRect.getPositionC(), 0 );
 
    
}

  
management = function(){
    //получение и отрисовка всех обьектов уровня для столкновения


    //физика
    presets.physicsMoveInit(playerRect, speed, 11.3, 0.03, 0, 0, 0, 0, 0, 0, ["D", "RIGHT"], ["A", "LEFT"], ["W", "UP"], [""] );
    for(var i in mapLevel_1){
       presets.physicsMoveCollision(mapLevel_1[i]); 
   }
   for(var i in mapLevel_2){
    presets.physicsMoveCollision(mapLevel_2[i]); 
    }
    for(var i in mapLevel_3){
        presets.physicsMoveCollision(mapLevel_3[i]); 
        }
    presets.physicsMove(); 

    
    
    moving();


    heroAnimationStay.draw();

   

    if(key.isDown('RIGHT')&&!key.isDown('LEFT') || key.isDown('D')&&!key.isDown('A')){ //вправо
        visible();
        
        heroAnimationRight.setVisible(true);
        heroAnimationRight.draw();
    }
    else if(key.isDown('LEFT') || key.isDown('A')){    //влево\
        visible();
        
        heroAnimationLeft.setVisible(true);
        heroAnimationLeft.draw();
    }
    else{
        visible();
        
        heroAnimationStay.setVisible(true);
        heroAnimationStay.draw();
    }

        
/*     if (key.isPress('UP') || key.isPress('W') ) {  //прыжки на месте
        
        visible();
        heroAnimationUp.setVisible(true);
        heroAnimationUp.draw();

    } */
   
  

    
    

}



/*management = function(){
    if(c==1){
        c=0;
        flag=!flag;//true
    }
    moving();
 

        if (key.isPress('UP') && (flag) || key.isPress('W') && (flag) ) {  //прыжки на месте
            flag=!flag;   //false
            jump();
    
        }
        if(!flag){
            
           // console.log(a);
            heroAnimationRight.setVisible(false);
            heroAnimationLeft.setVisible(false);
            heroAnimationUp.setVisible(true);
            heroAnimationUpClone.setVisible(false); //клон
            heroAnimationUpLeft.setVisible(false);
            heroAnimationUpLeftClone.setVisible(false); //клон
            heroAnimationUpRight.setVisible(false);
            heroAnimationUpRightClone.setVisible(false);     //клон
            heroAnimationStay.setVisible(false);
          
        }

            if(key.isDown('RIGHT') || key.isDown('D')){
                dx=speed; 
                heroAnimationUp.setVisible(false);
                heroAnimationUpClone.setVisible(false);
                heroAnimationUpLeft.setVisible(false);
                heroAnimationUpRight.setVisible(true);
            }
            if(key.isDown('LEFT') || key.isDown('A')){
                dx=-speed; 
                heroAnimationUp.setVisible(false);
                heroAnimationUpClone.setVisible(false);
                heroAnimationUpRight.setVisible(false);
                heroAnimationUpLeft.setVisible(true);
            }

        if(!flag){
    
            heroAnimationUp.setVisible(false);
            heroAnimationUpRight.setVisible(false);
            heroAnimationUpLeft.setVisible(false);
            flag=!flag; //true
        }
      
        if(flag){

            if (key.isDown('RIGHT') && heroAnimationStay.speed.y==0 || key.isDown('D') && heroAnimationStay.speed.y==0) {       //движение вправо
                heroAnimationRight.setVisible(true);
                heroAnimationLeft.setVisible(false);
                heroAnimationUp.setVisible(false);
                heroAnimationUpClone.setVisible(false);
                heroAnimationUpLeft.setVisible(false);
                heroAnimationUpRight.setVisible(false);
                heroAnimationStay.setVisible(false);
                dx=speed;
               
                
                

            }
            else if (key.isDown('LEFT') && heroAnimationStay.speed.y==0 || key.isDown('A') && heroAnimationStay.speed.y==0) {        //движение влево
                dx=-speed
                heroAnimationRight.setVisible(false);
                heroAnimationLeft.setVisible(true);
                heroAnimationUp.setVisible(false);
                heroAnimationUpClone.setVisible(false);
                heroAnimationUpLeft.setVisible(false);
                heroAnimationUpRight.setVisible(false);
                heroAnimationStay.setVisible(false);
               
                    
            } 
           else{ dx=0,dy=0;
            if( heroAnimationUp.speed.y > 15 && !key.isDown('LEFT') || heroAnimationUp.speed.y > 15 && !key.isDown('RIGHT')){
                heroAnimationUpClone.setVisible(true)
            }
            else if(heroAnimationUp.speed.y > 15 &&  key.isDown('LEFT')){
                heroAnimationUpClone.setVisible(false);
                heroAnimationUpLeftClone.setVisible(true)
            }
            else if(heroAnimationUp.speed.y > 15 &&  key.isDown('RIGHT')){
                heroAnimationUpLeftClone.setVisible(false);
                heroAnimationUpRightClone.setVisible(true)
            }
            else if(heroAnimationStay.speed.y == 0){
                 heroAnimationUpRightClone.setVisible(false);
                 heroAnimationStay.setVisible(true)
            }
                
                //console.log(heroAnimationUp.speed.y);
                

                heroAnimationRight.setVisible(false);
                heroAnimationLeft.setVisible(false);
                heroAnimationUp.setVisible(false);
                heroAnimationUpLeft.setVisible(false);
                heroAnimationUpRight.setVisible(false);
            }
        
        }
}*/
   