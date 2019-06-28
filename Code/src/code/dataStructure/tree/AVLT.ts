/**
 * Adelson-Velskii-Landi-Tree 自平衡二叉搜索树
 * 一种自平衡树。添加或移除节点时， AVL树会尝试自平衡。任意一个节点（不论深度）
 * 的左子树和右子树高度最多相差1。添加或移除节点时， AVL树会尽可能尝试转换为完全树。
 **/
enum BalanceFactor {
    UNBALANCED_RIGHT = -2,
    SLIGHTLY_UNBALANCED_RIGHT = -1,
    BALANCED = 0,
    SLIGHTLY_UNBALANCED_LEFT = 1,
    UNBALANCED_LEFT = 2
}
class AVLT extends BST {
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
    public rotationLL(node: TreeNode): TreeNode {
        let tmp: TreeNode = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
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
    public rotationRR(node: TreeNode): TreeNode {
        let tmp: TreeNode = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
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
    private rotationLR(node: TreeNode): TreeNode {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    };

    /**
     * Right left case: rotate right then left
     *      a            b
     *       \          / \
     *        c   ->   a   c
     *       /
     *      b 
     * @param node TreeNode
     */
    private rotationRL(node: TreeNode): TreeNode {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    };

    public insert(key: any) {
        this.root = this.insertNode(this.root, key);
    }

    protected insertNode(node: TreeNode, key: any): TreeNode {
        if (node == null) {
            return new TreeNode(key);
        } else if (key < node.key) {
            node.left = this.insertNode(node.left, key)
        } else if (key > node.key) {
            node.right = this.insertNode(node.right, key)
        } else {
            return node;
        }
        let balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor == BalanceFactor.UNBALANCED_LEFT) {
            if (key < node.left.key) {
                // Left left case
                node = this.rotationLL(node);
            } else {
                // Left right case
                return this.rotationLR(node);
            }
        } else if (balanceFactor == BalanceFactor.UNBALANCED_RIGHT) {
            if (key > node.right.key) {
                // Right right case
                node = this.rotationRR(node);
            } else {
                // Right left case
                return this.rotationRL(node);
            }
        }
        return node;
    }

    public remove(key: any, node: TreeNode = this.root, ): TreeNode {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = this.remove(key, node.left);
        } else if (key > node.key) {
            node.right = this.remove(key, node.right);
        } else { //键等于node.key
            //第一种情况——一个叶节点
            if (node.left === null && node.right === null) {
                node = null;
            } else if (node.left === null) {
                //第二种情况——一个只有一个子节点的节点
                node = node.right;
            } else if (node.right === null) {
                node = node.left;
            } else {
                //第三种情况——一个有两个子节点的节点
                let aux = this.minNode(node.right);
                node.key = aux.key;
                node.right = this.remove(aux.key, node.right);
            }
        }

        if (node == null) {
            return node;
        }

        // verify if tree is balanced
        let balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            // Left left case
            if (
                this.getBalanceFactor(node.left) === BalanceFactor.BALANCED ||
                this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            ) {
                return this.rotationLL(node);
            }
            // Left right case
            if (this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                return this.rotationLR(node);
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            // Right right case
            if (
                this.getBalanceFactor(node.right) === BalanceFactor.BALANCED ||
                this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            ) {
                return this.rotationRR(node);
            }
            // Right left case
            if (this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                return this.rotationRL(node);
            }
        }
        return node;
    }

    private getBalanceFactor(node: TreeNode) {
        return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    }

    private getNodeHeight(node): number {
        if (node === null) {
            return -1;
        } else {
            return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
        }
    };

    public depth(node: TreeNode = this.root): number {
        if (node === null) {
            return 0;
        } else {
            if (node.left) {
                return this.getNodeHeight(node.left) + 1;
            } else if (node.right) {
                return this.getNodeHeight(node.right) + 1;
            }
        }
    }
}