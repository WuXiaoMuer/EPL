
if (window.innerWidth < 768) {
	[].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
		elem.classList.remove('animated');
		elem.removeAttribute('data-bss-hover-animate');
		elem.removeAttribute('data-aos');
		elem.removeAttribute('data-bss-parallax-bg');
		elem.removeAttribute('data-bss-scroll-zoom');
	});
}

document.addEventListener('DOMContentLoaded', function() {
	if ('AOS' in window) {
		AOS.init();
	}

	var hoverAnimationTriggerList = [].slice.call(document.querySelectorAll('[data-bss-hover-animate]'));
	var hoverAnimationList = hoverAnimationTriggerList.forEach(function (hoverAnimationEl) {
		hoverAnimationEl.addEventListener('mouseenter', function(e){ e.target.classList.add('animated', e.target.dataset.bssHoverAnimate) });
		hoverAnimationEl.addEventListener('mouseleave', function(e){ e.target.classList.remove('animated', e.target.dataset.bssHoverAnimate) });
	});
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bss-tooltip]'));
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	  return new bootstrap.Tooltip(tooltipTriggerEl);
	});
}, false);
function 增减时间(times, lx, num) {
    const date = new Date(times);  
    
    switch (lx) {  
      case 1:  
        date.setFullYear(date.getFullYear() + num);  
        break;  
      case 3:  
        date.setMonth(date.getMonth() + num);  
        break;  
      case 5:  
        date.setDate(date.getDate() + num);  
        break;  
      case 6:  
        date.setHours(date.getHours() + num);  
        break;  
      case 7:  
        date.setMinutes(date.getMinutes() + num);  
        break;  
      case 8:  
        date.setSeconds(date.getSeconds() + num);  
        break;  
      default:  
        throw new Error('Invalid time unit');  
    }  
    
    // 自定义格式化函数  
    function pad(num) {  
      return num.toString().padStart(2, '0');  
    }  
    
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;  
  }  

  function 取时间间隔(time1, time2, lx) {  
    const date1 = new Date(time1);  
    const date2 = new Date(time2);  
    let interval;  
    
    switch (lx) {  
      case 1:  
        interval = date1.getFullYear() - date2.getFullYear();  
        break;  
      case 3:  
        interval = (date1.getFullYear() - date2.getFullYear()) * 12 + date1.getMonth() - date2.getMonth();  
        break;  
      case 5:  
        interval = (date1 - date2) / (1000 * 60 * 60 * 24);  
        break;  
      case 6:  
        interval = (date1 - date2) / (1000 * 60 * 60);  
        break;  
      case 7:  
        interval = (date1 - date2) / (1000 * 60);  
        break;  
      case 8:  
        interval = (date1 - date2) / 1000;  
        break;  
      default:  
        throw new Error('Invalid time unit');  
    }  
    
    return interval;  
  }  


 function 网页_上传(uploadFile,url,datas,jdcall,okCallback,nocallback) {
    var fileInput = $(uploadFile)[0];
    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var xhr = new XMLHttpRequest();
        var formData = new FormData();
        formData.append('file', file);
        for (var key in datas) {
            if (datas.hasOwnProperty(key)) {
                formData.append(key, datas[key]);
            }
        }
        xhr.open('POST', url, true);
        xhr.upload.onprogress = function(e) {
            if (e.lengthComputable) {
                //loaded代表上传了多少
	            //total代表总数为多少
                var percentComplete = Math.round((e.loaded / e.total) * 100);
                var speed = Math.round((e.loaded / (Date.now() - startTime)) * 1000) / 1000;
                //$('#progressInfo').text('上传中... ' + percentComplete + '% 完成，速度: ' + speed + ' B/s');
                jdcall($(uploadFile),percentComplete, speed , loaded, total);
            }
        };

        xhr.onload = function() {
            if (xhr.status === 200) {
                okCallback($(uploadFile));
            } else {
                nocallback($(uploadFile),xhr.statusText);
            }
        };

        startTime = Date.now();
        xhr.send(formData);
    }else{
        layer.msg('请选择文件!');
    }
};

