//related to items1.ui
/*******************************************************************************
 * Author : But Timestamp : 2015-07-25
 * 
 ******************************************************************************/
// 根据sm的类型获取单实例对象
var nf = sm("do_Notification");
// 根据ui的id来获取ui对象
var gridview = ui("do_GridView_1");
var add_button = ui("add_button");
var del_button = ui("del_button");

// GridView需要一个listdata对象来管理和绑定数据
var gridData = mm("do_ListData");
// bindItems方法建立GridView对象和ListData对象的绑定关系
gridview.bindItems(gridData);
// 在index.ui文件中设置grdiview的tempslates属性是source://view/cell.ui
// 在index.ui文件中设置grdiview的numberColumns属性是3，表示3列，这里ios和android有点差别，ios这个值不会起作用，真正起作用的是cell的宽度，ios会自动适配最佳列数
// 在index.ui文件中设置grdiview的selectColor属性是80808055，点中一个cell底色会变化

// 先初始化8条数据
for (var i = 0; i < 12; i++) {
	addOneRandomData();
}
// gridview对应的listdata发生变化后，通过refreshItems来刷新数据
gridview.refreshItems();


// 订阅GridView的touch点击事件
gridview.on("touch", function(data) {
	nf.alert("第" + (data + 1) + "条数据被点中");
})

function addOneRandomData() {
	var random = Math.floor(Math.random() * 4);
	var source = "source://image/item" + (random + 1) + ".png";
	var label = "项目" + (random + 1);
	gridData.addOne({
		"imagesource" : source,
		"imagelabel" : label
	});
}