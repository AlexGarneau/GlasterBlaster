(function (scope) {
    "use strict";

    var GlasterBlaster = function () {
        this.init();
    };
    var p = GlasterBlaster.prototype;

    p.canvas = null;

    p.init = function () {
        this.canvas = document.getElementById("glasterblaster");
        this.stage = new createjs.Stage(this.canvas);

        var graphics = new createjs.Graphics();
        graphics.f("#0040DF").dr(0, 0, 800, 600);
        var shape = new createjs.Shape(graphics);
        this.stage.addChild(shape);

        this.stage.update();
    };

    scope.GlasterBlaster = GlasterBlaster;

}(window));
