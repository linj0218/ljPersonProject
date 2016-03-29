var apiurl         = "http://121.40.69.97:3010";
//var apiurl         = "http://capi.handlecar-oms.com";
var crossDomainFlg = 1; // 0 不跨域, 1 跨域
var browser        = {  // browser.versions.ios / browser.versions.android
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return { //移动终端浏览器版本信息
            trident : u.indexOf('Trident') > -1, //IE内核
            presto  : u.indexOf('Presto') > -1, //opera内核
            webKit  : u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko   : u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile  : !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
            ios     : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android : u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone  : u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
            iPad    : u.indexOf('iPad') > -1, //是否iPad
            webApp  : u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
};
//获取当前时间
function getNewTime(){
    var t = new Date();
    var year = t.getFullYear();
    var month = t.getMonth()+1 >= 10 ? t.getMonth()+1 : "0"+(t.getMonth()+1);
    var day = t.getDate() >= 10 ? t.getDate() : "0"+t.getDate();
    return ""+year+month+day;
}
// 获取url上的参数 //getArgs()["name"]
function getArgs(){
    var args = {};
    var match = null;
    var search = decodeURIComponent(location.search.substring(1));
    var reg = /(?:([^&]+)=([^&]+))/g;
    while((match = reg.exec(search))!==null){
        args[match[1]] = match[2];
    }
    return args;
}
/** 时间格式转换
 * "212"-->"2:12"
 * "1212"-->"12:12"
 * "20150201"-->"2015-02-01"
 * "20150201121212"-->"2015-02-01 12:12:12"
**/
function changeTime(o){
    var len = o.length;
    switch(len){
        case 3:
            var t = o[0]+":"+o[1]+o[2];
            return t;
            break;
        case 4:
            var t = o[0]+o[1]+":"+o[2]+o[3];
            return t;
            break;
        case 8:
            var t = o[0]+o[1]+o[2]+o[3]+"-"+o[4]+o[5]+"-"+o[6]+o[7];
            return t;
            break;
        case 14:
            var y = o[0]+o[1]+o[2]+o[3]+"-"+o[4]+o[5]+"-"+o[6]+o[7]+" "+o[8]+o[9]+":"+o[10]+o[11]+":"+o[12]+o[13];
            return y;
            break;
        default:;
    }
}
function changeTime2(o){
    var len = o.length;
    switch(len){
        case 3:
            var t = o[0]+":"+o[1]+o[2];
            return t;
            break;
        case 4:
            var t = o[0]+o[1]+":"+o[2]+o[3];
            return t;
            break;
        case 8:
            var t = o[0]+o[1]+o[2]+o[3]+"-"+o[4]+o[5]+"-"+o[6]+o[7];
            return t;
            break;
        case 14:
            var y = o[0]+o[1]+o[2]+o[3]+"-"+o[4]+o[5]+"-"+o[6]+o[7]+" "+o[8]+o[9]+":"+o[10]+o[11]+":"+o[12]+o[13];
            return y;
            break;
        default:;
    }
}
function HCAjax(url,para,successCallBack){
    /*公共参数处理*/
    if (crossDomainFlg == 1) {
        $.ajax({
            type:'GET',
            url: apiurl+url,
            data : para,
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            cache:false,
            timeout: 5000,
            contentType:"application/json; charset/utf-8",
            success: function (data) {
                successCallBack(data);
            }
        })
    }else{
        $.ajax({
            type: "Post",
            url: apiurl+url,
            dataType: "json",
            data : para,
            cache:false,
            contentType:"application/json; charset/utf-8",
            success: function (data) {
                successCallBack(data);
            },
            error: function(error){
                console.log('error:'+url);
            }
        })
    }

}