
zccd_main_stat();
$('#dgh55').click(function(){
    左侧菜单切换 ();
});
function 左侧菜单切换 () {
    var zt = '';
   //cdcardkszt 是自定义缓存的名称;
   //有点高深，新手可以不管。;
   //原理，通过判断隐藏显示状态，设置菜单的隐藏与显示;
    zt = 缓存_获取 ('cdcardkszt');
    
    if (zt == '' || zt == null){
        缓存_设置 ('cdcardkszt', '1');
        zt = '1';
    }
    
    if (parseInt(zt) == 1){
        组件_置可视 ('#cdcard', false);
        组件_置定位边距 ('#ssbtnzccd', 4, '0px');
        缓存_设置 ('cdcardkszt', '0');
        组件_置外边距 ('#ycmianban', 4, '0px');
    } else {
        组件_置可视 ('#cdcard', true);
        组件_置定位边距 ('#ssbtnzccd', 4, '175px');
        缓存_设置 ('cdcardkszt', '1');
        组件_置外边距 ('#ycmianban', 4, '180px');
    }
    
}
function zccd_main_stat() {
    var url = '';
    var s = '';
    var a = '';
    var dz = '';
    var dz2 = '';
   //事件_鼠标点击_动态 ('#zccdlbul', 'a', 左侧菜单项目被选择);
    dz = 功能_取网站路径 ();
    
    s = 'a';
    
   //组件_置选中 ('#zccdlbul li', false);
    
    $('#zccdlbul li').each(function() {
    
    a = 列表_取子组件对象 (this, s, 0);
    url = 组件_取超链接地址 (a);
    dz2 = 取文本右边 (dz, 取文本长度 (url));
    
    
    if (dz2 == url){
        组件_置选中 (this, true);
        console.log(dz, url);
        return false;
    }
    
    });
    
}
