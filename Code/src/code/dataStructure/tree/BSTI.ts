/**
 * binary-search-tree-iteration 二叉搜索树迭代(插入、删除见算法导论)
 * 二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值，
 * 在右侧节点存储（比父节点）大（或者等于）的值
 */
class BSTI {
    public root: TreeNode = null;
    public keyArr: number[] = [];
    public constructor() { }

    //前序遍历 左子树后入先出
    public preOrderTraverse(node: TreeNode = this.root): number[] {
        let stack: TreeNode[];
        if (node) stack = [node];
        while (stack.length > 0) {
            node = stack.pop();
            this.keyArr.push(node.key);
            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }
        }
        return this.keyArr;
    }

    //中序遍历 先对左子树入栈直至左子树为空,然后弹出节点,开始对右子树入栈
    public inOrderTraverse(node: TreeNode = this.root): number[] {
        let stack: TreeNode[] = [];
        this.keyArr = [];
        while (stack.length > 0 || node) {
            if (node) {
                stack.push(node);
                node = node.left;
            } else {
                node = stack.pop();
                this.keyArr.push(node.key);
                node = node.right;
            }
        }
        return this.keyArr;
    }

    //后序遍历 先对左子树入栈,后对右子树入栈
    public postOrderTraverse(node: TreeNode = this.root): number[] {
        let stack: TreeNode[] = [], visited: TreeNode = null;
        this.keyArr = [];
        while (stack.length > 0 || node) {
            if (node) {
                stack.push(node)
                node = node.left
            } else {//如果栈非空，弹出栈顶，节点向右子树移动
                node = stack[stack.length - 1];
                if (node.right && node.right != visited) { //右子树存在，未被访问
                    node = node.right;
                } else {
                    this.keyArr.push(stack.pop().key);
                    visited = node;  //记录最近访问过的节点
                    node = null;
                }
            }
        }
        return this.keyArr;
    }

    //层次遍历 先进先出
    public levelTraversal(node: TreeNode = this.root): number[] {
        let queue = new Array<TreeNode>();
        queue.push(node);
        this.keyArr = [];
        while (queue.length > 0) {
            let node = queue.shift();
            this.keyArr.push(node.key)
            if (node.left != null) {
                queue.push(node.left);
            }
            if (node.right != null) {
                queue.push(node.right);
            }
        }
        return this.keyArr;
    }

    public search(key: any): boolean {
        if (this.searchNode(key)) {
            return true;
        } else {
            return false;
        }
    }

    protected searchNode(key, node: TreeNode = this.root): TreeNode {
        while (node && node.key != key) {
            if (key < node.key) {
                node = node.left
            } else {
                node = node.right;
            }
        }
        return node;
    }

    public min(): any {
        return this.minNode().key;
    }

    protected minNode(node: TreeNode = this.root): TreeNode {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    }

    public max(): any {
        return this.maxNode().key;
    }

    private maxNode(node: TreeNode = this.root): TreeNode {
        while (node && node.right !== null) {
            node = node.right;
        }
        return node;
    }

    public insert(key: any) {
        if (this.searchNode(key)) { console.log("插入重复元素key:" + key); return; }
        let y: TreeNode = null,
            x: TreeNode = this.root,
            z: TreeNode = new TreeNode(key);
        while (x != null) {
            y = x;
            if (z.key < x.key) {
                x = x.left;
            } else {
                x = x.right;
            }
        }
        z.parent = y;
        if (y == null) {
            this.root = z;
        } else if (z.key < y.key) {
            y.left = z
        } else {
            y.right = z;
        }
    }

    protected transplant(u: TreeNode, v: TreeNode) {
        if (u.parent == null) {
            this.root = v;
        } else if (u == u.parent.left) {
            u.parent.left = v;
        } else {
            u.parent.right = v
        }
        if (v) v.parent = u.parent;
    }

    public remove(key: any) {
        let z: TreeNode = new TreeNode(key),
            y: TreeNode;
        if (z.left == null) {
            this.transplant(z, z.right);
        } else if (z.right == null) {
            this.transplant(z, z.left)              //   z          z             y 
        } else {                                   //   / \        /    y        / \
            y = this.minNode(z.right);            //   l   r  ->  l      \   -> l   r
            if (y.parent != z) {                 //       /               r        /
                this.transplant(y, y.right);    //       y               /        x
                y.right = z.right;             //         \             x
                y.right.parent = y;           //           x
            }
            this.transplant(z, y)            //     z                y
            y.left = z.left;                //     / \              / \
            y.left.parent = y;             //     l   y    ->      l   x
        }                                 //           \
    }                                    //             x
}