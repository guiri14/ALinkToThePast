var Menu = function(){};

Menu.prototype = {
	bg: null,
	load_label: null,

	preload: function() {
		this.load_label = game.add.text(90, 90, 'Please wait, loading...', {font: '30px Arial', fill: '#ffffff' });
		this.bg = game.load.image('bg', 'Assets/gfx/shady_tree.png');
		game.load.image('player', 'Assets/gfx/friendly.png');
		game.load.image('PacmanIntroBg', 'Assets/gfx/background_pac-man.png');

		//Projectile
		game.load.image('bullet', 'Assets/gfx/projectile.png');
	},

	create: function() {		
		var button = this.add.button(0, 0, 'bg', this.startGame, this);
		button.scale.setTo(800 / 3507, 600 / 2550);
	},

	startGame: function() {
		this.state.start('TetrisIntro');
	}

}