
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