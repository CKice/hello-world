/**
 * 日历
 */
class Calendar extends eui.Component {
	public txtDate: eui.Label;
	public txtPre: eui.Label;
	public txtYear: eui.Label;
	public txtMouth: eui.Label;
	public txtNext: eui.Label;
	public listDate: eui.List;

	private dataProvider = new eui.ArrayCollection();
	public constructor() {
		super();
		this.skinName = "CalendarSkin"
	}

	public showDate() {
		let date = new Date();
		let y = ItemDate.y = date.getFullYear();
		let m = ItemDate.m = date.getMonth() + 1;
		let d = ItemDate.d = date.getDate();
		this.dataProvider.source = TimeUtil.getMonthDaysArray(y, m, d, 1)
		console.log(TimeUtil.getMonthDaysArray(y, m, d));
		this.txtDate.text = y + "-" + m + "-" + d;
		this.txtYear.text = y + "";
		this.txtMouth.text = m + "";
		this.txtPre.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.txtNext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		this.listDate.itemRenderer = ItemDate;
		this.listDate.dataProvider = this.dataProvider
	}

	private onTap(e: egret.TouchEvent) {
		switch (e.currentTarget) {
			case this.txtPre:
				//
				break;
			case this.txtNext:
				//
				break;
		}
	}

	private updata() {

	}
}