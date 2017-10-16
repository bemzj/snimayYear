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
    system:'',
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
        $this.AjaxL($this.link+'systemList','GET',false,function(res){
            $this.system=res;
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
                error:function(xml,status){
                    console.log(xml);
                }
            })
        },
        //首页搜索
        seachData:function(){
            var $this=this;
            var ins;
            $('.indexS').each(function(){
                if($(this).hasClass('aActive')){
                    ins=$(this).index();
                }
            });
            var search = $("#seachData").val();
            $this.searchResult=[];
            layui.use('flow', function(){  //排行榜
                var flow = layui.flow;
                flow.load({
                    elem: '#searchResult' //指定列表容器
                    ,done: function(page, next){ //到达临界点（默认滚动触发），触发下一页
                        var lis = [];
                        //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
                        $this.AjaxL($this.link+'search','GET',{"page":page,"search":search,"ins":ins},function(res){
                            $("#main").hide();
                            $("#searchResult").show();
                            list=res.list;
                            for (x in list){
                                $this.searchResult.push(list[x]);
                            }
                            next('', page <= res.last_page);
                        });

                    }
                });
            });
        },
        //搜索结果
        seachDatas:function(){
            var $this=this;
            var ins;
            $('.voteS').each(function(){
                if($(this).hasClass('aActive')){
                    ins=$(this).index();
                }
            });
            var search = $("#seachDatas").val();
            $this.searchResult=[];
            layui.use('flow', function(){  //排行榜
                var flow = layui.flow;
                flow.load({
                    elem: '#searchResult' //指定列表容器
                    ,done: function(page, next){ //到达临界点（默认滚动触发），触发下一页
                        var lis = [];
                        //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
                        $this.AjaxL($this.link+'search','GET',{"page":page,"search":search,"ins":ins},function(res){
                            $("#main").hide();
                            $("#searchResult").show();
                            list=res.list;
                            for (x in list){
                                $this.searchResult.push(list[x]);
                            }
                            next('', page <= res.last_page);
                        });

                    }
                });
            });
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
            if($this.hasClick==true){
                $this.hasClick=false;
                $this.AjaxL( url,'POST',{"user_id":id,"group_id":group_id,"__token__":$this.token},function(res){
                    if(res.code == 1){
                        $("#voteSuccess").show();
                    }else{
                        layer.msg(res.msg);
                    }
                });
            }
        },
        //个人信息
        getDatas:function(id,group_id){
            var $this=this;
            if(group_id == 1){
                var url = $this.link+'get_des';
            }else if(group_id == 2){
                var url = $this.link+'get_shop';
            }else if(group_id == 3){
                var url = $this.link+'get_adv';
            }else if(group_id == 4){
                var url = $this.link+'get_eng';
            }
            $this.AjaxL( url,'GET',{"user_id":id,"group_id":group_id,"__token__":$this.token},function(res){
                if(res.id != 0){
                    window.location.href="userDetail.html";
                    //$("#searchResult").css("display","none");
                    //$("#intro").show();
                    if(res.group_id == 2){
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


    }
});