/**
 * red-black-tree 红黑树
 * 红黑树（red-black tree）是一种自平衡二叉查找树。
 * 一颗红黑树是满足下面性质的染色二叉排序树：
 *  1.结点是红色或黑色；
 *  2.根结点是黑色；
 *  3.每个叶节点（NIL节点，空节点）是黑色的；
 *  4.每个红色结点的左右子结点都是黑色；
 *  5.从任一结点到其每个叶子的所有路径都包含相同数目的黑色结点。
 **/
class RBT1 extends BST {
	public root: TreeNode = null;
	public constructor() { super(); }

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
		if (tmp.right && tmp.right.key) {
			tmp.right.parent = node;
		}
		tmp.parent = node.parent;
		if (!node.parent) {
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
		const tmp = node.right;
		node.right = tmp.left;
		if (tmp.left && tmp.left.key) {
			tmp.left.parent = node;
		}
		tmp.parent = node.parent;
		if (!node.parent) {
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

    /**
      * Left right case: rotate left then Right
      *      c        b
      *     /        / \
      *    a   ->   a   c
      *     \ 
      *      b
      * @param node TreeNode
      */
	// private rotationLR(node: TreeNode): TreeNode {
	// node.left = this.rotationRR(node.left);
	// return this.rotationLL(node);
	// };

    /**
     * Right left case: rotate right then left
     *      a            b
     *       \          / \
     *        c   ->   a   c
     *       /
     *      b 
     * @param node TreeNode
     */
	// private rotationRL(node: TreeNode): TreeNode {
	// 	node.right = this.rotationLL(node.right);
	// 	return this.rotationRR(node);
	// };

	// private getNodeHeight(node): number {
	// 	if (node === null) {
	// 		return -1;
	// 	} else {
	// 		return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
	// 	}
	// };

	public insert(key: any) {
		if (this.root == null) {
			this.root = new TreeNode(key);
			this.root.color = TreeColor.BLACK;
		} else {
			this.insertNode(this.root, key);
			// this.fixTreeProperties(newNode);
		}
	}

	protected insertNode(node: TreeNode, key: any) {
		if (key < node.key) {
			if (node.left === null) {
				node.left = new TreeNode(key);
				node.left.parent = node;
			} else {
				this.insertNode(node.left, key);
			}
		} else {
			if (node.right === null) {
				node.left = new TreeNode(key);
				node.right.parent = node;
			} else {
				this.insertNode(node.right, key);
			}
		}
		this.fixTreeProperties(node);
	}

	private fixTreeProperties(node: TreeNode) {
		while (node && node.parent && node.parent.color === TreeColor.RED && node.color !== TreeColor.BLACK) {
			let parent = node.parent;
			const grandParent = parent.parent;

			// case A
			if (grandParent && grandParent.left === parent) {

				const uncle = grandParent.right;

				// case 1: uncle of node is also red - only recoloring
				if (uncle && uncle.color == TreeColor.RED) {
					grandParent.color = TreeColor.RED;
					parent.color = TreeColor.BLACK;
					uncle.color = TreeColor.BLACK;
					node = grandParent;
				} else {
					// case 2: node is right child - left rotate
					if (node === parent.right) {
						this.rotationRR(parent);
						node = parent;
						parent = node.parent;
					}

					// case 3: node is left child - right rotate
					this.rotationLL(grandParent);
					// swap color
					parent.color = TreeColor.BLACK;
					grandParent.color = TreeColor.RED;
					node = parent;
				}

			} else { // case B: parent is right child of grand parent

				const uncle = grandParent.left;
				uncle.color == TreeColor.RED
				// case 1: uncle is read - only recoloring
				if (uncle && uncle.color == TreeColor.RED) {
					grandParent.color = TreeColor.RED;
					parent.color = TreeColor.BLACK;
					uncle.color = TreeColor.BLACK;
					node = grandParent;
				} else {
					// case 2: node is left child - left rotate
					if (node === parent.left) {
						this.rotationLL(parent);
						node = parent;
						parent = node.parent;
					}

					// case 3: node is right child - left rotate
					this.rotationRR(grandParent);
					// swap color
					parent.color = TreeColor.BLACK;
					grandParent.color = TreeColor.RED;
					node = parent;
				}
			}
		}
		this.root.color = TreeColor.BLACK;
	}

	public remove(key: any, node: TreeNode = this.root): TreeNode {
		return null;
	}
}