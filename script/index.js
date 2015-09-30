var position_slider = 1;
var click_ok = true;

$("#right_btn").click(function(){
	if(click_ok){
		click_ok = false;
		$(".nav_slide").removeClass("nav_current");
		if(position_slider==5){
			$("#nav_slide1").addClass("nav_current");
			$("#slide1").css({left: "100%"});
			$("#slide5").animate({left: "-100%"},600);
			$("#slide1").animate({left: "0%"},600);

			$("#slide1 .zone_content_slide .content_slide_1").css({"margin-left" : "200px"});
			$("#slide1 .zone_content_slide .content_slide_1").animate({"margin-left" : "0px"},500);
			$("#slide1 .zone_content_slide .content_slide_2").css({"margin-left" : "200px"});
			$("#slide1 .zone_content_slide .content_slide_2").animate({"margin-left" : "0px"},800);
			$("#slide1 .zone_content_slide .content_slide_3").css({opacity : 0});
			$("#slide1 .zone_content_slide .content_slide_3").delay(500).animate({opacity : 1},400);
			$("#slide1 .zone_content_slide .content_slide_4").css({"margin-left" : "300px"});
			$("#slide1 .zone_content_slide .content_slide_4").animate({"margin-left" : "0px"},900);
			$("#slide1 .zone_content_slide .content_slide_5").css({"margin-left" : "400px"});
			$("#slide1 .zone_content_slide .content_slide_5").animate({"margin-left" : "0px"},1000);

			position_slider=1;
		}else{
			$("#nav_slide"+(position_slider+1)).addClass("nav_current");
			$("#slide"+(position_slider+1)).css({left: "100%"});
			$("#slide"+position_slider).animate({left: "-100%"},600);
			$("#slide"+(position_slider+1)).animate({left: "0%"},600);

			$("#slide"+(position_slider+1)+" .zone_content_slide .content_slide_1").css({"margin-left" : "200px"});
			$("#slide"+(position_slider+1)+" .zone_content_slide .content_slide_1").animate({"margin-left" : "0px"},500);
			$("#slide"+(position_slider+1)+" .zone_content_slide .content_slide_2").css({"margin-left" : "200px"});
			$("#slide"+(position_slider+1)+" .zone_content_slide .content_slide_2").animate({"margin-left" : "0px"},800);
			$("#slide"+(position_slider+1)+" .zone_content_slide .content_slide_3").css({opacity : 0});
			$("#slide"+(position_slider+1)+" .zone_content_slide .content_slide_3").delay(500).animate({opacity : 1},400);
			$("#slide"+(position_slider+1)+" .zone_content_slide .content_slide_4").css({"margin-left" : "300px"});
			$("#slide"+(position_slider+1)+" .zone_content_slide .content_slide_4").animate({"margin-left" : "0px"},900);
			$("#slide"+(position_slider+1)+" .zone_content_slide .content_slide_5").css({"margin-left" : "400px"});
			$("#slide"+(position_slider+1)+" .zone_content_slide .content_slide_5").animate({"margin-left" : "0px"},1000);

			position_slider++;
		}
		setTimeout(function(){
			click_ok = true;
		},800);
	}
});

