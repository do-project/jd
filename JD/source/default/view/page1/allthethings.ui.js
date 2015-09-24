//related to allthethings.ui


var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

//返回
var return_open = ui("do_Button_1");
return_open.on("touch", function(){ app.closePage() });
page.on("back", function(){ app.closePage() });



// 根据ui的id来获取ui对象
var gridview = ui("do_GridView_1");

// GridView需要一个listdata对象来管理和绑定数据
var gridData = mm("do_ListData");
// bindItems方法建立GridView对象和ListData对象的绑定关系
gridview.bindItems(gridData);
// 在index.ui文件中设置grdiview的tempslates属性是source://view/cell.ui
// 在index.ui文件中设置grdiview的numberColumns属性是3，表示3列，这里ios和android有点差别，ios这个值不会起作用，真正起作用的是cell的宽度，ios会自动适配最佳列数
// 在index.ui文件中设置grdiview的selectColor属性是80808055，点中一个cell底色会变化

// 先初始化8条数据
for (var i = 0; i < 16; i++) {
	addOneRandomData();
}
// gridview对应的listdata发生变化后，通过refreshItems来刷新数据
gridview.refreshItems();


// 订阅GridView的touch点击事件
gridview.on("touch", function(data) {
	nf.alert("第" + (data + 1) + "条数据被点中");
})

function addOneRandomData() {
	var random = Math.floor(Math.random() * 8);
	var source = "source://image/icon" + (random + 1) + ".png";
	var label = "项目";
	gridData.addOne({
		"imagesource" : source,
		"imagelabel" : label
	});
}