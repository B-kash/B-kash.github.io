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
        $.ajax(
            {
                data:JSON.stringify(data),
                // url:"http://localhost:3000/messages",
                url:"https://b-kash-suggestions.herokuapp.com/messages",
                method:'POST',
                success: function(){
                    alert("Thank you I will get back to you after I see your message");
                }
            }
        );
    }
}
function hasValue(object){
    for(var key in object){
        console.log(key);
        if(object[key]=='' || object[key]==null || object[key]==undefined){
            return false;
        }
    }
    return true;
}