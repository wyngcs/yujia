$(function(){
    $(".login").click(function(){
        var uname=$(".uname").val();
        var upwd=$(".upwd").val();
        var phone=$(".phone").val();
        $.ajax({
            url:"http://localhost:3000/mypro/login",
            type:"post",
            data:{uname,upwd,phone},
            dataType:'json',
            success: function(res) {
                console.log(res);
            }
        })
    })
})
