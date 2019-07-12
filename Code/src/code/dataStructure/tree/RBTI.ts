/**
 * red-black-tree-iteration 红黑树迭代 (算法导论)
 * 红黑树（red-black tree）是一种自平衡二叉查找树。
 * 一颗红黑树是满足下面性质的染色二叉排序树：
 *  1.结点是红色或黑色；
 *  2.根结点是黑色；
 *  3.每个叶节点（nil节点，空节点）是黑色的；
 *  4.每个红色结点的左右子结点都是黑色；
 *  5.从任一结点到其每个叶子的所有路径都包含相同数目的黑色结点。
 **/
class RBTI extends BSTI {
	public root: TreeNode = null;
	public nil: TreeNode;  //叶子节点
	public constructor() {
		super();
		this.nil = new TreeNode(0);
		this.nil.color = TreeColor.BLACK;
		this.root = this.nil;
	}
    /**
     * Left left case: rotate right
     *      c        b
     *     /        / \
     *    b   ->   a   c
     *   /
     *  a
     * @param node TreeNode
     */
	public rotationLL(node: TreeNode) {
		let tmp = node.left;
		node.left = tmp.right;
		if (tmp.right != this.nil) {
			tmp.right.parent = node;
		}
		tmp.parent = node.parent;
		if (node.parent == this.nil) {
			this.root = tmp;
		} else {
			if (node === node.parent.left) {
				node.parent.left = tmp;
			} else {
				node.parent.right = tmp;
			}
		}
		tmp.right = node;
		node.parent = tmp;
	}

    /**
     * Right right case: rotate left
     *      a            b
     *       \          / \
     *        b   ->   a   c
     *         \
     *          c 
     * @param node TreeNode
     */
	public rotationRR(node: TreeNode) {
		let tmp = node.right;
		node.right = tmp.left;
		if (tmp.left != this.nil) {
			tmp.left.parent = node;
		}
		tmp.parent = node.parent;
		if (node.parent == this.nil) {
			this.root = tmp;
		} else {
			if (node === node.parent.left) {
				node.parent.left = tmp;
			} else {
				node.parent.right = tmp;
			}
		}
		tmp.left = node;
		node.parent = tmp;
	}

	public insert(key: any) {
		if (this.searchNode(key)) { console.log("插入重复元素key:" + key); return; }
		let y: TreeNode = this.nil;
		let x = this.root;
		let z = new TreeNode(key);
		while (x != this.nil) {
			y = x;
			if (z.key < x.key) {
				x = x.left
			} else {
				x = x.right;
			}
		}
		z.parent = y;
		if (y == this.nil) {
			this.root = z;
		} else if (z.key < y.key) {
			y.left = z
		} else {
			y.right = z;
		}
		z.left = this.nil;
		z.right = this.nil;
		z.color = TreeColor.RED;
		this.insertFixUp(z);
	}

	private insertFixUp(z: TreeNode) {
		let y: TreeNode;
		while (z && z.parent && z.parent.color == TreeColor.RED) {
			if (z.parent == z.parent.parent.left) {
				y = z.parent.parent.right;
				if (y && y.color == TreeColor.RED) {
					z.parent.color = TreeColor.BLACK;
					y.color = TreeColor.BLACK;
					z.parent.parent.color = TreeColor.RED;
					z = z.parent.parent;
				} else {
					if (z == z.parent.right) {
						z = z.parent;
						this.rotationRR(z);
					}
					z.parent.color = TreeColor.BLACK;
					z.parent.parent.color = TreeColor.RED
					this.rotationLL(z.parent.parent);
				}
			} else {
				y = z.parent.parent.left;
				if (y && y.color == TreeColor.RED) {
					z.parent.color = TreeColor.BLACK;
					y.color = TreeColor.BLACK;
					z.parent.parent.color = TreeColor.RED;
					z = z.parent.parent;
				} else {
					if (z == z.parent.left) {
						z = z.parent;
						this.rotationLL(z);
					}
					z.parent.color = TreeColor.BLACK;
					z.parent.parent.color = TreeColor.RED
					this.rotationRR(z.parent.parent);
				}
			}
		}
		this.root.color = TreeColor.BLACK;
	}

	protected transplant(u: TreeNode, v: TreeNode) {
		if (u.parent == this.nil) {
			this.root = v;
		} else if (u == u.parent.left) {
			u.parent.left = v;
		} else {
			u.parent.right = v
		}
		if (v) v.parent = u.parent;
	}

	protected searchNode(key: any, node: TreeNode = this.root): TreeNode {
		if (node === this.nil) {
			return null;
		}
		if (key < node.key) {
			return this.searchNode(key, node.left);
		} else if (key > node.key) {
			return this.searchNode(key, node.right);
		} else {
			// key is equal to node.item
			return node;
		}
	}

