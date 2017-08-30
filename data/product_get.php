<?php
    header("Content-Type:application/json;charset=utf-8");
    @$kw=$_REQUEST['kw'];
    if(empty($kw)){
        echo '[]';
        return;
    }
    $output=[];
    require("1_init.php");
    $sql="SELECT * FROM product WHERE pname LIKE '%$kw%'";
    $result=mysqli_query($conn,$sql);
    if($result===false){
        echo "Çë¼ì²ésql";
    }else{
        $list=mysqli_fetch_all($result,MYSQLI_ASSOC);
        if(!$list){
            break;
        }else{
            $output[]=$list;
        }
    }
    echo json_encode($list);
?>