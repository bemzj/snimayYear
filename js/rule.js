$(function(){
	//规则切换
	$(document).on('click','.rSelect',function(){
		var index = $(this).index();
		$(this).addClass('aActive');
		$(this).siblings('a').removeClass('aActive');
		switch(index){
			case 0:
				$('.awardTitleOne p').text('年度十优创意设计师奖品');
				$('.awardLeft img').attr('src','img/computer.png');
				$('.awardLeft .name').text('Microsoft Surface Pro 4');			
			break;
			case 1:
				$('.awardTitleOne p').text('年度十优全能店长奖品');
				$('.awardLeft img').attr('src','img/iPhone8.png');
				$('.awardLeft .name').text('iPhone8 64G');	
			break;
			case 2:
				$('.awardTitleOne p').text('年度十优高级家居顾问奖品');
				$('.awardLeft img').attr('src','img/watch.png');
				$('.awardLeft .name').text('Apple Watch');	
			break;
			case 3:
				$('.awardTitleOne p').text('年度十优安装服务工程师奖品');
				$('.awardLeft img').attr('src','img/mime.png');
				$('.awardLeft .name').text('小米6(亮黑色64G)');	
			break;
		}
	})
});