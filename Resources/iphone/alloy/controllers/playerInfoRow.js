function Controller() {
    function deleteRow() {
        $.nameField.blur();
        args.onDelete($);
    }
    function selectImage() {
        Ti.API.info("selectImage");
    }
    function doneEditing() {
        function getRandName() {
            var names = [ "name1", "name2", "name3", "name4" ];
            return names[Math.floor(Math.random() * names.length)];
        }
        Ti.API.info("#####", $.nameField.value);
        "" == $.nameField.value && ($.nameField.value = getRandName());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "playerInfoRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.playerInfoRow = Ti.UI.createView({
        backgroundColor: "white",
        id: "playerInfoRow"
    });
    $.__views.playerInfoRow && $.addTopLevelView($.__views.playerInfoRow);
    $.__views.img = Ti.UI.createView({
        id: "img",
        left: "0",
        backgroundColor: "gray",
        width: "50",
        height: "50"
    });
    $.__views.playerInfoRow.add($.__views.img);
    selectImage ? $.__views.img.addEventListener("click", selectImage) : __defers["$.__views.img!click!selectImage"] = true;
    $.__views.nameField = Ti.UI.createTextField({
        left: 60,
        id: "nameField",
        hintText: "Input Name"
    });
    $.__views.playerInfoRow.add($.__views.nameField);
    doneEditing ? $.__views.nameField.addEventListener("blur", doneEditing) : __defers["$.__views.nameField!blur!doneEditing"] = true;
    $.__views.deleteBtn = Ti.UI.createButton({
        id: "deleteBtn",
        title: "x",
        right: "20"
    });
    $.__views.playerInfoRow.add($.__views.deleteBtn);
    deleteRow ? $.__views.deleteBtn.addEventListener("click", deleteRow) : __defers["$.__views.deleteBtn!click!deleteRow"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row = args.row;
    $.focus = function() {
        $.nameField.focus();
    };
    $.getPlayerData = function() {
        var data = {
            name: $.nameField.value,
            image: "image"
        };
        return data;
    };
    __defers["$.__views.img!click!selectImage"] && $.__views.img.addEventListener("click", selectImage);
    __defers["$.__views.nameField!blur!doneEditing"] && $.__views.nameField.addEventListener("blur", doneEditing);
    __defers["$.__views.deleteBtn!click!deleteRow"] && $.__views.deleteBtn.addEventListener("click", deleteRow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;