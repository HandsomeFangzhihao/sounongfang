<?php
    header('Content-Type: application/json');
    @$n=$_REQUEST["uname"] or die('{"code":-2,"msg":"请输入手机号"}');
    require('1_init.php');
    $sql="SELECT uid FROM login WHERE uname='$n'";
    $result=mysqli_query($conn,$sql);
    if($result===false){
    	die("SQL ERR: $sql");
    }else{
    	$row = mysqli_fetch_assoc($result);
    	if($row===null){
    		echo '{"code":1,"msg":"手机号可以使用"}';
    	}else{
    		echo '{"code":0,"msg":"手机号已被注册"}';
    	}
    }