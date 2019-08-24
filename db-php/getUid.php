<?php

session_start();
if(isset($_SESSION['uid']))
{
    $s = $_SESSION['uid'];
print($s);
}
else
{
    print("Session Not Found");
}

?>
