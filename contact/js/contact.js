//	city 定位
  var posValue=[[20,44],[13,58],[9,61],[36,64],[24,64],[11,64],[18,78],[25,82]];
    $(function(){
    	$.each(posValue,function(index,item){
    		console.log(item)//  得到一个 一维数组
    		$(".pos").eq(index).css({
    			"right":item[0]+"%",
    			"top":item[1]+"%"
    		})
    	})
    })
    //  city hover 定位
     var posValueH=[[-5,31,['2% 25% 3% 2%']],[-20,45,['2% 3% 3% 2%']],[-20,47,['2% 10% 4% 2%']],[12,50,['2% 22% 4% 2%']],[-1,50.5,['2% 25% 4% 2%']],[-15,51,['2% 8% 4% 2%']],[-15,64,['2% 4% 4% 2%']],[-3,68,['2% 4% 4% 2%']]];
    $(function(){
    	$.each(posValueH,function(index,item){
    		console.log(item)//  得到一个 一维数组
    		$(".msg").eq(index).css({
    			"right":item[0]+"%",
    			"top":item[1]+"%",
    			"padding":item[2]
    		})
    	})
    })
	//hover效果
   	  var pos=document.getElementsByClassName("pos");
   	  var msg=document.getElementsByClassName("msg");
   	    for(var i=0;i<pos.length;i++){
   	    	pos[i].index=i;
   	    	pos[i].onmouseover=function(){
   	    	   for(var j=0;j<msg.length;j++){
   	    	   	   msg[j].style.display="none"
   	    	   }
   	    	   msg[this.index].style.display="block" 
   	    	}
   	    	pos[i].onmouseout=function(){   	    		   	    		
   	    		msg[this.index].style.display="none" 
   	    	}
   	    }   	   
//     左边地区hover           
    $(function(){
       $(".nameCon li").hover(function(){
            var $index=$(this).index();
            $(".con_div div").eq($index).show().siblings().hide();
       })      
        
//     上部解决图片问题  窗口改变大小时  计算高度
        	var $Width = $(".contact").width(); //  高度315px    315/1280  25%
			$(".contact").height(parseInt($Width*0.25));
			$(window).resize(function() {
			    $Width = $(".contact").width();
				$(".contact").height(parseInt($Width*0.25));
			});			

    })
   