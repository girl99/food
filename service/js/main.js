(function($){
	$.fn.smints =function(options){
		var box=$(options);
		var sliderFinalWidth = 400,
			maxQuickWidth = 1000;
		//一开始让所有li对应的内容div隐藏
		box.find('.cd-info-item').children('div').css('display','none');
		//点击查看详情后执行函数
		box.find('.cd-trigger').on('click', function(event){
			var selectedImage = $(this).parent('.cd-item').children('img'),
				slectedImageUrl = selectedImage.attr('src');
			//
			box.find('.cd-info-item').children('div').css('display','none');
			$('body').addClass('overlay-layer');
			animateQuickView(selectedImage, sliderFinalWidth, maxQuickWidth, 'open');
			var num=$(this).parents('li').index();
			box.find('.cd-info-item').children('div').eq(num).css('display','block')
			updateQuickView(slectedImageUrl);
		});

		//关闭弹出层
		$('body').on('click', function(event){
			if( $(event.target).is('.cd-close') || $(event.target).is('body.overlay-layer')) {
				closeQuickView( sliderFinalWidth, maxQuickWidth);
			}
		});
		$(document).keyup(function(event){
			if(event.which=='27'){
				closeQuickView( sliderFinalWidth, maxQuickWidth);
			}
		});
		//切换按钮
		box.find('.cd-quick-view').on('click', '.cd-slider-navigation a', function(){
			box.find('.cd-info-item>div').css('display','none');
			updateSlider($(this));
			var num=box.find('.cd-slider .selected').index();
			box.find('.cd-info-item>div').eq(num).css('display','block')
		});
		//左右按钮执行函数
		function updateSlider(navigation) {
			var sliderConatiner = navigation.parents('.cd-slider-wrapper').find('.cd-slider'),
				activeSlider = sliderConatiner.children('.selected');
			activeSlider.removeClass('selected');
			if ( navigation.hasClass('cd-next') ) {
				if(!activeSlider.is(':last-child') ){
					activeSlider.next().addClass('selected')
				}else{
					sliderConatiner.children('li').eq(0).addClass('selected')
				}
			} else {
				if(!activeSlider.is(':first-child')){
					activeSlider.prev().addClass('selected')
				}else{
					sliderConatiner.children('li').last().addClass('selected')
				}
			}

		}
		//关闭执行函数
		function updateQuickView(url) {
			box.find('.cd-quick-view .cd-slider li').removeClass('selected').find('img[src="'+ url +'"]').parent('li').addClass('selected');
		}
		//网页窗口发生变化时执行函数，自动计算
		$(window).on('resize', function(){
			if(box.find('.cd-quick-view').hasClass('is-visible')){
				window.requestAnimationFrame(resizeQuickView);
			}
		});
		//自动计算在网页居中的位置
		function resizeQuickView() {
			var quickViewLeft = ($(window).width() - box.find('.cd-quick-view').width())/2,
				quickViewTop = ($(window).height() -box.find('.cd-quick-view').height())/2;
			box.find('.cd-quick-view').css({
				"top": quickViewTop,
				"left": quickViewLeft
			});
		}
		//关闭弹出层
		function closeQuickView(finalWidth, maxQuickWidth) {
			var close = box.find('.cd-close'),
				activeSliderUrl = close.siblings('.cd-slider-wrapper').find('.selected img').attr('src'),
				selectedImage = box.find('.empty-box').find('img');
			if( !box.find('.cd-quick-view').hasClass('velocity-animating') && box.find('.cd-quick-view').hasClass('add-content')) {
				animateQuickView(selectedImage, finalWidth, maxQuickWidth, 'close');
			} else {
				closeNoAnimation(selectedImage, finalWidth, maxQuickWidth);
			}
		}
		//打开执行函数
		function animateQuickView(image, finalWidth, maxQuickWidth, animationType) {
			var parentListItem = image.parent('.cd-item'),
				topSelected = image.offset().top - $(window).scrollTop(),
				leftSelected = image.offset().left,
				widthSelected = image.width(),
				heightSelected = image.height(),
				windowWidth = $(window).width(),
				windowHeight = $(window).height(),
				finalLeft = (windowWidth - finalWidth)/2,
				finalHeight = finalWidth * heightSelected/widthSelected,
				finalTop = (windowHeight - finalHeight)/2,
                    //设置大盒子的宽度
				quickViewWidth = ( windowWidth * .9 < maxQuickWidth ) ? windowWidth * .9 : maxQuickWidth ,
				quickViewLeft = (windowWidth - quickViewWidth)/2;

			if( animationType == 'open') {
				parentListItem.addClass('empty-box');
				box.find('.cd-quick-view').css({
					"top": topSelected,
					"left": leftSelected,
					"width": widthSelected
				}).velocity({
					'top': finalTop+ 'px',
					'left': finalLeft+'px',
					'width': finalWidth+'px'
				}, 100, [ 400, 20 ], function(){
					box.find('.cd-quick-view').addClass('animate-width').velocity({
						'left': quickViewLeft+'px',
						'width': quickViewWidth+'px',
					}, 50, 'swing' ,function(){
						box.find('.cd-quick-view').addClass('add-content');
					});
				}).addClass('is-visible');
			} else {
				box.find('.cd-quick-view').removeClass('add-content').velocity({
					'top': finalTop+ 'px',
					'left': finalLeft+'px',
					'width': finalWidth+'px',
				}, 200, 'swing', function(){
					$('body').removeClass('overlay-layer');
					box.find('.cd-quick-view').removeClass('animate-width').velocity({
						"top": topSelected,
						"left": leftSelected,
						"width": widthSelected,
					}, 10, 'swing', function(){
						box.find('.cd-quick-view').removeClass('is-visible');

						parentListItem.removeClass('empty-box');
					});
				});
			}
		}

		//关闭时执行函数
		function closeNoAnimation(image, finalWidth, maxQuickWidth) {
			var parentListItem = image.parent('.cd-item'),
				widthSelected = image.width();
			$('body').removeClass('overlay-layer');
			parentListItem.removeClass('empty-box');
			box.find('.cd-quick-view').velocity("stop").removeClass('add-content animate-width is-visible').css({
				"width": widthSelected
			});
			box.find('.cd-slider-wrapper').removeClass('selected');
		}
	}
})(jQuery);