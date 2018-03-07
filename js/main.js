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

    console.log("name",name.value);
    console.log("mesage",message.value);
    console.log("email",email.value);
    var data = {
        name:name,
        message:message,
        email:email
    };
    $.ajax({
        type: "POST",
        data :JSON.stringify(data),
        url: "api/Customer",
        contentType: "application/json"
    });
}