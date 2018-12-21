//二叉搜索树
class BinarySearchTree {
    public root: TreeNode = null;
    public constructor() { }

    public insert(key: any) {
        let newNode = new TreeNode(key);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    public insertNode(node: TreeNode, newNode: TreeNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    public search(key: any): boolean {
        let node = this.root
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return this.search(key);
        } else if (key > node.key) {
            return this.search(key);
        } else {
            return true;
        }
    }

    //先序遍历
    public arr: number[] = [];
    public preOrderTraverse(node: TreeNode = this.root) {
        if (node) {
            // console.log(node.key + '\n');
            this.arr.push(node.key);
            this.preOrderTraverse(node.left);
            this.preOrderTraverse(node.right);
        }
    }

    //中序遍历
    public inOrderTraverse(node: TreeNode = this.root) {
        if (node) {
            this.inOrderTraverse(node.left);
            this.arr.push(node.key);
            this.inOrderTraverse(node.right);
        }
    }

    //后序遍历
    public postOrderTraverse(node: TreeNode = this.root) {
        if (node) {
            this.postOrderTraverse(node.left);
            this.postOrderTraverse(node.right);
            this.arr.push(node.key);
        }
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

    public remove(key: any, node: TreeNode = this.root, ): TreeNode {
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
            node.key = aux.key;
            node.right = this.remove(aux.key, node.right);
            return node;
        }
    }

}