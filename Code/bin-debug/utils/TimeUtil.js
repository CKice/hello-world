var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TimeUtil = (function () {
    function TimeUtil() {
    }
    /*将秒数转换成时分秒*/
    TimeUtil.secToTime = function (s) {
        var t = "";
        if (s > -1) {
            var hour = Math.floor(s / 3600);
            var min = Math.floor(s / 60) % 60;
            var sec = Math.floor(s % 60);
            t += hour < 10 ? "0" + hour + ":" : hour + ":";
            t += min < 10 ? "0" + min + ":" : min + ":";
            t += sec < 10 ? "0" + sec : sec;
        }
        return t;
    };
    /*获取当前xx时xx分xx秒*/
    TimeUtil.getTime = function () {
        var date = new Date();
        var t = "";
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        t += hour < 10 ? "0" + hour : hour;
        t += min < 10 ? "0" + min : min;
        t += sec < 10 ? "0" + sec : sec;
        return t;
    };
    TimeUtil.timeToSec = function (time) {
        var hour = Number(time.split(':')[0]);
        var min = Number(time.split(':')[1]);
        var sec = Number(time.split(':')[2]);
        var s = (hour * 3600) + (min * 60) + (sec);
        return s;
    };
    /*获取xx年xx月xx日*/
    TimeUtil.getDate = function () {
        var myDate = new Date(); //获取系统当前时间
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
    };
    TimeUtil.getDay = function () {
        var day = new Date().getDay();
        var dayCHN = "";
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
        return dayCHN;
    };
    return TimeUtil;
}());
__reflect(TimeUtil.prototype, "TimeUtil");
//# sourceMappingURL=TimeUtil.js.map