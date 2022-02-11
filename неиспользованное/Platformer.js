// Размер карты
var Mx = 1000;
var My = 1000;

// Подключение движка
var pjs = new PointJS(Mx, My, {backgroundColor: 'rgba(150, 150, 150, 1.0)'});

// Объявление функций движка
var Game = pjs.game;
var Levels = pjs.levels;
var Camera = pjs.camera;
var KControl = pjs.keyControl;
var MControl = pjs.mouseControl;
var TControl = pjs.touchControl;
var System = pjs.system;
var Vector = pjs.vector;
var Mat = pjs.math;
var Layers = pjs.layers;
var Colors = pjs.colors;
var Brush = pjs.brush;
var WAudio = pjs.wAudio;
var Resources = pjs.resources;
var Tiles = pjs.tiles;
var OOP = pjs.OOP;
var Memory = pjs.memory;
var Module = pjs.module;
var ZList = pjs.zList;
var Filters = pjs.filters;
var Presets = pjs.presets;

// Объявление настроек игры
System.initFullPage();
var VPoint = Vector.point;
var WDisplay = Game.getWH().w;
var HDisplay = Game.getWH().h;
MControl.initControl();
KControl.initControl();

// Объявление игровых объектов

// Генератор мира
var MGenerator = {
	width: 25,
	height: 25,
	level: [
'10000000000000000000000000000000000000000000000000000000000000001',
'10000000000000000000000000000000000000000000000000000000000000001',
'10000000000000000000000000000000000000000000000000000000000000001',
'10000000000000000000000000000000000000000000000000000000000000001',
'10000000000000000000000000000000000000000000000000000000000000001',
'10000000000000000000000000000000000000000000000000000000000000001',
'10000000000000000000000000000000000000000000000000000000000000001',
'10000000000000000000000000000000000000000000000000000000000000001',
'10000000000000000000000000000000000000000000000000000000000000001',
'10000000000000000000000000000000000000000000000000000000000000001',
'10000000000000000000000000000000000000000000000000000000000000001',
'10000000000000000000000000000000000000000000000000033300033000001',
'10000000000000000000000000000000000000000000000000000000000000001',
'10000000000000000000000000333300000000000000000004444444444000001',
'10000000000000000000000000000000000000000000000000000000000000001',
'10000000000000000000000000000000000000000000000000000000000000001',
'10000000000000000000000000000000000000000000000000000000000000001',
'10000000000000000000000000000000300000000000000000000000000000001',
'10000000000000000000033300000000000000000000000000000000000000001',
'10000000000000000000000000000444444000000000000000000000000000001',
'10000000000330000000000000000000000000000000000000000000000000001',
'10000000000000000000000000000000000000000000000000000000000000001',
'10000444444444400000000000000000000000000000000000000000000000001',
'10000000000000000000000000000000000000000000000000000000000000001',
'12222222222222222222222222222222222222222222222222222222222222221',
'11111111111111111111111111111111111111111111111111111111111111111'
]
};

// Сам мир
var MCreator = [];
// Платформы
var Platforms = [];
// Шипы
var Spikes = [];
// Монетки
var Coins = [];

// Генератор
OOP.forArr(MGenerator.level, function(string, y) {
	OOP.forArr(string, function(el, x) {
		if(el == 1) {
			MCreator.push(
				Game.newRectObject({
					x: x * MGenerator.width,
					y: y * MGenerator.height,
					w: 25,
					h: 25,
					fillColor: 'rgba(150, 0, 0, 1.0)'
				})
			);
		}
		if(el == 2) {
			Spikes.push(
				Game.newTriangleObject({
					x: x * MGenerator.width,
					y: y * MGenerator.height,
					w: 25,
					h: 25,
					fillColor: 'rgba(0, 255, 0, 1.0)'
				})
			);
		}
		if(el == 3) {
			Coins.push(
				Game.newRoundRectObject({
					x: x * MGenerator.width,
					y: y * MGenerator.height,
					w: 25,
					h: 25,
					radius: 10,
					fillColor: "rgba(0, 0, 255, 1.0)",
				})
			);
		}
		if(el == 4) {
			Platforms.push(
				Game.newRectObject({
					x: x * MGenerator.width,
					y: y * MGenerator.height,
					w: 25,
					h: 25,
					radius: 10,
					fillColor: "rgba(255, 255, 255, 1.0)",
				})
			);
		}
	});
});

// Игрок
var Player = Game.newCircleObject({
	x: 100,
	y: 400,
	radius: 30,
	fillColor: 'rgba(255, 150, 0, 1.0)'
});
// Счет игрока
var Score = 0;
// Здоровье игрока
var Health = 5;

// Главная сцена
Game.newLoop('Scene01', function() {
	// Отрисовка мира
	OOP.drawArr(MCreator);
	// Отрисовка платформ
	OOP.drawArr(Platforms);
	// Отрисовка шипов
	OOP.drawArr(Spikes);
	// Отрисовка монет
	OOP.drawArr(Coins);
	
	// Параметры движения игрока
	Presets.physicsMoveInit(Player, 5, 9.8, 0.01, 5, 0, 0.5, 5, 1, 0, ['D'], ['A'], ['W'], ['S']);
	
	// Столкновение игрока со стенами
	for(var i in MCreator) {
		Presets.physicsMoveCollision(MCreator[i]);
	}
	for(var i in Platforms) {
		Presets.physicsMoveCollision(Platforms[i]);
	}
	// Столкновение игрока с монетами
	for(var Coin in Coins) {
		if(Player.isStaticIntersect(Coins[Coin].getStaticBox())) {
			Coins.splice(Coin, 1);
			Score += 1;
		}
	}
	if(Coins.length == 0) {
		Game.setLoop('Scene03');
	}
	
	// Столкновение игрока с шипами
	for(var Spike in Spikes) {
		if(Player.isStaticIntersect(Spikes[Spike].getStaticBox())) {
			for(var Platform in Platforms) {
				if(Player.getDistanceC(Platforms[Platform].getPosition(1)) < 300) {
					Player.setPositionC(VPoint(Platforms[Platform].getPosition(1).x + 75, Platforms[Platform].getPosition(1).y - (Player.radius+Platforms[Platform].h)));
				}
			}
			Health -= 1;
		} else if(Health <= 0) {
			Game.setLoop('Scene02');
		}
	}
	// Движение игрока
	Presets.physicsMove();
	Camera.moveTimeC(Player.getPosition(1), 10);
	// Отрисовка игрока
	Player.draw();
	// Отрисовка иформации
	Brush.drawMultiTextS({
		text: 'Cчет: '+Score+'\nЗдоровье: '+Health,
		x: 2,
		y: 20,
		size: 50,
		color: "black"
	});
});

// Конечная сцена
Game.newLoop('Scene02', function() {
	// Отрисовка иформации
	Brush.drawMultiTextS({
		text: 'Вы проиграли =(',
		x: WDisplay/2,
		y: HDisplay/3,
		size: 100,
		align: 'center',
		color: "black"
	});
});
// Продолжение игры
Game.newLoop('Scene03', function() {
	// Отрисовка иформации
	Brush.drawMultiTextS({
		text: 'Вы перешли на уровень 2\nПоздаравляю !!!',
		x: WDisplay/2,
		y: HDisplay/3,
		size: 50,
		align: 'center',
		color: "black"
	});
});
// Запуск сцены
Game.setLoop('Scene01');
// Запуск игры
Game.start();