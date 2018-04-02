$(document).ready( function() {

	// Logo
	var $logo 	= $('#logo');
	 if (location.href.indexOf("#") != -1) {
        if(location.href.substr(location.href.indexOf("#"))!='#about'){
        	$logo.show();
        }
    }
    
	// Show logo 
	$('#tab-container .tab a').click(function() {
	  $logo.slideDown('slow');
	});
	// Hide logo
	$('#tab-about').click(function() {
	  $logo.slideUp('slow');
	});	
function animMeter(){
    $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
}
animMeter();

      $('#tab-container').easytabs({
        animate			: true,
        updateHash		: true,
        transitionIn	: 'slideDown',
        transitionOut	: 'slideUp',
        animationSpeed	: 600,
        tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
            if($targetPanel.selector=='#resume'){
                    animMeter();
            }
        });
    });
function validateAndSubmit(){
    var form = document.getElementById("messageForm");
    var name = document.getElementById("name");
    var message = document.getElementById("message");
    var email = document.getElementById("email");
    var data = {
        name:name.value,
        message:message.value,
        email:email.value
    };
    console.log(data);
    if(!hasValue(data)){
        var error = document.getElementById("error");
        error.innerHTML = "<label id='error' class='error-label'>*Please fill all the Valid data</label><br>";
        console.log("Error ayo");
    }else{
        if(isEmailValid(data.email)) {
            $.ajax(
                {
                    data: data,
                    url: "https://b-kash-suggestions.herokuapp.com/messages",
                    method: 'POST',
                    success: function () {
                        alert("Thank you I will get back to you after I see your message");
                    }
                }
            );
        }else{
            var error = document.getElementById("error");
            error.innerHTML = "<label id='error' class='error-label'>*Please Enter valid Email</label><br>";
            email.style.borderColor="red";
        }
        //
    }
}
function hasValue(      object){
    for(var key in object){
        console.log(key);
        if(object[key]=='' || object[key]==null || object[key]==undefined){
            return false;
        }
    }
    return true;
}
function isEmailValid(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}