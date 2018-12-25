const pool=require("../pool.js");
const  express=require("express");
var router=express.Router();
//获取用户名称密码
router.post("/login",function (req,res) {
    var $uname=req.body.uname;
  if(!$uname){
   res.send("用户名存在");
   return;
  }
  var $upwd=req.body.upwd;
  if(!$upwd){
   res.send("用户密码不存在");
   return;
  }
    var $phone=req.body.phone;
    if(!$phone){
        res.send("手机号不存在");
        return;
    }
  var sql="select * from yd_user where uname=? and upwd=? and phone=?";
  pool.query(sql,[$uname,$upwd,$phone],function(err,result){
   if(err)throw err;
   if(result.length>0){
    res.send("1");
   }else{
    res.send("0");
   }
  });
});
//根据用户注册
router.post("/reg",function(req,res){
    var obj=req.body;
    var $uname=obj.uname;
    var $upwd=obj.upwd;
    var $phone=obj.phone;
    var $email=obj.email;
    if(!$uname){
        res.send("用户名不能为空");
        return;
    }
    if(!$upwd){
        res.send("密码不为空");
        return;
    }
    if(!$phone){
        res.send("电话不能为空");
        return;
    }
    if(!$email){
        res.send("邮箱不能为空");
        return;
    }
    pool.query("insert into yd_user values(?,?,?,?)",[$uname,$upwd,$phone,$email],function(err,result){
        if(err){throw err}
        if(result.affectedRows>0){
            res.send("1")
        }else{
            res.send("0")
        }
    })
});
router.get("carousel",function(req,res){
    var sql="select * form yd_carousel  "
})

module.exports=router;
