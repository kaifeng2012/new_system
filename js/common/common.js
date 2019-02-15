/**
 * Created by Administrator on 2017/2/24.
 */
//页面底部导航切换
$(function(){
   $(".nav li").click(function(){
       //alert("asas");
        $(this).addClass("active").siblings("li").removeClass("active");
       $(".info-collect").hide().eq($('.nav li').index(this)).show();
   })
});
//底部导航显示切换
$(function dd(){
    var bottomNav=$(".nav li");
   //底部导航显示3个
    if(bottomNav.length==3){
        $(".nav li").css({
            "float":"left","border":"1px solid #999999","width":"33.3%","text-align":"center"
        });
    }else if(bottomNav.length==2){
        //底部导航显示2个
        $(".nav li").css({
            "float":"left","border":"0px solid #999999","width":"49.9%","text-align":"center"
        });
    } else if(bottomNav.length<1){
        //底部导航一个也不显示
        $(".nav").hide();
    }
});


