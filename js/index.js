window.onload=function(){
    $(".box").mousedown(function(e){
        e.preventDefault();
    });
    $(".box").mousemove(function(e){
        e.preventDefault();
    });
    var marginL;
    var clientw=$(window).width();
    var num=0;
    touch.on("body","dragstart",".banner",function(e){
        marginL=parseInt($(".banner").css("marginLeft")?$(".banner").css("marginLeft"):0);
    });
    touch.on("body","drag",".banner",function(e){
        $(".banner").css({
            marginLeft:marginL+ e.x,
            transition:"none"
        })
    })
    touch.on("body","dragend",".banner",function(e){
        if(Math.abs(e.x)>150){
            if(e.direction=="left"){
                num++;
                if(num==$(".imgs").length){
                    num=$(".imgs").length-1;
                }
            }else if(e.direction=="right"){
                num--;
                if(num==-1){
                    num=0;
                }
            }
            $(".banner").css({
                marginLeft:-num*clientw,
                transiton:"margin-left 2s ease"
            })
        }else{
            $(".banner").css({
                marginLeft:num*clientw,
                transiton:"margin-left 2s ease"
            })
        }
    })
}