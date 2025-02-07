
divx_main_stat();
$('#ann1').click(function(){
    if ($('#user').val() == ''){
        layer.alert('账号不能为空');
        return;
    }
    if ($('#pass').val() == ''){
        layer.alert('密码不能为空');
        return;
    }
    e2eepost ('/post/login', {'user': $('#user').val(), 'pass': $('#pass').val()}, 成功事件, 失败事件);
    
});
function 成功事件 (json) {
    var data;
    var s = '';
    data = txttojson(json);
    s = data.message;
    layer.msg (s);
    
}
function 失败事件 (code, msg) {
    layer.alert(msg);
}
$('#sz11').click(function(){
    分页_设置 ('#fengy1', 30, 1500, 20);
    
});
$('#sz22').click(function(){
    分页_设置 ('#fengy1', 50, 6500, 60);
});
function divx_main_stat() {
    
        分页_设置 ('#fengy1', 30, 1000, 20);
}
function 分页触发 (t) {
    var s = '';
    s = 组件_取变量 (t, 'page');
    layer.alert('点击了第' + s + '页');
}
$('#fengy1').on('click','a',function(){分页触发(this);});
