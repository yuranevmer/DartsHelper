var args = arguments[0] || {};
$.numberOfPlayers = 0;
$.players = [];

function startGame(e){
	var rows = $.table.sections[0].rows;
	_.each(rows, function(row){
		if (row.type == "player") {
			$.players.push(row.controller.getPlayerData());
		}
	});
	Ti.API.info($.players);
}
function addPlayer(){
	var row = Ti.UI.createTableViewRow({
		height: 60,
		type: "player",
		index: $.numberOfPlayers,
		onDelete: deleteRow,
	});
	var rc = Alloy.createController("playerInfoRow", {
		row: row,
		onDelete: deleteRow
	});
	row.controller = rc;
	row.add(rc.getView());
	
	$.table.insertRowBefore($.numberOfPlayers, row);
	$.numberOfPlayers++;
	rc.focus();
}

function deleteRow(rowController){
	$.numberOfPlayers--;
	var row = rowController.row;
	$.table.deleteRow(row);
	rowController = null;
}


