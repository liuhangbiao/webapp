/**
 * 支持AMD、CMD、CommonJS、Browser等规范
 * Browser：base().isGo()
 * AMD： import * as bs from '../snippet/base.js';console.log(bs.isGo())
 * CMD:var sn = require('../snippet/base.js');console.log(sn.isGo())
 * @Author:道心
 * @Mail:liuhangbiaoo@gmail.com
 * @Url:www.jsgu.net
 * @Date:2017-08-10 15:25:05
 */
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.base = factory;
    }
}(this, function(b) {
    const base = {
        /*
         *对Date的扩展,将Date转化为指定格式的String
         *年(y)、季度(q)、月(M)、日(d)、消失(h)、分(m)、秒(s)、毫秒(mi)可以用1-2个占位符 注意M与m  月与分
         * 示例:
         * formatDate(new Date(), "yyyy-MM-dd HH:mm:ss.s")
         * formatDate(new Date(), "y年M月d日 h:m:s mi毫秒 q季度")
         * @param obj   具体的日期
         * @param type  日期格式 如:yyyy-MM-dd
         */
        formatDate: (obj, type) => {
            if (!obj) { return obj; }
            var newDate = new Date(obj);
            var y = newDate.getFullYear();
            var q = Math.floor((newDate.getMonth() + 3) / 3);
            var M = ("0" + (newDate.getMonth() + 1)).slice(-2);
            var d = ("0" + newDate.getDate()).slice(-2);
            var h = ("0" + newDate.getHours()).slice(-2);
            var m = ("0" + newDate.getMinutes()).slice(-2);
            var s = ("0" + newDate.getSeconds()).slice(-2);
            var mi = ("00" + newDate.getMilliseconds()).slice(-3);
            var current_date = '';
            if (type == "yyyy-MM-dd") {
                current_date = y + '-' + M + '-' + d;
            } else if (type == "yyyy-MM-dd HH:mm:ss") {
                current_date = y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
            } else if (type == "yyyy-MM-dd HH:mm:ss.s") {
                current_date = y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s + '.' + mi;
            } else if (type == "yyyy/MM/dd") {
                current_date = y + '/' + M + '/' + d;
            } else if (type == "yyyy/MM/dd HH:mm:ss") {
                current_date = y + '/' + M + '/' + d + ' ' + h + ':' + m + ':' + s;
            } else if (type == "yyyy/MM/dd HH:mm:ss.s") {
                current_date = y + '/' + M + '/' + d + ' ' + h + ':' + m + ':' + s + '.' + mi;
            } else if (type == "yyyy年MM月dd日") {
                current_date = y + '年' + M + '月' + d + '日';
            } else if (type == "yyyy年MM月dd日 HH:mm:ss") {
                current_date = y + '年' + M + '月' + d + '日 ' + h + ':' + m + ':' + s;
            } else if (type == "yyyy年MM月dd日 HH:mm:ss.s") {
                current_date = y + '年' + M + '月' + d + '日 ' + h + ':' + m + ':' + s + '.' + mi;
            } else {
                current_date = type && (type.replace('y', y).replace('q', q).replace('M', M).replace('d', d).replace('h', h).replace('m', m).replace('s', s).replace('mi', mi))
            }
            return current_date;
        },
        /**
         * 年龄计算
         * oldObj 出生日期
         * obj 结束日期 （如果为空默认当前日期）
         */
        ageCalculate: (oldObj, obj) => {
            if (!obj) { obj = base.formatDate(new Date(), 'yyyy/MM/dd') }

            var startTime = new Date(Date.parse(oldObj)).getTime();
            var endTime = new Date(Date.parse(obj)).getTime();
            console.log(startTime, endTime)
            var s = Math.abs((startTime - endTime)) / 1000;
            var m = Math.abs((startTime - endTime)) / 1000 / 60;
            var h = Math.abs((startTime - endTime)) / 1000 / 60 / 60;
            var d = Math.abs((startTime - endTime)) / 1000 / 60 / 60 / 24;
            if (d > 365) {
                return Math.floor(d / 365) + "年" + (d - (365 * Math.floor(d / 365))) + "天" + JSON.stringify([d, h, m, s])
            } else {
                return Math.floor(d) + "天" + JSON.stringify([d, h, m, s])
            }
        },
        addCSS: (cssText) => {
                var style = document.createElement('style'),
                    head = document.head || document.getElementsByTagName('head')[0];
                style.type = 'text/css';
                if (style.styleSheet) { var func = function() { try { style.styleSheet.cssText = cssText; } catch (e) {} }; if (style.styleSheet.disabled) { setTimeout(func, 10); } else { func(); } } else {
                    var textNode = document.createTextNode(cssText);
                    style.appendChild(textNode);
                }
                head.appendChild(style);
            }
    };
    return base;
}));