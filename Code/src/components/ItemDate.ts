class ItemDate extends eui.ItemRenderer {

	public static y: number;
	public static m: number;
	public static d: number;
	public constructor() {
		super()
		this.skinName = "ItemDateSkin"
	}

	protected dataChanged() {
		if (!this.data.isThisMonth) {
			this.currentState = "disabled";
		}
		// else if (this.data.dayNum = ItemDate.d && ItemDate.m == new Date().getMonth() && ItemDate.y == new Date().getFullYear()) {
		// 	console.log(this.data.dayNum = ItemDate.d)
		// 	console.log(ItemDate.m == new Date().getMonth())
		// 	console.log(ItemDate.y == new Date().getFullYear())
		// 	this.currentState = "today";
		// } else {
		// 	this.currentState = "up";
		// }
	}
}