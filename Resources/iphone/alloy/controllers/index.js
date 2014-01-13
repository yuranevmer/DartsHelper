function Controller() {
    function startNewGame() {
        var c = Alloy.createController("customizeNewGame", {});
        Alloy.Globals.nav.openWindow(c.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        id: "win"
    });
    $.__views.newGameBtn = Ti.UI.createButton({
        width: "40%",
        id: "newGameBtn",
        title: "newGame"
    });
    $.__views.win.add($.__views.newGameBtn);
    startNewGame ? $.__views.newGameBtn.addEventListener("click", startNewGame) : __defers["$.__views.newGameBtn!click!startNewGame"] = true;
    $.__views.nav = Ti.UI.iOS.createNavigationWindow({
        backgroundColor: "white",
        navBarHidden: true,
        window: $.__views.win,
        id: "nav"
    });
    $.__views.nav && $.addTopLevelView($.__views.nav);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.nav = $.nav;
    $.nav.open();
    __defers["$.__views.newGameBtn!click!startNewGame"] && $.__views.newGameBtn.addEventListener("click", startNewGame);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;