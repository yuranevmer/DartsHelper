var args = arguments[0] || {};
var player = args.player;

$.name.text = player.data.name;


$.addHit = function(hit){
	var v = Ti.UI.createLabel({
		text: hit.value + "x" + hit.multiplier,
		width: 50
	});
	$.hitsHolder.add(v)
	
};
