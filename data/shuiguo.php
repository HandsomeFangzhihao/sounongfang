<?php
    header("Content-Type:application/json");
    require('1_init.php');
    $sql="SELECT * FROM shuiguo";
    $result=mysqli_query($conn,$sql);
    $list = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($list);