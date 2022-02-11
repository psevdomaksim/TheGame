/*let canvas = document.getElementById('game');
        let context = canvas.getContext('2d');
        

        let lvlWidth = 1280,
            lvlHeight= 720,
            objX=0,
            objY=128;

            hero =[                             //массив со спрайтом героя
                'images/hero.png'
            ]

            objects = [                            //массив с различными графическими обьектами уровня
                'images/PNG/jungle_pack_13.png',
                'images/PNG/jungle_pack_52.png'];
                
            backgrounds = [                         //массив с бэграундами
                'images/PNG/background.png'];

        var heroSprite= new Image()                //спрайт героя
        heroSprite.src= hero[0];    

        var background = new Image()                //беграунд
        background.src= backgrounds[0];

        var ground = new Image()                //граунд
        ground.src= objects[0]

        var water = new Image()                //вода
        water.src= objects[1]





var level =
{
    
    draw: function(){                               //работа с графикой
        context.clearRect(0,0,1280,720);
        background.addEventListener("load",() => {
                 window.requestAnimationFrame(() => {
                context.drawImage(background,0, 0, lvlWidth, lvlHeight);    //бэграунд
                

                for(var i=0;i<lvlWidth;i+=128){                             //равномерно отрисовывает землю повторяющиеся спрайты
                context.drawImage(ground,objX, lvlHeight-objY, 128, 128);   //земля
                context.drawImage(water,objX, lvlHeight-objY, 128, 128);    //вода
                    objX+=128;
                }
                
            });

        });
    }
};
*/

    




