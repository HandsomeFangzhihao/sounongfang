<?php
    header("Content-Type:application/json;charsrt=utf-8");
    @$n=$_REQUEST['uname'] or die('{"code":-2,"msg":"用户名或密码错误"}') ;
    @$p=$_REQUEST['upwd'] or die('{"code":-3,"msg":"用户名或密码错误"}') ;
    require("1_init.php");
    $sql="SELECT uid FROM login WHERE uname='$n' AND upwd='$p'";
    $result=mysqli_query($conn,$sql);
    if($result===false){
        echo "sql错误";
    }
    $row=mysqli_fetch_row($result);

    if($row===null){
        echo '{"code":-1,"msg":"用户名或密码错误"}';
    }else{
        $uid=$row[0];
        $output=[
            "code"=>1,
            "msg"=>"登录成功",
            "uname"=>$n,
            "uid"=>$uid
        ];
        echo json_encode($output);
    }