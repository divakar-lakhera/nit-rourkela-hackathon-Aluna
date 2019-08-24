<?php
session_start();

if(isset($_POST['uid'])){
    $val=$_POST['uid'];
    $_SESSION['uid']=(int)$val;
}
else{
    print("Error");
}

?>
