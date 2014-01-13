var args = arguments[0] || {};

$.row = args.row;
$.focus = function() {
	$.nameField.focus();
};

$.getPlayerData = function() {
	var data = {
		name: $.nameField.value,
		image: "image",
		
	};
	return data;
};

function deleteRow() {
	$.nameField.blur();
	args.onDelete($);
}
function selectImage(){
	Ti.API.info('selectImage');
}
function doneEditing() {
	Ti.API.info('#####',$.nameField.value )
	if ($.nameField.value == "") {
		$.nameField.value = getRandName();
	}
	function getRandName(){
		var names = ["name1","name2","name3","name4"];
		return names[Math.floor(Math.random() * names.length)];
	} 
}
