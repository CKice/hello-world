var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//自平衡二叉搜索树
var AVLTree = (function () {
    function AVLTree() {
        this.root = null;
        //先序遍历
        this.arr = [];
    }
    AVLTree.prototype.insert = function (key) {
        var newNode = new TreeNode(key);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    };
    AVLTree.prototype.insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
                if (node.left !== null) {
                    // 确认是否需要平衡 
                    if (this.height(node.left) - this.height(node.right) > 1) {
                        // if (key < node.left.key) {
                        //     node = this.rotationLL(node);
                        // } else {
                        //     node = this.rotationLR(node);
                        // }
                    }
                }
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    };
    // public insert(key: any, node: TreeNode = this.root): TreeNode {
    //     if (node === null) {
    //         node = new TreeNode(key);
    //     }
    //     if (this.root === null) {
    //         this.root = node
    //         return;
    //     }
    //     if (key < node.key) {
    //         node.left = this.insert(key, node.left);
    //         if (node.left !== null) {
    //             // 确认是否需要平衡 
    //             if (this.height(node.left) - this.height(node.right) > 1) {
    //                 if (key < node.left.key) {
    //                     node = this.rotationLL(node);
    //                 } else {
    //                     node = this.rotationLR(node);
    //                 }
    //             }
    //         }
    //     } else if (key > node.key) {
    //         node.right = this.insert(key, node.right);
    //         if (node.right !== null) {
    //             // 确认是否需要平衡 {2}
    //             if (this.height(node.right) - this.height(node.left) > 1) {
    //                 //旋转
    //                 if (key > node.right.key) {
    //                     node = this.rotationRR(node);
    //                 } else {
    //                     node = this.rotationRL(node);
    //                 }
    //             }
    //         }
    //     }
    //     return node;
    // }
    AVLTree.prototype.rotationRR = function (node) {
        // if (node.right) {
        var tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
        // }
        // return null;
    };
    AVLTree.prototype.rotationLL = function (node) {
        // if (node.left) {
        var tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
        // }
        // return null;
    };
    AVLTree.prototype.rotationLR = function (node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    };
    ;
    AVLTree.prototype.rotationRL = function (node) {
        node.left = this.rotationLL(node.left);
        return this.rotationRR(node);
    };
    ;
    AVLTree.prototype.height = function (node) {
        if (node === null) {
            return -1;
        }
        else {
            return Math.max(this.height(node.left), this.height(node.right)) + 1;
        }
    };
    ;
    AVLTree.prototype.search = function (key) {
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
    AVLTree.prototype.preOrderTraverse = function (node) {
        if (node === void 0) { node = this.root; }
        if (node) {
            // console.log(node.key);
            this.arr.push(node.key);
            if (node.left)
                console.log('left');
            if (node.right)
                console.log('right');
            this.preOrderTraverse(node.left);
            this.preOrderTraverse(node.right);
        }
    };
    //中序遍历
    AVLTree.prototype.inOrderTraverse = function (node) {
        if (node === void 0) { node = this.root; }
        if (node) {
            this.inOrderTraverse(node.left);
            this.arr.push(node.key);
            this.inOrderTraverse(node.right);
        }
    };
    //后序遍历
    AVLTree.prototype.postOrderTraverse = function (node) {
        if (node === void 0) { node = this.root; }
        if (node) {
            this.postOrderTraverse(node.left);
            this.postOrderTraverse(node.right);
            this.arr.push(node.key);
        }
    };
    AVLTree.prototype.minNode = function (node) {
        if (node === void 0) { node = this.root; }
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        }
        return null;
    };
    AVLTree.prototype.min = function () {
        return this.minNode().key;
    };
    AVLTree.prototype.max = function (node) {
        if (node === void 0) { node = this.root; }
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node;
        }
        return null;
    };
    AVLTree.prototype.remove = function (key, node) {
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
    AVLTree.prototype.depth = function (node) {
        if (node === void 0) { node = this.root; }
        if (node === null) {
            return 0;
        }
        else {
            if (node.left) {
                return this.height(node.left) + 1;
            }
            else if (node.right) {
                return this.height(node.right) + 1;
            }
        }
    };
    return AVLTree;
}());
__reflect(AVLTree.prototype, "AVLTree");
//# sourceMappingURL=AVLTree.js.map