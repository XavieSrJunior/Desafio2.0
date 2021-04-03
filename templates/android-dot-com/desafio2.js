
// estou substituindo a classe original pela variável Ednona para facilitar a visualização e implementação//
var ednona = document.querySelector(".mdl-navigation__link.mdl-typography--text-uppercase")  


//criando um escutador de eventos que é acionado quando a variável Ednona recebe um click//
ednona.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	//esse código preenche o dataLayer com os valores descritos no objeto//
	window.dataLayer.push({
	  'event': 'generic-event',
	  'eventCategory': 'android:header',
	  'eventAction': 'clique:header:menu',
	  'eventLabel': 'ednona'
	});

});

var tablets = document.querySelectorAll('.mdl-navigation__link.mdl-typography--text-uppercase')[1]

tablets.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	//esse código preenche o dataLayer com os valores descritos no objeto//
	window.dataLayer.push({
	  'event': 'generic-event',
	  'eventCategory': 'android:header',
	  'eventAction': 'clique:header:menu',
	  'eventLabel': 'tablets'
	});

});

var wear = document.querySelectorAll('.mdl-navigation__link.mdl-typography--text-uppercase')[2]

wear.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	//esse código preenche o dataLayer com os valores descritos no objeto//
	window.dataLayer.push({
	  'event': 'generic-event',
	  'eventCategory': 'android:header',
	  'eventAction': 'clique:header:menu',
	  'eventLabel': 'wear'
	});

});

var tv = document.querySelectorAll('.mdl-navigation__link.mdl-typography--text-uppercase')[3]

tv.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	//esse código preenche o dataLayer com os valores descritos no objeto//
	window.dataLayer.push({
	  'event': 'generic-event',
	  'eventCategory': 'android:header',
	  'eventAction': 'clique:header:menu',
	  'eventLabel': 'tv'
	});

});

var auto = document.querySelectorAll('.mdl-navigation__link.mdl-typography--text-uppercase')[4]

auto.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	//esse código preenche o dataLayer com os valores descritos no objeto//
	window.dataLayer.push({
	  'event': 'generic-event',
	  'eventCategory': 'android:header',
	  'eventAction': 'clique:header:menu',
	  'eventLabel': 'auto'
	});

});

var one = document.querySelectorAll('.mdl-navigation__link.mdl-typography--text-uppercase')[5]

one.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	//esse código preenche o dataLayer com os valores descritos no objeto//
	window.dataLayer.push({
	  'event': 'generic-event',
	  'eventCategory': 'android:header',
	  'eventAction': 'clique:header:menu',
	  'eventLabel': 'one'
	});

});

var play = document.querySelectorAll('.mdl-navigation__link.mdl-typography--text-uppercase')[6]

play.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	//esse código preenche o dataLayer com os valores descritos no objeto//
	window.dataLayer.push({
	  'event': 'generic-event',
	  'eventCategory': 'android:header',
	  'eventAction': 'clique:header:menu',
	  'eventLabel': 'play'
	});

});