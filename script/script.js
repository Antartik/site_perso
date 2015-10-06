var interval_loader = null;

$(document).ready(function(){
	    $("#logoload1").animate({opacity : 0},300);
		setTimeout(function(){$("#logoload2").animate({opacity : 0},300);},200);
		setTimeout(function(){$("#logoload3").animate({opacity : 0},300);},400);
		setTimeout(function(){$("#logoload4").animate({opacity : 0},300);},600);
		setTimeout(function(){$("#logoload1").animate({opacity : 1},300);},800);
		setTimeout(function(){$("#logoload2").animate({opacity : 1},300);},1000);
		setTimeout(function(){$("#logoload3").animate({opacity : 1},300);},1200);
		setTimeout(function(){$("#logoload4").animate({opacity : 1},300);},1400);
	interval_loader = setInterval(function(){
		$("#logoload1").animate({opacity : 0},300);
		setTimeout(function(){$("#logoload2").animate({opacity : 0},300);},200);
		setTimeout(function(){$("#logoload3").animate({opacity : 0},300);},400);
		setTimeout(function(){$("#logoload4").animate({opacity : 0},300);},600);
		setTimeout(function(){$("#logoload1").animate({opacity : 1},300);},800);
		setTimeout(function(){$("#logoload2").animate({opacity : 1},300);},1000);
		setTimeout(function(){$("#logoload3").animate({opacity : 1},300);},1200);
		setTimeout(function(){$("#logoload4").animate({opacity : 1},300);},1400);
	},1800);
	$.pageLoader();
})

