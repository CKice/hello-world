/**
 * 登录公告
 */
class LoginNoticeView extends eui.Component {
    public labInfo: eui.Label;
    public btnBack: eui.Button;

    constructor(data: any, callBack: Function, self: Object) {
        super();
        this.name = `登录公告`;
        this.skinName = "LoginNoticeSkin";
        // this.open(null)
    }

    protected childrenCreated() {
    }

    public open(...param: any[]): void {
        this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this)
    }

    public close(...param: any[]): void {
        this.btnBack.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this)
    }

    private onTap(e: egret.TouchEvent): void {
    }
}