function setjd(obj,num){
    $(obj + ' > .progress-bar').css('width', num + '%').attr('aria-valuenow',num).html(num + '%');
}
function getjd(obj){
    let i = parseFloat($(obj + ' > .progress-bar').attr('aria-valuenow'));
    return parseInt(i);
}
function 组件_取index(t){return $(t).index();}
function 到文本(num){return String(num);}
function 到整数(num){return parseInt(num);}
function 到数值(num){return parseInt(num);}
function 到小数(num){return parseFloat(num);}
function 四舍五入(num, n){let result = parseFloat(num.toFixed(n));return result;}
function 打开指定网址(url){window.open(url);}
function 取文本长度(txt){return txt.length;}
function 取文本左边(txt,n){return txt.substr(0,n);}
function 取文本右边(txt,n){return txt.substr(txt.length-n,n);}
function 分割文本(txt,str){return txt.split(str);}
function 取随机数(n1,n2){return Math.floor(Math.random()*(n2-n1+1)+n1);}
function 到大写(txt){return txt.toUpperCase();}
function 到小写(txt){return txt.toLowerCase();}
function 子文本替换(txt,str1,str2,wz,cs,isdxx){return txt.replace(str1,str2);}
function 文本_取中间(txt,str1,str2,s1,s2){return txt.substring(str1,str2);}
function 取时间(time){return time.getTime();}
function 取星期(time){return time.getDay();}
function 取年份(time){return time.getFullYear();}
function 取日(time){return time.getDate();}
function 取小时(time){return time.getHours();}
function 取分钟(time){return time.getMinutes();}
function 取秒(time){return time.getSeconds();}
function 取月份(time){return time.getMonth();}

function 创建时间戳(time,iscws){
    return new Date(time).getTime() / 1000;
}
function 取现行时间() {
    const now = new Date();  
    const year = now.getFullYear(); // %Y  
    const month = String(now.getMonth() + 1).padStart(2, '0'); // %m  
    const day = String(now.getDate()).padStart(2, '0'); // %d  
    const hours = String(now.getHours()).padStart(2, '0'); // %H  
    const minutes = String(now.getMinutes()).padStart(2, '0'); // %M  
    const seconds = String(now.getSeconds()).padStart(2, '0'); // %S  
    
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;  
  }  
function 加入成员(arr,str){
    arr.push(str);
}
function 插入成员(arr,wz,str){
    arr.splice(wz-1,0,str);
}

function 取反(isf){
    if(isf==true){
        return false;
    }else{
        return true;
    }
}

function jsontotext(obj){
    return JSON.stringify(obj);
}

function txttojson(str){
    if (检测是否undefined(str)){
        let json = {
            "code": 0,
            "message": "数据异常!!!"
        }
        return str;
    }
    if (检测是否JSON对象(str)){
        return str;
    }
    return JSON.parse(str);
}

function 检测是否手机号码(str){
    var reg = /^1[3|4|5|7|8][0-9]{9}$/;   
    return reg.test(str);
}

function 检测是否电子邮箱(str){
    var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;   
    return reg.test(str);
}

function 检测是否JSON对象(obj){
    //return typeof value === 'object' && value !== null && !Array.isArray(value);
    return typeof obj === 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]' && !obj.length;
}

function 检测是否数组(obj){
    return Object.prototype.toString.call(obj) === '[object Array]';
}

function 检测是否字符串(obj){
    return typeof obj === 'string';
}

function 检测是否数值(obj){
    return typeof obj === 'number';
}

function 检测是否布尔值(obj){
    return typeof obj === 'boolean';
}

function 检测是否函数(obj){
    return typeof obj === 'function';
}

function 检测是否日期(obj){
    return Object.prototype.toString.call(obj) === '[object Date]';
}

