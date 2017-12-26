$(document).on("scroll",function(){
    	if($(document).scrollTop()>  0){
        	$(".for-scroll").removeClass("for-scroll-off").addClass("for-scroll-on");
    	} else{
        	$(".for-scroll").removeClass("for-scroll-on").addClass("for-scroll-off");
    	}
});