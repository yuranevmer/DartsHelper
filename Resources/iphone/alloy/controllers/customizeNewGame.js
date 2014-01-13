function Controller() {
    function startGame() {
        var rows = $.table.sections[0].rows;
        _.each(rows, function(row) {
            "player" == row.type && $.players.push(row.controller.getPlayerData());
        });
        Ti.API.info($.players);
    }
    function addPlayer() {
        var row = Ti.UI.createTableViewRow({
            height: 60,
            type: "player",
            index: $.numberOfPlayers,
            onDelete: deleteRow
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
    function deleteRow(rowController) {
        $.numberOfPlayers--;
        var row = rowController.row;
        $.table.deleteRow(row);
        rowController = null;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "customizeNewGame";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.customizeNewGame = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "customizeNewGame"
    });
    $.__views.customizeNewGame && $.addTopLevelView($.__views.customizeNewGame);
    $.__views.doneBtn = Ti.UI.createButton({
        id: "doneBtn",
        title: "Start",
        bottom: "50"
    });
    startGame ? $.__views.doneBtn.addEventListener("click", startGame) : __defers["$.__views.doneBtn!click!startGame"] = true;
    $.__views.customizeNewGame.rightNavButton = $.__views.doneBtn;
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Players",
        color: "black",
        left: "20",
        top: "50",
        id: "__alloyId1"
    });
    $.__views.customizeNewGame.add($.__views.__alloyId1);
    var __alloyId2 = [];
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.add = Ti.UI.createButton({
        id: "add",
        title: "+",
        right: "20",
        top: "20"
    });
    $.__views.__alloyId3.add($.__views.add);
    addPlayer ? $.__views.add.addEventListener("click", addPlayer) : __defers["$.__views.add!click!addPlayer"] = true;
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId2,
        id: "table",
        top: "70",
        bottom: "70",
        borderWidth: "1",
        allowsSelection: "false"
    });
    $.__views.customizeNewGame.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.numberOfPlayers = 0;
    $.players = [];
    __defers["$.__views.doneBtn!click!startGame"] && $.__views.doneBtn.addEventListener("click", startGame);
    __defers["$.__views.add!click!addPlayer"] && $.__views.add.addEventListener("click", addPlayer);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;