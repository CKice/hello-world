var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid(numCols, numRows) {
        var _this = _super.call(this) || this;
        _this._numCols = numCols;
        _this._numRows = numRows;
        _this._ANodes = new Array();
        for (var i = 0; i < _this._numCols; i++) {
            _this._ANodes[i] = new Array();
            for (var j = 0; j < _this._numRows; j++) {
                _this._ANodes[i][j] = new ANode(i, j);
            }
        }
        return _this;
    }
    Grid.prototype.getNode = function (x, y) {
        return this._ANodes[x][y];
    };
    Grid.prototype.setEndNode = function (x, y) {
        this._endANode = this._ANodes[x][y];
    };
    Grid.prototype.setStartNode = function (x, y) {
        this._startANode = this._ANodes[x][y];
    };
    Grid.prototype.setWalkable = function (x, y, value) {
        this._ANodes[x][y].walkable = value;
    };
    Object.defineProperty(Grid.prototype, "endNode", {
        get: function () {
            return this._endANode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "numCols", {
        get: function () {
            return this._numCols;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "numRows", {
        get: function () {
            return this._numRows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "startNode", {
        get: function () {
            return this._startANode;
        },
        enumerable: true,
        configurable: true
    });
    return Grid;
}(egret.Sprite));
__reflect(Grid.prototype, "Grid");
//# sourceMappingURL=Grid.js.map