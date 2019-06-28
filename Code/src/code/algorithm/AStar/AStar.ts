class AStar extends egret.Sprite {
	private _open:  Array<ANode>;//开放列表
	private _closed:  Array<ANode>;//封闭列表
	private _grid: Grid;
	private _endNode: ANode;//终点
	private _startNode: ANode;//起点
	private _path:  Array<ANode>;//最终的路径节点
	// private let _heuristic:  = manhattan; 
	// private let _heuristic:  = euclidian; 
	// private _heuristic:Function = diagonal; //估计公式
	private _straightCost: number = 1.0; //直线代价        
	private _diagCost: number = Math.SQRT2; //对角线代价    
	public constructor() {
		super();
	}

	//判断节点是否开放列表
	private isOpen(ANode: ANode): Boolean {
		for (let i: number = 0; i < this._open.length; i++) {
			if (this._open[i] == ANode) {
				return true;
			}
		}
		return false;
	}

	//判断节点是否封闭列表
	private isClosed(ANode: ANode): Boolean {
		for (let i: number = 0; i < this._closed.length; i++) {
			if (this._closed[i] == ANode) {
				return true;
			}
		}
		return false;
	}

	//对指定的网络寻找路径
	public findPath(grid: Grid): Boolean {
		this._grid = grid;
		this._open = new  Array<ANode>();
		this._closed = new  Array<ANode>();
		this._startNode = this._grid.startNode;
		this._endNode = this._grid.endNode;
		this._startNode.g = 0;
		this._startNode.h = this.diagonal(this._startNode);
		this._startNode.f = this._startNode.g + this._startNode.h;
		return this.search();
	}

	//计算周围节点代价的关键处理函数
	public search(): Boolean {
		let _t: number = 1;
		let ANode: ANode = this._startNode;
		//如果当前节点不是终点
		while (ANode != this._endNode) {
			//找出相邻节点的x,y范围
			let startX: number = Math.max(0, ANode.x - 1);
			let endX: number = Math.min(this._grid.numCols - 1, ANode.x + 1);
			let startY: number = Math.max(0, ANode.y - 1);
			let endY: number = Math.min(this._grid.numRows - 1, ANode.y + 1);

			//循环处理所有相邻节点
			for (let i: number = startX; i <= endX; i++) {
				for (let j: number = startY; j <= endY; j++) {
					let test: ANode = this._grid.getNode(i, j);
					//如果是当前节点，或者是不可通过的，则跳过
					if (test == ANode || !test.walkable  || !this._grid.getNode(ANode.x, test.y).walkable || !this._grid.getNode(test.x, ANode.y).walkable) {
						continue;
					}

					let cost: number = this._straightCost;
					//如果是对象线，则使用对角代价
					if (!((ANode.x == test.x) || (ANode.y == test.y))) {
						cost = this._diagCost;
					}

					//计算test节点的总代价                      
					let g: number = ANode.g + cost * test.costMultiplier;
					let h: number = this.diagonal(test);
					let f: number = g + h;


					//如果该点在open或close列表中
					if (this.isOpen(test) || this.isClosed(test)) {
						//如果本次计算的代价更小，则以本次计算为准
						if (f < test.f) {
							console.log("\n第", _t, "轮，有节点重新指向，x=", i, "，y=", j, "，g=", g, "，h=", h, "，f=", f, "，test=", test.toString());
							test.f = f;
							test.g = g;
							test.h = h;
							test.parentNode = ANode;//重新指定该点的父节点为本轮计算中心点
						}
					}
					else//如果还不在open列表中，则除了更新代价以及设置父节点，还要加入open数组
					{
						test.f = f;
						test.g = g;
						test.h = h;
						test.parentNode = ANode;
						this._open.push(test);
					}
				}
			}
			this._closed.push(ANode);//把处理过的本轮中心节点加入close节点               

			//辅助调试，输出open数组中都有哪些节点
			for (let i:number = 0; i < this._open.length; i++) {
				console.log(this._open[i].toString());
			}

			if (this._open.length == 0) {
				console.log("没找到最佳节点，无路可走!");
				return false
			}
			// this._open.sortOn("f",  Array<ANode>.NUMERIC);//按总代价从小到大排序
			this._open.sort(function(a:ANode,b:ANode){return a.f > b.f?1:-1});
			ANode = this._open.shift() as ANode;//从open数组中删除代价最小的结节，同时把该节点赋值为ANode，做为下次的中心点
			console.log("第", _t, "轮取出的最佳节点为：", ANode.toString());
			_t++;
		}
		//循环结束后，构建路径
		this.buildPath();
		return true;
	}

	private sortOn(){
		
	}

	//根据父节点指向，从终点反向连接到起点
	private buildPath(): void {
		this._path = new  Array<ANode>();
		let ANode: ANode = this._endNode;
		this._path.push(ANode);
		while (ANode != this._startNode) {
			if(ANode.parentNode == null) {console.log("空节点"); return;}
			ANode = ANode.parentNode;
			this._path.unshift(ANode);
		}
	}

	//曼哈顿估价法
	private manhattan(ANode: ANode): number {
		return Math.abs(ANode.x - this._endNode.x) * this._straightCost + Math.abs(ANode.y - this._endNode.y) * this._straightCost;
	}

	//几何估价法
	private euclidian(ANode: ANode): number {
		let dx: number = ANode.x - this._endNode.x;
		let dy: number = ANode.y - this._endNode.y;
		return Math.sqrt(dx * dx + dy * dy) * this._straightCost;
	}

	//对角线估价法
	private diagonal(ANode: ANode): number {
		let dx: number = Math.abs(ANode.x - this._endNode.x);
		let dy: number = Math.abs(ANode.y - this._endNode.y);
		let diag: number = Math.min(dx, dy);
		let straight: number = dx + dy;
		return this._diagCost * diag + this._straightCost * (straight - 2 * diag);
	}

	//返回所有被计算过的节点(辅助函数)
	public get visited():  Array<ANode> {
		return this._closed.concat(this._open);
	}

	//返回open数组
	public get openArray():  Array<ANode> {
		return this._open;
	}

	//返回close数组
	public get closedArray():  Array<ANode> {
		return this._closed;
	}

	public get path():  Array<ANode> {
		return this._path;
	}
}
