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
var AStar = (function (_super) {
    __extends(AStar, _super);
    function AStar() {
        var _this = _super.call(this) || this;
        // private let _heuristic:  = manhattan; 
        // private let _heuristic:  = euclidian; 
        // private _heuristic:Function = diagonal; //估计公式
        _this._straightCost = 1.0; //直线代价        
        _this._diagCost = Math.SQRT2; //对角线代价    
        return _this;
    }
    //判断节点是否开放列表
    AStar.prototype.isOpen = function (ANode) {
        for (var i = 0; i < this._open.length; i++) {
            if (this._open[i] == ANode) {
                return true;
            }
        }
        return false;
    };
    //判断节点是否封闭列表
    AStar.prototype.isClosed = function (ANode) {
        for (var i = 0; i < this._closed.length; i++) {
            if (this._closed[i] == ANode) {
                return true;
            }
        }
        return false;
    };
    //对指定的网络寻找路径
    AStar.prototype.findPath = function (grid) {
        this._grid = grid;
        this._open = new Array();
        this._closed = new Array();
        this._startNode = this._grid.startNode;
        this._endNode = this._grid.endNode;
        this._startNode.g = 0;
        this._startNode.h = this.diagonal(this._startNode);
        this._startNode.f = this._startNode.g + this._startNode.h;
        return this.search();
    };
    //计算周围节点代价的关键处理函数
    AStar.prototype.search = function () {
        var _t = 1;
        var ANode = this._startNode;
        //如果当前节点不是终点
        while (ANode != this._endNode) {
            //找出相邻节点的x,y范围
            var startX = Math.max(0, ANode.x - 1);
            var endX = Math.min(this._grid.numCols - 1, ANode.x + 1);
            var startY = Math.max(0, ANode.y - 1);
            var endY = Math.min(this._grid.numRows - 1, ANode.y + 1);
            //循环处理所有相邻节点
            for (var i = startX; i <= endX; i++) {
                for (var j = startY; j <= endY; j++) {
                    var test = this._grid.getNode(i, j);
                    //如果是当前节点，或者是不可通过的，则跳过
                    if (test == ANode || !test.walkable || !this._grid.getNode(ANode.x, test.y).walkable || !this._grid.getNode(test.x, ANode.y).walkable) {
                        continue;
                    }
                    var cost = this._straightCost;
                    //如果是对象线，则使用对角代价
                    if (!((ANode.x == test.x) || (ANode.y == test.y))) {
                        cost = this._diagCost;
                    }
                    //计算test节点的总代价                      
                    var g = ANode.g + cost * test.costMultiplier;
                    var h = this.diagonal(test);
                    var f = g + h;
                    //如果该点在open或close列表中
                    if (this.isOpen(test) || this.isClosed(test)) {
                        //如果本次计算的代价更小，则以本次计算为准
                        if (f < test.f) {
                            console.log("\n第", _t, "轮，有节点重新指向，x=", i, "，y=", j, "，g=", g, "，h=", h, "，f=", f, "，test=", test.toString());
                            test.f = f;
                            test.g = g;
                            test.h = h;
                            test.parentNode = ANode; //重新指定该点的父节点为本轮计算中心点
                        }
                    }
                    else {
                        test.f = f;
                        test.g = g;
                        test.h = h;
                        test.parentNode = ANode;
                        this._open.push(test);
                    }
                }
            }
            this._closed.push(ANode); //把处理过的本轮中心节点加入close节点               
            //辅助调试，输出open数组中都有哪些节点
            for (var i = 0; i < this._open.length; i++) {
                console.log(this._open[i].toString());
            }
            if (this._open.length == 0) {
                console.log("没找到最佳节点，无路可走!");
                return false;
            }
            // this._open.sortOn("f",  Array<ANode>.NUMERIC);//按总代价从小到大排序
            this._open.sort(function (a, b) { return a.f > b.f ? 1 : -1; });
            ANode = this._open.shift(); //从open数组中删除代价最小的结节，同时把该节点赋值为ANode，做为下次的中心点
            console.log("第", _t, "轮取出的最佳节点为：", ANode.toString());
            _t++;
        }
        //循环结束后，构建路径
        this.buildPath();
        return true;
    };
    AStar.prototype.sortOn = function () {
    };
    //根据父节点指向，从终点反向连接到起点
    AStar.prototype.buildPath = function () {
        this._path = new Array();
        var ANode = this._endNode;
        this._path.push(ANode);
        while (ANode != this._startNode) {
            if (ANode.parentNode == null) {
                console.log("空节点");
                return;
            }
            ANode = ANode.parentNode;
            this._path.unshift(ANode);
        }
    };
    //曼哈顿估价法
    AStar.prototype.manhattan = function (ANode) {
        return Math.abs(ANode.x - this._endNode.x) * this._straightCost + Math.abs(ANode.y - this._endNode.y) * this._straightCost;
    };
    //几何估价法
    AStar.prototype.euclidian = function (ANode) {
        var dx = ANode.x - this._endNode.x;
        var dy = ANode.y - this._endNode.y;
        return Math.sqrt(dx * dx + dy * dy) * this._straightCost;
    };
    //对角线估价法
    AStar.prototype.diagonal = function (ANode) {
        var dx = Math.abs(ANode.x - this._endNode.x);
        var dy = Math.abs(ANode.y - this._endNode.y);
        var diag = Math.min(dx, dy);
        var straight = dx + dy;
        return this._diagCost * diag + this._straightCost * (straight - 2 * diag);
    };
    Object.defineProperty(AStar.prototype, "visited", {
        //返回所有被计算过的节点(辅助函数)
        get: function () {
            return this._closed.concat(this._open);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AStar.prototype, "openArray", {
        //返回open数组
        get: function () {
            return this._open;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AStar.prototype, "closedArray", {
        //返回close数组
        get: function () {
            return this._closed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AStar.prototype, "path", {
        get: function () {
            return this._path;
        },
        enumerable: true,
        configurable: true
    });
    return AStar;
}(egret.Sprite));
__reflect(AStar.prototype, "AStar");
//# sourceMappingURL=AStar.js.map