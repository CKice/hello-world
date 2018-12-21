class BtnSeverItem extends eui.ItemRenderer {
    public labelDisplay: eui.Label;
    public constructor() {
        super();
        this.skinName = "BtnSeverSkin"
    }

    protected createChildren(): void {
        super.createChildren();
    }

    protected dataChanged(): void {
        this.labelDisplay.text = this.data
    }
}