var backButton = game.newImageObject(   { 
    file : "images/button_back.png", 
    x : 610, 
    y : 463, 
    scale: 0.5
  });
var backButtonCopy = game.newImageObject(   { 
    file : "images/button_back.png", 
    x : 607, 
    y : 460, 
    scale: 0.54
  });
var lvlIcon1 = game.newRoundRectObject(   { 
    x : 500, 
    y : 350, 
    w : 85, 
    h : 85, 
    radius : 10, 
    alpha: 0.8,
    fillColor : "#A65400",
    strokeColor:"white",
    strokeWidth: 3
});
var lvlIcon1Copy = game.newRoundRectObject(   { 
    x : 500, 
    y : 350, 
    w : 85, 
    h : 85, 
    radius : 10, 
    fillColor : "#A65400",
    strokeColor:"white",
    strokeWidth: 3
});	
var lvlIconText1 = game.newTextObject(   { 
    x : 504, 
    y : 350, 
    text : "1", 
    size : 50, 
    padding: 25,
    font: "Arial",
    color : "white",
});
var lvlIcon2 = game.newRoundRectObject(   { 
x : 600, 
y : 350, 
w : 85, 
h : 85, 
radius : 10, 
alpha: 0.8,
fillColor : "#A65400",
strokeColor:"white",
strokeWidth: 3
});
var lvlIcon2Copy = game.newRoundRectObject(   { 
x : 600, 
y : 350, 
w : 85, 
h : 85, 
radius : 10, 
fillColor : "#A65400",
strokeColor:"white",
strokeWidth: 3
});
var lvlIconText2 = game.newTextObject(   { 
x : 604, 
y : 350, 
text : "2", 
size : 50, 
padding: 25,
font: "Arial",
color : "white",
});
var lvlIcon3 = game.newRoundRectObject(   { 
    x : 700, 
    y : 350, 
    w : 85, 
    h : 85, 
    radius : 10, 
    alpha: 0.8,
    fillColor : "#A65400",
    strokeColor:"white",
    strokeWidth: 3
});
var lvlIcon3Copy = game.newRoundRectObject(   { 
    x : 700, 
    y : 350, 
    w : 85, 
    h : 85, 
    radius : 10, 
    fillColor : "#A65400",
    strokeColor:"white",
    strokeWidth: 3
});
var lvlIconText3 = game.newTextObject(   { 
    x : 704, 
    y : 350, 
    text : "3", 
    size : 50, 
    padding: 25,
    font: "Arial",
    color : "white",
});
var lockIcon1 = game.newImageObject(   { 
    file : "images/lock.png", 
    x : 619, 
    y : 360, 
    scale: 0.05,
    visible: true
  });
  var lockIcon2 = game.newImageObject(   { 
    file : "images/lock.png", 
    x : 719, 
    y : 360, 
    scale: 0.05,
    visible: true
  });
  var tick1 = game.newImageObject(   { 
    file : "images/tick.png", 
    x : 519, 
    y : 360, 
    scale: 0.05,
    visible: true
  });
  var tick2 = game.newImageObject(   { 
    file : "images/tick.png", 
    x : 619, 
    y : 360, 
    scale: 0.05,
    visible: true
  });
  var tick3 = game.newImageObject(   { 
    file : "images/tick.png", 
    x : 719, 
    y : 360, 
    scale: 0.05,
    visible: true
  });



var interfaceLevels = function(){

    pjs.brush.drawImage({
        file : "images/menu_background.png", 
        x : 0, y : 0, 
        w : 1280, h : 768 
    });

    var menu_table = game.newImageObject({
      file : "images/menu_table.png", 
      x : 325, y : 150, 
      w : 625, h : 423 
  });
    menu_table.draw();
 
    

  lvlIcon1.draw();
  lvlIcon2.draw();
  lvlIcon3.draw();
  lvlIconText1.draw();


  if(levelsComplete==1){
    lvlIcon1Copy.draw();
    lvlIconText1.draw();
    tick1.draw();
    lvlIconText2.draw();
    lockIcon1.visible=false;
  }
  if(levelsComplete==2){
    lvlIcon1Copy.draw();
    lvlIconText1.draw();
    lvlIcon2Copy.draw();
    lvlIconText2.draw();
    lvlIcon3.draw();
    lvlIconText3.draw();
    tick1.draw();
    tick2.draw();
    lockIcon1.visible=false;
    lockIcon2.visible=false;
  }
  if(levelsComplete==3){
    lvlIcon1Copy.draw();
    lvlIconText1.draw();
    lvlIcon2Copy.draw();
    lvlIconText2.draw();
    lvlIcon3Copy.draw();
    lvlIconText3.draw();
    tick1.draw();
    tick2.draw();
    tick3.draw();
    lockIcon1.visible=false;
    lockIcon2.visible=false;
  }

  lockIcon1.draw();
  lockIcon2.draw();

  backButton.draw();
  checkSoundButton();

//первый уровень
  if(pjs.mouseControl.isInStatic( lvlIcon1.getStaticBox() )){
    lvlIcon1Copy.draw();
    lvlIconText1.draw();
    
    if(levelsComplete==0){
        if(pjs.mouseControl.isPress("LEFT")){ 
            menuMusic.stop();
            pos = false;
            checkpointCheck();
            death();
            game.startLoop('lvl1');
            }
        }
        else{tick1.draw()}
    }

//второй уровень
    if(pjs.mouseControl.isInStatic( lvlIcon2.getStaticBox() )){

        if(levelsComplete==1){
            lvlIcon2Copy.draw();
            lvlIconText2.draw();
          }
        if(pjs.mouseControl.isPress("LEFT")&&levelsComplete==1){ 
          pos = false;
            checkpointCheck();
            menuMusic.stop();
            death();
            game.startLoop('lvl2')
            }
        }

//третий уровень
    if(pjs.mouseControl.isInStatic( lvlIcon3.getStaticBox() )){
        if(levelsComplete==2){
            lvlIcon3Copy.draw();
            lvlIconText3.draw();
          }
        if(pjs.mouseControl.isPress("LEFT")&&levelsComplete==2){ 
          pos = false;
          checkpointCheck();
            menuMusic.stop();
            death();
            game.startLoop('lvl3')
            }
        }

//кнопка назад
    if(pjs.mouseControl.isInStatic( backButton.getStaticBox() )){
        backButtonCopy.draw();

        if(pjs.mouseControl.isPress("LEFT")){ 
            game.startLoop('menu')
            }
        }
}