(function (scope) {
    "use strict";

    var GlasterBlaster = function () {
        this.init();
    };
    var p = GlasterBlaster.prototype;

    p.canvas = null;

    p.init = function () {
        this.canvas = document.getElementById("glasterblaster");
    };

    scope.GlasterBlaster = GlasterBlaster;

}(window));
