class TimeUtil {

    constructor() {
    }

    /*将秒数转换成时分秒*/
    public static secToTime(s: number): string {
        let t: string = "";
        if (s > -1) {
            let hour: number = Math.floor(s / 3600);
            let min: number = Math.floor(s / 60) % 60;
            let sec: number = Math.floor(s % 60);
            t += hour < 10 ? "0" + hour + ":" : hour + ":";
            t += min < 10 ? "0" + min + ":" : min + ":";
            t += sec < 10 ? "0" + sec : sec;
        }
        return t;
    }

    /*获取当前xx时xx分xx秒*/
    public static getTime() {
        let date = new Date();
        let t: string = "";
        let hour: number = date.getHours();
        let min: number = date.getMinutes();
        let sec: number = date.getSeconds();
        t += hour < 10 ? "0" + hour : hour;
        t += min < 10 ? "0" + min : min;
        t += sec < 10 ? "0" + sec : sec;
        return t;
    }

    public static timeToSec(time: string): number {
        let hour: number = Number(time.split(':')[0]);
        let min: number = Number(time.split(':')[1]);
        let sec: number = Number(time.split(':')[2]);
        let s: number = (hour * 3600) + (min * 60) + (sec);
        return s;

    }
    
    /*获取xx年xx月xx日*/
    public static getDate(): string {
        let myDate = new Date(); //获取系统当前时间
        // console.log(myDate.getFullYear()); //获取完整的年份(4位,1970-????)
        // console.log(myDate.getMonth()); //获取当前月份(0-11,0代表1月)
        // console.log(myDate.getDate()); //获取当前日(1-31)
        // console.log(myDate.getDay()); //获取当前星期X(0-6,0代表星期天)
        // console.log(myDate.getTime()); //获取当前时间(从1970.1.1开始的毫秒数)
        // console.log(myDate.getHours()); //获取当前小时数(0-23)
        // console.log(myDate.getMinutes()); //获取当前分钟数(0-59)
        // console.log(myDate.getSeconds()); //获取当前秒数(0-59)
        // console.log(myDate.getMilliseconds()); //获取当前毫秒数(0-999)
        console.log(myDate.toLocaleDateString()); //2018年12月11日
        // let mytime = myDate.toLocaleTimeString(); //下午1:17:41
        // console.log(myDate.toLocaleString()); //2018年12月11日下午1:17:41
        return new Date().toLocaleDateString();
    }

    public static getDay(): string {
        let day: number = new Date().getDay()
        let dayCHN: string = "";
        switch (day) {
            case 0:
                dayCHN = "星期天";
                break;
            case 1:
                dayCHN = "星期一";
                break;
            case 2:
                dayCHN = "星期二";
                break;
            case 3:
                dayCHN = "星期三";
                break;
            case 4:
                dayCHN = "星期四";
                break;
            case 5:
                dayCHN = "星期五";
                break;
            case 6:
                dayCHN = "星期六";
                break;
            default:
                dayCHN = "星期一";
                break;
        }
        return dayCHN
    }




}