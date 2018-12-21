/**
 * 服务器列表
 */
class SeverView extends eui.Component {
    public tabSever: eui.TabBar;
    public btnBack: eui.Button;
    public scrollSever: eui.Scroller;
    public listSever: eui.List;

    private tabData: string[] = [];
    private listDataArr: Object[][] = [];
    private callBack: Function;
    private obj: Object;
    private list_length: number = 10;
    public listData: eui.ArrayCollection = new eui.ArrayCollection();

    constructor() {
        super();
        this.name = `服务器列表`;
        this.skinName = "SeverSkin";
        // this.open(data);

    }

    protected childrenCreated() {
        this.listSever.itemRenderer = SeverItem;
        this.scrollSever.viewport = this.listSever;
    }

    public open(...param: any[]): void {
        let zoneList = param[0];
        this.callBack = param[1];
        this.obj = param[2];
        let i: number = 0;
        let btnNum = Math.floor(zoneList.length / this.list_length)
        let name: string = ""
        let str: string = "";
        let arr: Object[] = [];
        let headIndex: number = 0;
        let endIndex: number = 0;
        for (let i: number = 0; i < btnNum; i++) {
            headIndex = i * this.list_length;
            endIndex = (i + 1) * this.list_length - 1;
            str = zoneList[headIndex].zonename
            name = str.split("区")[0] + "-" + zoneList[endIndex].zonename;
            this.tabData.unshift(name)
            for (let j: number = headIndex; j <= endIndex; j++) {
                arr.push(zoneList[j]);
            }
            this.listDataArr.unshift(arr);
        }
        if (i * this.list_length == zoneList.length) {
            this.tabData.unshift(zoneList[i * this.list_length].zonename)
            this.listDataArr.unshift([zoneList[i * this.list_length]]);
        } else {
            headIndex = i * this.list_length;
            endIndex = zoneList.length - 1
            str = zoneList[headIndex].zonename
            name = str.split("区")[0] + "-" + zoneList[endIndex].zonename;
            this.tabData.unshift(name)
            for (let j: number = headIndex; j <= endIndex; j++) {
                arr.push(zoneList[j]);
            }
            this.listDataArr.unshift(arr);
        }
        this.tabData.unshift("最近登录")
        this.listDataArr.unshift([]);

        this.tabSever.dataProvider = new eui.ArrayCollection(this.tabData);
        this.tabSever.selectedIndex = 1;
        this.tabSever.addEventListener(egret.TouchEvent.CHANGING, this.onChange, this)

        this.listData.source = this.listDataArr[1];
        this.listSever.dataProvider = this.listData;
        this.listSever.addEventListener(egret.TouchEvent.CHANGE, this.onChange, this)
        this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this)
    }

    public close(...param: any[]): void {
        this.tabSever.removeEventListener(egret.TouchEvent.CHANGING, this.onChange, this)
        this.btnBack.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this)

        this.listSever.dataProvider = null;
        this.tabSever.dataProvider = null;
    }

    public onChange(e: egret.TouchEvent): void {
        switch (e.currentTarget) {
            case this.listSever:
                this.callBack.call(this.obj, this.listSever.selectedItem.zoneid)
                console.log('zoneid:*********' + this.listSever.selectedItem.zoneid)
                break;
            case this.tabSever:
                this.listData.source = this.listDataArr[this.tabSever.selectedIndex];
                break;
        }
    }

    private onTap(e: egret.TouchEvent): void {
    }
}
