var BGwidth = 1280,
    BGheight = 768;

pjs = new PointJS (BGwidth,  BGheight, {backgroundColor: '#447BD4'});
var game = pjs.game;
var presets = pjs.presets;

    	


var lvlFlag=0;
/**                     АНИМАЦИИ                             */
var posX=100;
var posY=548;
//ходьба влево
  var heroAnimationLeft = game.newAnimationObject(   {                                   
    animation : pjs.tiles.newImage("images/hero.png").getAnimation(0, 450, 64.5, 64, 8), 
    x : posX, 
    y : BGheight-220,
    w: 96,
    h: 96,
    delay: 2,
    visible: false
  });  
  //ходьба вправо
  var heroAnimationRight = game.newAnimationObject(   {                                   
  animation : pjs.tiles.newImage("images/hero.png").getAnimation(0, 640, 64.5, 64, 8), 
  x : posX, 
  y : BGheight-220,
  w: 96,
  h: 96,
  delay: 2,
  visible: false
}); 
//прыжки на месте
  var heroAnimationUp = game.newAnimationObject(   { 
    animation : pjs.tiles.newImage("images/hero.png").getAnimation(0, 258, 64.5, 64, 7), 
    x : posX, 
    y : BGheight-220, 
    w: 96,
    h: 96,
    delay: 5,
    visible: false
  }); 
  //дубликат прыжков на месте
  var heroAnimationUpClone = game.newAnimationObject(   { 
    animation : pjs.tiles.newImage("images/hero.png").getAnimation(322, 258, 64.5, 64, 1), 
    x : posX, 
    y : BGheight-220, 
    w: 96,
    h: 96,
    delay: 5,
    visible: false
  });
  //прыжки влево
  var heroAnimationUpLeft = game.newAnimationObject(   { 
    animation : pjs.tiles.newImage("images/hero.png").getAnimation(0, 320, 64.5, 64, 6), 
    x : posX, 
    y : BGheight-220, 
    w: 96,
    h: 96,
    delay: 4,
    visible: false
  }); 
  //клон прыжков влево
  var heroAnimationUpLeftClone = game.newAnimationObject(   { 
    animation : pjs.tiles.newImage("images/hero.png").getAnimation(194, 320, 64.5, 64, 1), 
    x : posX, 
    y : BGheight-220, 
    w: 96,
    h: 96,
    delay: 4,
    visible: false
  }); 
  //прыжки вправо
  var heroAnimationUpRight = game.newAnimationObject(   { 
    animation : pjs.tiles.newImage("images/hero.png").getAnimation(0, 512, 64.5, 64, 6), 
    x : posX, 
    y : BGheight-220, 
    w: 96,
    h: 96,
    delay: 5,
    visible: false
  }); 
  //клон прыжков вправо
  var heroAnimationUpRightClone = game.newAnimationObject(   { 
    animation : pjs.tiles.newImage("images/hero.png").getAnimation(194, 512, 64.5, 64, 1), 
    x : posX, 
    y : BGheight-220, 
    w: 96,
    h: 96,
    delay: 5,
    visible: false
  }); 
//стоя
  var heroAnimationStay = game.newAnimationObject(   { 
    animation : pjs.tiles.newImage("images/hero.png").getAnimation(0, 128, 64.5, 64, 7), 
    x : posX, 
    y : BGheight-220, 
    w: 96,
    h: 96,
    delay: 20,
    visible: true
  }); 

 

























