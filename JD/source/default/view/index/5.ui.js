
var slideview, listdata;

slideview = ui("do_SegmentView_1");
listdata = mm("do_ListData");

slideview.bindItems(listdata);

listdata.addData([ { source:"source://image/item1.png",title : "华为原装屏幕", cost:"￥19.00"},
                   {source:"source://image/item2.png",title : "三星原装电池", cost:"￥199.00"},
                   { source:"source://image/item3.png",title : "华为原装保护壳", cost:"￥819.00"},
                   {source:"source://image/item4.png",title : "三星原装屏幕", cost:"￥1.00"},
                   {source:"source://image/item1.png",title : "iphone6原装屏幕", cost:"￥69.00"},
                   { source:"source://image/item2.png",title : "ipad mini3原装屏幕", cost:"￥65.00"},

                   ]);
slideview.refreshItems();

