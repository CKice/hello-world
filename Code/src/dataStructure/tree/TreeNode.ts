class TreeNode extends egret.Sprite {
    public key: any;
    public left: TreeNode = null;
    public right: TreeNode = null;
    public parent: TreeNode = null;
    public color: string = "";
    constructor(key: any) {
        super();
        this.key = key
    }
}