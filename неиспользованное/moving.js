var key = pjs.keyControl;
key.initControl();

var p = pjs.vector.point;


game.newLoop('game', function () {
    pjs.game.clear();
    heroAnimationStay.draw();
   // if (key.isDown('UP') && key.isDown('W')) {
       // heroAnimationUp.draw();
       // heroAnimationLeft.move(p(0, -1) );
 //}
	
 if (key.isDown('RIGHT') || key.isDown('D')) {
        pjs.game.clear();
        heroAnimationRight.draw();
   

 }	if (key.isDown('LEFT') || key.isDown('A')) {
        pjs.game.clear();
        heroAnimationLeft.draw();
    // heroAnimationLeft.move(p(-1, 0) );
 } 
 
 	 if (key.isDown('DOWN') || key.isDown('S')) {
        pjs.game.clear();
       // heroAnimationLeft.move(p(0, 1) );
 }
 
 
  	 if (key.isDown('UP') || key.isDown('W')) {
        pjs.game.clear();
        heroAnimationUp.draw();
       // heroAnimationLeft.move(p(0, -1) );
 }
 



})



game.setLoop('game');
game.start();























//останавливает все интервалы
function stopIntervals(){
    var stopIntervals= setTimeout(function() {
    for (var i = stopIntervals; i > 0; i--) clearInterval(i)
    }, 1);
}













