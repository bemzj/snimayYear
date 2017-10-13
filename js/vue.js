var data={
    link:'http://3d.snimay.com/index.php/',
    imgLink:'http://3d.snimay.com/public',
    //link:'http://127.0.0.1/snimay/',
    //imgLink:'http://127.0.0.1/snimay/public',
    token:'',
    rankList:[],
    getUser:'',
    page:'',
    adding:[],
    inv:'',
    orderDesc:'',
    hasClick:true,
    editUser:'',
    editPic:[]
};

var all = new Vue({
    el:'#vueMain',
    data:data,
    created:function(){
        var $this=this;
        //点赞成功
        function hitSuccess(){
            $this.hasClick=true;
            $('#hitGoodS').show();
        }
        $this.AjaxL($this.link+'hasAuth','GET',false,function(res){
            if(res.code==408){
                window.location.href=$this.link+"weixLogin";
            }else{
                $this.token=res.token;
            }
        });


        $('#file_upload').on('click',function(){
            $this.uploads('#file_upload',function(res){
                $("#designPic").attr('src',$this.imgLink+res.thumb.pic_s);
                $("#user_pics").attr('value',res.thumb.pic_s);
                $("#user_pic").attr('value',res.thumb.pic);
            });
        });


        $('#file_upload_des').on('click',function(){
            $this.uploads('#file_upload_des',function(res){
                $("#upImg").attr('src',$this.imgLink+res.thumb.pic_s);
                $("#real_pics").attr('value',res.thumb.pic_s);
                $("#real_pic").attr('value',res.thumb.pic);
            });
        });


        $('#file_upload_space').on('click',function(){
            $this.uploads('#file_upload_space',function(res){
                $("#spacepic").attr('src',$this.imgLink+res.thumb.pic_s);
                $("#space_pics").attr('value',res.thumb.pic_s);
                $("#space_pic").attr('value',res.thumb.pic);
            });
        });


        $('#file_upload_a').on('click',function(){
            $this.uploads('#file_upload_a',function(res){
                $("#adviserPic").attr('src',$this.imgLink+res.thumb.pic_s);
                $("#adv_pics").attr('value',res.thumb.pic_s);
                $("#adv_pic").attr('value',res.thumb.pic);
            });
        });


        $('#file_upload_b').on('click',function(){
            $this.uploads('#file_upload_b',function(res){
                $("#teamPic").attr('src',$this.imgLink+res.thumb.pic_s);
                $("#team_pics").attr('value',res.thumb.pic_s);
                $("#team_pic").attr('value',res.thumb.pic);
            });
        });


        $('#file_upload_c').on('click',function(){
            $this.uploads('#file_upload_c',function(res){
                $("#sell_c").attr('src',$this.imgLink+res.thumb.pic_s);
                $("#sell_pics_c").attr('value',res.thumb.pic_s);
                $("#sell_pic_c").attr('value',res.thumb.pic);
            });
        });


        $('#file_upload_d').on('click',function(){
            $this.uploads('#file_upload_d',function(res){
                $("#sell_d").attr('src',$this.imgLink+res.thumb.pic_s);
                $("#sell_pics_d").attr('value',res.thumb.pic_s);
                $("#sell_pic_d").attr('value',res.thumb.pic);
            });
        });


        $('#file_upload_e').on('click',function(){
            $this.uploads('#file_upload_e',function(res){
                $("#sell_e").attr('src',$this.imgLink+res.thumb.pic_s);
                $("#sell_pics_e").attr('value',res.thumb.pic_s);
                $("#sell_pic_e").attr('value',res.thumb.pic);
            });
        });


        $('#file_upload_p').on('click',function(){
            $this.uploads('#file_upload_p',function(res){
                $("#space_p").attr('src',$this.imgLink+res.thumb.pic_s);
                $("#space_pics_p").attr('value',res.thumb.pic_s);
                $("#space_pic_p").attr('value',res.thumb.pic);
            });
        });

        $('#file_upload_adv').on('click',function(){
            $this.uploads('#file_upload_adv',function(res){
                $("#adPic").attr('src',$this.imgLink+res.thumb.pic_s);
                $("#advpics").attr('value',res.thumb.pic_s);
                $("#advpic").attr('value',res.thumb.pic);
            });
        });

        //执行实例
        var token=$this.token;
        layui.use('upload', function(){
            var upload = layui.upload;
            //var index;
            var uploadInst = upload.render({
                elem: '#file_upload_v' //绑定元素
                ,data:{"__token__":token}
                ,accept:'video'
                ,size:20480
                ,url: $this.link+"uploads" //上传接口
                ,before:function(){
                    index=layer.load(1);
                }
                ,done: function(res){
                    layer.closeAll();
                    $this.token=res.token;
                    if(res.code == 1){
                        $("#vido_pic").hide();
                        $("#img_vido").hide();
                        $(".pic2").show();
                        $(".pic2").attr('src',$this.imgLink+res.thumb.pic);
                        $("#vido").attr('value',res.thumb.pic);
                        //$this.adding.push(res.thumb);
                    }else{
                        layer.msg(res.msg);
                    }
                }
                ,error: function(){
                    layer.closeAll();
                    //请求异常回调
                    //layer.close(index);
                }
            });
        });


        $('#file_upload_eng').on('click',function(){
            $this.uploads('#file_upload_eng',function(res){
                $("#enPic").attr('src',$this.imgLink+res.thumb.pic_s);
                $("#engpics").attr('value',res.thumb.pic_s);
                $("#engpic").attr('value',res.thumb.pic);
            });
        });

        //执行实例
        var token=$this.token;
        layui.use('upload', function(){
            var upload = layui.upload;
            //var index;
            var uploadInst = upload.render({
                elem: '#file_upload_engs' //绑定元素
                ,data:{"__token__":token}
                ,accept:'video'
                ,size:20480
                ,url: $this.link+"uploads" //上传接口
                ,before:function(){
                    index=layer.load(1);
                }
                ,done: function(res){
                    layer.closeAll();
                    $this.token=res.token;
                    if(res.code == 1){
                        $("#eng_pic_v").hide();
                        $("#v_txt").hide();
                        $(".pic3").show();
                        $(".pic3").attr('src',$this.imgLink+res.thumb.pic);
                        $("#vido_eng").attr('value',res.thumb.pic);
                        //$this.adding.push(res.thumb);
                    }else{
                        layer.msg(res.msg);
                    }
                }
                ,error: function(){
                    layer.closeAll();
                    //请求异常回调
                    //layer.close(index);
                }
            });
        });


        $('#file_upload_o').on('click',function(){
            $this.uploads('#file_upload_o',function(res){
                $("#owner_txt").hide();
                $("#ownerpic").attr('src',$this.imgLink+res.thumb.pic_s);
                $("#owner_pics").attr('value',res.thumb.pic_s);
                $("#owner_pic").attr('value',res.thumb.pic);
            });
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
                }
            })
        },
        uploads:function(box,cal){
            var $this=this;
            layui.use('upload', function(){
                var upload = layui.upload;
                //var index;
                var uploadInst = upload.render({
                    elem: box //绑定元素
                    ,data:{"__token__":$this.token}
                    ,accept:"images"
                    ,size:3072
                    ,url: $this.link+"upload" //上传接口
                    ,before:function(){
                        index=layer.load(1);
                    }
                    ,done: function(res){
                        layer.closeAll();
                        $this.token=res.token;
                        if(res.code == 1){
                            cal(res);
                            //$this.adding.push(res.thumb);
                        }else{
                            layer.msg(res.msg);
                        }
                    }
                    ,error: function(){
                        layer.closeAll();
                        //请求异常回调
                        //layer.close(index);
                    }
                });
            });
        },
        add_design:function(){
            var $this=this;
            var sell_name = $("#des_sell").val();
            var username = $("#des_name").val();
            var phone = $("#des_phone").val();
            var user_pic = $("#user_pic").val();
            var user_pics = $("#user_pics").val();
            var desc = $("#des_content").val();
            var real_pics = $("#real_pics").val();
            var real_pic = $("#real_pic").val();
            var design_desc = $("#design_desc").val();
            var space_pics = $("#space_pics").val();
            var space_pic = $("#space_pic").val();
            var index=layer.load(2);
            $this.AjaxL($this.link+'addDesign','POST',{
                "sell_name":sell_name,
                "username":username,
                "phone":phone,
                "user_pic":user_pic,
                "user_pics":user_pics,
                "desc":desc,
                "real_pics":real_pics,
                "real_pic":real_pic,
                "design_desc":design_desc,
                "space_pics":space_pics,
                "space_pic":space_pic,
                "__token__":$this.token
            },function(res){
                layer.close(index);
                if(res.code == 1){
                    $("#thridStepOne").hide();
                    $("#popWin3").show();
                    $this.setTimeouts();
                }else{
                    layer.msg(res.msg);
                }
            });
        },

        add_shop:function(){
            var $this=this;
            var sell_name = $("#shop_sell").val();
            var username = $("#shop_name").val();
            var phone = $("#shop_phone").val();
            var desc = $("#shop_des").val();
            var user_pic = $("#adv_pic").val();
            var user_pics = $("#adv_pics").val();
            var team_pics = $("#team_pics").val();
            var team_pic = $("#team_pic").val();

            var sell_pics_c = $("#sell_pics_c").val();
            var sell_pic_c = $("#sell_pic_c").val();
            var sell_pics_d = $("#sell_pics_d").val();
            var sell_pic_d = $("#sell_pic_d").val();
            var sell_pics_e = $("#sell_pics_e").val();
            var sell_pic_e = $("#sell_pic_e").val();

            var shop_desc = $("#shop_desc").val();
            var space_pics = $("#space_pics_p").val();
            var space_pic = $("#space_pic_p").val();
            var sell_pic = sell_pic_c+';'+sell_pic_d+';'+sell_pic_e+';';
            var sell_pics = sell_pics_c+';'+sell_pics_d+';'+sell_pics_e+';';
            var index=layer.load(2);
            $this.AjaxL($this.link+'addShop','POST',{
                "sell_name":sell_name,
                "username":username,
                "phone":phone,
                "user_pic":user_pic,
                "team_pic":team_pic,
                "sell_pic":sell_pic,
                "space_pic":space_pic,
                "desc":desc,
                "shop_desc":shop_desc,
                "user_pics":user_pics,
                "team_pics":team_pics,
                "sell_pics":sell_pics,
                "space_pics":space_pics,
                "__token__":$this.token
            },function(res){
                layer.close(index);
                if(res.code == 1){
                    $("#thridStepTwo").hide();
                    $("#popWin3").show();
                    $this.setTimeouts();
                }else{
                    layer.msg(res.msg);
                }
            });
        },


        add_adv:function(){
            var $this=this;
            var sell_name = $("#adv_sell").val();
            var username = $("#adv_name").val();
            var phone = $("#adv_phone").val();
            var desc = $("#adv_desc").val();
            var user_pic = $("#advpic").val();
            var user_pics = $("#advpics").val();
            var video = $("#vido").val();
            var video_desc = $("#adv_vdes").val();
        
            var index=layer.load(2);
            $this.AjaxL($this.link+'addAdv','POST',{
                "sell_name":sell_name,
                "username":username,
                "phone":phone,
                "user_pic":user_pic,
                "desc":desc,
                "video_desc":video_desc,
                "user_pics":user_pics,
                "video":video,
                "__token__":$this.token
            },function(res){
                layer.close(index);
                if(res.code == 1){
                    $("#thridStepThree").hide();
                    $("#popWin3").show();
                    $this.setTimeouts();
                }else{
                    layer.msg(res.msg);
                }
            });
        },

        add_eng:function(){
            var $this=this;
            var sell_name = $("#eng_sell").val();
            var username = $("#eng_name").val();
            var phone = $("#eng_phone").val();
            var desc = $("#eng_desc").val();
            var user_pic = $("#engpic").val();
            var user_pics = $("#engpics").val();
            var video = $("#vido_eng").val();
            var owner_pic = $("#owner_pic").val();
            var owner_pics = $("#owner_pics").val();
        
            var index=layer.load(2);
            $this.AjaxL($this.link+'addEng','POST',{
                "sell_name":sell_name,
                "username":username,
                "phone":phone,
                "user_pic":user_pic,
                "desc":desc,
                "user_pics":user_pics,
                "video":video,
                "owner_pic":owner_pic,
                "owner_pics":owner_pics,
                "__token__":$this.token
            },function(res){
                layer.close(index);
                if(res.code == 1){
                    $("#thridStepFour").hide();
                    $("#popWin3").show();
                    $this.setTimeouts();
                }else{
                    layer.msg(res.msg);
                }
            });
        },

        setTimeouts:function(){
            setTimeout(function(){
                $("#popWin3").hide();
                $("#popWin4").show();
            },2000);
        },


        

        updateShow:function(id){
            var $this=this;
            $this.AjaxL($this.link+'update','POST',{"id":id,"__token__":$this.token},function(res){
            	if(res.list.id != 0){
	                $(".information").css("display","none");
	                $("#editInfo").css("display","block");
	                $this.editUser=res.list;
                    $this.editPic=res.list.pics;
                    if(res.list.invoice == ''){
                        $("#photo-inc").hide();
                        $("#addInc").show();
                    }
                    var lenth = $("#photo-pic").children().length;
                    if(lenth < 5){
                        $("#upic").show();
                    }
            	}
            });
        },

        delPic:function(key){
            var $this=this;

            $this.editPic.splice(key,1);

        },

         delInc:function(){
            var $this=this;
             $this.editUser.invoice=false;
        },

        edit:function(id){
            var $this=this;
            var username = $("#username2").val();
            var phone = $("#phone2").val();
            var J_Address = $("#J_Address2").val();
            var X_Address = $("#X_Address2").text();
            var file = $("#file2").val();
            var desc = $("#desc2").text();
            var invoice = $(".pic_inc2").val();
            var pic=[];
            $('.pic_box2').each(function(){
                pic_s_img=$(this).find('.pic_s2').attr('value');
                pic_img=$(this).find('.pic2').attr('value');
                var data={"pic":pic_img,"pic_s":pic_s_img};
                pic.push(data);
            });
            var index=layer.load(2);
            $this.AjaxL( $this.link+'edit','POST',{
                "id":id,
                "username":username,
                "phone":phone,
                "region":J_Address,
                "addr":X_Address,
                "desc":desc,
                "life":$('[name="life2"]').val(),
                "pic":pic,
                "invoice":invoice,
                "__token__":$this.token
            },function(res){
                layer.close(index);
                if(res.code == 1){
                    applyS();
                    $this.sign();
                }else{
                    showFailInfor(0,res.msg);
                }
            });
        },
        clicknum:function(id,group_id){
            var $this=this;
            if($this.hasClick==true){
                $this.hasClick=false;
                $this.AjaxL( $this.link+'click_num','POST',{"user_id":id,"group_id":group_id,"__token__":$this.token},function(res){
                    if(res.code == 1){
                        normalPop("点赞成功");
                        $('.clicknum_'+id).text(res.clicknum);
                    }else{
                        normalPop(res.msg);
                    }
                });
            }
        },
        sign:function(){
            var $this=this;
            $this.AjaxL($this.link+'getUser','GET',false,function(res){
                if(res.id != 0){
                    $(".apply").hide();
                    $("#apply").children(".information").show();
                    $this.getUser=res;
                }
            });
        },
        search:function(){
            var $this=this;
            var search = $("#search").val();
            $this.rankList=[];
            layui.use('flow', function(){  //排行榜
                var flow = layui.flow;
                flow.load({
                    elem: '#rankList' //指定列表容器
                    ,done: function(page, next){ //到达临界点（默认滚动触发），触发下一页
                        var lis = [];
                        //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
                        $this.AjaxL($this.link+'rank','GET',{page:page,"search":search},function(res){
                            list=res.list;
                            for (x in list){
                                $this.rankList.push(list[x]);
                            }
                            next('', page <= res.last_page);
                        });

                    }
                });
            });

        },
        rank:function(){
            var order=$('#order');
            order.children('.order').show();
            order.children('.renkDesc').hide();
            var $this=this;
            $this.rankList=[];
            layui.use('flow', function(){  //排行榜
                var flow = layui.flow;
                flow.load({
                    elem: '#rankList' //指定列表容器
                    ,done: function(page, next){ //到达临界点（默认滚动触发），触发下一页
                        var lis = [];
                        //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
                        $this.AjaxL($this.link+'rank','GET',{page:page},function(res){
                            list=res.list;
                            for (x in list){
                                $this.rankList.push(list[x]);
                            }
                            next('', page <= res.last_page);
                        });

                    }
                });
            });
        },
        upload:function(){
            var $this=this;
            var file = $("#file_pic").val();
            $this.AjaxL( $this.link+'upload','POST',{"file":file,"__token__":$this.token},function(res){

            });
        },
        showOrder:function(id){
            var $this=this;
            var order=$('#order');
            $this.AjaxL($this.link+'orderDesc','GET',{id:id},function(res){
                if(res.id != 0){
                    order.children('.order').hide();
                    order.children('.renkDesc').show();
                    order.children('.renkDesc').children('.information').show();
                    $this.orderDesc=res;
                }
            });
        },
        more:function(){
            var order=$('#order');
            order.children('.order').show();
            order.children('.renkDesc').hide();
        },
        orderClick:function(id,group_id){
            var $this=this;
            $this.AjaxL( $this.link+'click_num','POST',{"user_id":id,"group_id":group_id,"__token__":$this.token},function(res){
                if(res.code == 1){
                    normalPop("点赞成功");
                    $('#orderClick').text(res.clicknum);
                }else if(res.code==0){
                    //hitFail();
                    normalPop(res.msg);
                }else{
                    //showFailInfor(0,res.msg);
                    normalPop(res.msg);
                }
            });
        }
    }
});