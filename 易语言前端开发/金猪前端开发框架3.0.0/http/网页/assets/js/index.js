
var hsspan = '';
index_main_stat();
function index_main_stat() {
    var bb = '';
    bb = '网页开发框架v3.0.0.e';
    hsspan = '<span style="color: rgb(20,22,24);">{1}</span>';
    layer.msg ('感谢使用' + bb);
}
$('#ann1').click(function(){
    layer.alert('你好啊世界');
});
$('#btnzz1').on('click','button',function(){
	var index = $(this).index();
    switch(index){
        case 0:
         var s = '';
    s = 组件_获取文本 (this);
    layer.msg (s + '被点击了');
            break;
        case 1:
         var s = '';
    s = 组件_获取文本 (this);
    layer.msg (s + '被点击了');
            break;
        case 2:
         var s = '';
    s = 组件_获取文本 (this);
    layer.msg (s + '被点击了');
            break;
    }
});
