//  动画加载
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    }
//  计算窗口变化时相应的图片大小
        function fiximg(){
            var $window_Wide=$(window).width();
            $("#imgfix").css("width",$window_Wide*0.67+"px");
        };
        $(document).ready(function(){fiximg();})
        $(window).resize(function(){
            fiximg();
        });
//  回顶部
    function getscrolltop(){
        var scrolltop=window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
        return  scrolltop;
    }
    function totop(){
        var timer=requestAnimationFrame(function fun(){
            var x=getscrolltop();
            if(x>0){
                x-=50;
                document.documentElement.scrollTop=document.body.scrollTop=x
                timer=requestAnimationFrame(fun)
            }else{
                cancelRequestAnimationFrame(timer)
            }
        })
    }  