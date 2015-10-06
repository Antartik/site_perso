



$("#menu1").click(function(){
	$("#chargement").css({opacity : 1});
	$("#chargement").fadeIn(200);
	setTimeout(function(){
		document.location.href="index.html"
	},200);
});