String.prototype.format = function(){
  if(arguments.length==0){
    return this;
  }
  for(var s=this, i=0; i<arguments.length; i++){
    s = s.replace(new RegExp("\\{"+i+"\\}","g"), arguments[i]);
  }
  return s;
};


///POST函数
function e2eepost (urls,datas,okCallback,noCallback,ismsg){

	if(isNaN(ismsg)){
		ismsg = 0;
	}
	if (parseInt(ismsg)==0){
		var ii = layer.msg('正在处理请求...', {icon: 16,shade: 0,time: 15000});
	}
	
	$.ajax({url: urls,type: 'POST',data:datas,timeout: 10000,dataType:'json',
	success: function(data){
			
			if (parseInt(ismsg)==0){layer.close(ii);}
				switch (data.code) {
					case 200:
					okCallback(data);
					break;
					default:
					noCallback(data.code,data.message);
				}},error: function(data){
						if (parseInt(ismsg)==0){layer.close(ii);
						layer.alert('与服务器通信失败，可能有如下原因：<br>1，访问地址不存在或被删除。<br>2，服务器维护中。<br>3，您的设备使用了VPN或代理。<br>4，您的IP被服务器阻止了。<br>5，请重新访问或稍后再试。', {icon: 5,shade: 0.8});
						}
					},
	});

}

function e2post (url,datas){
	    $.post(url,{datas},function(result){
	        return result;
	    });
}
