class SeverItem extends eui.ItemRenderer {
	public imgState: eui.Image;
	public imgState1: eui.Image;
	public labName: eui.Label;

	public constructor() {
		super();
		this.skinName = "SeverItemSkin"
	}

	protected createChildren(): void {
		super.createChildren();
	}

	protected dataChanged(): void {
		this.labName.text = this.data.zonename + this.data.gamename;
	}
}