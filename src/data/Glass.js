(function (scope) {
    "use strict";

    var s = function () {
        this.init();
    };

    s.TOOL_BLASTER = 0;
    s.TOOL_CUTTER_CLICK = 1;
    s.TOOL_CUTTER_DRAG = 2;

    var p = s.prototype;

    p.container = null;

    p.tool = null;

    // Glass components.
    p.glassPane = null;
    p.glassMask = null;

    // Cover components
    p.coverPane = null;
    p.coverMask = null;
    p.coverCutLines = null;

    p.glassMaskUpdate = false;
    p.coverMaskUpdate = false;
    p.coverCutLinesUpdate = false;

    p._isDown = false;

    p.init = function () {
      this.container = new createjs.Container();

      this.glassPane = new createjs.Shape();
      this.glassMask = new createjs.Shape();

      this.coverPane = new createjs.Shape();
      this.coverMask = new createjs.Shape();
      this.coverCutLines = new createjs.Shape();

      this.container.addChild(this.glassPane);
      this.container.addChild(this.coverPane);
      this.container.addChild(this.coverCutLines);

      this.tool = s.TOOL_BLASTER;
    };

    p.update = function () {
      if (this.glassMaskUpdate) {
        this.glassMaskUpdate = false;
      }
      if (this.coverMaskUpdate) {
        this.coverMaskUpdate = false;
      }
      if (this.coverCutLinesUpdate) {
        this.coverCutLinesUpdate = false;
      }
    };

    p.onDown = function (e) {
      this._isDown = true;
    };

    p.onUp = function (e) {
      this._isDown = false;
    };

    scope.Glass = s;

}(window));
