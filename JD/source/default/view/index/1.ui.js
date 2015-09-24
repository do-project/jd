
var nf = sm("do_Notification");
var slideView = ui("slv");
var slideView_top = ui("slv_top");
var global = sm("do_Global");

var img1 = ui("img1");
var img2 = ui("img2");
var img3 = ui("img3");
var img4 = ui("img4");
var img5 = ui("img5");
var img6 = ui("img6");
var img7 = ui("img7");
var img8 = ui("img8");


var flag_index_top = 0;

var app = sm("do_App");
var listData_top = mm("do_ListData");
slideView_top.bindItems(listData_top);
var addData = [];
addData.push({template:0,source:"source://image/banner1.png" });
addData.push({template:0,source:"source://image/banner2.png" });
addData.push({template:0,source:"source://image/banner3.png" });
addData.push({template:0,source:"source://image/banner4.png" });
addData.push({template:0,source:"source://image/banner5.png" });
addData.push({template:0,source:"source://image/banner1.png" });
addData.push({template:0,source:"source://image/banner2.png" });
addData.push({template:0,source:"source://image/banner8.png" });

listData_top.addData(addData);
slideView_top.refreshItems();
slideView_top.on("indexChanged", function(data, e) {
	var index = data;//当前显示视图的索引值
	switch (index) {
	case 0:
		tab1();
		flag_index_top = index;
		break;
	case 1:
		tab2();
		flag_index_top = index;
		break;
	case 2:
		tab3();
		flag_index_top = index;
		break;
	case 3:
		tab4();
		flag_index_top = index;
		break;
	case 4:
		tab5();
		flag_index_top = index;
		break;
	case 5:
		tab6();
		flag_index_top = index;
		break;
	case 6:
		tab7();
		flag_index_top = index;
		break;
	case 7:
		tab8();
		flag_index_top = index;
		break;
	default:
		break;
	}
})

function tab1(){
	img1.source = "source://image/jshop_banner_point_active.png";
	img2.source = "source://image/jshop_banner_point_inactive.png";
	img8.source = "source://image/jshop_banner_point_inactive.png";
}
function tab2(){
	img1.source = "source://image/jshop_banner_point_inactive.png";
	img2.source = "source://image/jshop_banner_point_active.png";
	img3.source = "source://image/jshop_banner_point_inactive.png";
}
function tab3(){
	img2.source = "source://image/jshop_banner_point_inactive.png";
	img3.source = "source://image/jshop_banner_point_active.png";
	img4.source = "source://image/jshop_banner_point_inactive.png";
}
function tab4(){
	img3.source = "source://image/jshop_banner_point_inactive.png";
	img4.source = "source://image/jshop_banner_point_active.png";
	img5.source = "source://image/jshop_banner_point_inactive.png";
}
function tab5(){
	img4.source = "source://image/jshop_banner_point_inactive.png";
	img5.source = "source://image/jshop_banner_point_active.png";
	img6.source = "source://image/jshop_banner_point_inactive.png";
}
function tab6(){
	img5.source = "source://image/jshop_banner_point_inactive.png";
	img6.source = "source://image/jshop_banner_point_active.png";
	img7.source = "source://image/jshop_banner_point_inactive.png";
}
function tab7(){
	img6.source = "source://image/jshop_banner_point_inactive.png";
	img7.source = "source://image/jshop_banner_point_active.png";
	img8.source = "source://image/jshop_banner_point_inactive.png";
}
function tab8(){
	img7.source = "source://image/jshop_banner_point_inactive.png";
	img8.source = "source://image/jshop_banner_point_active.png";
	img1.source = "source://image/jshop_banner_point_inactive.png";
}


var img11 = ui("img11");
var img12 = ui("img12");

var flag_index = 0;
var listData = mm("do_ListData");
listData.addData([ {template : 0}, {template : 1} ]);
slideView.bindItems(listData);
slideView.refreshItems();
slideView.on("indexChanged", function(data, e) {
	var index = data;//当前显示视图的索引值
	switch (index) {
	case 0:
		tab11();
		flag_index = index;
		break;
	case 1:
		tab12();
		flag_index = index;
		break;
	default:
		break;
	}
})

function tab11(){
	img11.source = "source://image/jshop_banner_point_active.png";
	img12.source = "source://image/jshop_banner_point_inactive.png";
}
function tab12(){
	img11.source = "source://image/jshop_banner_point_inactive.png";
	img12.source = "source://image/jshop_banner_point_active.png";
}



