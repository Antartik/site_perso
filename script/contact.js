
$("#menu1, #logo_head").click(function(){
	$("#chargement").css({opacity : 1});
	$("#chargement").fadeIn(200);
	setTimeout(function(){
		document.location.href="index.html"
	},200);
});

$("#menu2").click(function(){
	$("#chargement").css({opacity : 1});
	$("#chargement").fadeIn(200);
	setTimeout(function(){
		document.location.href="projets.html"
	},200);
});

function animation(){
	$("#picto1").transition({scale : 1},300);
	setTimeout(function(){
		$("#picto2").transition({scale : 1},300);
	},200);
	setTimeout(function(){
		$("#picto1").transition({left: "30px"},400);
		$("#input_nom").transition({left: "64px", opacity: 1, width: "350px"},400);
		$("#picto3").transition({scale : 1},300);
	},400);
	setTimeout(function(){
		$("#picto2").transition({left: "30px"},400);
		$("#input_mail").transition({left: "64px", opacity: 1, width: "350px"},400);
	},600);
	setTimeout(function(){
		$("#picto3").transition({left: "30px"},400);
		$("#input_message").transition({left: "64px", opacity: 1, width: "350px"},400).transition({height: "130px"},400);
	},800);
	setTimeout(function(){
		$("button").fadeIn(400);
		$("#input_message").css({overflow : "auto"});
	},1000);
	setTimeout(function(){
		$("#title_contact").transition({opacity : 1, top: "0px"},400);
	},1300);
}