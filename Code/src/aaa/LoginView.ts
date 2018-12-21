/**
 * 登录界面
 */
class LoginView extends eui.Component {
    public btnNotice: eui.Button;
    public groupSever: eui.Group;
    public imgState: eui.Image;
    public imgState1: eui.Image;
    public labelName: eui.Label;
    public btnSelect: eui.Button;
    public btnStart: eui.Button;


    private callBack: Function;
    private obj: Object;
    private data: any;
    private zoneid: number;
    private zoneList: Object[];

    constructor(data: any, callBack: Function, self: Object) {
        super();
        this.name = `登录界面`;
        this.skinName = "LoginSkin";
        this.callBack = callBack;
        this.obj = self;
    }

    protected childrenCreated() {
    }

    public open(...param: any[]): void {
        // this.visible = true;
        this.zoneList = param[0].zonelist;
        this.callBack = param[1];
        this.obj = param[2];
        let obj: any = this.zoneList[0];
        this.zoneid = obj.zoneid;
        this.labelName.text = obj.gamename + obj.zoneid
        this.btnNotice.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this)
        this.btnSelect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this)
        this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this)

    }

    public close(...param: any[]): void {
        this.btnNotice.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this)
        this.btnSelect.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this)
        this.btnStart.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this)
    }

    public onChange(e: egret.TouchEvent): void {
    }

    public changeSever(zoneid) {
        this.zoneid = zoneid;
        let zone: any;
        for (let i: number = 0; i < this.zoneList.length; i++) {
            zone = this.zoneList[i]
            if (zone.zoneid == zoneid) {
                this.labelName.text = zone.gamename + zoneid;
                return;
            }
        }
    }

    private onTap(e: egret.TouchEvent): void {
        switch (e.currentTarget) {
            case this.btnNotice:
                break;
            case this.btnSelect:
                break;
            case this.btnStart:
                this.callBack.call(this.obj, this.zoneid)
                break;
        }
    }
}
