window.onload = function () {
    var imgs = document.getElementsByTagName("img");
//由于str要为6位数的字符串所以将n前面补0，加上字符串的引号。
    function toDou(n) {
        if (n<10) {
            return "0"+n;
        }else{
            return ""+n;
        }
    }
    setInterval(function(){  for (var i=0;i<imgs.length;i++){
      //必须写在这里面  因为str每次都要变  所以每次都要刷新
        var date= new Date();//获取系统的时间
        var str =toDou(date.getHours())+":"+toDou(date.getMinutes())+":"+toDou(date.getSeconds());//将时间分钟秒变为一个6位的字符串  加两个冒号增加
        imgs[i].src = 'images/'+str[i]+'.jpg';
        if(i==2 || i==5){//防止第三张图片和第6张图片发生变化
            imgs[2].src = "images/colon.jpg";
            imgs[5].src = "images/colon.jpg";
        }else{
            imgs[i].src = 'images/'+str[i]+'.jpg';
        }
    } }, 1000);
};
