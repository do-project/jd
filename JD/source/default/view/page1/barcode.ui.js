//related to barcode.ui

//根据ID获取BarcodeView实例对象；


var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

//返回
var return_open = ui("do_Button_1");
return_open.on("touch", function(){ app.closePage() });
page.on("back", function(){ app.closePage() });



var barcode = ui("do_BarcodeView_1");
start();
function start(){
	//开始启动扫描
	barcode.start(function(data, e) {
		//扫描成功，执行回调函数
		var result = JSON.stringify(data);  
		nf.alert("result:" + result, "BarcodeView")
	});
}



