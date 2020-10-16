$(document).ready(function(){

	$("#logotipo").on("mouseover",function(){

		$('#banner h1').addClass("efeito");

	}).on("mouseout", function(){
		$('#banner h1').removeClass("efeito");
				});
	$("#input-search").on("focus", function(){//quando clicar na barra de search
		$("li.search").addClass("ativo");//busca a li com a classe search e adiciona uma classe css de efeito
	}).on("blur",function(){//assim que remover o foco do search
		$("li.search").removeClass("ativo");//remove o efeito da classe search
	});

	$(".thumbnails").owlCarousel({
		loop:true,
		margin:10,
		//nav:true,
		//navText: ["Anterior", "Próximo"],
		autoplay:true,
		autoplayTimeout:5000,
		responsive: {
			0:{
				items:1
			},
			480:{
				items:3
			},
			768:{
				items:4
			}
		}
	});

	var owl = $('.owl-carousel');

    owl.owlCarousel();
 
    $('#btn-news-prev').click(function() {
       	owl.trigger('next.owl.carousel');
    });
 
    $('#btn-news-next').click(function() {
        owl.trigger('next.owl.carousel');
    });

    $("#page-up").on("click", function(event){
    	$("html,body").animate({
    		scrollTop:0
    	}, 1000);

    	event.preventDefault();

    });

    $("#btn-bars").on("click", function(){
    	$("header").toggleClass("open-menu");
    });

    $("#menu-mobile-mask, .btn-close").on("click", function(){
    	$("header").removeClass("open-menu");
    });

    $("#btn-search").on("click", function(){
    	$("header").toggleClass("open-search");
    	$("#input-search-mobile").focus();
    });

});