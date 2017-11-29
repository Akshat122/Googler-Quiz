<!DOCTYPE html>
    <html>
<head>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <script
  src="https://code.jquery.com/jquery-1.12.4.min.js"
  integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
  crossorigin="anonymous"></script>
    
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/iziToast.min.css">
<script src="js/iziToast.min.js" type="text/javascript"></script>
<?php
    $con = mysqli_connect("localhost","root","") or die("Cannot establish a connection to localhost");
	mysqli_select_db($con,"akshat") or die("Cannot select the DB");
    
    $result = mysqli_query($con,'SELECT isHosted FROM events where eventname="Googler";');
            if(mysqli_num_rows($result))
            {
                
              $record = mysqli_fetch_assoc($result);
                
                if($record['isHosted'])
                {
                    echo '<script>alert("True");</script>';
                    echo '<style>
                    #Quiz-btn{
                        height: 84px;
                        width: 147px;
                        font-size: 27px;
						margin-left: 82px;
                            visibility: none;
                            }
                <style>';
        echo '<script>alert("True");</script>';
                }
                else {
                     echo '<script>alert("False");</script>';
                    echo '<style>
                    #Quiz-btn{
                        height: 84px;
                        width: 147px;
                        font-size: 27px;
						margin-left: 82px;
                            visibility: hidden;
                            }
                <style>';
       
            }
        
   // if($record['isHosted']){ 
       
    //}
//} 
               
}
    ?>
        </head>
        <body>
            <style>
            #Absolute-Center {
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}

#Absolute-Center .is-Responsive {
  width: 50%; 
  height: 50%;
  min-width: 200px;
  max-width: 400px;
  padding: 40px;
    margin-top: 40vh;
    margin-left: 27vh;
    
}
                
            </style>
 


          <div class="container">
            <div class="row">
                <div class="Absolute-Center is-Responsive" style="margin-top: 40vh; margin-left: 27vh; padding: 40px; margin-top: 35vh; margin-left: 27vh;">
                    <img src="Mrgoogle.png" alt="Smiley face" width="70%" >  <button  id="Quiz-btn" class="btn btn-primary" onclick="post();">GO</button>  
                    <br><br>
                   <div class="form-group" >
            <form  action="Quiz.html" method="post">
                       <label for="usr">Name:</label>
                                <input type="text" class="form-control" name="userName" id="userName" style="width: 30%"><br>
                                <label for="usr" >SinuID / Enrollment no:</label>
                              <input type="text" class="form-control" id="userID" name="userID" style="width: 30%">
                        
                    </form>
</div>
                </div>
            </div>
        </div>      
        </body>
        <script>
           function post() {
     
    var userName,userID;
     userName=document.getElementById("userName").value;
     userID=document.getElementById("userID").value;
    if (userName=="" || userID=="") {
            alert("Enter all the Fields..");
        }
    else {
                   
                     window.location = "Quiz.html?UserName="+userName+"&UserID="+userID;
                 }
           }</script>

</html>