$("#left_btn").click(function(){
	if(click_ok){
		click_ok = false;
		$(".nav_slide").removeClass("nav_current");
		if(position_slider==1){
			$("#nav_slide5").addClass("nav_current");
			$("#slide5").css({left: "-100%"});
			$("#slide1").animate({left: "100%"},600);
			$("#slide5").animate({left: "0%"},600);

			$("#slide5 .zone_content_slide .content_slide_1").css({"margin-left" : "-200px"});
			$("#slide5 .zone_content_slide .content_slide_1").animate({"margin-left" : "0px"},700);
			$("#slide5 .zone_content_slide .content_slide_2").css({"margin-left" : "-200px"});
			$("#slide5 .zone_content_slide .content_slide_2").animate({"margin-left" : "0px"},800);
			$("#slide5 .zone_content_slide .content_slide_3").css({opacity : 0});
			$("#slide5 .zone_content_slide .content_slide_3").delay(500).animate({opacity : 1},400);
			$("#slide5 .zone_content_slide .content_slide_4").css({"margin-left" : "-300px"});
			$("#slide5 .zone_content_slide .content_slide_4").animate({"margin-left" : "0px"},900);
			$("#slide5 .zone_content_slide .content_slide_5").css({"margin-left" : "-400px"});
			$("#slide5 .zone_content_slide .content_slide_5").animate({"margin-left" : "0px"},1000);

			position_slider=5;
		}else{
			$("#nav_slide"+(position_slider-1)).addClass("nav_current");
			$("#slide"+(position_slider-1)).css({left: "-100%"});
			$("#slide"+position_slider).animate({left: "100%"},600);
			$("#slide"+(position_slider-1)).animate({left: "0%"},600);

			$("#slide"+(position_slider-1)+" .zone_content_slide .content_slide_1").css({"margin-left" : "-200px"});
			$("#slide"+(position_slider-1)+" .zone_content_slide .content_slide_1").animate({"margin-left" : "0px"},700);
			$("#slide"+(position_slider-1)+" .zone_content_slide .content_slide_2").css({"margin-left" : "-200px"});
			$("#slide"+(position_slider-1)+" .zone_content_slide .content_slide_2").animate({"margin-left" : "0px"},800);
			$("#slide"+(position_slider-1)+" .zone_content_slide .content_slide_3").css({opacity : 0});
			$("#slide"+(position_slider-1)+" .zone_content_slide .content_slide_3").delay(500).animate({opacity : 1},400);
			$("#slide"+(position_slider-1)+" .zone_content_slide .content_slide_4").css({"margin-left" : "-300px"});
			$("#slide"+(position_slider-1)+" .zone_content_slide .content_slide_4").animate({"margin-left" : "0px"},900);
			$("#slide"+(position_slider-1)+" .zone_content_slide .content_slide_5").css({"margin-left" : "-400px"});
			$("#slide"+(position_slider-1)+" .zone_content_slide .content_slide_5").animate({"margin-left" : "0px"},1000);

			position_slider--;
		}
		setTimeout(function(){
			click_ok = true;
		},800);
	}
});

$(".nav_slide").click(function(){
	var current_id = $(this).attr("id");
	var current = parseInt(current_id.substring(9,10));
	
	if(click_ok){
		click_ok = false;
		$(".nav_slide").removeClass("nav_current");
		$("#nav_slide"+current).addClass("nav_current");
		if(current>position_slider){	
			$("#slide"+current).css({left: "100%"});
			$("#slide"+position_slider).animate({left: "-100%"},600);
			$("#slide"+current).animate({left: "0%"},600);
			$("#slide"+current+" .zone_content_slide .content_slide_1").css({"margin-left" : "200px"});
			$("#slide"+current+" .zone_content_slide .content_slide_1").animate({"margin-left" : "0px"},500);
			$("#slide"+current+" .zone_content_slide .content_slide_2").css({"margin-left" : "200px"});
			$("#slide"+current+" .zone_content_slide .content_slide_2").animate({"margin-left" : "0px"},800);
			$("#slide"+current+" .zone_content_slide .content_slide_3").css({opacity : 0});
			$("#slide"+current+" .zone_content_slide .content_slide_3").delay(500).animate({opacity : 1},400);
			$("#slide"+current+" .zone_content_slide .content_slide_4").css({"margin-left" : "300px"});
			$("#slide"+current+" .zone_content_slide .content_slide_4").animate({"margin-left" : "0px"},900);
			$("#slide"+current+" .zone_content_slide .content_slide_5").css({"margin-left" : "400px"});
			$("#slide"+current+" .zone_content_slide .content_slide_5").animate({"margin-left" : "0px"},1000);
		}else if(current<position_slider){	
			$("#slide"+current).css({left: "-100%"});
			$("#slide"+position_slider).animate({left: "100%"},600);
			$("#slide"+current).animate({left: "0%"},600);
			$("#slide"+current+" .zone_content_slide .content_slide_1").css({"margin-left" : "-200px"});
			$("#slide"+current+" .zone_content_slide .content_slide_1").animate({"margin-left" : "0px"},500);
			$("#slide"+current+" .zone_content_slide .content_slide_2").css({"margin-left" : "-200px"});
			$("#slide"+current+" .zone_content_slide .content_slide_2").animate({"margin-left" : "0px"},800);
			$("#slide"+current+" .zone_content_slide .content_slide_3").css({opacity : 0});
			$("#slide"+current+" .zone_content_slide .content_slide_3").delay(500).animate({opacity : 1},400);
			$("#slide"+current+" .zone_content_slide .content_slide_4").css({"margin-left" : "-300px"});
			$("#slide"+current+" .zone_content_slide .content_slide_4").animate({"margin-left" : "0px"},900);
			$("#slide"+current+" .zone_content_slide .content_slide_5").css({"margin-left" : "-400px"});
			$("#slide"+current+" .zone_content_slide .content_slide_5").animate({"margin-left" : "0px"},1000);
		}
		position_slider=current;
		setTimeout(function(){
			click_ok = true;
		},800);
	}
})