	public remove(key: any, node: TreeNode = this.root) {
		let z = this.searchNode(key)
		if (z != this.nil) this.removeNode(z)
		return this.nil;
	}


	protected minNode(node: TreeNode = this.root): TreeNode {
		if (node) {
			while (node && node.left !== this.nil) {
				node = node.left;
			}
			return node;
		}
		return this.nil;
	}

	public removeNode(z: TreeNode, node: TreeNode = this.root) {
		let y: TreeNode = z, x: TreeNode;            //x记录替换节点y的初始位置
		y.originalColor = y.color;
		if (z.left == this.nil) {
			x = z.right;
			this.transplant(z, z.right);
		} else if (z.right == this.nil) {
			x = z.left;
			this.transplant(z, z.left)
		} else {
			y = this.minNode(z.right);
			y.originalColor = y.color;                //        a             b               c
			x = y.right;                              //        z           z                 y
			if (y.parent == z) {                      //       / \         /    y            / \
				x.parent = y;                         //      l   r  ->   l      \    ->    l   r
			} else {                                  //         /                r            / 
				this.transplant(y, y.right)           //        y                /            x
				y.right = z.right;                    //         \              x
				y.right.parent = y;                   //          x
			}
			this.transplant(z, y);                    //         z             y
			y.left = z.left;                          //        / \           / \
			y.left.parent = y;                        //       l   y   ->    l   x 
			y.color = z.color;                        //            \
		}                                             //             x
		if (y.originalColor == TreeColor.BLACK) {
			this.removeFixUp(x);
		}
	}

	private removeFixUp(x: TreeNode) {
		while (x != this.root && x.color == TreeColor.BLACK) {
			console.log("移除修改")
			let parent = x.parent;
			// case 1 替换结点是其父结点的左子结点
			if (parent.left == x) {
				let w = parent.right
				//case 1.1 替换结点的兄弟结点是红结点,那么根据性质4，兄弟结点的父结点和子结点肯定为黑色
				if (parent.right.color == TreeColor.RED) {                         //case1
					w.color = TreeColor.BLACK;
					parent.color = TreeColor.RED;
					this.rotationRR(parent);
					w = x.parent.right;
				}
				//替换结点的兄弟结点是黑结点
				//case2  w的两个子节点都是黑色
				if (w.left.color == TreeColor.BLACK && w.right.color == TreeColor.BLACK) {
					w.color = TreeColor.RED;
					x = x.parent;
				} else {
					if (w.right.color == TreeColor.BLACK) {
						//w的左孩子是红色，右孩子是黑色的                        //case3    
						w.left.color = TreeColor.BLACK;
						w.color = TreeColor.RED;
						this.rotationLL(w);
						w = x.parent.right;
					}
					//w的右孩子是红色的
					w.color = x.parent.color;                                       //case4
					x.parent.color = TreeColor.BLACK;
					w.right.color = TreeColor.BLACK;
					this.rotationRR(x.parent);
					x = this.root;
				}
			} else {
				let w = parent.left
				if (w.color == TreeColor.RED) {
					w.color = TreeColor.BLACK;
					x.parent.color = TreeColor.RED;
					this.rotationLL(parent);
					w = x.parent.left;
				}
				if (w.left.color == TreeColor.BLACK && w.right.color == TreeColor.BLACK) {
					w.color = TreeColor.RED;
					x = x.parent;
				} else {
					if (w.left.color == TreeColor.BLACK) {
						w.right.color = TreeColor.BLACK;
						w.color = TreeColor.RED;
						this.rotationRR(w);
						w = x.parent.left;
					}
					w.color = x.parent.color;
					x.parent.color = TreeColor.BLACK;
					w.left.color = TreeColor.BLACK;
					this.rotationLL(x.parent);
					x = this.root;
				}
			}
		}
		x.color = TreeColor.BLACK;
	}

	private nodeArr: TreeNode[] = [];
	public levelTraversal(node: TreeNode = this.root): number[] {
		let queue = new Queue<TreeNode>();
		queue.enQueue(node);
		this.nodeArr = [];
		while (!queue.isEmpty()) {
			let node = queue.deQueue();
			this.nodeArr.push(node)
			if (node.left != this.nil) {
				queue.enQueue(node.left);
			}
			if (node.right != this.nil) {
				queue.enQueue(node.right);
			}
		}
		let keyArr: number[] = [];
		let colorArr: string[] = [];
		this.nodeArr.forEach((value) => {
			keyArr.push(value.key);
			colorArr.push(value.color);
			// console.log("value.key:" + value.key + "value.color:" + value.color)
		})
		console.log(keyArr);
		console.log(colorArr);
		return keyArr;
	}
}