function 检测是否正则(obj){
    return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function 检测是否undefined(obj){
    return typeof obj === 'undefined';
}

function 检测是否null(obj){
    return obj === null;
}

function 检测是否NaN(obj){
    return obj !== obj;
}

function 检测是否Infinity(obj){
    return obj === Infinity || obj === -Infinity;
}

function 检测是否对象(obj){
    return typeof obj === 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]' && obj.length;
}

function 检测是否基本类型(obj){
    return !(obj instanceof Object);
}

function 检测是否空对象(obj){
    return Object.keys(obj).length === 0;
}

function 检测是否DOM元素(obj){
    return obj instanceof Element;
}

function 特效_开始旋转(obj){
    $(obj).removeClass('spinss');
    $(obj).addClass('spinss');
    console.log('开始旋转',obj);
}
function 特效_停止旋转(obj){
    $(obj).removeClass('spinss');
}

function 特效_移动(obj,obj2){
	let x = $(obj2).offset().left;
	let y = $(obj2).offset().top;
	
	$(obj).offset({top: y, left: x});
}

function 功能_返回上一个窗口(){ 
    window.history.go(-1);
}

function 功能_关闭窗口(){ 
    window.close();
}

function 功能_打开网站(url){ 
    window.open(url);
}
function 功能_从新窗口打开网站(url){ 
    window.open(url, '_blank');
}


function 组件_取禁用(obj){ 
    return $(obj).attr("disabled");
}
function 组件_取坐标x(obj){
    return $(obj).offset().left;
}
function 组件_取坐标y(obj){
    return $(obj).offset().top;
}

function 组件_点击(obj){
    $(obj).click();
}

function 功能_置图片地址(obj,url){
    $(obj).attr("src",url);
}
function 功能_取图片地址(obj){
    return $(obj).attr("src");
}
function 功能_取链接地址(obj){ 
    return $(obj).attr("href");
}

function 功能_置链接地址(obj,url){ 
    $(obj).attr("href",url);
}

function 组件_移动(obj,x,y){ 
	$(obj).offset({top: y, left: x});
}

function 特效_显示(obj,z){
	$(obj).show(z);
}

function 特效_隐藏(obj,z){
	$(obj).hide(z);
}

function 特效_淡入(obj,time){ 
	$(obj).fadeIn(time);
}

function 特效_淡入淡出(obj,time){ 
	$(obj).fadeToggle(time);
}

function 特效_淡出(obj,time){ 
	$(obj).fadeOut(time);
}

function 特效_滑动(obj,obj2,time){ 
	let x = $(obj2).offset().left;
	let y = $(obj2).offset().top;
	
	$(obj).animate({top: y, left: x}, time);
}

function 特效_停止(obj){
	$(obj).finish()
}

function 特效_抖动(obj){
	特效_停止(obj);
	$(obj).animate({left: '-5px'}, 50).animate({left: '5px'}, 40).animate({left: '-5px'}, 30).animate({left: '5px'}, 20).animate({left: '0px'}, 10);
}

function 特效_闪烁(obj,times){
	特效_停止(obj);
	$(obj).fadeIn(times).fadeOut(times).fadeIn(times).fadeOut(times).fadeIn(times);
}

function 组件_清空子级(obj){ 
    $(obj).empty();
}

function 组件_添加子级(obj,str){ 
    $(obj).append(str);
}


function 缓存_设置(keys,vals){
	sessionStorage.setItem(keys, vals); //设置一个值
}

function 缓存_获取(keys){
	var value = sessionStorage.getItem(keys); //读取一个值
	return value;
}

function 功能_取当前域名(){
    return window.location.host;
}
function 功能_取当前网址(){
    return window.location.href;
}
function 功能_取网站路径(){
    return window.location.pathname;
}

function 功能_取当前网址参数(key){
    // 创建一个URLSearchParams对象  
const params = new URLSearchParams(window.location.search);  
  
// 获取id参数  
const text = params.get(key);  
return text;
}

function 功能_取当前时间戳(){
    return new Date().getTime();
}
function 组件_取超链接地址(obj){
    var hrefValue = $(obj).attr('href'); 
    return hrefValue;
}

