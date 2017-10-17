var data={
    link:'http://toupiao.snimay.com/index.php/',
    imgLink:'http://toupiao.snimay.com/public',
    //link:'http://127.0.0.1/snimay/',
    //imgLink:'http://127.0.0.1/snimay/public',
    token:'',
    adding:[],
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


        $('#file_upload').on('click',function(){
            $this.uploads('#file_upload',function(res){
                $("#designPic").attr('src',$this.imgLink+res.thumb.pic);
                $("#user_pics").attr('value',res.thumb.pic_s);
                $("#user_pic").attr('value',res.thumb.pic);
            });
        });


        $('#file_upload_des').on('click',function(){
            $this.uploads('#file_upload_des',function(res){
                $("#upImg_txt").hide();
                $("#upImg").attr('src',$this.imgLink+res.thumb.pic);
                $("#effect_pics").attr('value',res.thumb.pic_s);
                $("#effect_pic").attr('value',res.thumb.pic);
                var real_pic = $("#real_pic").val();
                if(real_pic != ''){
                    $("#d_pic").show();
                }
            });
        });

        $('#file_upload_des0').on('click',function(){
            $this.uploads('#file_upload_des0',function(res){
                $("#upImg_txt_0").hide();
                $("#upImg0").attr('src',$this.imgLink+res.thumb.pic);
                $("#real_pics").attr('value',res.thumb.pic_s);
                $("#real_pic").attr('value',res.thumb.pic);
                var effect_pic = $("#effect_pic").val();
                if(effect_pic != ''){
                    $("#d_pic").show();
                }
            });
        });

        $('#file_upload_des1').on('click',function(){
            $this.uploads('#file_upload_des1',function(res){
                $("#upImg_txt_1").hide();
                $("#upImg1").attr('src',$this.imgLink+res.thumb.pic);
                $("#effect_pics1").attr('value',res.thumb.pic_s);
                $("#effect_pic1").attr('value',res.thumb.pic);
                var real_pic2 = $("#real_pic2").val();
                if(real_pic2 != ''){
                    $("#d_pic_a").show();
                }
            });
        });

        $('#file_upload_des2').on('click',function(){
            $this.uploads('#file_upload_des2',function(res){
                $("#upImg_txt_2").hide();
                $("#upImg2").attr('src',$this.imgLink+res.thumb.pic);
                $("#real_pics2").attr('value',res.thumb.pic_s);
                $("#real_pic2").attr('value',res.thumb.pic);
                var effect_pic1 = $("#effect_pic1").val();
                if(effect_pic1 != ''){
                    $("#d_pic_a").show();
                }
            });
        });

        $('#file_upload_des3').on('click',function(){
            $this.uploads('#file_upload_des3',function(res){
                $("#upImg_txt_3").hide();
                $("#upImg3").attr('src',$this.imgLink+res.thumb.pic);
                $("#effect_pics3").attr('value',res.thumb.pic_s);
                $("#effect_pic3").attr('value',res.thumb.pic);
            });
        });

        $('#file_upload_des4').on('click',function(){
            $this.uploads('#file_upload_des4',function(res){
                $("#upImg_txt_4").hide();
                $("#upImg4").attr('src',$this.imgLink+res.thumb.pic);
                $("#real_pics4").attr('value',res.thumb.pic_s);
                $("#real_pic4").attr('value',res.thumb.pic);
            });
        });


        $('#file_upload_space').on('click',function(){
            $this.uploads('#file_upload_space',function(res){
                $("#spacepic_txt").hide();
                $("#spacepic").attr('src',$this.imgLink+res.thumb.pic);
                $("#space_pics").attr('value',res.thumb.pic_s);
                $("#space_pic").attr('value',res.thumb.pic);
            });
        });


        $('#file_upload_a').on('click',function(){
            $this.uploads('#file_upload_a',function(res){
                $("#adviserPic").attr('src',$this.imgLink+res.thumb.pic);
                $("#adv_pics").attr('value',res.thumb.pic_s);
                $("#adv_pic").attr('value',res.thumb.pic);
            });
        });


        $('#file_upload_b').on('click',function(){
            $this.uploads('#file_upload_b',function(res){
                $("#teamPic").attr('src',$this.imgLink+res.thumb.pic);
                $("#team_pics").attr('value',res.thumb.pic_s);
                $("#team_pic").attr('value',res.thumb.pic);
            });
        });


        $('#file_upload_c').on('click',function(){
            $this.uploads('#file_upload_c',function(res){
                $("#sell_c_txt").hide();
                $("#sell_c").attr('src',$this.imgLink+res.thumb.pic);
                $("#sell_pics_c").attr('value',res.thumb.pic_s);
                $("#sell_pic_c").attr('value',res.thumb.pic);
            });
        });


        $('#file_upload_d').on('click',function(){
            $this.uploads('#file_upload_d',function(res){
                $("#sell_d_txt").hide();
                $("#sell_d").attr('src',$this.imgLink+res.thumb.pic);
                $("#sell_pics_d").attr('value',res.thumb.pic_s);
                $("#sell_pic_d").attr('value',res.thumb.pic);
                $("#li_a").show();
            });
        });


        $('#file_upload_e').on('click',function(){
            $this.uploads('#file_upload_e',function(res){
                $("#sell_e_txt").hide();
                $("#sell_e").attr('src',$this.imgLink+res.thumb.pic);
                $("#sell_pics_e").attr('value',res.thumb.pic_s);
                $("#sell_pic_e").attr('value',res.thumb.pic);
                $("#li_b").show();
            });
        });


        $('#file_upload_adv').on('click',function(){
            $this.uploads('#file_upload_adv',function(res){
                $("#adPic").attr('src',$this.imgLink+res.thumb.pic);
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
                    index=layer.load();
                }
                ,done: function(res){
                    layer.closeAll();
                    $this.token=res.token;
                    if(res.code == 1){
                        $("#vido_pic").hide();
                        $("#img_vido").hide();
                        $(".pics2").show();
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
                $("#enPic").attr('src',$this.imgLink+res.thumb.pic);
                $("#engpics").attr('value',res.thumb.pic_s);
                $("#engpic").attr('value',res.thumb.pic);
            });
        });

        $('#file_upload_engs').on('click',function(){
            $this.uploads('#file_upload_engs',function(res){
                $("#v_txt").hide();
                $("#eng_pic_v").attr('src',$this.imgLink+res.thumb.pic);
                $("#tool_pics").attr('value',res.thumb.pic_s);
                $("#tool_pic").attr('value',res.thumb.pic);
            });
        });


        $('#file_upload_o').on('click',function(){
            $this.uploads('#file_upload_o',function(res){
                $("#owner_txt").hide();
                $("#ownerpic").attr('src',$this.imgLink+res.thumb.pic);
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
                },
                error:function(xml,status){
                    console.log(xml);
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
                        index=layer.load();
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
            //var design_desc = $("#design_desc").val();
            var space_pics = $("#space_pics").val();
            var space_pic = $("#space_pic").val();

            var real_pics = $("#real_pics").val();
            var real_pic = $("#real_pic").val();
            var effect_pic = $("#effect_pic").val();
            var effect_pics = $("#effect_pics").val();

            var real_pics2 = $("#real_pics2").val();
            var real_pic2 = $("#real_pic2").val();
            var effect_pic1 = $("#effect_pic1").val();
            var effect_pics1 = $("#effect_pics1").val();

            var real_pics4 = $("#real_pics4").val();
            var real_pic4 = $("#real_pic4").val();
            var effect_pic3 = $("#effect_pic3").val();
            var effect_pics3 = $("#effect_pics3").val();
            if(real_pic != ''){
                real_pic = real_pic+';';
                real_pics = real_pics+';';
            }
            if(effect_pic != ''){
                effect_pic = effect_pic+';';
                effect_pics = effect_pics+';';
            }
            if(real_pic2 != ''){
                real_pic += real_pic2+';';
                real_pics += real_pics2+';';
            }
            if(effect_pic1 != ''){
                effect_pic += effect_pic1+';';
                effect_pics += effect_pics1+';';
            }
            if(real_pic4 != ''){
                real_pic += real_pic4+';';
                real_pics += real_pics4+';';
            }
            if(effect_pic3 != ''){
                effect_pic += effect_pic3+';';
                effect_pics += effect_pics3+';';
            }

            var index=layer.load(2);
            $this.AjaxL($this.link+'addDesign','POST',{
                "sell_name":sell_name,
                "username":username,
                "phone":phone,
                "user_pic":user_pic,
                "user_pics":user_pics,
                "desc":desc,
                "effect_pics":effect_pics,
                "effect_pic":effect_pic,
                "real_pics":real_pics,
                "real_pic":real_pic,
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
        design_check:function(){
            var $this=this;
            var phone = $("#des_phone").val();
            var index=layer.load(2);
            var url = 'get_des';
            $this.AjaxL($this.link+'checkDesign','POST',{"phone":phone},function(res){
                layer.close(index);
                if(res.code == 1){
                    layer.confirm('检测到您已报过名，是否绑定微信？',function(index){
                        window.location.href="userDetail.html?url="+url+"&id="+res.id+"&group_id="+1;
                    });
                }else{
                    layer.closeAll();
                    //layer.msg(res.msg);
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
            //var space_pics = $("#space_pics_p").val();
            //var space_pic = $("#space_pic_p").val();
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
                "desc":desc,
                "shop_desc":shop_desc,
                "user_pics":user_pics,
                "team_pics":team_pics,
                "sell_pics":sell_pics,
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
        shop_check:function(){
            var $this=this;
            var phone = $("#shop_phone").val();
            var index=layer.load(2);
            var url = 'get_shop';
            $this.AjaxL($this.link+'checkShop','POST',{
                "phone":phone,
            },function(res){
                layer.close(index);
                if(res.code == 1){
                    layer.confirm('检测到您已报过名，是否绑定微信？',function(index){
                        window.location.href="userDetail.html?url="+url+"&id="+res.id+"&group_id="+2;
                    });
                }else{
                    layer.closeAll();
                    //layer.msg(res.msg);
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
        adv_check:function(){
            var $this=this;
            var phone = $("#adv_phone").val();
            var index=layer.load(2);
            var url = 'get_adv';
            $this.AjaxL($this.link+'checkAdv','POST',{
                "phone":phone,
            },function(res){
                layer.close(index);
                if(res.code == 1){
                    layer.confirm('检测到您已报过名，是否绑定微信？',function(index){
                        window.location.href="userDetail.html?url="+url+"&id="+res.id+"&group_id="+3;
                    });
                }else{
                    layer.closeAll();
                    //layer.msg(res.msg);
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
            var owner_pic = $("#owner_pic").val();
            var owner_pics = $("#owner_pics").val();
            var tool_pic = $("#tool_pic").val();
            var tool_pics = $("#tool_pics").val();

            var index=layer.load(2);
            $this.AjaxL($this.link+'addEng','POST',{
                "sell_name":sell_name,
                "username":username,
                "phone":phone,
                "user_pic":user_pic,
                "desc":desc,
                "user_pics":user_pics,
                "owner_pic":owner_pic,
                "owner_pics":owner_pics,
                "tool_pic":tool_pic,
                "tool_pics":tool_pics,
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
        eng_check:function(){
            var $this=this;
            var phone = $("#eng_phone").val();
            var index=layer.load(2);
            var url = 'get_eng';
            $this.AjaxL($this.link+'checkEng','POST',{
                "phone":phone,
            },function(res){
                layer.close(index);
                if(res.code == 1){
                    layer.confirm('检测到您已报过名，是否绑定微信？',function(index){
                        window.location.href="userDetail.html?url="+url+"&id="+res.id+"&group_id="+4;
                    });
                }else{
                    layer.closeAll();
                    //layer.msg(res.msg);
                }
            });
        },

        setTimeouts:function(){
            setTimeout(function(){
                $("#popWin3").hide();
                $("#popWin4").show();
            },2000);
        },

    }
});