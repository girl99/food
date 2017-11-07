
$(document).ready(function(){
//        点击按钮显示隐藏
    $(".slide_btn1").click(function(){
        var $curId=$(this).attr("id")-1;  //  获取当前按钮的id
        //            console.log($curId)
        $(".num").hide().next(".lp").show()    //  隐藏大屏图片 换侧屏图片
            .next(".num_text").animate({  // 文字左移变 小
                width:"17%",
                left:"5%"
            },400);
        $(this).hide().next(".slide_btn2").show().parent()
            .animate({ "right":"67%"})//开启按钮隐藏
        $("#mc>div").eq($curId).animate({      //  对应的侧边内容显示
            width:"69%"
        })
    })
    $(".slide_btn2").click(function(){
        var $curId=$(this).prev().attr("id")-1;
        $(".lp").hide().siblings(".num").show().siblings(".num_text").animate({  //  文字左移变 小
            width:"22%",
            left:"13.5%"
        },400)//隐藏大屏图片 换侧屏图片
        $(this).hide().siblings(".slide_btn1").show().parent().animate({ right:"0"})//开启按钮隐藏
        $("#mc>div").eq($curId).animate({ //右侧内容显示
            width:"0"
        },400)
    })
    //      点击了解更多
    $(".numa").click(function(){
        $(this).parents(".num_text").animate({  //  文字左移变 小
            width:"17%",
            left:"5%"
        },400)
        var $curId=$(this).attr("id")-1;
        $(this).parents(".num_text").siblings(".menuSlide").children(".slide_btn1").hide()
            .next().show().parent()
            .animate({ right:"67%"})//开启按钮隐藏
        $("#mc>div").eq($curId).animate({      //  对应的侧边内容显示
            width:"69%"
        });
        $(".num").hide().next(".lp").show()    //  隐藏大屏图片 换侧屏图片
    })

//      选项卡
    $(function(){
        //        选项卡开始
        $(".ulitem li").click(function(){
            var $index=$(this).index();
            $(this).addClass("cur").siblings().removeClass("cur")
                .parents('.fooditem').next('.contentBox').children('div').eq($index).addClass("curAppear")
                .siblings().removeClass("curAppear")
        })
    })
})
