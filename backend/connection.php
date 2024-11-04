<?php
$server = "localhost";
$user = "root";
$password = "";
$db = "rendez-vous";
$con = mysqli_connect($server, $user, $password, $db);
if (!$con) {
    echo "Connection not passed: " . mysqli_error($con);
} else {
    echo "Connected     ";
    echo "";
}
?>