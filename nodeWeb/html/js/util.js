var APIROOT = "http://127.0.0.1:8080/"

var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {//移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
};
/*try{
    if(browser.versions.ios){
        goBackResult(1);
    }
    if(browser.versions.android){
        window.control.goBackResult(1);
    }
}catch (e){
    console.log(e);
}*/
// 获取地址栏参数
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
// 填充html
function loadHtml(url,target){
    $.ajax({
        type: "get",
        url: url,
        dataType: "html",
        async: false,
        success: function (data) {
            $("."+target).html(data);
        }
    });
}
//时间格式转换 "20150201"-->"2015/02/01"
function changeTime(o){
    var len = o.length;
    switch(len){
        case 4:
            var t = o[0]+o[1]+":"+o[2]+o[3];
            return t;
            break;
        case 6:
            var t = o[0]+o[1]+":"+o[2]+o[3]+":"+o[4]+o[5];
            return t;
            break;
        case 8:
            var t = o[0]+o[1]+o[2]+o[3]+"/"+o[4]+o[5]+"/"+o[6]+o[7];
            return t;
            break;
        case 12:
            var y = o[0]+o[1]+o[2]+o[3]+"/"+o[4]+o[5]+"/"+o[6]+o[7]+" "+o[8]+o[9]+":"+o[10]+o[11];
            return y;
            break;
        case 14:
            var y = o[0]+o[1]+o[2]+o[3]+"/"+o[4]+o[5]+"/"+o[6]+o[7]+" "+o[8]+o[9]+":"+o[10]+o[11]+":"+o[12]+o[13];
            return y;
            break;
        default:return '';
    }
}
//获取当前时间
function getNowTime(){
    var t = new Date();
    var year = t.getFullYear();
    var month = t.getMonth()+1 >= 10 ? t.getMonth()+1 : "0"+(t.getMonth()+1);
    var day = t.getDate() >= 10 ? t.getDate() : "0"+t.getDate();
    return ""+year+month+day;
}