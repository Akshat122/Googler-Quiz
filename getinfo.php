<?php
include "db_con.php";
$UserName=$_POST["UserName"];
$UserID=$_POST["UserID"];
$Ans1=$_POST["Ans1"]; 
$Ans2=$_POST["Ans2"];
$Ans3=$_POST["Ans3"];
$Ans4=$_POST["Ans4"];
$Ans5=$_POST["Ans5"];

$Q2Min=$_POST["Q2Min"];
$Q2Sec=$_POST["Q2Sec"];
$Q3Min=$_POST["Q3Min"];
$Q3Sec=$_POST["Q3Sec"];
$Q4Min=$_POST["Q4Min"];
$Q4Sec=$_POST["Q4Sec"];
$Q5Min=$_POST["Q5Min"];
$Q5Sec=$_POST["Q5Sec"];

function getUserIP()
{
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP))
    {
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP))
    {
        $ip = $forward;
    }
    else
    {
        $ip = $remote;
    }

    return $ip;
}


$user_ip = getUserIP();

$sql = "insert into participant(Name,ID,Ans1,Q2Min,Q2Sec,Ans2,Q3Min,Q3Sec,Ans3,Q4Min,Q4Sec,Ans4,Q5Min,Q5Sec,Ans5,IP) values('$UserName','$UserID','$Ans1','$Q2Min','$Q2Sec','$Ans2','$Q3Min','$Q3Sec','$Ans3','$Q4Min','$Q4Sec','$Ans4','$Q5Min','$Q5Sec','$Ans5','$user_ip')";
mysqli_query($con,$sql);

/*
echo "StartM= ".$startMin."<br>";
echo "StartS= ".$startSec."<br>";
echo "Ans1= ".$Ans1."<br>";
echo "Q2 (M)= ".$Q2Min."<br>";
echo "Q2 (S)= ".$Q2Sec."<br>";

echo "Ans2= ".$Ans2."<br>";
echo "Q3 (M)= ".$Q3Min."<br>";
echo "Q3 (S)= ".$Q3Sec."<br>";

echo "Ans3= ".$Ans3."<br>";
echo "Q4 (M)= ".$Q4Min."<br>";
echo "Q4 (S)= ".$Q4Sec."<br>";

echo "Ans4= ".$Ans4."<br>";
echo "Q5 (M)= ".$Q5Min."<br>";
echo "Q5 (S)= ".$Q5Sec."<br>";

echo "Ans5= ".$Ans5."<br>";
echo "Finish (M)= ".$FinishMin."<br>";
echo "Finish (S)= ".$FinishSec."<br>";
CREATE TABLE `akshat`.`Participant` ( `Name` VARCHAR(100) NOT NULL , `ID` VARCHAR(100) NOT NULL , `Ans1` VARCHAR(100) NOT NULL , `Q2Min` VARCHAR(100) NOT NULL , `Q2Sec` VARCHAR(100) NOT NULL , `Ans2` VARCHAR(100) NOT NULL , `Q3Min` VARCHAR(100) NOT NULL , `Q3Sec` VARCHAR(100) NOT NULL , `Ans3` VARCHAR(100) NOT NULL , `Q4Min` VARCHAR(100) NOT NULL , `Q4Sec` VARCHAR(100) NOT NULL , `Ans4` VARCHAR(100) NOT NULL , `Q5Min` VARCHAR(100) NOT NULL , `Q5Sec` VARCHAR(100) NOT NULL , `Ans5` VARCHAR(100) NOT NULL , `FinishMin` VARCHAR(100) NOT NULL , `FinishSec` VARCHAR(100) NOT NULL ) ENGINE = InnoDB;
*/
?>