function 缓存_删除(keys){
	sessionStorage.removeItem(keys); //移除一个值
}

function 缓存_清空(){
	sessionStorage.clear(); //清除所有数据
}
function 设置_主题样式(str){
    if(str=="黑色"){
        $("html").attr("data-bs-theme", "dark");
    }else{
        $("html").attr("data-bs-theme", "light");
    }
}

function 列表_取子组件对象(obj,zzj,num){return $(obj).find(zzj).eq(num);}
function 组件_设置文本(obj,z){
    $(obj).html(z);
}
function 组件_获取文本(obj){return $(obj).text();}
function 组件_置变量(zjname,blname,z){
    $(zjname).data(blname,z);
}

function 组件_置定位方式(obj,z){
    $(obj).css("position",z);
}

function 组件_置透明度(obj,z){
    $(obj).css("opacity",z);
}

function 组件_获得焦点(obj){
    $(obj).focus();
}
function 组件_失去焦点(obj){
    $(obj).blur();
}
function 组件_取可视(obj){
    return $(obj).is(":visible");
}

function 窗口_取宽度(){return $(window).width();}
function 窗口_取高度(){return $(window).height();}
function 组件_置外边距(obj,fx,z){

    if (fx==1){
        $(obj).css("margin-top",z);
    } else if (fx==2){
        $(obj).css("margin-right",z);
    } else if (fx==3){
        $(obj).css("margin-bottom",z);
    } else if (fx==4){
        $(obj).css("margin-left",z);
    } else if (fx==0){
        $(obj).css("margin",z);
    }
}
function 组件_置定位边距(obj,fx,z){
    if (fx==1){
        $(obj).css("top",z);
    } else if (fx==2){
        $(obj).css("right",z);
    } else if (fx==3){
        $(obj).css("bottom",z);
    } else if (fx==4){
        $(obj).css("left",z);
    }
}
function 组件_取宽度(obj){
    return $(obj).width();
}
function 组件_取高度(obj){
    return $(obj).height();
}
function 组件_置内边距(obj,fx,z){
    if (fx==1){
        $(obj).css("padding-top",z);
    } else if (fx==2){
        $(obj).css("padding-right",z);
    } else if (fx==3){
        $(obj).css("padding-bottom",z);
    } else if (fx==4){
        $(obj).css("padding-left",z);
    } else if (fx==0){
        $(obj).css("padding",z);
    }
}
function 组件_删样式(obj,z){
    $(obj).removeClass(z);
}
function 组件_置样式(obj,z){
    $(obj).addClass(z);
}
function 组件_取样式(obj){
    return $(obj).attr("class");
}
function 组件_置宽度(obj,z){
    $(obj).css("width",z);
}
function 组件_置高度(obj,z){
    $(obj).css("height",z);
}
function 组件_置背景颜色(obj,z){
    $(obj).css("background-color",z);
}
function 组件_置边框颜色(obj,z){
    $(obj).css("border-color",z);
}
function 组件_置风格(obj,z){
    $(obj).attr("style",z);
}


function 组件_置选中(obj,z){
    if (z){
        $(obj).addClass('active');
    }else{
        $(obj).removeClass('active');
    }
}
function 组件_置可视(obj,z){
    if (z){
        $(obj).show();
    }else{
        $(obj).hide();
    }
}

function 组件_取列表子组件勾选(obj,names,x){
    return $(obj).find(names).eq(x).prop("checked");
}
function 组件_置列表子组件勾选(obj,names,x,zt){
    $(obj).find(names).eq(x).prop("checked",zt);
}

function 组件_取变量(zjname,blname){
    let text = $(zjname).data(blname);
    if(检测是否undefined(text)){
        return '-1';
    }
    return text;
}
function 组件_取项目位置(obj){
    let i = $(obj).index();
    return i;
}

