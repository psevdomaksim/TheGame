

backgroundsImages = [                         //массив с бэграундами
        'images/PNG/background.png'];

objects = [                                   //массив с различными графическими обьектами уровня
        'images/PNG/jungle_pack_05.png',       //вода 1
        'images/PNG/jungle_pack_52.png',       //обычный граунд с травой 0
        'images/PNG/jungle_pack_33.png',         //граунд с закругленными краями       2
        'images/PNG/jungle_pack_07.png',        //граунд закругленный справа 3
        'images/PNG/jungle_pack_03.png',        //граунд закругленный слева 4
        'images/PNG/jungle_pack_13.png',          //платформа 5 
        'images/PNG/jungle_pack_38.png',        //платформа закругленная слева 6
        'images/PNG/jungle_pack_15.png',         //платформа закругленная справа 7    
        'images/PNG/jungle_pack_39.png',         //платформа закругленная со всех сторон 8    
        'images/PNG/jungle_pack_35.png',        //граунд без травы  9


        ];  
        var deathSounds=[
                'audio/death/1.mp3',
                'audio/death/2.mp3',
                'audio/death/3.mp3',
                'audio/death/4.mp3',
                'audio/death/5.mp3',
                'audio/death/6.mp3',
                'audio/death/7.mp3',
                'audio/death/8.mp3',
                'audio/death/9.mp3',
                'audio/death/10.mp3',
                'audio/death/11.mp3',
                'audio/death/12.mp3',
                'audio/death/13.mp3',
                'audio/death/14.mp3',
                'audio/death/15.mp3',
                'audio/death/16.mp3',
                'audio/death/17.mp3',
                'audio/death/18.mp3',
                'audio/death/19.mp3'
                
                ];
                
//музычка для проигрывания во время игры             
var levelMusic = pjs.audio.newAudio("audio/level_music.mp3", 0.5); 
     


var randDeathSound = function(){
        var randNum = pjs.math.random( 0, 18, false );
        var sound = pjs.audio.newAudio(deathSounds[randNum], 0.75);
        sound.play();
}

var damage = pjs.audio.newAudio("audio/damage.mp3", 1.5);         //звук урона

var checkpointSound = pjs.audio.newAudio("audio/checkpoint.wav", 1.5);  //звук чекпоинта
var damageSound = function(){
        damage.play();
}

var background = game.newImageObject({
    file: backgroundsImages[0],
    x: 0,
    y: 0,
    w: BGwidth,
    h: BGheight
});





    
/**        РЕДАКТОР УРОВНЕЙ          */


