//related to message.ui

var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

//返回
var return_open = ui("do_Button_1");
return_open.on("touch", function(){ app.closePage() });
page.on("back", function(){ app.closePage() });



//listview
var listview, listdata;

listview = ui("do_ListView_1");
listdata = mm("do_ListData");

listview.bindItems(listdata);

listdata.addData([ { TITLE : "京东咚咚", LOGO : "source://image/my_message_box_dongdong.png",CONTENT : "点击查看您与客服的会话记录",NBG : "", NNT : "" },
               //需添加判断一位数两位数
                   { TITLE : "优惠促销", LOGO : "source://image/my_message_box_coupon.png" ,CONTENT : "浓情\“蟹\”礼迎中秋",NBG : "source://image/my_message_box_photo_number_more.png", NNT : "16"   } ]);
listview.refreshItems();

listview.on("touch", function(index) {
    nf.alert(listdata.getOne(index), "touch");
});
/*
listview.on("pull", function(data) {
    /**
     * @此事件将会多次执行.
     * @state == 0 : pull动作开始
     * @state == 1 : pull动作持续中
     * @state == 2 : pull动作结束
     
    if (data.state !== 2) return;
    this.rebound();
});*/