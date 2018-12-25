$(function(){
    $("#reg").click(function(){
        var uname=$(".uname").val();
        var upwd=$(".upwd").val();
        var phone=$(".phone").val();
        var email=$(".email").val();
        $.ajax({
            url:"http://localhost:3000/mypro/reg",
            type:"post",
            data:{uname,upwd,phone,email},
            dataType:'json',
            success: function(res) {
                console.log(res);
            }
        })
    })
})