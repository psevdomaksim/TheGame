/************************************************************* *  анимации

function heroAnimationStay(){           //анимация когда игрок ничего не нажимает
    stopIntervals();
    function mainInterval(){
        var i = 1;
            setInterval(function () {
            level.draw(); 
            heroAnimation(heroSprite,i);
            if(i>=9) i=1;
            else i+=1;
        },25)
    }
    
    mainInterval();

    function heroAnimation(heroSprite,num) {
       
        num = num ? num-1 : 0;
        
        context.drawImage(heroSprite,64*num, 128, 64, 64,64,lvlHeight-objY-96,96,96); 
    };
};



function heroAnimationLeft(){                   //анимация движения влево
    stopIntervals();
    function mainInterval(){
        var i = 1;
            setInterval(function () {
             level.draw();
            heroAnimation(heroSprite,i);
            if(i>=8) i=1;
            else i+=1;
        },25)
    }
   
    mainInterval();

    function heroAnimation(heroSprite,num) {
       
        num = num ? num-1 : 0;
        
        context.drawImage(heroSprite,64*num, 449, 64, 64,64,lvlHeight-objY-96,96,96); 
    };
};

function heroAnimationJump(){                   //анимация прыжка на месте
    function mainInterval(){
        var i = 1;
            setInterval(function () {
            level.draw();
            heroAnimation(heroSprite,i);
            if(i>=7) i=1;
            else i+=1;
        },100)
    }
    stopIntervals();
    mainInterval();

    function heroAnimation(heroSprite,num) {
       
        num = num ? num-1 : 0;
        
        context.drawImage(heroSprite,64*num, 258, 64, 64,64,lvlHeight-objY-96,96,96); 
    };
};

function heroAnimationLeftJump(){                   //анимация прыжка влево
    function mainInterval(){
        var i = 1;
            setInterval(function () {
            level.draw();
            heroAnimation(heroSprite,i);
            if(i>=6) i=1;
            else i+=1;
        },100)
    }
    stopIntervals();
    mainInterval();

    function heroAnimation(heroSprite,num) {
       
        num = num ? num-1 : 0;
        
        context.drawImage(heroSprite,64*num, 322, 64, 64,64,lvlHeight-objY-96,96,96); 
    };
};
*/