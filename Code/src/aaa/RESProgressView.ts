/**
 * z资源进度
 */
class RESProgressView extends eui.Component {
    public groupGift: eui.Group;
    public groupProgress: eui.Group;
    public imgProgress: eui.Image;
    public imgScale: eui.Image;
    public groupLabel: eui.Group;
    public labProgress: eui.Label;
    public labRefresh: eui.Label;

    private imgWidth: number;


    constructor() {
        super();
        this.name = `资源进度`;
        this.skinName = "RESProgressSkin";
        let str = `<font size= 14 color = 0x00ff00><u>` + this.labRefresh.text + `</u></font>`
        this.labRefresh.textFlow = new egret.HtmlTextParser().parser(str);
    }

    protected childrenCreated() {
    }

    public open(...param: any[]): void {
        this.labRefresh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this)
        this.imgWidth = this.imgProgress.width;
        let str1 = `<font size= 14 color = 0x00ff00><u>` + this.labRefresh.text + `</u></font>`
    }

    public close(...param: any[]): void {
        this.labRefresh.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this)
    }

    public changeProgress(value: number) {
        console.log(' this.imgProgress.width' + this.imgProgress.width + " ---" + Math.floor(this.imgWidth))
        this.imgProgress.width = Math.floor(this.imgWidth * value / 100);
        this.labProgress.text = "资源加载中......" + value + "%";
    }

    private onTap(e: egret.TouchEvent): void {
    }
}
