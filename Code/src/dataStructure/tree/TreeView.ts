class TreeView extends egret.Sprite {
    constructor() {
        super();
    }
    public draw(root: TreeNode, depth: number, ) {
        if (root) {
            root.graphics.drawCircle(Math.pow(2, depth - 1) * 15, 0 * 15, 15)
            // if ()
       }
    }
}