mapStaticObjects ={
        width:64,
        height:64,
        level_1:[             
 '                                                                                         F     ',
 '          ',
 '                       ',
 '          ',
 '                                                                                               ',
 '                                                                                       4 1 1 1 1 1 1 1 1               ',
 '          CCCC        CCCC                                           657         657   9 9 9 9 9 9 9 9 9       ',
 '          6 7         6 7         CC      CC                   CCCC        CCCC        9 9 9 9 9 9 9 9 9                    ',   
 '                                  8   8   8   8   8     T      657         657         9 9 9 9 9 9 9 9 9                                  ',             
 '                           CCCC                                                  C C C 9 9 9 9 9 9 9 9 9   ',          
 '1 1 1 1 3     4 1 1 3     4 1 1 3                    4 1 1 1 3                   4 1 3 9 9 9 9 9 9 9 9 9        ',
 '                                                               ',
 '                                                                    '
 

        ],

        level_2:[  
'                                                                                              F',
'          ',
'                       ',
'                                                 T                                   ',
'                       CCCCCC                                      ',
'                       6 5 7          CC      4 1 3    CC                                 ',
'                                  8   8   8   9 9 9    8          CC                      4 1 1 1 1 1 1 1        ',
'          CCCC                                9 9 9         4 S S 3      CCC  CCC  CCC    9 9 9 9 9 9 9 9          ',   
'          6 7       4 S S S S 3               9 9 9         9 9 9 9      67   67   67     9 9 9 9 9 9 9 9               ',             
'                    9 9 9 9 9 9               9 9 9         9 9 9 9                     4 9 9 9 9 9 9 9 9                 ',          
'1 1 1 3         4 3 9 9 9 9 9 9               9 9 9         9 9 9 9 4 3                 9 9 9 9 9 9 9 9 9       ',
'        S S S S                                                         S S S S S S S S                    ',
'        1 1 1 1                                                         1 1 1 1 1 1 1 1               '
        ],
        
        level_3:[  
'                                                 ', 
'                                                     CCC                                         F',
'                                CC            6 5 5 5 7                                              ',
'                C C C           8                   T                 4 1 3                              ',
'                4 1 3                 СС                         CC   9 9 9   CC                             ',
'            C  C9 9 9                 8        8   8   8         8    9 9 9   8                                      ',
'            4 3 9 9 9       8              8  S S S S S S             9 9 9        CC   CC                      ',
'        C   9 9 9 9 9                         9 9 9 9 9 9    8        9 9 9        8    8    4 1 1 1 1 1 1 1                                            ',   
'        4 3 9 9 9 9 9                         9 9 9 9 9 9             9 9 9                  9 9 9 9 9 9 9 9                                     ',             
'        9 9 9 9 9 9 9   8                     9 9 9 9 9 9 S S S S S S 9 9 9                  9 9 9 9 9 9 9 9                                                                ',          
'1 1 1 3 9 9 9 9 9 9 9                         9 9 9 9 9 9 9 9 9 9 9 9 9 9 9                  9 9 9 9 9 9 9 9                      ',
'                      S S S S S S S S S S S S                                                  ',
'                      1 1 1 1 1 1 1 1 1 1 1 1                                                        '
        ]

};
mapLevel_1 =[];
mapLevelCoins_1=[];
mapLevelEnemies_1=[];
mapLevelEnd_1=[];
mapLevelCheckPoint_1=[];

mapLevel_2 =[];
mapLevelCoins_2=[];
mapLevelEnemies_2=[];
mapLevelEnd_2=[];
mapLevelCheckPoint_2=[];

mapLevel_3 =[];
mapLevelCoins_3=[];
mapLevelEnemies_3=[];
mapLevelEnd_3=[];
mapLevelCheckPoint_3=[];

