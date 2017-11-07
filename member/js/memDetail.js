/**
 * Created by Administrator on 2017/7/31 0031.
 */
$(function(){
	//编辑资料
       var $inpObj= $(".message input").not("#usr");
       $inpObj.prop("disabled",true) //  设置禁止
      $(".message .btn").click(function(){
        if($($inpObj).prop("disabled")==true){
            $(this).html("<img src='../img/bjj.png'>确认保存")
            $inpObj.prop("disabled",false).addClass("green") //  解除禁止
        }else{
            $(this).html("<img src='../img/bj.png'>编辑资料")
            $inpObj.prop("disabled",true).removeClass("green")
         }
       });      
    //选项卡开始              
       $(".tabLi li").click(function(){
           $(this).addClass("cur").siblings().removeClass("cur");
           $(".tabCon>div").eq($(this).index()).show().siblings().hide();
       })
         
	//  中级培训   
	    var margins=0;
	    $('.stuList .btn2').click(function(){
	        margins=parseInt($(this).siblings('.listUl').find('ul').css('margin-top'));
	        margins+=40;
	        if(margins>0){
	            margins=0;
	        }else{
	            $(this).siblings('.listUl').find('ul').animate({
	                'margin-top':margins+'px'
	            },500);
	        }
	//      console.log(margins);
	    });
	    $('.stuList .btn1').click(function(){
	        margins=parseInt($(this).siblings('.listUl').find('ul').css('margin-top'));
	        margins-=40;
	        if(margins<=-960){
	            margins=-960;
	        }else{
	            $(this).siblings('.listUl').find('ul').animate({
	                'margin-top':margins+'px'
	            },500);
	        }
	//      console.log(margins);
	    })
	    
	//  勾选中级培训是否答题    
	 $(".listTop .img1").on("click",function(){
	    $(this).hide().siblings(".img2").show();
	    $(this).parents(".stuList").children(".listTop").css("color","#AFAFAF");
	})
	$(".listTop .img2").on("click",function(){
	    $(this).hide().siblings(".img1").show()
	    $(this).parents(".stuList").children(".listTop").css("color","#fff")
	})
	
	
	$(".listUl .img1").on("click",function(){
	    $(this).hide().siblings(".img2").show()
	    $("#alertWrap").fadeIn()
	})
	$("#back").on("click",function(){
	    $("#alertWrap").fadeOut()
	    $(".listUl .img2").hide().siblings(".img1").show()
	})
	});
	