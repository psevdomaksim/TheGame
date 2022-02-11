var soundOnButton1 = game.newImageObject(   { 
  file : "images/menu_soundON.png", 
  x : 1200, 
  y : 695, 
  scale: 0.5,
  visible: true
});

var soundOnButton2 = game.newImageObject(   { 
  file : "images/menu_soundON.png", 
  x : 1197, 
  y : 693, 
  scale: 0.55,
  visible: true
});

var soundOffButton1 = game.newImageObject(   { 
  file : "images/menu_soundOFF.png", 
  x : 1203, 
  y : 695, 
  scale: 0.5,
  visible: false 
});

var soundOffButton2 = game.newImageObject(   { 
  file : "images/menu_soundOFF.png", 
  x : 1200, 
  y : 692, 
  scale: 0.55,
  visible: false 
});
var startButton1 = game.newImageObject(   { 
  file : "images/play.png", 
  x : 540, 
  y : 325, 
  scale: 0.25

});

var startButton2 = game.newImageObject(   { 
  file : "images/play.png", 
  x : 530, 
  y : 320, 
  scale: 0.27 
});

var backgroundMenu = game.newImageObject({
        file : "images/menu_background.png", 
        x : 0, y : 0, 
        w : 1280, h : 768 
});

var menuMusic = pjs.audio.newAudio("audio/menu_music.mp3", 0.75);
menuMusic.play();

var checkSoundButton = function(){
  menuMusic.setNextPlay(menuMusic);
  if(soundOnButton1.visible==true||soundOnButton2.visible==true){ //если звук включен выключает все иконки проме одной
    menuMusic.play();
    soundOffButton1.setVisible(false);
    soundOffButton2.setVisible(false);
    soundOnButton1.setVisible(true);
    soundOnButton2.setVisible(false);
    soundOnButton1.draw();
  }
    
  if(soundOnButton1.visible==false&&soundOnButton2.visible==false){//если звук выключен выключает все иконки проме одной
    menuMusic.pause();
    soundOffButton1.setVisible(true);
    soundOffButton2.setVisible(false);
    soundOnButton1.setVisible(false);
    soundOnButton2.setVisible(false);
    soundOffButton1.draw();
  }

  if(pjs.mouseControl.isInStatic( soundOnButton1.getStaticBox() )){

    if(soundOnButton1.visible==true){ //если звук включен

      soundOffButton1.setVisible(false);
      soundOffButton2.setVisible(false);

      soundOnButton1.setVisible(false);
     soundOnButton2.setVisible(true);

     soundOnButton2.draw();
    }
    
    if(soundOnButton1.visible==false&&soundOnButton2.visible==false){ //если звук выключен

      soundOffButton1.setVisible(false);
      soundOffButton2.setVisible(true);

      soundOnButton1.setVisible(false);
     soundOnButton2.setVisible(false);

     soundOffButton2.draw();
    }

    if(pjs.mouseControl.isPress("LEFT") ){ 
      
      if(soundOnButton2.visible==true){ //если звук включен
        menuMusic.pause();
        soundOffButton1.setVisible(false);
        soundOffButton2.setVisible(true);

        soundOnButton1.setVisible(false);
       soundOnButton2.setVisible(false);

       soundOffButton2.draw();
      }

      else if(soundOnButton2.visible==false){//если звук выключен
        menuMusic.play();
        soundOffButton1.setVisible(false);
        soundOffButton2.setVisible(false);

        soundOnButton1.setVisible(false);
       soundOnButton2.setVisible(true);

       soundOnButton2.draw();
      }
  
    }

 };

}

var interfaceMenu = function(){


 	
  //presets.bgСycle(backgroundMenu, -5, 0, 0, 0);
  backgroundMenu.draw();

  var menu_table = game.newImageObject({
    file : "images/menu_table.png", 
    x : 325, y : 150, 
    w : 625, h : 423 
});
  menu_table.draw();   	
    startButton1.draw();

  checkSoundButton();    

      

      
 if(pjs.mouseControl.isInStatic( startButton1.getStaticBox() )){

      startButton2.draw();

    if(pjs.mouseControl.isPress("LEFT")){ 	
        game.startLoop('levels')
    }

 };

}