var generateLvl_1 = function(){
        pjs.OOP.forArr(mapStaticObjects.level_1, function(string,y){
       
                pjs.OOP.forArr(string, function(element,x){
                        var coin = game.newAnimationObject({
                                animation : pjs.tiles.newImage("images/coin.png").getAnimation(0, 0, 128, 129, 6), 
                                        x: x * mapStaticObjects.width,
                                        y: y * mapStaticObjects.height,
                                        w: 48,
                                        h: 48,
                                        delay: 15,
                                        visible: true
                                
                                });
                        var spikes = game.newImageObject({
                                        file:"images/spikes.png", 
                                        x: x * mapStaticObjects.width,
                                        y: y * mapStaticObjects.height,
                                        w: 128,
                                        h: 64,
                                });
                         var checkPoint = game.newAnimationObject({
                                animation : pjs.tiles.newImage("images/checkpoint.png").getAnimation(0, 0, 125, 250, 4), 
                                        x: x * mapStaticObjects.width,
                                        y: y * mapStaticObjects.height,
                                        w: 80,
                                        h: 150,
                                        delay: 15,
                                        visible: true
                                
                                });
                        if(element==2){
                                mapLevel_1.push(game.newImageObject({
                                file: objects[2],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 128
                        }))   
                        }
                                
                
                        if(element==1){
                                mapLevel_1.push(game.newImageObject({
                                file: objects[0],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 128
                        }))   
                        }
                        if(element==5){
                                mapLevel_1.push(game.newImageObject({
                                file: objects[5],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 64
                        }))   
                        }
                        if(element==3){
                                mapLevel_1.push(game.newImageObject({
                                file: objects[3],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 128
                        }))   
                        }
                        if(element==4){
                                mapLevel_1.push(game.newImageObject({
                                file: objects[4],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 128
                                }))   
                        }
                        if(element==6){
                                mapLevel_1.push(game.newImageObject({
                                file: objects[6],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 64
                                }))   
                        }
                        if(element==7){
                                mapLevel_1.push(game.newImageObject({
                                file: objects[7],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 64
                                }))   
                        }
                        if(element==8){
                                mapLevel_1.push(game.newImageObject({
                                file: objects[8],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 64
                                }))   
                        }
                        if(element==9){
                                mapLevel_1.push(game.newImageObject({
                                file: objects[9],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 128
                                }))   
                        }
                        if(element=="T"){
                                mapLevelCheckPoint_1.push( checkPoint)
                                checkPoint.draw();
                        }
                        if(element=="C"){
                                mapLevelCoins_1.push(coin) 
                                coin.draw();     
                        }
        
                        if(element=="S"){
                                mapLevelEnemies_1.push(spikes) 
                                spikes.draw();     
                        }
                        if(element=="F"){
                                mapLevelEnd_1.push(  game.newRectObject({
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 10,
                                h: BGheight,
                                fillColor : "#FBFE6F", 
                                }))
                        }
            
        
                })
        })

}
var generateLvl_2 = function(){
pjs.OOP.forArr(mapStaticObjects.level_2, function(string,y){
       
        pjs.OOP.forArr(string, function(element,x){
                var coin = game.newAnimationObject({
                        animation : pjs.tiles.newImage("images/coin.png").getAnimation(0, 0, 128, 129, 6), 
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 48,
                                h: 48,
                                delay: 10,
                                visible: true
                        
                        });
                var spikes = game.newImageObject({
                                file:"images/spikes.png", 
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 64,
                        });
                var checkPoint = game.newAnimationObject({
                        animation : pjs.tiles.newImage("images/checkpoint.png").getAnimation(0, 0, 125, 250, 4), 
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 80,
                                h: 150,
                                delay: 15,
                                visible: true
                        
                        });
                if(element==2){
                        mapLevel_2.push(game.newImageObject({
                        file: objects[2],
                        x: x * mapStaticObjects.width,
                        y: y * mapStaticObjects.height,
                        w: 128,
                        h: 128
                }))   
                }
        
                if(element==1){
                        mapLevel_2.push(game.newImageObject({
                        file: objects[0],
                        x: x * mapStaticObjects.width,
                        y: y * mapStaticObjects.height,
                        w: 128,
                        h: 128
                }))   
                }
                if(element==3){
                        mapLevel_2.push(game.newImageObject({
                        file: objects[3],
                        x: x * mapStaticObjects.width,
                        y: y * mapStaticObjects.height,
                        w: 128,
                        h: 128
                }))   
                }
                if(element==4){
                        mapLevel_2.push(game.newImageObject({
                        file: objects[4],
                        x: x * mapStaticObjects.width,
                        y: y * mapStaticObjects.height,
                        w: 128,
                        h: 128
                        }))   
                }
                if(element==5){
                        mapLevel_2.push(game.newImageObject({
                        file: objects[5],
                        x: x * mapStaticObjects.width,
                        y: y * mapStaticObjects.height,
                        w: 128,
                        h: 64
                }))}
                if(element==6){
                        mapLevel_2.push(game.newImageObject({
                        file: objects[6],
                        x: x * mapStaticObjects.width,
                        y: y * mapStaticObjects.height,
                        w: 128,
                        h: 64
                        }))   
                }
                if(element==7){
                        mapLevel_2.push(game.newImageObject({
                        file: objects[7],
                        x: x * mapStaticObjects.width,
                        y: y * mapStaticObjects.height,
                        w: 128,
                        h: 64
                        }))   
                }
                if(element==8){
                        mapLevel_2.push(game.newImageObject({
                        file: objects[8],
                        x: x * mapStaticObjects.width,
                        y: y * mapStaticObjects.height,
                        w: 128,
                        h: 64
                        }))   
                }
                if(element==9){
                        mapLevel_2.push(game.newImageObject({
                        file: objects[9],
                        x: x * mapStaticObjects.width,
                        y: y * mapStaticObjects.height,
                        w: 128,
                        h: 128
                        }))   
                }
                if(element=="T"){
                        mapLevelCheckPoint_2.push( checkPoint)
                        checkPoint.draw();
                }
                if(element=="C"){
                        mapLevelCoins_2.push(coin) 
                        coin.draw();     
                }

                if(element=="S"){
                        mapLevelEnemies_2.push(spikes) 
                        spikes.draw();     
                }
                if(element=="F"){
                        mapLevelEnd_2.push(  game.newRectObject({
                        x: x * mapStaticObjects.width,
                        y: y * mapStaticObjects.height,
                        w: 10,
                        h: BGheight,
                        fillColor : "#FBFE6F", 
                        }))
                }
                 

        })
        })



}
var generateLvl_3 = function(){
        pjs.OOP.forArr(mapStaticObjects.level_3, function(string,y){
               
                pjs.OOP.forArr(string, function(element,x){
                        var coin = game.newAnimationObject({
                                animation : pjs.tiles.newImage("images/coin.png").getAnimation(0, 0, 128, 129, 6), 
                                        x: x * mapStaticObjects.width,
                                        y: y * mapStaticObjects.height,
                                        w: 48,
                                        h: 48,
                                        delay: 10,
                                        visible: true
                                
                                });
                        var spikes = game.newImageObject({
                                        file:"images/spikes.png", 
                                        x: x * mapStaticObjects.width,
                                        y: y * mapStaticObjects.height,
                                        w: 128,
                                        h: 64,
                                });
                        var checkPoint = game.newAnimationObject({
                                animation : pjs.tiles.newImage("images/checkpoint.png").getAnimation(0, 0, 125, 250, 4), 
                                        x: x * mapStaticObjects.width,
                                        y: y * mapStaticObjects.height,
                                        w: 80,
                                        h: 150,
                                        delay: 15,
                                        visible: true
                                
                                });

                                
                
                        if(element==1){
                                mapLevel_3.push(game.newImageObject({
                                file: objects[0],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 128
                        }))   
                        }
                        if(element==2){
                                mapLevel_3.push(game.newImageObject({
                                file: objects[2],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 64
                        }))   
                        }
                        if(element==3){
                                mapLevel_3.push(game.newImageObject({
                                file: objects[3],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 128
                        }))   
                        }
                        if(element==4){
                                mapLevel_3.push(game.newImageObject({
                                file: objects[4],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 128
                                }))   
                        }
                        if(element==5){
                                mapLevel_3.push(game.newImageObject({
                                file: objects[5],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 64
                        }))}
                        if(element==6){
                                mapLevel_3.push(game.newImageObject({
                                file: objects[6],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 64
                                }))   
                        }
                        if(element==7){
                                mapLevel_3.push(game.newImageObject({
                                file: objects[7],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 64
                                }))   
                        }
                        if(element==8){
                                mapLevel_3.push(game.newImageObject({
                                file: objects[8],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 64
                                }))   
                        }
                        if(element==9){
                                mapLevel_3.push(game.newImageObject({
                                file: objects[9],
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 128,
                                h: 128
                                }))   
                        }
                        if(element=="T"){
                                mapLevelCheckPoint_3.push( checkPoint)
                                checkPoint.draw();
                        }
                        if(element=="C"){
                                mapLevelCoins_3.push(coin) 
                                coin.draw();     
                        }
        
                        if(element=="S"){
                                mapLevelEnemies_3.push(spikes) 
                                spikes.draw();     
                        }
                        if(element=="F"){
                                mapLevelEnd_3.push(  game.newRectObject({
                                x: x * mapStaticObjects.width,
                                y: y * mapStaticObjects.height,
                                w: 10,
                                h: BGheight,
                                fillColor : "#FBFE6F", 
                                }))
                        }
                         
        
                })
                })
        }







 //примитив игрока
 var playerRect = game.newRectObject(   { 
        x : posX, 
        y : posY, 
        w : 50, 
        h : 92, 
        fillColor : "#FBFE6F", 
      })

  //соприкосновение игрока с монетками
  var pickedCoin = pjs.audio.newAudio("audio/picked_coin.wav", 0.5);
  var score = "0";

  var coinCollusion = function(){
    for(var i in mapLevelCoins_1){
         if(playerRect.isStaticIntersect( mapLevelCoins_1[i].getStaticBox() )){
           if(mapLevelCoins_1[i].visible==true){
               score = +score + 1 + '';
                pickedCoin.stop();
                pickedCoin.play();
              }
              mapLevelCoins_1[i].visible=false;
         }
        
         
 }
 for(var i in mapLevelCoins_2){
        if(playerRect.isStaticIntersect( mapLevelCoins_2[i].getStaticBox() )){
          if(mapLevelCoins_2[i].visible==true){
              score = +score + 1 + '';
               pickedCoin.stop();
               pickedCoin.play();
             }
             mapLevelCoins_2[i].visible=false;
        }
       
        
}
for(var i in mapLevelCoins_3){
        if(playerRect.isStaticIntersect( mapLevelCoins_3[i].getStaticBox() )){
          if(mapLevelCoins_3[i].visible==true){
              score = +score + 1 + '';
               pickedCoin.stop();
               pickedCoin.play();
             }
             mapLevelCoins_3[i].visible=false;
        }
       
        
}

}

