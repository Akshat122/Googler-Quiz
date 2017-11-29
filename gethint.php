<?php

// get the q parameter from URL
$q = $_REQUEST["q"];
$Ques = $_REQUEST["Ques"];

$hint = "";
 
if($Ques == "1"){
                if ($q !== "") {
                    $q = strtolower($q);
                        if($q=="kamlabai gokhale"){
                        $hint="Correct";}
                   
                }
                    echo $hint === "" ? "Incorrect Answer Try again" : $hint;
}

else if ($Ques == 2){
            if ($q !== "") {
                $q = strtolower($q);
                    if($q=="john leslie toohey"){
                    $hint="Correct";}
            }
                echo $hint === "" ? "Incorrect Answer Try again" : $hint;
            
}
else if ($Ques == 3){
            if ($q !== "") {
                $q = strtolower($q);
                    if($q=="ke jie"){
                    $hint="Correct";}
            }
                echo $hint === "" ? "Incorrect Answer Try again" : $hint;
            
}
else if ($Ques == 4){
            if ($q !== "") {
                $q = strtolower($q);
                    if($q=="joséphine de beauharnais"){
                    $hint="Correct";}
            }
                echo $hint === "" ? "Incorrect Answer Try again" : $hint;
            
}
else if ($Ques == 5){
            if ($q !== "") {
                $q = strtolower($q);
                    if($q=="isaac asimov"){
                    $hint="Correct";}
            }
                echo $hint === "" ? "Incorrect Answer Try again" : $hint;
            
}

?>