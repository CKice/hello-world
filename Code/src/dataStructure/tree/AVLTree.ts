//自平衡二叉搜索树
class AVLTree {
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
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

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

    private rotationRR(node: TreeNode): TreeNode {
        // if (node.right) {
        let tmp: TreeNode = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
        // }
        // return null;
    }

    private rotationLL(node: TreeNode): TreeNode {
        // if (node.left) {
        let tmp: TreeNode = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
        // }
        // return null;

    }

    private rotationLR(node: TreeNode): TreeNode {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    };

    private rotationRL(node: TreeNode): TreeNode {
        node.left = this.rotationLL(node.left);
        return this.rotationRR(node);
    };
    private height(node): number {
        if (node === null) {
            return -1;
        } else {
            return Math.max(this.height(node.left),
                this.height(node.right)) + 1;
        }
    };


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
            // console.log(node.key);
            this.arr.push(node.key);
            if (node.left) console.log('left')
            if (node.right) console.log('right')
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

    public depth(node: TreeNode = this.root): number {
        if (node === null) {
            return 0;
        } else {
            if (node.left) {
                return this.height(node.left) + 1;
            } else if (node.right) {
                return this.height(node.right) + 1;
            }
        }
    }
}