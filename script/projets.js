

$(".projet").mouseenter(function(){
	$(this).find(".hover_projet").clearQueue().animate({opacity : 1},300);
});

$(".projet").mouseleave(function(){
	$(this).find(".hover_projet").clearQueue().animate({opacity : 0},300);
});

$("#menu1, #logo_head").click(function(){
	$("#logoload1, #logoload2, #logoload3, #logoload4").css({display : "none"});
	$("#chargement").css({opacity : 1});
	$("#chargement").fadeIn(200);
	setTimeout(function(){
		document.location.href="index.html"
	},200);
});

$("#menu3").click(function(){
	$("#chargement").css({opacity : 1});
	$("#chargement").fadeIn(200);
	setTimeout(function(){
		document.location.href="contact.html"
	},200);
});

function animation(){
	
}