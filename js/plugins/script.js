
$(function(){
	
	//详情页内容图片点击放大预览
	$('.activityItem img').click(function(){
		var src = $(this).attr('src');
		var img = '<img src="'+src+'"/>'
		$('.img-preview .img-view').html("").append(img);
		$('.img-preview').show();
	})
	$('.img-preview .mask,.img-preview .close').click(function(){
		$('.img-preview').hide();
	});
	//查看演示弹窗
	preview = function(){
		$('.popup-preview').show();
	}
	required = function(){
		$('.popup-required').show();
	}
	//关闭弹窗
	$('.popup-preview,.popup-required').on('click', '.popup-close,.close-btn', function() {
		$('.popup-preview').hide();
			$('.popup-required').hide();
	});
	$(".popup-box .mask").click(function(e){
		$('.popup-box').hide();
	});
});