function 分页_设置(obj,pmun,znum,dqpage){
    var zpage = parseFloat(znum / pmun);
    if (zpage > Math.floor(zpage)){
        zpage++;
    }
    
    if (zpage < 1){
        zpage = 1;
    }
    if(dqpage > zpage){
        dqpage = zpage;
    }
    if (zpage == 1){
        $(obj).find('li').hide();
        $(obj).find('li:first,li:last').show();
        return;
    }
    var linum = parseInt($(obj + ' li').length - 2);
    let num =  Math.floor(linum / 2) + 1;
    var statpage = dqpage;
    if (parseInt(dqpage) > linum){
        statpage = dqpage - linum + num;
    }
    var ksnum = 1;
    $(obj + ' li').each(function() {
        let index = $(this).index();

        if(index < zpage){
            if (index == 1){
                ksnum = statpage - 2;
            }
            $(this).show();
            $(this).find('a').data('page',statpage - 1);
            if (index != 0 && index != parseInt(linum + 1)){
                $(this).find('a').text(statpage - 1 + '');
            }
            statpage ++;
        }else{
            $(this).hide();
        }
        
    });
    $(obj).find('li:first,li:last').show();
    $(obj).find('li').eq(0).find('a').data('page',ksnum);
    $(obj).find('li:last').find('a').data('page',statpage - 2);

}

function 组件_取事件项目(names){
    let parentTR = $(names).closest('li');
    return parentTR;
}
function 超级列表框_取事件项目(names){
    let parentTR = $(names).closest('tr');
    return parentTR;
}

function 超级列表框_取标题(tr,x){
    return tr.find('td').eq(x).text();
}
function chaojiliebiaokuang_qubiaoti(names,x,l){
    let tr = $(names).find('tr').eq(x);
    return tr.find('td').eq(l).text();
}
function chaojiliebiaokuang_qubiaoxiangshu(names){
    return $(names).find('tr').length;
}

function chaojiliebiaokuang_zhibiaoti(names,x,l,str){
    let tr = $(names).find('tr').eq(x);
    tr.find('td').eq(l).html(str);
}
function chaojiliebiaokuang_quanbushanchu(names,x){
    let obj = $(names).data('tr');
    if (检测是否undefined(obj)){
        $(names).data('tr',$(names).find('tr').eq(0).clone());
    }
    //console.log($(names).find('tr').eq(0).clone());
    $(names).empty();
}
function chaojiliebiaokuang_chazhaobiaoxiang(names,txt,a,isall,x){
   var i = 0;
   var b = -1;
   var text = '';
    $(names+' tr').each(function() {
        if (i >= parseInt(a)){
            text = 超级列表框_取标题(this,x);
           if (isall == false){
               if (text.indexOf(txt) !== -1) {
                    b=i;
                    return false;
                }
           }else{
               if (text == txt){
                    b=i;
                    return false;
               }
           }

        }

        i++;
    });
    return b;
}
function chaojiliebiaokuang_charubiaoxiang(names,x,a,b,c,d,e){
    let obj = $(names).data('tr');
    if (检测是否undefined(obj)){
        // console.log($(names).find('tr').first());
         $(names).data('tr',$(names).find('tr').first().clone());
     }
    let models = $(names).data('tr');
    //var str = models[0].innerHTML;
    var str = models[0].outerHTML;
    if (x == -1){
        $(names).append(str);
    }else{
        $(names).eq(x).after(str);
    }

    let i = $(names).find('tr').length;
    if (i>0){
        i--;
    }
    return i;

}

function chaojiliebiaokuang_shanchubiaoxiang(names,x){
    let obj = $(names).data('tr');
    if (检测是否undefined(obj)){
       // console.log($(names).find('tr').first());
        $(names).data('tr',$(names).find('tr').first().clone());
    }
    $(names).find('tr').eq(x).remove();
}

function getNestedProperty(obj, path) {  
    return path.split('.').reduce((acc, part) => acc && acc[part] ? acc[part] : undefined, obj);  
} 

