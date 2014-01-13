function startNewGame(e){
	var c = Alloy.createController('customizeNewGame',{});
	Alloy.Globals.nav.openWindow(c.getView());
}







Alloy.Globals.nav = $.nav;
$.nav.open();