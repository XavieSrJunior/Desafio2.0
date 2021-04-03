
// estou substituindo a classe original pela variável Ednona para facilitar a visualização e implementação//
var Ednona = document.querySelector(".mdl-navigation__link.mdl-typography--text-uppercase")  


//criando um escutador de eventos que é acionado quando a variável Ednona recebe um click//
Ednona.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	//esse código preenche o dataLayer com os valores descritos no objeto//
	window.dataLayer.push({
	  'event': 'generic-event',
	  'eventCategory': ' android:header ',
	  'eventAction': ' clique:header:menu ',
	  'eventLabel': ' ednona '
	});

});
