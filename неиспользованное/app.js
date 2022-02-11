




/*var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var background = new Image();
background.src= 'images/backgroundForest.png'

var heroSprite = new Image(); //герой
heroSprite.src= 'images/hero.png'

var ground = new Image();
ground.src= 'images/ground.png'

background.onload = function(){
    game() ;
}   
//основной игровой цикл
function game() {
    update();
    render();
    requestAnimationFrame(game);
    draw();
}



function update(){
//x=x-1;

}
//конструкция обеспечивает анимацию спрайта
var width = 64;
var height = 64;
var frames = 7;
var currentFrame = 0;
var x=0;

var draw = function() {
    context.clearRect(0, 0, width, height);
    context.drawImage(heroSprite, x, height * currentFrame, width, height, 200, 100, width, height);

    if (currentFrame == frames) {
      currentFrame = 0;
    } else {
      currentFrame++;
    }
}



function render(){
    context.drawImage(background,0, 0, 1280, 720);  //беграунд

    //context.drawImage(heroSprite,0, 100, 704, 515,0,0,width,height);  //герой
    //context.drawImage(ground,0, 0, 100, 100); //граунд
}

*/


/*var keyBoard = {}, 
globalX = 0, 
gameOver = false,
finishTime = 0,
startTime= new Date().getTime();

function Resize()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

Resize();
window.addEventListener("resize", Resize);

function Start()
{
    timer = setInterval(Update, 1000 / 60); //Состояние игры будет обновляться 60 раз в секунду — при такой частоте обновление происходящего будет казаться очень плавным
}
 
function Stop()
{
    clearInterval(timer); //Остановка обновления
}*/



/**
 * var keys = {        //обьект хранящий клавиши клавиатуры
    'ArrowLeft' : 37,
    'ArrowUp' : 38,
    'ArrowRight' : 39,
    'ArrowDown' : 40,

    'A' : 65,
    'W' : 87,
    'D' : 68,
    'S' : 83,

    'Esc' : 27
};

var keyDown = {};        //хранит текущую нажатую клавишу


var setKey = function (keyCode) {
    keyDown[keyCode] = true;              //присваивает переменной keyDown код клавиши
};

var clearKey = function (keyCode) {          //очищает любые нажатые клавиши
    keyDown[keyCode] = false;  
};

var isKeyDown = function (keyName) {     //проверяет нажата ли какая-то клавиша в текущий момент
    return keyDown[keys[keyName]] == true; 
    
};

var gameEngine = function(){
    if(typeof engine == 'function')
     engine();
        else
     console.log('Не определена функция engine');
    requestAnimationFrame(gameEngine);
};

function engine(){

    if(window.onkeypress=false)
     heroAnimationStay();
     

    if (isKeyDown('ArrowLeft'))
     heroAnimationLeft();
     if (isKeyDown('A'))
     heroAnimationLeft();

     if (isKeyDown('ArrowUp'))
     heroAnimationJump();
     if (isKeyDown('W'))
     heroAnimationJump();

     if (isKeyDown('ArrowUp'&&'ArrowLeft'))
     heroAnimationLeftJump();
};




window.onload = function () {
        window.onkeyup = function(event){
        setKey(event.keyCode);
    };

        window.onkeydown = function(event){
        clearKey(event.keyCode);
    };
    gameEngine();
}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */