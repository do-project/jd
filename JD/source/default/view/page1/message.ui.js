//related to message.ui

var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

//返回
var return_open = ui("do_Button_1");
return_open.on("touch", function(){ app.closePage() });
page.on("back", function(){ app.closePage() });
