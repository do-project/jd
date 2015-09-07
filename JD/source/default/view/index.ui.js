var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage() });

/*********************************************************/

var main_shower, action_1, action_2, action_3,action_4,action_5, img_1, img_2, img_3,img_4,img_5;

main_shower = ui("main_shower");



action_1 = ui("action_1");
action_2 = ui("action_2");
action_3 = ui("action_3");
action_4 = ui("action_4");
action_5 = ui("action_5");
img_1 = ui("img_1");
img_2 = ui("img_2");
img_3 = ui("img_3");
img_4 = ui("img_4");
img_5 = ui("img_5");

main_shower.addViews([
    {id : "p1", path : "source://view/index/1.ui"},
    {id : "p2", path : "source://view/index/2.ui"},
    {id : "p3", path : "source://view/index/3.ui"},
    {id : "p4", path : "source://view/index/4.ui"},
    {id : "p5", path : "source://view/index/5.ui"}
]);

img_1.target = "p1";
img_2.target = "p2";
img_3.target = "p3";
img_4.target = "p4";
img_5.target = "p5";


action_1.img = img_1;
action_2.img = img_2;
action_3.img = img_3;
action_4.img = img_4;
action_5.img = img_5;

/*********************************************************/
(function(slide, ae0, ae1, ae2, ae3, ae4) {
    ae0.img.source0 = "source://image/main_bottom_tab_home_focus.png";
    ae0.img.source1 = "source://image/main_bottom_tab_home_normal.png";
    ae1.img.source0 = "source://image/main_bottom_tab_category_focus.png";
    ae1.img.source1 = "source://image/main_bottom_tab_category_normal.png";
    ae2.img.source0 = "source://image/main_bottom_tab_faxian_focus.png";
    ae2.img.source1 = "source://image/main_bottom_tab_faxian_normal.png";
    ae3.img.source0 = "source://image/main_bottom_tab_cart_focus.png";
    ae3.img.source1 = "source://image/main_bottom_tab_cart_normal.png";
    ae4.img.source0 = "source://image/main_bottom_tab_personal_focus.png";
    ae4.img.source1 = "source://image/main_bottom_tab_personal_normal.png";
    ae0.on("touch", function() {
        ae1.img.source = ae1.img.source0;
        ae2.img.source = ae2.img.source0;
        ae3.img.source = ae3.img.source0;
        ae4.img.source = ae4.img.source0;
        this.img.source = this.img.source1;
        slide.showView(this.img.target, "fade");
    });
    
    ae1.on("touch", function() {
        ae0.img.source = ae0.img.source0;
        ae2.img.source = ae2.img.source0;
        ae3.img.source = ae3.img.source0;
        ae4.img.source = ae4.img.source0;
        this.img.source = this.img.source1;
        slide.showView(this.img.target, "fade");
    });
    
    ae2.on("touch", function() {
        ae0.img.source = ae0.img.source0;
        ae1.img.source = ae1.img.source0;
        ae3.img.source = ae3.img.source0;
        ae4.img.source = ae4.img.source0;
        this.img.source = this.img.source1;
      slide.showView(this.img.target, "fade");
    });
    ae3.on("touch", function() {
        ae0.img.source = ae0.img.source0;
        ae1.img.source = ae1.img.source0;
        ae2.img.source = ae2.img.source0;
        ae4.img.source = ae4.img.source0;
        this.img.source = this.img.source1;
        slide.showView(this.img.target, "fade");
    });
    ae4.on("touch", function() {
        ae0.img.source = ae0.img.source0;
        ae1.img.source = ae1.img.source0;
        ae3.img.source = ae3.img.source0;
        ae2.img.source = ae2.img.source0;
        this.img.source = this.img.source1;
      slide.showView(this.img.target, "fade");
    });
})(main_shower, action_1, action_2, action_3, action_4, action_5);

page.on("loaded", function() {
    main_shower.showView("p1");
});

/*********************************************************/