var mTimer = mm("do_Timer");
mTimer.delay = 0;
mTimer.interval = 1000;
var maxVal = 2;
mTimer.start();
mTimer.on("tick", function(data, e) {
	maxVal--;
	if (maxVal < 0) {
		slideView.index = (flag_index + 1)%2;
		slideView_top.index = (flag_index_top + 1)%8;
		slideView.refreshItems();
		slideView_top.refreshItems();
		maxVal = 2;
	}
});



var scrollview1 = ui("do_ScrollView_2");
var refreshCount = 0;
scrollview1.on("pull",function(data){
	//下拉scrollview，露出headview，开始刷新数据
	if(data.state==2)//缺省headview只需要监控状态2
	{
		//每刷新一次计数加1
		ui("refreshLabel").text="Refresh Count="+refreshCount++;
		scrollview1.rebound();//刷新后恢复headview状态
	}
});



//倒计时
var mTimer1 = mm("do_Timer");
var label_h = ui("label_h");
var label_m = ui("label_m");
var label_s = ui("label_s");


mTimer1.delay = 0;
mTimer1.interval = 1000;

var maxVal1 = 545;
/*
var h,m,s;*/
label_h.text=parseInt(maxVal1/3600);
label_m.text=parseInt((maxVal1-3600*label_h.text)/60);
label_s.text=parseInt(maxVal1-3600*label_h.text-60*label_m.text);
if(label_h.text*1<10)
	label_h.text="0"+label_h.text;
if(label_m.text*1<10)
	label_m.text="0"+label_m.text;
if(label_s.text*1<10)
	label_s.text="0"+label_s.text;



if (!mTimer1.isStart()) {
	mTimer1.start();
}



// 订阅(注册)tick事件,每隔固定时间(mTimer.interval)执行一次
mTimer1.on("tick", function(data, e) {

	var flag_s=true,flag_m=true,flag_h=true;
	
	if(label_s.text*1>0)
	{
		label_s.text = label_s.text*1-1;
		flag_s=false;
	}
	else if(label_m.text*1>0)
	{
		label_m.text = label_m.text*1-1;
		label_s.text = 59;
		flag_s=false;
		flag_m=false;
	}
	else if(label_h.text*1>0)
	{
		label_h.text = label_h.text*1-1;
		label_s.text=59;
		label_m.text = 59;
		flag_s=false;
		flag_m=false;
		flag_h=false;
	}
	
	if(label_h.text*1<10 && flag_h==false)
		label_h.text="0"+label_h.text;
	if(label_m.text*1<10 && flag_m==false)
		label_m.text="0"+label_m.text;
	if(label_s.text*1<10 && flag_s==false)
		label_s.text="0"+label_s.text;
	
	maxVal1--;
	
	if (maxVal1 < 0) {
		//倒计时结束后
		mTimer1.stop();
	}
	
});


//搜索页面
var label_open = ui("do_ALayout_6");
label_open.on("touch", function(data, e) {
	var random = parseInt(Math.random() * 11);
	app.openPage({
        source : "source://view/page1/search.ui"});
});


//二维码页面
var label_open_bc = ui("do_ALayout_20");
label_open_bc.on("touch", function(data, e) {
	var random = parseInt(Math.random() * 11);
	app.openPage({
        source : "source://view/page1/barcode.ui"});
});

//信息
var label_open_message = ui("do_ALayout_21");
label_open_message.on("touch", function(data, e) {
	var random = parseInt(Math.random() * 11);
	app.openPage({
        source : "source://view/page1/message.ui"});
});

//百宝箱
var label_open_all = ui("do_ALayout_22");
label_open_all.on("touch", function(data, e) {
	var random = parseInt(Math.random() * 11);
	app.openPage({
        source : "source://view/page1/allthethings.ui"});
});

var label_open_orders = ui("do_ALayout_23");
label_open_orders.on("touch", function(data, e) {
	var random = parseInt(Math.random() * 11);
	app.openPage({
        source : "source://view/page1/orders.ui"});
});

var label_open_film = ui("do_ALayout_24");
label_open_film.on("touch", function(data, e) {
	var random = parseInt(Math.random() * 11);
	app.openPage({
        source : "source://view/page1/film.ui"});
});