//соприкосновение игрока с чекпоинтом
pos = false
var checkPointCollusion = function(){
        if(lvlFlag==1){
                pjs.OOP.forArr(mapLevelCheckPoint_1, function (el) { 
        
                        if(playerRect.isStaticIntersect( el.getStaticBox() )&&!pos){ 
                                cpScore =score;
                                pos = playerRect.getPosition();
                                console.log('saved')
                                checkpointSound.play();
                                
                                //checkPointPos=el.getPosition();

                         /*        var checkPointGreen = game.newImageObject({
                                        file:"images/checkpoint_green.png", 
                                        x:  checkPointPos.x,
                                        y:  checkPointPos.y,
                                        w: 80,
                                        h:150,
                                });
                                checkPointGreen.draw(); */
                                
                        }
                })}
                if(lvlFlag==2){
                pjs.OOP.forArr(mapLevelCheckPoint_2, function (el) { 
                        if(playerRect.isStaticIntersect( el.getStaticBox() )&&!pos){ 
                                cpScore =score;
                                pos = playerRect.getPosition();
                                console.log('saved')
                                checkpointSound.play();
                        }   
                })}
                if(lvlFlag==3){
                pjs.OOP.forArr(mapLevelCheckPoint_3, function (el) { 
                        if(playerRect.isStaticIntersect( el.getStaticBox() )&&!pos){ 
                                cpScore =score;
                                pos = playerRect.getPosition();
                                console.log('saved')
                                checkpointSound.play();
                        } 
                })} 

};



