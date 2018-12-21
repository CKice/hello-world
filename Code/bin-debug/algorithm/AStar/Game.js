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
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.cellSize = 30;
        _this.cellNum = 30;
        // egret.stage.align = StageAlign.TOP_LEFT;
        // egret.Stage.ali
        // stage.scaleMode = StageScaleMode.NO_SCALE;
        _this.makePlayer();
        _this.makeGrid();
        _this.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onGridClick, _this);
        return _this;
    }
    /** 生成一个player角色(简单起见，就是一个圈) */
    Game.prototype.makePlayer = function () {
        this.player = new egret.Sprite();
        this.player.graphics.beginFill(0xff0000);
        this.player.graphics.drawCircle(0, 0, 5);
        this.player.graphics.endFill();
        this.player.x = (Math.floor(Math.random() * (this.cellNum - 1)) + 1) * this.cellSize;
        this.player.y = (Math.floor(Math.random() * (this.cellNum - 1)) + 1) * this.cellSize;
        this.addChild(this.player);
    };
    /** 生成网格，并随机放置一些障碍 */
    Game.prototype.makeGrid = function () {
        this.grid = new Grid(this.cellNum, this.cellNum);
        for (var i = 0; i < 200; i++) {
            this.grid.setWalkable(Math.floor(Math.random() * 30), Math.floor(Math.random() * 30), false);
        }
        this.drawGrid();
    };
    /** 画网格线以及为障碍物填充颜色*/
    Game.prototype.drawGrid = function () {
        this.grid.graphics.clear();
        for (var i = 0; i < this.grid.numCols; i++) {
            for (var j = 0; j < this.grid.numRows; j++) {
                var ANode_1 = this.grid.getNode(i, j);
                ANode_1.graphics.lineStyle(0);
                ANode_1.graphics.beginFill(this.getColor(ANode_1));
                ANode_1.graphics.drawRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
                ANode_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGridClick, this);
                this.addChild(ANode_1);
            }
        }
    };
    /** 返回节点颜色 */
    Game.prototype.getColor = function (ANode) {
        if (!ANode.walkable)
            return 0;
        if (ANode == this.grid.startNode)
            return 0xcccccc;
        if (ANode == this.grid.endNode)
            return 0xff0000;
        return 0xffffff;
    };
    /** 鼠标点击时随机设置终点，并以player当前位置做为起点 */
    Game.prototype.onGridClick = function (event) {
        var xpos = Math.floor(event.stageX / this.cellSize);
        var ypos = Math.floor(event.localY / this.cellSize);
        this.grid.setEndNode(xpos, ypos);
        xpos = Math.floor(this.player.x / this.cellSize);
        ypos = Math.floor(this.player.y / this.cellSize);
        this.grid.setStartNode(xpos, ypos);
        this.drawGrid();
        this.findPath();
    };
    /** 寻路 */
    Game.prototype.findPath = function () {
        var astar = new AStar();
        if (astar.findPath(this.grid)) {
            this.path = astar.path;
            this.index = 0;
            // addEventListener(Event.ENTER_FRAME, onEnterFrame);
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        }
    };
    /**每帧的动画处理*/
    Game.prototype.onEnterFrame = function (event) {
        var targetX = this.path[this.index].x * this.cellSize + this.cellSize / 2;
        var targetY = this.path[this.index].y * this.cellSize + this.cellSize / 2;
        //把经过的点，涂上黄色
        var passedNode = this.path[this.index];
        passedNode.graphics.lineStyle(0);
        passedNode.graphics.beginFill(0xffff00);
        passedNode.graphics.drawRect(passedNode.x * this.cellSize, passedNode.y * this.cellSize, this.cellSize, this.cellSize);
        var dx = targetX - this.player.x;
        var dy = targetY - this.player.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 1) {
            this.index++; //索引加1，即取一个路径节点
            if (this.index >= this.path.length) {
                // removeEventListener(Event.ENTER_FRAME, onEnterFrame);
                this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            }
        }
        else {
            this.player.x += dx * .5;
            this.player.y += dy * .5;
        }
    };
    return Game;
}(egret.Sprite));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map