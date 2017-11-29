
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var startMin,startSec,Q2Min,Q2Sec,Q3Min,Q3Sec,Q4Min,Q4Sec,Q5Min,Q5Sec,FinishMin,FinishSec;
startMin=30;
startSec=0;
Q2Min="NA";
Q2Sec="NA";
Q3Min="NA";
Q3Sec="NA";
Q4Min="NA";
Q4Sec="NA";
Q5Min="NA";
Q5Sec="NA";
FinishMin=0;
FinishSec=0;





$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});


window.onload=counter;
        function counter()
        {
            minutes=0;
        seconds = 10;
        countDown();
        }	

        function countDown(){
            if(minutes== 0 && seconds == 0 )
                post();
        document.getElementById("remain").innerHTML=seconds;
        document.getElementById("remain2").innerHTML=minutes;    
        setTimeout("countDown()",1000);
            if(seconds == 0 && minutes == 0)
                {
                   document.msform.submit();
                    alert("Success...");
                    window.location="index.php";
                }else if (seconds == 0 && minutes !=0)
                    {
                        minutes--;
                        seconds=60;
                    }
            else {
                seconds--;		
                }
        }

//------------------------------------------------------------------------------------------------------------
function Check1(str) {
    if (str.length == 0) { 
        document.getElementById("hint1").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("hint1").innerHTML = this.responseText;
                if(this.responseText == "Correct"){
                   //   alert("Congratulations correct answer!!");
                      
                       Q2Min=minutes;
                        Q2Sec=seconds;
                   //   alert(Q2Min+" min and "+Q2Sec+" sec");
                     $('#next1').click();

                }
            }
        };
        xmlhttp.open("GET", "gethint.php?q=" + str +"&Ques=1", true);
        xmlhttp.send();
    }
}
//-------------------------------------------------------------------------------------------------------------------
function Check2(str) {
    if (str.length == 0) { 
        document.getElementById("hint2").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("hint2").innerHTML = this.responseText;
                if(this.responseText == "Correct"){
               //       alert("Congratulations correct answer!!");
                      
                       Q3Min=minutes;
                        Q3Sec=seconds;
               //       alert(Q3Min+" min and "+Q3Sec+" sec");
                     $('#next2').click();

                }
            }
        };
        xmlhttp.open("GET", "gethint.php?q=" + str+"&Ques=2", true);
        xmlhttp.send();
    }
}
//-------------------------------------------------------------------------------------------------------------------
function Check3(str) {
    if (str.length == 0) { 
        document.getElementById("hint3").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("hint3").innerHTML = this.responseText;
                if(this.responseText == "Correct"){
                  //    alert("Congratulations correct answer!!");
                      
                       Q4Min=minutes;
                        Q4Sec=seconds;
                 //     alert(Q4Min+" min and "+Q4Sec+" sec");
                     $('#next3').click();

                }
            }
        };
        xmlhttp.open("GET", "gethint.php?q=" + str+"&Ques=3", true);
        xmlhttp.send();
    }
}//-------------------------------------------------------------------------------------------------------------------
function Check4(str) {
    if (str.length == 0) { 
        document.getElementById("hint4").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("hint4").innerHTML = this.responseText;
                if(this.responseText == "Correct"){
                  //    alert("Congratulations correct answer!!");
                      
                       Q5Min=minutes;
                        Q5Sec=seconds;
                 ///     alert(Q5Min+" min and "+Q5Sec+" sec");
                     $('#next4').click();

                }
            }
        };
        xmlhttp.open("GET", "gethint.php?q=" + str+"&Ques=4", true);
        xmlhttp.send();
    }
}//-------------------------------------------------------------------------------------------------------------------
function Check5(str) {
    if (str.length == 0) { 
        document.getElementById("hint5").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("hint5").innerHTML = this.responseText;
                if(this.responseText == "Correct"){
                  //    alert("Congratulations correct answer!!");
                      
                       FinishMin=minutes;
                        FinishSec=seconds;
                        post();
                //      alert(FinishMin+" min and "+FinishSec+" sec");
                    // $('#next1').click();

                }
            }
        };
        xmlhttp.open("GET", "gethint.php?q=" + str+"&Ques=5", true);
        xmlhttp.send();
    }
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


var UserName = getUrlParameter('UserName');
var UserID = getUrlParameter('UserID');



 function post() {
     
    var Ans1,Ans2,Ans3,Ans4,Ans5;
     Ans1=document.getElementById("Ans1").value;
     Ans2=document.getElementById("Ans2").value;
     Ans3=document.getElementById("Ans3").value;
     Ans4=document.getElementById("Ans4").value;
     Ans5=document.getElementById("Ans5").value;
     FinishMin=minutes;
     FinishSec=seconds;
    $.ajax({
      type: "POST",
      url: 'getinfo.php',
      data: ({Ans1:Ans1, Ans2:Ans2, Ans3:Ans3, Ans4:Ans4, Ans5:Ans5, Q2Min : Q2Min, Q2Sec : Q2Sec, Q3Min : Q3Min, Q3Sec : Q3Sec, Q4Min : Q4Min, Q4Sec : Q4Sec, Q5Min : Q5Min, Q5Sec : Q5Sec,UserName:UserName,UserID:UserID}),
      success: function(data) {
          // alert(data);
          //move();
      }
    });
   
 }

function move(){
     //window.location = "index.html";
   
}






 