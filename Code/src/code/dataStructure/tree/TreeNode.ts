class TreeNode {
    public key: any;
    public left: TreeNode = null;
    public right: TreeNode = null;
    public parent: TreeNode = null;
    public color: string = "red";
    constructor(key: any) {
        this.key = key
    }
}
const TreeColor = {
    RED: "red",
    BLACK: "black"
}