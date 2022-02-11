interfacePause = function(){
    var background = game.newImageObject(   { 
      file : "images/menu_background.png", 
      x : camPos.x,w: 1280,
      y : 0, h:768
    
    });
    background.draw();
    //console.log(camPos.x)
    var menu_table = game.newImageObject({
      file : "images/menu_table.png", 
      x : camPos.x+325, y : 150, 
      w : 625, h : 423 
  });
  
    var pauseText = game.newTextObject(   { 
      x : camPos.x+menu_table.w-80 , 
      y : 334, 
      text : "Pause", 
      size : 50, 
      padding: 25,
      font: "Arial",
      color : "white",
    });
  
    var continueButton = game.newImageObject(   { 
      file : "images/button_continue.png", 
      x : camPos.x+menu_table.w-20, 
      y : 463, 
      scale: 0.5
    });
    var continueButtonCopy = game.newImageObject(   { 
      file : "images/button_continue.png", 
      x : camPos.x+menu_table.w-23, 
      y : 460, 
      scale: 0.55
    });
  
    var backButton = game.newImageObject(   { 
      file : "images/button_back.png", 
      x : camPos.x+450, 
      y : 463, 
      scale: 0.5
    });
    var backButtonCopy = game.newImageObject(   { 
      file : "images/button_back.png", 
      x : camPos.x+447, 
      y : 460, 
      scale: 0.54
    });

  


    /*   var pauseButton = game.newImageObject(   { 
        file : "images/button_pause.png", 
        x : camPos.x+30, 
        y : 30, 
        scale: 0.5
      }); */
/*     if(lvlFlag==1){    
      pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevel_1));
    }
    if(lvlFlag==2){    
      pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevel_2));
    }
    if(lvlFlag==3){
      pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevel_3));
    } */
    
/*     if(heroAnimationStay.visible==true){
      heroAnimationStay.visible=true;
      heroAnimationStay.draw();
    }
    else if(heroAnimationRight.visible==true){
      heroAnimationStay.visible=true;
      heroAnimationStay.draw();
    }
    else if(heroAnimationLeft.visible==true){
      heroAnimationStay.visible=true;
      heroAnimationStay.draw();
    } */
   
     // pauseButton.draw();
   
  
    levelMusic.pause(); //ставит на паузу музычку
    menu_table.draw();  //картинка меню
    backButton.draw(); //кнопка возвращения
    continueButton.draw();//кнопка продолжения
    pauseText.draw(); //текст "игра на паузе"
  
    if(pjs.mouseControl.isInStatic( continueButton.getStaticBox() )){
      continueButtonCopy.draw();
  
    if(pjs.mouseControl.isDown("LEFT")){ 	
          
        if(lvlFlag==1){    

        game.startLoop('lvl1');
      }
      if(lvlFlag==2){    
        game.startLoop('lvl2');
      }
      if(lvlFlag==3){
        game.startLoop('lvl3');
      }
      
      }};
  
    if(pjs.mouseControl.isInStatic( backButton.getStaticBox() )){
  
      backButtonCopy.draw();
  
    if(pjs.mouseControl.isDown("LEFT")){ 	  
      levelMusic.stop(); //заканчивает музыку из уровня
      game.startLoop('levels');
  
      }};
  
  }