function 取列表(obj, path) {
    let targetList = path.split('.').reduce((acc, part) => acc && acc[part] ? acc[part] : undefined, obj);
    return targetList;
}

String.prototype.cjtext = function(){
    if(arguments.length==0){
      return this;
    }
    for(var s=this, i=0; i<arguments.length; i++){
      s = s.replace(new RegExp("\\{"+i+"\\}","g"), arguments[i]);
    }
    return s;
  };
  
  function ischecked(names){
    return $(names).prop("checked");
  }
  function addchecked(names,zt){
    $(names).prop('checked', zt);
  }
function 功能_置页面滚动到顶部(obj,sd){
    let sd2 = parseInt(sd);
    var element = $(obj);
    element.animate({  
      scrollTop: 0  
    }, sd2);
}

function 功能_置页面滚动到底部(obj,sd){
    let sd2 = parseInt(sd);
    var element = $(obj);
    element.animate({  
      scrollTop: element.prop('scrollHeight') - element.prop('clientHeight')  
    }, sd2);
}

function 弹出层_显示(obj){
    $(obj).modal('show');
}
function 弹出层_隐藏(obj){
    $(obj).modal('hide');
}

function 播放器_切换(obj,vurl,gs,isplay){
	$(obj).empty();
	var src = $('<source src="' + vurl + '" type="video/' + gs + '" />');
	$(obj).append(src);
    $(obj).get(0).load();
    if (isplay){
        $(obj).prop("muted",false);
        $(obj).get(0).play();
    }else{
        $(obj).prop("muted",true);
        $(obj).get(0).pause();
    }
}

function 播放器_播放(obj){
    $(obj).prop("muted",false);
    $(obj).get(0).play();
}

function 播放器_暂停(obj){
    $(obj).prop("muted",true);
    $(obj).get(0).pause();
}

function 播放器_停止(obj){
    $(obj).prop("muted",true);
    $(obj).get(0).pause();
    $(obj).get(0).currentTime = 0;
}

function 播放器_静音开关(obj,isjy){
    $(obj).prop("muted",isjy);
}

function 功能_隐藏页面滚动条(obj){
    $(obj).css('overflow','hidden');
}

function 功能_显示页面滚动条(obj){
    $(obj).css('overflow','auto');
}

function 播放器_跳转(obj,time){
    $(obj).get(0).currentTime = time;
}

function 加入文本(obj,text){ 
    let currentVal = $(obj).val();
    $(obj).val(currentVal + text +'\n');
}

function 播放器_获取当前播放时间(obj){
    return $(obj).get(0).currentTime;
}

function 播放器_获取视频总时长(obj){
    return $(obj).get(0).duration;
}

function 播放器_获取播放状态(obj){
    return $(obj).get(0).paused;
}

function 播放器_获取音量(obj){
    return $(obj).get(0).volume;
}

function 自由列表_取事件项目(obj){
    return $(obj).closest('.col');
}

function 自由列表_添加项目(obj){
    var x = $(obj).find('.blist');
    var col = x.data('col');
    if (检测是否undefined(col)){
        col = x.find('.col').eq(0).clone();
        x.data('col',col);
    }
    //innerHTML outerHTML
    var str = col[0].outerHTML;
    x.append(str);
    return x.find('.col').last();
}

function 自由列表_删除当前索引项(obj){
    var x = $(obj).closest('.blist');
    let col = x.data('col');
    if (检测是否undefined(col)){
        var models = x.find('.col').eq(0).clone();
        x.data('col',models);
    }
    $(obj).remove();
}

function 自由列表_删除项目(obj,num){
    var x = $(obj).find('.blist');
    let col = x.data('col');
    if (检测是否undefined(col)){
        var models = x.find('.col').eq(0).clone();
        x.data('col',models);
    }
    x.eq(num).remove();
}

function 自由列表_取项目数(obj){
    return $(obj + ' .blist').find('.col').length;
}