var checkpointCheck = function(){               //проверка на достигнутый чекпоинты
        if(pos){
                playerRect.setPosition(pos);
                score = cpScore ;
        
        }
        else{ playerRect.x=250;
                playerRect.y=548;}
}



var death = function(){  //функция не смерти, а скорее просто окончания уровня(обновляются монетки, счет, хп и тп)               
        
        sizeW=200;
     
        if(lvlFlag==1){

                for(var i in mapLevelCoins_1){
                        mapLevelCoins_1[i].visible=true;   
                }}
        if(lvlFlag==2){
                for(var i in mapLevelCoins_2){
                        mapLevelCoins_2[i].visible=true;   
                }}
        if(lvlFlag==3){
                for(var i in mapLevelCoins_3){
                        mapLevelCoins_3[i].visible=true;   
                }}
        score='0';
}


//соприкосновения игрока с врагами и опасными препятствиями

var levelsComplete = 0;     //счетчик пройденных уровней для корректной работы интерфейса выбора уровней
  sizeW=250;//полоска хитбара
 var enemyCollusion = function(){
        var camPos = pjs.camera.getPosition();
        var hitBar = game.newRectObject(   { 
                x :  camPos.x+1000, 
                y : 45, 
                w : sizeW, 
                h : 20, 
                fillColor : "#C20002", 
              })
        var lifeIcon = game.newImageObject(   { 
                file : "images/life.png", 
                x : camPos.x+970, 
                y : 37, 
                scale: 0.06
        })
              
        
        hitBar.draw();
        lifeIcon.draw();
        if(playerRect.y>=BGheight){
                death();
                game.startLoop('death');
        }

        pjs.OOP.forArr(mapLevelEnemies_1, function (el) { 
                if(playerRect.isStaticIntersect( el.getStaticBox(0, 20, -playerRect.w/2+1, 0,) )){ 
        
                        if( sizeW!=0){   
                                
                                       
                            sizeW-=2.5;
                        }
                        else{ 
                                damage.stop();
                                randDeathSound ();
                                game.startLoop('death');
                                checkpointCheck();
                                death();
                            }
                } 
          })  
          pjs.OOP.forArr(mapLevelEnemies_2, function (el) { 
                if(playerRect.isStaticIntersect( el.getStaticBox(0, 20, -playerRect.w/2+1, 0,) )){ 
                        damageSound ();
                        if( sizeW!=0){            
                            sizeW-=2.5;
                        }
                        else{ 
                                damage.stop();
                                randDeathSound ();
                                game.startLoop('death');
                                checkpointCheck();
                                death();
                            }
                } 
          }) 
          pjs.OOP.forArr(mapLevelEnemies_3, function (el) { 
                if(playerRect.isStaticIntersect( el.getStaticBox(0, 20, -playerRect.w/2+1, 0,) )){ 
                        damageSound ();
                        if( sizeW!=0){            
                            sizeW-=2.5;
                        }
                        else{ 
                                damage.stop();
                                randDeathSound ();
                                game.startLoop('death');
                                checkpointCheck();
                                death();
                            }
                } 
          })            
        }

        
