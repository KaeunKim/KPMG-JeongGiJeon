$(function(){
	$(".tab").click(function(e){
		e.preventDefault();
		$("#mobile").addClass("active");
		$(".dim").addClass("active");
	});
	$(".dim").click(function(){
		$("#mobile").removeClass("active");
		$(".dim").removeClass("active");
	});
	$("#mobile > ul > li").click(function(e){
		e.preventDefault();
		/*
		$("#mobile > ul > li").removeClass("active");
		$(this).addClass("active");
		$("#mobile ul ul").hide();
		$(this).children("ul").show();
		*/

		if($(this).hasClass("active") == false){
			$("#mobile > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#mobile ul ul").slideUp(300);
			$(this).children("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).children("ul").slideUp(300);
		}
	});
});
