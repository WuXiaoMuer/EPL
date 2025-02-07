
$('#ann1').click(function(){
    setjd('#jdt1',50);
});
$('#ann2').click(function(){
    setjd('#jdt1',80);
});
$('#ann3').click(function(){
    var s = 0;
    s = getjd('#jdt1');
    layer.alert('当前位置' + String(s));
});
