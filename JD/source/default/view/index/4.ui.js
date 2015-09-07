
var nf = sm("do_Notification");
var slideView = ui("slv");
var knxy_img1 = ui("knxy_img1");
var knxy_img2 = ui("knxy_img2");
var knxy_img3 = ui("knxy_img3");

var flag_index = 0;
var app = sm("do_App")

var listData = mm("do_ListData");
listData.addData([ {template : 0}, {template : 1}, {template : 2 } ]);
slideView.bindItems(listData);
slideView.refreshItems();
slideView.on("indexChanged", function(data, e) {
	var index = data;//当前显示视图的索引值
	switch (index) {
	case 0:
		knxy_tab1();
		flag_index = index;
		break;
	case 1:
		knxy_tab2();
		flag_index = index;
		break;
	case 2:
		knxy_tab3();
		flag_index = index;
		break;
	default:
		break;
	}
})

function knxy_tab1(){
	knxy_img1.source = "source://image/jshop_tab_active.png";
	knxy_img2.source = "source://image/jshop_tab_inactive.png";
	knxy_img3.source = "source://image/jshop_tab_inactive.png";
}
function knxy_tab2(){
	knxy_img1.source = "source://image/jshop_tab_inactive.png";
	knxy_img2.source = "source://image/jshop_tab_active.png";
	knxy_img3.source = "source://image/jshop_tab_inactive.png";
}
function knxy_tab3(){
	knxy_img1.source = "source://image/jshop_tab_inactive.png";
	knxy_img2.source = "source://image/jshop_tab_inactive.png";
	knxy_img3.source = "source://image/jshop_tab_active.png";
}