//определение конца уровня
var endLevelCollusion = function(){
        if(lvlFlag==1){
        pjs.OOP.forArr(mapLevelEnd_1, function (el) { 

                if(playerRect.isStaticIntersect( el.getStaticBox() )){ 
                  death();
                  game.startLoop('levelEnd');
                  levelsComplete=1;
                  console.log(levelsComplete)
                }
        })}
        if(lvlFlag==2){
        pjs.OOP.forArr(mapLevelEnd_2, function (el) { 

                if(playerRect.isStaticIntersect( el.getStaticBox() )){ 
                  death();
                  game.startLoop('levelEnd');
                  levelsComplete=2;
                  console.log(levelsComplete)
                }
        })}
        if(lvlFlag==3){
        pjs.OOP.forArr(mapLevelEnd_3, function (el) { 

                if(playerRect.isStaticIntersect( el.getStaticBox() )){ 
                  death();
                  game.startLoop('levelEnd');
                  levelsComplete=3;
                }
        })}
};



      



//камера
        var staticBox =  pjs.camera.getStaticBox()  
        staticBox.y=1;
        camSpeed=15;
camera = function(){
        heroPos =playerRect.getPosition( 1 );
        camPos = pjs.camera.getPosition();
        camPos.y=0;  

        camPosC = pjs.camera.getPositionC(1);  
        camHeroC = playerRect.getPositionC(1)    //положение персонажа 
        camHeroC.x+=130;
        camHeroC.y=1;

        camHeroC.y-=staticBox.y-384;

      
                if (camPosC.x<= camHeroC.x&&  staticBox.y==1){  
                              
                        pjs.camera.moveTimeC(camHeroC,camSpeed);
                       // console.log(camHeroC.x)
                       // console.log(camPosC.x)	
                  }
                  else {
                        pjs.camera.camHeroC;
                        }                  
        }
