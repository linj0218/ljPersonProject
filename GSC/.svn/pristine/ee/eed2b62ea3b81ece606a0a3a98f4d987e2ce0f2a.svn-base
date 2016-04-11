function jsutil(prefixurl) {
    var url = prefixurl;
    var callbackmethod = function () {};
    var checkcallback = function () {};
    var httpget = function () {};
    var httppost = function () {};
    var getauthinfo = function (){};
}
jsutil.prototype.getauthinfo = function () {
    var logintoken = sessionStorage.getItem("logintoken");
    var loginuid = sessionStorage.getItem("loginuid");
    var loginuname = sessionStorage.getItem("loginuname");
    var para = {};
    para.ultoken = logintoken;
    para.uid = parseInt(loginuid);
    para.uname = loginuname;
    var json = JSON.stringify(para);
    return json;
}

jsutil.prototype.checkcallback = function (data) {
    if(data.status == 9){
        window.location.href = "/login.html";
        return false;
    }
    return true
}

jsutil.prototype.httpget = function (url,para,callback) {
    var logintoken = sessionStorage.getItem("logintoken");
    var loginuid = sessionStorage.getItem("loginuid");
    var loginuname = sessionStorage.getItem("loginuname");
    // alert("logintoken: "+logintoken +"   -- loginuid: "+loginuid);
    para.ultoken = logintoken;
    para.uid = parseInt(loginuid);
    para.uname = loginuname;
    var json = JSON.stringify(para);
    //alert(url +"----"+json);
    $.ajax({
        type: "GET",
        url: httpurl + url,
        jsonp: 'callback',
        data: {"data": json},
        dataType: "jsonp",
        cache: false,
        timeout: 5000,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function(data){
            if(data.status == -404){
                window.location.href = "../app/login.html";
            }else{
                callback(data);
            }
            //  var result = this.checkcallback(data);
            // //window.location.href = "../app/login.html";
            // return;
        }
    });
}


