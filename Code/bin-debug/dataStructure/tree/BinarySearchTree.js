var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//二叉搜索树
var BinarySearchTree = (function () {
    function BinarySearchTree() {
        this.root = null;
        //先序遍历
        this.arr = [];
    }
    BinarySearchTree.prototype.insert = function (key) {
        var newNode = new TreeNode(key);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    };
    BinarySearchTree.prototype.insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
                newNode.parent = node;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
                newNode.parent = node;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    };
    BinarySearchTree.prototype.search = function (key) {
        var node = this.root;
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return this.search(key);
        }
        else if (key > node.key) {
            return this.search(key);
        }
        else {
            return true;
        }
    };
    BinarySearchTree.prototype.preOrderTraverse = function (node) {
        if (node === void 0) { node = this.root; }
        if (node) {
            // console.log(node.key + '\n');
            this.arr.push(node.key);
            this.preOrderTraverse(node.left);
            this.preOrderTraverse(node.right);
        }
    };
    //中序遍历
    BinarySearchTree.prototype.inOrderTraverse = function (node) {
        if (node === void 0) { node = this.root; }
        if (node) {
            this.inOrderTraverse(node.left);
            this.arr.push(node.key);
            this.inOrderTraverse(node.right);
        }
    };
    //后序遍历
    BinarySearchTree.prototype.postOrderTraverse = function (node) {
        if (node === void 0) { node = this.root; }
        if (node) {
            this.postOrderTraverse(node.left);
            this.postOrderTraverse(node.right);
            this.arr.push(node.key);
        }
    };
    BinarySearchTree.prototype.minNode = function (node) {
        if (node === void 0) { node = this.root; }
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        }
        return null;
    };
    BinarySearchTree.prototype.min = function () {
        return this.minNode().key;
    };
    BinarySearchTree.prototype.max = function (node) {
        if (node === void 0) { node = this.root; }
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node;
        }
        return null;
    };
    BinarySearchTree.prototype.remove = function (key, node) {
        if (node === void 0) { node = this.root; }
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = this.remove(key, node.left);
            return node;
        }
        else if (key > node.key) {
            node.right = this.remove(key, node.right);
            return node;
        }
        else {
            //第一种情况——一个叶节点
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            //第二种情况——一个只有一个子节点的节点
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }
            //第三种情况——一个有两个子节点的节点
            var aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.remove(aux.key, node.right);
            return node;
        }
    };
    return BinarySearchTree;
}());
__reflect(BinarySearchTree.prototype, "BinarySearchTree");
//# sourceMappingURL=BinarySearchTree.js.map