//related to film.ui
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

//返回
var return_open = ui("do_Button_1");
return_open.on("touch", function(){ app.closePage() });
page.on("back", function(){ app.closePage() });



//有问题

var main_shower, action_1, action_2;

main_shower = ui("main_shower");



action_1 = ui("action_1");
action_2 = ui("action_2");

title_1 = ui("title_1");
title_2 = ui("title_2");


main_shower.addViews([
    {id : "p1", path : "source://view/page1/film_1.ui"},
    {id : "p2", path : "source://view/page1/film_2.ui"},
]);

title_1.target = "p1";
title_2.target = "p2";



action_1.title = title_1;
action_2.title = title_2;


/*********************************************************/
(function(slide, ae0, ae1) {
    ae0.title.fontColor1 = "FFFFFFFF";
    ae0.title.fontColor2 = "400040FF";
    ae1.title.fontColor1 = "400040FF";
    ae1.title.fontColor2 = "FFFFFFFF";
    ae0.bgColor1 = "808080FF";
    ae0.bgColor2 = "FFFFFFFF";
    ae1.bgColor1 = "FFFFFFFF";
    ae1.bgColor2 = "808080FF";
    
    
    ae0.on("touch", function() {
        ae0.title.text = ae0.title.text0;
        ae1.title.text = ae1.title.text0;
        ae0.bgColor = ae0.bgColor0;
        ae1.bgColor = ae1.bgColor0;

        slide.showView(this.title.target, "fade");
    });
    
    ae1.on("touch", function() {
        ae0.title.text = ae0.title.text1;
        ae1.title.text = ae1.title.text1;
        ae0.bgColor = ae0.bgColor1;
        ae1.bgColor = ae1.bgColor1;

        slide.showView(this.title.target, "fade");
    });
 
})(main_shower, action_1, action_2);

page.on("loaded", function() {
    main_shower.showView("p1");
});
