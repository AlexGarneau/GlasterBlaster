(function (scope) {
    "use strict";

    var s = function () {
        this.init();
    };

    s.MIN_DIAMETER = 5;
    s.MAX_DIAMETER = 20;

    var p = s.prototype;

    p.container = null;

    p.diameter = 0;

    p.init = function () {
      this.container = new createjs.Container();
      this.diameter = s.MIN_DIAMETER;
    };

    p.update = function () {

    };

    scope.Blaster = s;

}(window));
