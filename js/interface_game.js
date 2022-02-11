/* var canvas=pjs.system.getCanvas();
canvas.left=100;
canvas.top=1050;
//console.log(canvas); */


var interfaceGame = function(){
   levelMusic.play();//проигрывание музыки

    var camPos = pjs.camera.getPosition();  //инициализация камеры

    var background = game.newImageObject(   { 
      file : "images/PNG/background.png", 
      x : camPos.x,w :1280,
      y : camPos.x.y, h:768
    
    });
    background.draw();
    var pauseButton = game.newImageObject(   { 
        file : "images/button_pause.png", 
        x : camPos.x+30, 
        y : 30, 
        scale: 0.5
      });
    pauseButton.draw();
    var pauseButtonCopy = game.newImageObject(   { 
        file : "images/button_pause.png", 
        x : camPos.x+27, 
        y : 27, 
        scale: 0.55
      });
    var wall = game.newRectObject(   { 
        x : camPos.x, 
        y : 0, 
        w: 10,
        h: BGheight,
        fillColor : "#FBFE6F", 
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
 
    //столкновение с невидимой стеной, чтобы игрок не выходил за пределы экрана
      if(playerRect.isStaticIntersect( wall.getStaticBox() )){ 
       playerRect.setPosition(point(camPos.x+10,playerRect.y ));
      }

    //динамика кнопки паузы
      if(pjs.mouseControl.isInStatic( pauseButton.getStaticBox() )){


        pauseButtonCopy.draw();
  
      if(pjs.mouseControl.isDown("LEFT")){ 	
        game.startLoop('pause');
    
      }
  
   };
}