function 自由列表_取子组件对象(xobj,zjname,num){
    return $(xobj).find(zjname).eq(num);
}
function 自由列表_全部删除(obj){
    var x = $(obj).find('.blist');
    let col = x.data('col');
    if (检测是否undefined(col)){
        var models = x.find('.col').eq(0).clone();
        x.data('col',models);
    }
    x.empty();
}

let socket;
// 创建一个新的WebSocket连接  
function createWebSocketConnection(url,shoudaoxx,lianjieok,lianjieno,duankailianjie) {  
    if (socket && socket.readyState !== WebSocket.CLOSED) {
        socket.close();
      }
    socket = new WebSocket(url);  
  
    socket.onopen = function(event) {  
        lianjieok(event);
    };  
  
    socket.onmessage = function(event) {  
        shoudaoxx(event);
    };  
  
    socket.onerror = function(error) {  
        lianjieno(error); 
    };  
  
    socket.onclose = function(event) { 
        duankailianjie(event);
    };  
  
    return socket;  
}  


function 组件_设置文本(obj,z){
    $(obj).html(z);
}
function 组件_设置图标(obj,z){
    $(obj).html('<i class="'+z+'"></i>');
}
function 组件_追加文本(obj,z){$(obj).append(z);}

function 组件_置背景颜色(obj,z){
    $(obj).css("background-color",z);
}
function 组件_置边框颜色(obj,z){
    $(obj).css("border-color",z);
}
function 组件_置风格(obj,name,z){
    $(obj).css(name,z);
}
function 组件_置字体颜色(obj,z){
    $(obj).css("color",z);
}

function 组件_置字体大小(obj,z){
    $(obj).css("font-size",z);
}

function 组件_置字体(obj,z){
    $(obj).css("font-family",z);
}

function 组件_置字体样式(obj,z){
    $(obj).css("font-style",z);
}

function 编辑框_置文本(obj,z){
    $(obj).val(z);
}

function 组件_置禁用(obj,z){
    if(z){
        $(obj).attr("disabled","disabled");
    }else{
        $(obj).removeAttr("disabled");
    }
}

function 组件_置可见(obj,z){
    if(z){
        $(obj).show();
    }else{
        $(obj).hide();
    }
}



function 编辑框_取文本(obj){return $(obj).val();}

function 组件_置字体斜体(obj,z){
    $(obj).css("font-style",z);
}

function 组件_置字体粗细(obj,z){
    $(obj).css("font-weight",z);
}

function 组件_置字体下划线(obj,z){
    $(obj).css("text-decoration",z);
}

function 组件_置字体行高(obj,z){
    $(obj).css("line-height",z);
}

function 组件_置字体间距(obj,z){
    $(obj).css("letter-spacing",z);
}

function 功能_置BASE64图片地址(obj,basex,tdata){
    $(obj).attr("src",tdata + ';base64,' + basex);
}

function 组件_置字体对齐(obj,z){
    $(obj).css("text-align",z);
}

function 组件_置字体阴影(obj,z){
    $(obj).css("text-shadow",z);
}

function 组件_置字体偏移(obj,z){
    $(obj).css("text-indent",z);
}

function 组件_置字体超链接(obj,z){
    $(obj).css("text-decoration",z);
}

function 组件_取风格(obj,z){
    return $(obj).css(z);
}

function 组件_置背景图片(obj,z){
    $(obj).css("background-image",'url('+z+')');
}
function 组件_置背景图片大小(obj,z){
    $(obj).css("background-size",z);
}
function 组件_置背景图片重复(obj,z){
    $(obj).css("background-repeat",z);
}

function 功能_时间去T(z){
    return z.replace("T"," ").replace("Z","");
}


let mySwiper;
function 设置_轮播图(obj,effectx,times){

    mySwiper = new Swiper(obj, {
        //'slide', 'fade', 'cube', 'coverflow' 或 'flip'
        effect:effectx,
        loop: true,
        pagination: {
            el: '.swiper-pagination' ,
            clickable: true
        },
            autoplay: {
                delay: times,
                disableOnInteraction: false,
            },
        paginationClickable: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

}
