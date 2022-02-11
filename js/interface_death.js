



  var interfaceDeath = function(){
   

    var background = game.newImageObject(   { 
      file : "images/PNG/background.png", 
      x : camPos.x,w: 1280,
      y : 0, h:768
    
    });
    background.draw();

    if(lvlFlag==1){    

      pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevel_1));
      pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevelEnemies_1));
    }
    if(lvlFlag==2){    
      pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevel_2));
      pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevelEnemies_2));
    }
    if(lvlFlag==3){
      pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevel_3));
      pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevelEnemies_3));
    }
  
    var menu_table = game.newImageObject({
      file : "images/menu_table.png", 
      x : camPos.x+325, y : 150, 
      w : 626, h : 423 
  });
    menu_table.draw();
  
    var pauseText = game.newTextObject(   { 
      x : camPos.x+470, 
      y : 335, 
      text : "GAME OVER", 
      size : 50, 
      padding: 25,
      font: "Arial",
      color : "white",
    });
    pauseText.draw(); //текст "pause"
    var restartButton = game.newImageObject(   { 
      file : "images/button_restart.png", 
      x :camPos.x+ menu_table.x*1.9, 
      y : 463, 
      scale: 0.5
    });
    restartButton.draw();//кнопка рестарта уровня
    var restartButtonCopy = game.newImageObject(   { 
      file : "images/button_restart.png", 
      x : camPos.x+menu_table.x*1.9-3, 
      y : 460, 
      scale: 0.55
    });
  
      var pauseButton = game.newImageObject(   { 
        file : "images/button_pause.png", 
        x : camPos.x+camPos.x+30, 
        y : 30, 
        scale: 0.5
      });
      pauseButton.draw();
      var backButton = game.newImageObject(   { 
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
        });

        var scoreText = game.newTextObject(   { 
          x :  camPos.x+850,  
          y : 43, 
          text : score, 
          size : 40, 
    
          font: "Arial",
          color : "#656565",
        });
        scoreText.draw();
    
        var coinImage = game.newImageObject(   { 
          file : "images/static_coin.png", 
          x : camPos.x+795, 
          y : 36, 
          w:42,
          h:42
        });
        
          coinImage.draw();
          

        var noLifeIcon = game.newImageObject(   { 
          file : "images/no_life.png", 
          x : camPos.x+970, 
          y : 37, 
          scale: 0.06
  })
         noLifeIcon.draw();



    
   
    
   
    
    
  
    if(pjs.mouseControl.isInStatic( restartButton.getStaticBox() )){
  
        restartButtonCopy.draw();
  
    if(pjs.mouseControl.isDown("LEFT")){ 
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
  
    if(pjs.mouseControl.isInStatic( backButton.getStaticBox() )){
  
      backButtonCopy.draw();
  
    if(pjs.mouseControl.isDown("LEFT")){ 	
          
      game.startLoop('levels');
  
      }};
  
  };

