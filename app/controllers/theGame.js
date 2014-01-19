var args = arguments[0] || {};
var playersData = args.playersData;
$.players = [];



_.each(playersData, function(data){
	var player = new Player(data);
	$.players.push(player);
	
	var playerRow = Alloy.createController("gamePlayerRow", {player: player});
	
	player.row = playerRow;
	
});

var data = [];
_.each($.players, function(player){
	var row = Ti.UI.createTableViewRow({
		//width:200,
		height: Ti.UI.SIZE
	});
	row.add(player.row.getView());
	//data.push(row);
    $.table.appendRow(row);
});
//$.table.data = data;


_.times(25, function(){
	$.players[0].row.addHit({
		value:20,
		multiplier: 1
	})
});




function Player(data){
	var self = this;
	this.data = data;
	this.hits = [];
	
	this.getScore = function(){
		var sum = 0;
		_.each(self.hits, function(hit){
			sum = sum + hit.value * hit.koef;
		});
		return sum;
	};
	this.hit = function(hit){
		this.hits.push(hit);
	}; 
};
