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
listview.on("touch", function(index){
   // listview2.set({index: index});
    listview2.index=index;
});



//listview.on("pull", function(data) {
    /**
     * @此事件将会多次执行.
     * @state == 0 : pull动作开始
     * @state == 1 : pull动作持续中
     * @state == 2 : pull动作结束
     */
/*    if (data.state !== 2) return;
    this.rebound();
});
*/
/** ***************************************************************************************** */

    /**
     * @listdata.addOne(data, index); 向listdata增加一条数据
     * @刷新页面(refreshItems);此处不能调用refreshData;详见API refreshData / refreshItems 的区别.
     * @refreshData 是一个UI的基类方法; 能够刷新控件本身;即刷新listview控件本身属性.
     * @refreshItems 是listview 的实例方法; 用于刷新 listview 的数据项.
     */
//    listdata.addOne({ NAME : "ADD", LOGO : "source://image/add.png" }, 0);
//    listview.refreshItems();

    /**
     * @listdata.removeRange(fromIndex, toIndex);
     * listdata没有提供 removeOne(index) 方法; removeRange(index,index) 可删除指定项.
     */
//    listdata.removeRange(0, 0);
//    listview.refreshItems();





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



/*
listview.on("touch", function(index) {
    nf.alert(listdata.getOne(index), "touch");
});
*/

