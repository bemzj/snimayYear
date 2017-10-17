//微信分享
$.ajax({
    type:'GET',
    url:'http://toupiao.snimay.com/index.php/index/Index/jssdk_all/',//
    dataType:'JSON',
    success:function(res){
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId:res.appId, // 必填，公众号的唯一标识

            timestamp: res.timestamp, // 必填，生成签名的时间戳

            nonceStr:res.nonceStr, // 必填，生成签名的随机串

            signature:res.signature,// 必填，签名，见附录1

            jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2

        });
        wx.ready(function () {
            wx.onMenuShareTimeline({
                title: '诗尼曼年度十优评选盛典',
                desc: '榜样的力量，激励我们前行',
                link: res.url,
                imgUrl: 'http://toupiao.snimay.com/public/home/img/fenxiang.png',//
                trigger: function (res) {
                },
                success: function (res) {
                },
                cancel: function (res) {
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });
            wx.onMenuShareAppMessage({
                title: '诗尼曼年度十优评选盛典',
                desc: '榜样的力量，激励我们前行',
                link: res.url,
                imgUrl: 'http://toupiao.snimay.com/public/home/img/fenxiang.png',//
                trigger: function (res) {
                },
                success: function (res) {
                },
                cancel: function (res) {
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });
        })
    }
});
//公共弹窗
function popWindow(error){
	$('#popW').show();
	$('#popW').html('<div class="allWindow" ><div class="popBox"><img src="img/winBox.png" /><img src="img/laugh.png" /><img src="img/close.png" class="closed" /><div class="popBoxin"><p>'+error+'</p></div></div></div>')
	$(document).on('click','.closed',function(){
		$('#popW').hide();
	});
}

//报名
function applys(){
    $.ajax({
        url:"http://toupiao.snimay.com/index.php/checkLogin",//  http://127.0.0.1/snimay/index.php/checkLogin
        type:"get",
        success:function(re){
            if(re.code == 0){
                window.location.href="http://toupiao.snimay.com/public/home/apply.html";//  http://127.0.0.1/snimay/public/home/apply.html
            }else if(re.code == 1){
                var url = "get_des";
                window.location.href="userDetail.html?url="+url+"&id="+re.id+"&group_id="+1;
            }else if(re.code == 2){
                var url = "get_shop";
                window.location.href="userDetail.html?url="+url+"&id="+re.id+"&group_id="+2;
            }else if(re.code == 3){
                var url = "get_adv";
                window.location.href="userDetail.html?url="+url+"&id="+re.id+"&group_id="+3;
            }else if(re.code == 4){
                var url = "get_eng";
                window.location.href="userDetail.html?url="+url+"&id="+re.id+"&group_id="+4;
            }
        }
    });
}


