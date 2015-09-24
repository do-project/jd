var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");


/** ***************************************************************************************** */

var listview, listdata;

listview = ui("do_ListView_1");
listdata = mm("do_ListData");

listview.bindItems(listdata);

listdata.addData([ { text : "	推荐分类",index:"0"},
                   { text : "	潮流女装",index:"1"},
                   { text : "	品牌男装",index:"2"},
                   { text : "	内衣配饰",index:"3"},
                   { text : "	家用电器",index:"4"},
                   { text : "	电脑办公",index:"5"},
                   { text : "	手机数码",index:"6"},
                   { text : "	母婴频道",index:"7"},
                   { text : "	图书",index:"8"},
                   { text : "	家居建材",index:"9"},
                   ]);
listview.refreshItems();

var last_index=0;//上一条选中的数据

//选中效果
listview.on("touch", function(index){
	//更新数据
	listdata.updateOne({index:index, data:{"bgcolor":"FFFFFFFF",border:"00000000,0,0",fcolor:"FF0000FF"}});
	if(index!=last_index)
	{
		listdata.updateOne({index:last_index, data:{"bgcolor":"F8F8F8FF",border:"DBDBDBFF,1,1",fcolor:"000000FF"}});
		last_index=index;
	}
	listview.refreshItems();
    listview2.index=index;
});




var listview2, listdata2;

listview2 = ui("do_SlideView_1");
listdata2 = mm("do_ListData");

listview2.bindItems(listdata2);

listdata2.addData([ 
                   { template:0},
                   { template:1, title : "潮流女装1", banner :"source://image/banner2_1.png"},
                   { template:1, title : "男装", banner :"source://image/banner2_2.png"},
                   { template:1, title : "潮流女装3", banner :"source://image/banner2_1.png"},
                   { template:1, title : "潮流女装4", banner :"source://image/banner2_2.png"},
                   { template:1, title : "潮流女装5", banner :"source://image/banner2_1.png"},
                   { template:1, title : "潮流女装6", banner :"source://image/banner2_2.png"},
                   { template:1, title : "潮流女装7", banner :"source://image/banner2_1.png"},
                   { template:1, title : "潮流女装8", banner :"source://image/banner2_2.png"},
                   { template:1, title : "潮流女装9", banner :"source://image/banner2_1.png"},
                   ]);
listview2.refreshItems();


//搜索页面
var label_open = ui("do_ALayout_7");
label_open.on("touch", function(data, e) {
	var random = parseInt(Math.random() * 11);
	app.openPage({
      source : "source://view/page1/search.ui"});
});
