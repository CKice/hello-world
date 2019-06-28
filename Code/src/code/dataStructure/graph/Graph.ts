class Graph {
	private vertices: any[]
	private adjList: Dictionary;
	public constructor() {
		this.vertices = []; //{1}
		this.adjList = new Dictionary();
	}

	public addVertex = function (v) {
		this.vertices.push(v); //{3}
		this.adjList.set(v, []); //{4}
	};

	public addEdge = function (v, w) {
		this.adjList.get(v).push(w); //{5}
		this.adjList.get(w).push(v); //{6}
	};

	public initializeColor = function () {
		let color = [];
		for (let i = 0; i < this.vertices.length; i++) {
			color[this.vertices[i]] = 'white'; //{1}
		}
		return color;
	};

	public bfs = function (v, callback) {
		let color: any[] = this.initializeColor(), //{2}
			queue = new Queue(); //{3}
		queue.enQueue(v); //{4}
		while (!queue.isEmpty()) { //{5}
			let u = queue.deQueue() as any, //{6}
				neighbors = this.adjList.get(u); //{7}
			color[u] = 'grey'; // {8}
			for (let i = 0; i < neighbors.length; i++) { // {9}
				let w = neighbors[i]; // {10}
				if (color[w] === 'white') { // {11}
					color[w] = 'grey'; // {12}
					queue.enQueue(w); // {13}
				}
			}
			color[u] = 'black'; // {14}
			// if (callback) { // {15}
			this.printNode(u);
			// }
		}
	};

	public printNode(value) { //{16}
		console.log('Visited vertex: ' + value); //{17}
	}

	public BFS = function (v) {
		var color = this.initializeColor(),
			queue = new Queue(),
			d = [], //{1}
			pred = []; //{2}
		queue.enQueue(v);
		for (var i = 0; i < this.vertices.length; i++) { //{3}
			d[this.vertices[i]] = 0; //{4}
			pred[this.vertices[i]] = null; //{5}
		}
		while (!queue.isEmpty()) {
			var u = queue.deQueue() as any,
				neighbors = this.adjList.get(u);
			color[u] = 'grey';
			for (i = 0; i < neighbors.length; i++) {
				var w = neighbors[i];
				if (color[w] === 'white') {
					color[w] = 'grey';
					d[w] = d[u] + 1; //{6}
					pred[w] = u; //{7}
					queue.enQueue(w);
				}
			}
			color[u] = 'black';
		}
		return { //{8}
			distances: d,
			predecessors: pred
		};
	};

	public dfs = function (callback) {
		var color = this.initializeColor(); //{1}
		for (var i = 0; i < this.vertices.length; i++) { //{2}
			if (color[this.vertices[i]] === 'white') { //{3}
				this.dfsVisit(this.vertices[i], color, callback); //{4}
			}
		}
	};
	public dfsVisit = function (u, color, callback) {
		color[u] = 'grey'; //{5}
		if (callback) { //{6}
			callback(u);
		}
		var neighbors = this.adjList.get(u); //{7}
		for (var i = 0; i < neighbors.length; i++) { //{8}
			var w = neighbors[i]; //{9}
			if (color[w] === 'white') { //{10}
				this.dfsVisit(w, color, callback); //{11}
			}
		}
		color[u] = 'black'; //{12}
	};

	private time = 0; //{1}
	public DFS = function () {
		var color = this.initializeColor(), //{2}
			d = [],
			f = [],
			p = [];
		this.time = 0;
		for (var i = 0; i < this.vertices.length; i++) { //{3}
			f[this.vertices[i]] = 0;
			d[this.vertices[i]] = 0;
			p[this.vertices[i]] = null;
		}
		for (i = 0; i < this.vertices.length; i++) {
			if (color[this.vertices[i]] === 'white') {
				this.DFSVisit(this.vertices[i], color, d, f, p);
			}
		}
		return { //{4}
			discovery: d,
			finished: f,
			predecessors: p
		};
	};
	public DFSVisit = function (u, color, d, f, p) {
		console.log('discovered ' + u);
		color[u] = 'grey';
		d[u] = ++this.time; //{5}
		var neighbors = this.adjList.get(u);
		for (var i = 0; i < neighbors.length; i++) {
			var w = neighbors[i];
			if (color[w] === 'white') {
				p[w] = u; // {6}
				this.DFSVisit(w, color, d, f, p);
			}
		}
		color[u] = 'black';
		f[u] = ++this.time; //{7}
		console.log('explored ' + u);
	};

	public toString = function () {
		let s = '';
		for (let i = 0; i < this.vertices.length; i++) { //{10}
			s += this.vertices[i] + ' -> ';
			let neighbors = this.adjList.get(this.vertices[i]); //{11}
			for (let j = 0; j < neighbors.length; j++) { //{12}
				s += neighbors[j] + ' ';
			}
			s += '\n'; //{13}
		}
		return s;
	};
}