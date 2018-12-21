class Game extends egret.Sprite {
	private cellSize: number = 30;
	private cellNum: number = 30;
	private grid: Grid;
	private player: egret.Sprite;
	private index: number;
	private path: Array<ANode>;
	private btn: eui.Button;
	public constructor() {
		super();
		// egret.stage.align = StageAlign.TOP_LEFT;
		// egret.Stage.ali
		// stage.scaleMode = StageScaleMode.NO_SCALE;
		this.makePlayer();
		this.makeGrid();
		this.touchEnabled = true;
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onGridClick, this);
	}

	/** 生成一个player角色(简单起见，就是一个圈) */
	private makePlayer() {
		this.player = new egret.Sprite();
		this.player.graphics.beginFill(0xff0000);
		this.player.graphics.drawCircle(0, 0, 5);
		this.player.graphics.endFill();
		this.player.x = (Math.floor(Math.random() * (this.cellNum - 1)) + 1) * this.cellSize;
		this.player.y = (Math.floor(Math.random() * (this.cellNum - 1)) + 1) * this.cellSize;
		this.addChild(this.player);
	}

	/** 生成网格，并随机放置一些障碍 */
	private makeGrid(): void {
		this.grid = new Grid(this.cellNum, this.cellNum);
		for (let i: number = 0; i < 200; i++) {
			this.grid.setWalkable(Math.floor(Math.random() * 30), Math.floor(Math.random() * 30), false);
		}
		this.drawGrid();
	}

	/** 画网格线以及为障碍物填充颜色*/
	private drawGrid(): void {
		this.grid.graphics.clear();
		for (let i: number = 0; i < this.grid.numCols; i++) {
			for (let j: number = 0; j < this.grid.numRows; j++) {
				let ANode: ANode = this.grid.getNode(i, j);
				ANode.graphics.lineStyle(0);
				ANode.graphics.beginFill(this.getColor(ANode));
				ANode.graphics.drawRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
				ANode.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGridClick, this);
				this.addChild(ANode);
			}
		}
	}

	/** 返回节点颜色 */
	private getColor(ANode: ANode): number {
		if (!ANode.walkable)
			return 0;
		if (ANode == this.grid.startNode)
			return 0xcccccc;
		if (ANode == this.grid.endNode)
			return 0xff0000;
		return 0xffffff;
	}

	/** 鼠标点击时随机设置终点，并以player当前位置做为起点 */
	private onGridClick(event: egret.TouchEvent): void {
		let xpos: number = Math.floor(event.stageX  / this.cellSize);
		let ypos: number = Math.floor(event.localY / this.cellSize);
		this.grid.setEndNode(xpos, ypos);
		xpos = Math.floor(this.player.x / this.cellSize);
		ypos = Math.floor(this.player.y / this.cellSize);
		this.grid.setStartNode(xpos, ypos);
		this.drawGrid();
		this.findPath();
	}

	/** 寻路 */
	private findPath(): void {
		let astar: AStar = new AStar();
		if (astar.findPath(this.grid)) {
			this.path = astar.path;
			this.index = 0;
			// addEventListener(Event.ENTER_FRAME, onEnterFrame);
			this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		}
	}

	/**每帧的动画处理*/
	private onEnterFrame(event: Event): void {
		let targetX: number = this.path[this.index].x * this.cellSize + this.cellSize / 2;
		let targetY: number = this.path[this.index].y * this.cellSize + this.cellSize / 2;

		//把经过的点，涂上黄色
		let passedNode: ANode = this.path[this.index];
		passedNode.graphics.lineStyle(0);
		passedNode.graphics.beginFill(0xffff00);
		passedNode.graphics.drawRect(passedNode.x * this.cellSize, passedNode.y * this.cellSize, this.cellSize, this.cellSize);

		let dx: number = targetX - this.player.x;
		let dy: number = targetY - this.player.y;
		let dist: number = Math.sqrt(dx * dx + dy * dy);
		if (dist < 1) {
			this.index++;//索引加1，即取一个路径节点
			if (this.index >= this.path.length)//达到最后一个节点时，移除ENTER_FRAME监听
			{
				// removeEventListener(Event.ENTER_FRAME, onEnterFrame);
				this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
			}
		}
		else {
			this.player.x += dx * .5;
			this.player.y += dy * .5;
		}
	}
}