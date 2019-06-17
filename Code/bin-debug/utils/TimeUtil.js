var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TimeUtil = (function () {
    function TimeUtil() {
    }
    /**
     * 将秒数转换成xx时xx分xx秒
     */
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
    /**
     * 获取当前xx时xx分xx秒
     */
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
    /**
     * 将xx时xx分xx秒转为秒数
     */
    TimeUtil.timeToSec = function (time) {
        var hour = Number(time.split(':')[0]);
        var min = Number(time.split(':')[1]);
        var sec = Number(time.split(':')[2]);
        var s = (hour * 3600) + (min * 60) + (sec);
        return s;
    };
    /**
     * 获取年/月/日
     */
    TimeUtil.getDate = function () {
        // console.log(new Date().getFullYear());         //获取完整的年份(4位,1970-????)
        // console.log(new Date().getMonth());            //获取当前月份(0-11,0代表1月)
        // console.log(new Date().getDate());             //获取当前日(1-31)
        // console.log(new Date().getDay());              //获取当前星期X(0-6,0代表星期天)
        // console.log(new Date().getHours());            //获取当前小时数(0-23)
        // console.log(new Date().getMinutes());          //获取当前分钟数(0-59)
        // console.log(new Date().getSeconds());          //获取当前秒数(0-59)
        // console.log(new Date().getMilliseconds());     //获取当前毫秒数(0-999)
        // console.log(new Date().getTime());             //获取当前时间(从1970.1.1开始的毫秒数)
        // console.log(new Date().toLocaleDateString());  //2018/12/11
        // console.log(new Date().toLocaleTimeString());  //下午1:17:41
        // console.log(new Date().toLocaleString());      //2018/12/11/下午1:17:41
        return new Date().toLocaleDateString();
    };
    /**
     * 获取星期X
     */
    TimeUtil.getDay = function () {
        var dayCHN;
        return dayCHN = WEEKTABLE[0].cn[new Date().getDay()];
    };
    /**
     * 获取月份天数
     * @param year是要获取的年份，闰年不一样
     * @param month是要获取的月份
     */
    TimeUtil.getMonthDays = function (year, month) {
        return new Date(year, month, 0).getDate();
    };
    /**
     * 获取星期几
     * @param year是要获取的年份
     * @param month是要获取的月份
     * @param day是要获取的天数
     */
    TimeUtil.getWeekday = function (year, month, day) {
        return new Date(year, month - 1, day).getDay();
    };
    /**
     * 返回当前月包含几个星期
     * @param year是要获取的年份
     * @param month是要获取的月份
     */
    TimeUtil.getweeksInMonth = function (year, month) {
        var days = this.getMonthDays(year, month);
        var FirstDayWeekday = this.getWeekday(year, month, 1);
        return Math.ceil(days + FirstDayWeekday);
    };
    /**
     * 返回当前月的数据
     * @param year是要获取的年份
     * @param month是要获取的月份
     * @param day天，用来判断是否是当前天
     * @param type表明要星期几开头，0为星期一开头，1为星期日开头，默认为0
     */
    TimeUtil.getMonthDaysArray = function (year, month, day, type) {
        if (type === void 0) { type = 0; }
        // if (typeof day === 'undefined' && year === YEAR && month === MONTH) day = DAY;
        day = new Date().getDay();
        var dayArrays = [];
        var days = this.getMonthDays(year, month), preDays = this.getMonthDays(year, month - 1);
        var thisMonthFirstDayInWeek = this.getWeekday(year, month, 1), thisMonthLastDayInWeek = this.getWeekday(year, month, days);
        type = !type || type !== 1 ? 0 : 1;
        //上月在当月日历面板中的排列
        for (var i = 0; i < thisMonthFirstDayInWeek; i++) {
            dayArrays.push({
                dayNum: (preDays - thisMonthFirstDayInWeek + i + 1),
                weekDay: WEEKTABLE[type].cn[i]
            });
        }
        //当月日历面板中的排列
        for (var i = 1; i <= days; i++) {
            var weekDayFlag = (thisMonthFirstDayInWeek + i - 1) % 7;
            dayArrays.push({
                dayNum: i,
                weekDay: WEEKTABLE[type].cn[weekDayFlag],
                selected: i === +day,
                isThisMonth: true
            });
        }
        ;
        //下月在当月日历面板中的排列
        for (var i = 1; i <= (6 - thisMonthLastDayInWeek); i++) {
            var weekDayFlag = (thisMonthFirstDayInWeek + days + i - 1) % 7;
            dayArrays.push({
                dayNum: i,
                weekDay: WEEKTABLE[type].cn[weekDayFlag]
            });
        }
        ;
        return dayArrays;
    };
    /**
     * 返回当前月包含几个星期
     * @param fmt年(YYYY/yyyy)固定四个占位符 月(M)、日(d)、小时(h)、分(m)、秒(s)可以用 1-2个占位符,严格区分大小写，
     * @param date参数不必须，允许字符串和时间对象，不传或者传无法转换成合法时间对象的字符串则默认当前时间
     * (Format("yyyy-MM-dd hh:mm:ss:ms") ==> 2006-07-02 08:09:04:23
     * (Format("yyyy-MM-dd hh:mm:ss:mss") ==> 2006-07-02 08:09:04:023
     * (Format("yyyy-M-d h:m:s:ms")      ==> 2006-7-2 8:9:4.180
     */
    TimeUtil.formate = function (fmt, date) {
        date = new Date(date).toString() === 'Invalid Date' ? new Date() : new Date(date);
        var rules = [{
                rule: '[yY]{4}',
                value: date.getFullYear()
            }, {
                rule: 'M+',
                value: date.getMonth() + 1
            }, {
                rule: '[dD]+',
                value: date.getDate()
            }, {
                rule: 'h+',
                value: date.getHours()
            }, {
                rule: 'm+',
                value: date.getMinutes()
            }, {
                rule: 's+',
                value: date.getSeconds()
            }, {
                rule: 'ms{1,2}',
                value: date.getMilliseconds()
            }];
        rules.forEach(function (r) {
            var rule = r.rule, val = r.value;
            fmt = fmt.replace(new RegExp(rule), function ($1) {
                var rLen = val.toString().length, fLen = $1.length;
                return (fLen !== 2 || rLen >= fLen) ? val : ['00', val].join().substr(rLen);
            });
        });
        return fmt;
    };
    return TimeUtil;
}());
__reflect(TimeUtil.prototype, "TimeUtil");
var WEEKTABLE = [{
        cn: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        cns: ['日', '一', '二', '三', '四', '五', '六'],
        en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }, {
        cn: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        cns: ['一', '二', '三', '四', '五', '六', '日'],
        en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }];
//# sourceMappingURL=TimeUtil.js.map