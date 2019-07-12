/**
 * BinarySearchTree 二叉搜索树
 * 二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值，
 * 在右侧节点存储（比父节点）大（或者等于）的值
 */
class BST {
    public root: TreeNode = null;
    public constructor() { }

    public insert(key: any) {
        if (this.root === null) {
            this.root = new TreeNode(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    protected insertNode(node: TreeNode, key: any) {
        if (key < node.key) {
            if (node.left === null) {
                let newNode = new TreeNode(key)
                node.left = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right === null) {
                let newNode = new TreeNode(key)
                node.right = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.right, key);
            }
        }
    }

    protected remove(key: any, node: TreeNode = this.root, ): TreeNode {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = this.remove(key, node.left);
            return node;
        } else if (key > node.key) {
            node.right = this.remove(key, node.right);
            return node;
        } else { //键等于node.key
            //第一种情况——一个叶节点
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            //第二种情况——一个只有一个子节点的节点
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            //第三种情况——一个有两个子节点的节点
            let aux = this.minNode(node.right);
            node.key = aux.key;//找到右子树中最小的TreeNode替换node，
            node.right = this.remove(aux.key, node.right);//将替换的Node给删除掉
            return node;
        }
    }

    public search(key: any, node: TreeNode = this.root): boolean {
        if (node == null) {
            return false;
        }
        if (key < node.key) {
            return this.search(key, node.left);
        } else if (key > node.key) {
            return this.search(key, node.right);
        } else {
            // key is equal to node.item
            return true;
        }
    }

    //先序遍历
    public arr: number[] = [];
    public preOrderTraverse(node: TreeNode = this.root): number[] {
        if (node == this.root) this.arr = [];
        if (node) {
            this.arr.push(node.key);
            this.preOrderTraverse(node.left);
            this.preOrderTraverse(node.right);
        }
        return this.arr;
    }

    //中序遍历
    public inOrderTraverse(node: TreeNode = this.root): number[] {
        if (node == this.root) this.arr = [];
        if (node) {
            this.inOrderTraverse(node.left);
            this.arr.push(node.key);
            this.inOrderTraverse(node.right);
        }
        return this.arr;
    }

    //后序遍历
    public postOrderTraverse(node: TreeNode = this.root): number[] {
        if (node == this.root) this.arr = [];
        if (node) {
            this.postOrderTraverse(node.left);
            this.postOrderTraverse(node.right);
            this.arr.push(node.key);
        }
        return this.arr;
    }

    //层次遍历
    public levelTraversal(node: TreeNode = this.root): number[] {
        let queue = new Queue<TreeNode>();
        queue.enQueue(node);
        this.arr = [];
        while (!queue.isEmpty()) {
            let node = queue.deQueue();
            this.arr.push(node.key)
            if (node.left != null) {
                queue.enQueue(node.left);
            }
            if (node.right != null) {
                queue.enQueue(node.right);
            }
        }
        return this.arr;
    }

    public minNode(node: TreeNode = this.root): TreeNode {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        }
        return null;
    }

    public min(): any {
        return this.minNode().key;
    }

    public max(node: TreeNode = this.root): TreeNode {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node;
        }
        return null;
    }
}