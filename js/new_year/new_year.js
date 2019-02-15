/**
 * Created by Administrator on 2017/2/14.
 */
//点击开通i家校业务图标时隐藏和显示替换
$(".details-picture>img").click(function () {
    $(".details-txt").toggle();
});
// 拍照上传
$(function () {
    $('#upload-file').change(function () {
        var file = this.files[0];
        var r = new FileReader();
        r.readAsDataURL(file);
        // 上传服务器
//            $.ajax({
//                type: 'POST',
//                url: 'Save_Picture.aspx/UploadPic',
//                data: '',
//                contentType: 'application/json; charset=utf-8',
//                dataType: 'json',
//                success: function (msg) {
//                alert("Done, Picture Uploaded.");
//                  $('#upload-pic').html('<img src="' + this.result + '" id="pic" alt="" />');
//                }
//            });
        $(r).load(function () {
            $('#upload-pic').html('<img src="' + this.result + '" id="pic" alt="" />');
        });
    });

});
//性别切换
$("#woman").click(function () {
    $(this).css({"background": "#00B47D", "color": "#fff","border":"1px solid #00B47D"});
    $("#man").css({"background": "#fff", "color": "#333","border":"1px solid #BCBCBC"});
});
$("#man").click(function () {
    $(this).css({"background": "#00B47D", "color": "#fff","border":"1px solid #00B47D"});
    $("#woman").css({"background": "#fff", "color": "#333","border":"1px solid #BCBCBC"});

});
//住宿与走读切换
$("#extern").click(function () {
    $(this).css({"background": "#00B47D", "color": "#fff","border":"1px solid #00B47D"});
    $("#in-residence ").css({"background": "#fff", "color": "#333","border":"1px solid #BCBCBC"});
});
$("#in-residence ").click(function () {
    $(this).css({"background": "#00B47D", "color": "#fff","border":"1px solid #00B47D"});
    $("#extern").css({"background": "#fff", "color": "#333","border":"1px solid #BCBCBC"});
});
//表单提交验证
$("#submit-info").click(function () {
    //alert("112222");
    var studentName = $("input[name=studentName]").val();
    var gender = $("input[name=gender]").val();
    var accommodation = $("input[name=accommodation]").val();
    var idNumber = $("input[name=idNumber]").val();
    var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    var telNumber = $("input[name=telNumber]").val();
    var reg = /^1[34578]\d{9}$/;
    var noteCode = $("input[name=noteCode]").val();
    var checkbox = $("input[checkbox]").val();
    if (studentName == "") {
        $(".student-name").html("请输入学生姓名").css("color", "red");
        return false;
    }
    if (idNumber == "") {
        $(".student-name").html("请输入身份证号").css("color", "red");
        return false;
    } else if (!pattern.test(idNumber)) {
        $(".student-name").html("请输入正确身份证号").css("color", "red");
        return false;
    }
    if (telNumber == "") {
        $(".student-name").html("请输入家长手机号码").css("color", "red");
        return false;
    } else if (!reg.test(telNumber)) {
        $(".student-name").html("请输入正确的手机号码").css("color", "red");
        return false;
    }
    if (noteCode == "") {
        $(".student-name").html("请输入短信验证码").css("color", "red");
        return false;
    }
    //模态框显示
    $("#myModal").show(
        $("#confirm-submit").click(function(){
            //异步请求
            //$.ajax({
            //    async : false,
            //    url : '',
            //    data:$('#myForm').serialize(),
            //    type: 'POST',
            //    dataType: 'json',
            //    success : function(data) {
            //        if (data.result == 200) {
            //
            //        }
            //    },
            //    error : function(data) {
            //
            //    }
            //});
            //$("#myForm").submit();
            window.location.href = 'submit_page/Info_submitted_success.html';
        })
    );


});
//继续完善信息页面
//表单提交验证
$("#submit-info1").click(function () {
    //alert("112222");
    //籍贯
    var nativePlace = $("input[class=city]").val();
    // 出生日期
    var birthday = $("input[name=appDate]").val();
    // 户口所在地
    var residence = $("input[class=city1]").val();
    //现居住地
    var nowAddress = $("input[class=city2]").val();
    var detailAddress = $("input[class=detailAddress]").val();
    // 监护人电话
    var phoneNumber = $("input[name=phoneNumber]").val();
    var reg = /^1[34578]\d{9}$/;
    if (nation== "") {
        $(".student-name").html("请选择民族").css("color", "red");
        return false;
    }
    if (nativePlace== "") {
        $(".student-name").html("请选择籍贯").css("color", "red");
        return false;
    }
    if (birthday== "") {
        $(".student-name").html("请选择出生日期").css("color", "red");
        return false;
    }
    if (residence== "") {
        $(".student-name").html("请选择户口地址").css("color", "red");
        return false;
    }
    if ( nowAddress== "") {
        $(".student-name").html("请选择现居住地址").css("color", "red");
        return false;
    }
    if ( detailAddress== "") {
        $(".student-name").html("请输入详细地址").css("color", "red");
        return false;
    }

    if (!reg.test(phoneNumber)) {
        $(".student-name").html("请输入正确的手机号码").css("color", "red");
        return false;
    }
     //模态框弹出
     $("#myModal").show(
        $("#confirm-submit").click(function() {
            //异步请求
            //$.ajax({
            //    async : false,
            //    url : '',
            //    data:$('#myForm').serialize(),
            //    type: 'POST',
            //    dataType: 'json',
            //    success : function(data) {
            //        if (data.result == 200) {
            //
            //        }
            //    },
            //    error : function(data) {
            //
            //    }
            //});
            //$("#myForm").submit();
            window.location.href = 'Info_submitted_success1.html';
        })
    );

});
