var index;
$(function(){
	//您的选择
	$(document).on('click','.selected',function(){
		index = $(this).val();
		$('.open').text("您的选择："+$(this).text());
		$(this).css('background-color','#00f1fa');
		$(this).siblings('li').css('background-color','#066162');
	});
	//报名
	$(document).on('click','#popWin3',function(){
		$(this).hide();
		$('#popWin4').show();
	});
});


function selected(){
	if(index == 1){
		$("#firstStep").hide();
		$("#secondStepOne").show();
	}else if(index == 2){
		$("#firstStep").hide();
		$("#secondStepTwo").show();
	}else if(index == 3){
		$("#firstStep").hide();
		$("#secondStepThree").show();
	}else if(index == 4){
		$("#firstStep").hide();
		$("#secondStepFour").show();
	}else{
		layer.msg('请选择组别');
	}
}

function designTwo(){
	$("#secondStepOne").hide();
	$("#thridStepOne").show();
}

function adviserTwo(){
	$("#secondStepTwo").hide();
	$("#thridStepTwo").show();
}

function advTwo(){
	$("#secondStepThree").hide();
	$("#thridStepThree").show();
}

function engTwo(){
	$("#secondStepFour").hide();
	$("#thridStepFour").show();
}

function designTwo_prev(){
	$("#secondStepOne").hide();
	$("#firstStep").show();
}

function adviserTwo_prev(){
	$("#secondStepTwo").hide();
	$("#firstStep").show();
}

function advTwo_prev(){
	$("#secondStepThree").hide();
	$("#firstStep").show();
}

function engTwo_prev(){
	$("#secondStepFour").hide();
	$("#firstStep").show();
}

function designThree_prev(){
	$("#secondStepOne").show();
	$("#thridStepOne").hide();
}

function adviserThree_prev(){
	$("#secondStepTwo").show();
	$("#thridStepTwo").hide();
}

function advTThree_prev(){
	$("#secondStepThree").show();
	$("#thridStepThree").hide();
}

function engThree_prev(){
	$("#secondStepFour").show();
	$("#thridStepFour").hide();
}





