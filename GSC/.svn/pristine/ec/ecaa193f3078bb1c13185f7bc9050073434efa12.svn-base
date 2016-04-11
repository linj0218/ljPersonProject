
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $.backstretch("components/img/bg.jpg");
    
    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.btn').on('click', function(e) {
		var isok = true;
		var msg = "<i class=\"fa fa-warning\"></i>";
		var username = $("#form-username").val();
		var password = $("#form-password").val();

		if(username == '' && password == ''){
			msg += "请输入用户名和密码";
			isok = false;
		} else if(username == '' && password != ''){
			msg += "请输入用户名";
			isok = false;
		}else if(username != '' && password == ''){
			msg += "请输入密码";
			isok = false;
		}
		if(isok){
			$("#warning_area").html("");
			fn_login(username, password);

		} else {
			$("#warning_area").html(msg);
		}
		
		
		//window.location.href = "index.html#/view1";
/*    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});*/
    	
    });

	sessionStorage.removeItem("accesskey");
});
function fn_login(username,password) {
	var jsonpara = {};
	jsonpara.uname = username;
	jsonpara.upwd = password;
	// httputil.httpget("/propertyins/login",jsonpara,fn_logincallback);

	var jsondata = JSON.stringify(jsonpara);
	$.ajax({
		type: "GET",
		url: httpurl + "/userlogin/Userlogin",
		jsonp: 'callback',
		data: {"data": jsondata},
		dataType: "jsonp",
		cache: false,
		timeout: 5000,
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		success: function(data){
			var msg = "<i class=\"fa fa-warning\"></i>";
			var loginStatus = data.status;
			if(loginStatus > 0){
				// alert(data.data.uname);
				sessionStorage.setItem("logintoken", data.data.ultoken);
				sessionStorage.setItem("loginuid", parseInt(data.data.uluid));
				sessionStorage.setItem("loginuname", data.data.uname);

				window.location.href = "index.html#/view3";
			}else{
				 if(loginStatus == -404){
					 msg += "用户名或密码不正确";
					 $("#warning_area").html(msg);
				 }
			}
			//  var result = this.checkcallback(data);
			// //window.location.href = "../app/login.html";
			// return;
		}
	});
}

function fn_logincallback(data) {

}

