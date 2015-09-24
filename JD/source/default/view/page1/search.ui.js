//related to search.ui
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");




//返回
var return_open = ui("do_Button_3");
return_open.on("touch", function(){ app.closePage() });
page.on("back", function(){ app.closePage() });


//输入框
var do_TextField_1 = ui("do_TextField_1");
var label_1 = ui("do_Label_1");
do_TextField_1.on("focusIn", function(data, e) {
    label_1.text=" ";
});
do_TextField_1.on("focusOut", function(data, e) {
    label_1.text="大双曲屏 三星S6 edge+";
});