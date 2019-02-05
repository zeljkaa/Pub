// toggle navigation
$(document).ready(function(){
	$('.menu').click(function() {
		$('ul').toggleClass('active')
	})
})

//dugme za scroll 
$(document).ready(function() {
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $(".btnscroll").fadeIn();
        } else {
            $(".btnscroll").fadeOut();
        }
    });

    $(".btnscroll").click(function() {

        $("html, body").animate({

            scrollTop: 0
        }, 800);
    });
});


