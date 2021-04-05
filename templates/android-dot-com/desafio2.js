var be_together = document.querySelector("#imagem");  

be_together.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:be_together_not_the_same',
		'eventAction': 'clique:link',
		'eventLabel': 'create_your_android_character'
	});

});

//--fim da sessão be_together_not_the_same--//

//--substituindo a classe original pela variável Ednona para facilitar a visualização e implementação--//
var ednona = document.querySelector(".mdl-navigation__link.mdl-typography--text-uppercase")  


//--criando um escutador de eventos que é acionado quando a variável Ednona recebe um click--//
ednona.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
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
	window.dataLayer.push({
	  'event': 'generic-event',
	  'eventCategory': 'android:header',
	  'eventAction': 'clique:header:menu',
	  'eventLabel': 'play'
	});

});

//--final do tageamento do campo header--//

var androidWear = document.querySelector('.android-wear.android-screen')

androidWear.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:powering_screen_of_all_sizes',
		'eventAction': 'clique:banner',
		'eventLabel': 'androidWear'
	});
});

var phones = document.querySelector('.android-phone.android-screen');


phones.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:powering_screen_of_all_sizes',
		'eventAction': 'clique:banner',
		'eventLabel': 'phones'
	});
});

var tablets = document.querySelector('.android-tablet.android-screen');


tablets.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:powering_screen_of_all_sizes',
		'eventAction': 'clique:banner',
		'eventLabel': 'tablets'
	});
});

var android_tv = document.querySelector('.android-tv.android-screen');


android_tv.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:powering_screen_of_all_sizes',
		'eventAction': 'clique:banner',
		'eventLabel': 'android_tv'
	});
});

var coming_soon = document.querySelector('.android-auto.android-screen');


coming_soon.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:powering_screen_of_all_sizes',
		'eventAction': 'clique:banner',
		'eventLabel': 'coming_soon'
	});
});
//--final do tageamento powering_screens_of_all_sizes--//

var see_whats_new = document.querySelector('.mdl-typography--font-regular.mdl-typography--text-uppercase.android-alt-link');

see_whats_new.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'andoird:the_best_of_google_built_in:the_best_of_google_built_in',
		'eventAction': 'clique:banner',
		'eventLabel': 'see_whats_new_in_the_play_store'
	});
});

//--final da sessão see_what's_new_in_the_google_built_in--//

var customise = document.querySelector('.android-link.mdl-typography--font-light');

customise.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'andorid:customised_by_you_for_you',
		'eventAction':  'clique:link',
		'eventLabel': 'customise_your_phone'
	});
});

//--final da sessão customized_for_you--//

var get_going = document.querySelectorAll('.mdl-card__actions')[0]

get_going.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:more_from_android',
		'eventAction': 'clique:card',
		'eventLabel': 'get_going_on_android'
	});
});

var create = document.querySelectorAll(".mdl-card__actions")[1];

create.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:more_from_android',
		'eventAction':  'clique:card',
		'eventLabel': 'create_your_own_android_character'
	});
});

var get_a_clean = document.querySelectorAll(".mdl-card__actions")[2];

get_a_clean.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:more_from_android',
		'eventAction': 'clique:card',
		'eventLabel': 'get_going_on_android'
	});
});

var millions = document.querySelectorAll(".mdl-card__actions")[3];

millions.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:more_from_android',
		'eventAction': 'clique:card',
		'eventLabel': 'millions_to_choose_from'
	});
});
