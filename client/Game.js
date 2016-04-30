define([
	'json!data/config.json',
	'display/draw',
	'display/camera',
	'entity/fighter/Croc',
	'level/Platform',
	'input/keyboard'
], function(
	config,
	draw,
	camera,
	Croc,
	Platform,
	keyboard
) {
	function Game() {
		//create fighters
		this.player = new Croc({ x: -125, y: -200, facing: 1 });
		this.fighters = [ this.player, new Croc({ x: 275, y: 0, facing: -1 }) ];

		//create platforms
		this.level = [
			new Platform({ x: -625, y: 50, width: 225, height: 700 }),
			new Platform({ x: -400, y: 0, width: 625, height: 750 }),
			new Platform({ x: 225, y: 125, width: 350, height: 625 }),
			new Platform({ x: 425, y: -150, width: 100, height: 175 }),
			new Platform({ x: -50, y: -125, width: 125, height: 25 }),
			new Platform({ x: 50, y: -250, width: 125, height: 25 }),
			new Platform({ x: -50, y: -375, width: 125, height: 22.5 })
		];
		this.levelLeftBound = -1150;
		this.levelRightBound = 1150;
		this.levelTopBound = -750;
		this.levelBottomBound = 750;

		//listen for inputs
		this.bufferedInputs = [];
		keyboard.on('key-event', function(key, isDown) {
			this.bufferedInputs.push({ key: key, isDown: isDown, state: keyboard.getState() });
		}, this);
	}
	Game.prototype.update = function() {
		//update/reset frame counters and the like
		for(var i = 0; i < this.fighters.length; i++) {
			this.fighters[i].startOfFrame();
		}

		//handle user inputs
		if(this.player) {
			for(i = 0; i < this.bufferedInputs.length; i++) {
				this.player.handleInput(this.bufferedInputs[i].key, this.bufferedInputs[i].isDown, this.bufferedInputs[i].state);
			}
		}
		this.bufferedInputs = [];

		//move entity positions
		for(i = 0; i < this.fighters.length; i++) {
			this.fighters[i].move(this.level);
		}

		//prep for next frame
		for(i = 0; i < this.fighters.length; i++) {
			this.fighters[i].endOfFrame();
		}
	};
	Game.prototype.render = function() {
		//adjust camera to follow both players
		var fighter1 = this.fighters[0], fighter2 = this.fighters[1];
		var fighterAvgX = (fighter1.pos.x + fighter2.pos.x) / 2;
		var fighterAvgY = (fighter1.top + fighter2.top) / 4;
		var horizontalDist = Math.max(fighter1.right, fighter2.right) - Math.min(fighter1.left, fighter2.left);
		var verticalDist = Math.max(fighter1.bottom, fighter2.bottom) - Math.min(fighter1.top, fighter2.top);
		var zoom = Math.min(1.25, 1 / Math.max(2 * horizontalDist / config.CANVAS_WIDTH, 2 * verticalDist / config.CANVAS_HEIGHT));
		camera.pos.x = (camera.pos.x * 20 + fighterAvgX) / 21;
		camera.pos.y = (camera.pos.y * 20 + fighterAvgY) / 21;
		camera.zoom = (camera.zoom * 20 + zoom) / 21;

		//clear canvas
		draw.rect(0, 0, config.CANVAS_WIDTH, config.CANVAS_HEIGHT, { fill: '#000', fixed: true });

		//draw level bounds
		draw.rect(this.levelLeftBound, this.levelTopBound, this.levelRightBound - this.levelLeftBound,
			this.levelBottomBound - this.levelTopBound, { stroke: '#fff', thickness: 2 });

		//draw level
		for(var i = 0; i < this.level.length; i++) {
			this.level[i].render();
		}

		//draw fighters
		for(i = 0; i < this.fighters.length; i++) {
			this.fighters[i].render();
		}
	};
	return Game;
});