var data={
    //link:'http://toupiao.snimay.com/index.php/',
    //imgLink:'http://toupiao.snimay.com/public',
    link:'http://127.0.0.1/snimay/',
    imgLink:'http://127.0.0.1/snimay/public',
    token:'',
    searchResult:[],
    getUser:'',
    page:'',
    hasClick:true,
};

var all = new Vue({
    el:'#vueMain',
    data:data,
    created:function(){
        var $this=this;
        $this.AjaxL($this.link+'hasAuth','GET',false,function(res){
            if(res.code==408){
                window.location.href=$this.link+"weixLogin";
            }else{
                $this.token=res.token;
            }
        });
        var url = $this.GetQueryString("url");
        var id = $this.GetQueryString("id");
        var group_id = $this.GetQueryString("group_id");
        $this.AjaxL( $this.link+url,'GET',{"user_id":id,"group_id":group_id},function(res){
            if(res.code == 0){
                var url;
                if(res.list.group_id == 1){
                    url = "get_des";
                    window.location.href="apply.html?url="+url+"&id="+res.list.id+"&group_id="+1;
                }else if(res.list.group_id == 2){
                    url = "get_shop";
                    window.location.href="apply.html?url="+url+"&id="+res.list.id+"&group_id="+2;
                }else if(res.list.group_id == 3){
                    url = "get_adv";
                    window.location.href="apply.html?url="+url+"&id="+res.list.id+"&group_id="+3;
                }else if(res.list.group_id == 4){
                    url = "get_eng";
                    window.location.href="apply.html?url="+url+"&id="+res.list.id+"&group_id="+4;
                }
            }else{
                if(res.group_id == 1){
                    $("#intro").show();
                } else if(res.group_id == 2){
                    $("#intro").hide();
                    $("#intro-shop").show();
                }else if(res.group_id == 3){
                    $(".designer").hide();
                    $(".home").show();
                    $("#vpic").hide();
                    $(".play").hide();
                }else if(res.group_id == 4){
                    $(".designer").hide();
                    $(".home").hide();
                    $(".work").show();
                }
                $this.getUser=res;
            }

        });

    },

    methods:{
        AjaxL:function(url,type,data,call){
            var $this=this;
            $.ajax({
                type:type,
                url:url,
                data:data,
                dataType:'JSON',
                success:function(res){
                    call(res);
                    if(res.token){
                        $this.token=res.token;
                    }
                    if(res.url){
                        window.location.href=res.url;
                    }
                },
                error:function(XMLHttpRequest){
                    if(XMLHttpRequest.status==408){
                        window.location.href=$this.link+"weixLogin";
                    }else{
                        myAlert('网络比较差，请重新进入。');
                    }
                }
            })
        },

        GetQueryString:function(name) {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        },

        //投票
        setNum:function(id,group_id){
            var $this=this;
            if(group_id == 1){
                var url = $this.link+'click_des';
            }else if(group_id == 2){
                var url = $this.link+'click_shop';
            }else if(group_id == 3){
                var url = $this.link+'click_adv';
            }else if(group_id == 4){
                var url = $this.link+'click_eng';
            }

            $this.AjaxL( url,'POST',{"user_id":id,"group_id":group_id,"__token__":$this.token},function(res){
                if(res.code == 1){
                    $("#voteSuccess").show();
                    $('.clicknum_'+id).text(res.clicknum);
                }else{
                    popWindow(res.msg);
                }
            });

        },


    }
});