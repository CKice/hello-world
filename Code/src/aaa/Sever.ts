/**
 * 服务器列表
 */
class Sever extends eui.Component {
    public tabSever: eui.TabBar;
    public btnBack: eui.Button;
    public scrollSever: eui.Scroller;
    public listSever: eui.List;
    public btnRctLand: eui.Button;
    // public list: eui.List;


    public tabData: string[] = ["最近登录", "21-30区", "11-20区", "01-10区"];
    public listData3: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    public listData2: number[] = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    public listData1: number[] = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    public listData0: number[] = [20, 14, 68];
    public listData: eui.ArrayCollection = new eui.ArrayCollection();

    constructor() {
        super();
        this.name = `服务器列表`;
        this.skinName = "SeverSkin";
        this.init();
    }

    protected childrenCreated() {
        this.listSever.itemRenderer = SeverItem;
        this.scrollSever.viewport = this.listSever;
        // this.tabSever.itemRenderer = BtnSeverItem;
    }

    public init() {
        this.tabSever.dataProvider = new eui.ArrayCollection(this.tabData);

        // this.list.dataProvider = new eui.ArrayCollection(this.tabData);
        this.tabSever.selectedIndex = 0;
        this.tabSever.addEventListener(egret.TouchEvent.CHANGING, this.onChange, this)
        this.listData.source = this.listData0;
        this.listSever.dataProvider = this.listData;
        this.listSever.addEventListener(egret.TouchEvent.CHANGE, this.onChange, this)
    }


    public open(...param: any[]): void {
    }

    public close(...param: any[]): void {
    }

    public onChange(e: egret.TouchEvent): void {
        switch (e.currentTarget) {
            case this.listSever:
                this.listSever.selectedIndices
                let item: SeverItem = this.listSever.selectedItem as SeverItem;
                console.log(this.listSever.selectedIndices)
                console.log(this.listSever.selectedIndex)
                console.log(this.listSever.selectedItem)
                console.log(this.listSever.selectedItems)
                break;
            case this.tabSever:
                this.listData.source = this['listData' + this.tabSever.selectedIndex];
                break;
        }

    }

    private onTap(e: egret.TouchEvent): void {
    }

}
