<?php

 // 修改传输到php数据为json格式
 header("Content-Type: application/json");
//允许所有跨域
 header("Access-Control-Allow-Origin:*");

 // 引用另外一个文件
 include "public/connect_db.php";
 //获取ajax，post请求的json格式数据
$username = $_GET["username"];
 
//链接数据库
	$link = new db();
    $sql = "SELECT * from xinxi where name='$username'";
	//调用该实例方法
	$row = $link->Query($sql,2);

	if($row){
		//用户存在，返回重新注册
		$arr = array("msg"=>"用户存在,重新输入用户名","code"=>"100");
	}else {
        //用户不存在，返回可以使用
		$arr = array("msg"=>"","code"=>"200");
	}
	echo json_encode($arr);
?>