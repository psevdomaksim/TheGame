pjs.system.addEvent("onload", "myEvent", function () {
 
var mechanics = function(){
   
    coinCollusion();
    endLevelCollusion();
    checkPointCollusion();
    interfaceGame();
    management();
    enemyCollusion();
    camera();
    
};
var clear_1 = function(){
    pjs.OOP.clearArr(mapLevel_1);
    pjs.OOP.clearArr(mapLevelCoins_1);
    pjs.OOP.clearArr(mapLevelEnemies_1);
    
}
var clear_2 = function(){
    pjs.OOP.clearArr(mapLevel_2);
    pjs.OOP.clearArr(mapLevelCoins_2);
    pjs.OOP.clearArr(mapLevelEnemies_2);
    
}
var clear_3 = function(){
    pjs.OOP.clearArr(mapLevel_3);
    pjs.OOP.clearArr(mapLevelCoins_3);
    pjs.OOP.clearArr(mapLevelEnemies_3);
    
}
var renderLvl_1= function(){
    
    mechanics();
    pjs.OOP.once("gnrt1", function () {
       
        clear_2();
        clear_3();
        generateLvl_1();
      });
    pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevelCheckPoint_1));
    pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevel_1));
    pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevelCoins_1));
    pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevelEnemies_1));
    
};
var renderLvl_2= function(){
    mechanics();
    pjs.OOP.once("gnrt2", function () {
        
        clear_1();
        clear_3();
        generateLvl_2();
      });
    pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevelCheckPoint_2));
    pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevel_2));
    pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevelCoins_2));
    pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevelEnemies_2));
    
};
var renderLvl_3= function(){
    mechanics();
    pjs.OOP.once("gnrt3", function () {
        clear_1();
        clear_2();
        generateLvl_3();
      });
    pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevelCheckPoint_3));
    pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevel_3));
    pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevelCoins_3));
    pjs.OOP.drawArr(pjs.OOP.getArrInCamera(mapLevelEnemies_3));

};



game.newLoopFromConstructor('lvl1',function(){


    this.update = function(){
        lvlFlag=1;
        game.clear()
        renderLvl_1();
        if(key.isDown('ESC')){
            game.startLoop('pause');
        }

    }
})

game.newLoopFromConstructor('lvl2',function(){

    
    this.update = function(){
        lvlFlag=2;
        game.clear()
        renderLvl_2();
        if(key.isDown('ESC')){
            game.startLoop('pause');
        }

    }
})
game.newLoopFromConstructor('lvl3',function(){

    this.update = function(){
        lvlFlag=3;
        game.clear()
        renderLvl_3();
        if(key.isDown('ESC')){
            game.startLoop('pause');
        }

    }
})






game.newLoop('menu', function(){
 
    interfaceMenu();

})
game.newLoop('death', function(){
    pjs.camera.setPosition(camPos);
    interfaceDeath();

})
game.newLoop('levelEnd', function(){
    pjs.camera.setPosition(camPos);
    interfaceLevelEnd();

})

game.newLoop('levels', function(){
   
    interfaceLevels();
    
    if(key.isDown('ESC')){
        game.startLoop('menu');
    }

})

game.newLoop('pause', function(){

    pjs.camera.setPosition(camPos);
    
    interfacePause();
    if(key.isDown('ESC')){
        if(lvlFlag==1){    
            game.startLoop('lvl1');
          }
          if(lvlFlag==2){    
            game.startLoop('lvl2');
          }
          if(lvlFlag==3){
            game.startLoop('lvl3');
          }
    }
    

})

game.setLoop('menu')
game.startLoop('menu')

  });


















//останавливает все интервалы
function stopIntervals(){
    var stopIntervals= setTimeout(function() {
    for (var i = stopIntervals; i > 0; i--) clearInterval(i)
    }, 1);
}













