var interfaceLevelEnd = function(){
    var background = game.newImageObject(   { 
      file : "images/PNG/background.png", 
      x : camPos.x,w: 1280,
      y : 0, h:768
    
    });
    
    background.draw();//бэкграунд
  
    var menu_table = game.newImageObject({
      file : "images/menu_table.png", 
      x : camPos.x+325, y : 150, 
      w : 626, h : 423 
    });
    menu_table.draw();  //картинка меню
  
    var pauseText = game.newTextObject(   { 
      x : camPos.x+480, 
      y : 355, 
      text : "Level completed!", 
      size : 45, 
      font: "Arial",
      color : "white",
    });
    pauseText.draw(); //текст "игра на паузе"
    
    var restartButton = game.newImageObject(   { 
      file : "images/button_restart.png", 
      x :camPos.x+ menu_table.x*1.9, 
      y : 463, 
      scale: 0.5
    });
    restartButton.draw();//кнопка перепрохождения
    var restartButtonCopy = game.newImageObject(   { 
      file : "images/button_restart.png", 
      x : camPos.x+menu_table.x*1.9-3, 
      y : 460, 
      scale: 0.55
    });
    
  /*   var backButton = game.newImageObject(   { 
      file : "images/button_back.png", 
      x : camPos.x+450, 
      y : 463, 
      scale: 0.5
    });
    backButton.draw(); //кнопка возвращения
    var backButtonCopy = game.newImageObject(   { 
        file : "images/button_back.png", 
        x : camPos.x+447, 
        y : 460, 
        scale: 0.54
      }); */
    
    var nextButton = game.newImageObject(   { 
        file : "images/button_next.png", 
        x : camPos.x+785, 
        y : 463, 
        scale: 0.5
      });
      nextButton.draw(); //кнопка следующего уровня
      var nextButtonCopy = game.newImageObject(   { 
        file : "images/button_next.png", 
        x : camPos.x+782, 
        y : 460, 
        scale: 0.54
      });
  
  
      var pauseButton = game.newImageObject(   { 
        file : "images/button_pause.png", 
        x : camPos.x+30, 
        y : 30, 
        scale: 0.5
      });
        pauseButton.draw();//кнопка паузы
    
      if(pjs.mouseControl.isInStatic( restartButton.getStaticBox() )){
    
          restartButtonCopy.draw();
    
      if(pjs.mouseControl.isDown("LEFT")){ 	
      pos=false;
        checkpointCheck();
     
        
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
    
      /* if(pjs.mouseControl.isInStatic( backButton.getStaticBox() )){
        
        backButtonCopy.draw();
    
      if(pjs.mouseControl.isDown("LEFT")){ 	
        levelMusic.stop();
        game.startLoop('levels');
    
        }}; */

        if(pjs.mouseControl.isInStatic( nextButton.getStaticBox() )){
          nextButtonCopy.draw();
      
        if(pjs.mouseControl.isDown("LEFT")){ 	
            levelMusic.stop();
          game.startLoop('levels');
      
          }};
  
  };