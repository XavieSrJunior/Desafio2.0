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

var scroll_button = document.querySelector(".android-fab.mdl-button.mdl-button--colored.mdl-js-button.mdl-button--fab.mdl-js-ripple-effect");  

scroll_button.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:be_together_not_the_same',
		'eventAction': 'clique:button',
		'eventLabel': 'scroll-button'
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

var search = document.querySelector(".mdl-button.mdl-js-button.mdl-button--icon");  

search.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:header',
		'eventAction': 'clique:header:menu',
		'eventLabel': 'search'
	});

});

var botao_opcoes = document.querySelector(".android-more-button.mdl-button.mdl-js-button.mdl-button--icon.mdl-js-ripple-effect");  

botao_opcoes.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:header',
		'eventAction': 'clique:header:menu',
		'eventLabel': 'botao_opcoes'
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
		'eventAction': 'clique:link',
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
		'eventLabel': 'get_a_clean_customisable_home_screen'
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


//-- fim da sessão more_from_android --//

var versions = document.querySelectorAll(".android-link.android-link-menu.mdl-typography--font-light")[0];

versions.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:footer',
		'eventAction': 'clique:footer:link',
		'eventLabel': 'versions'
	});
});

var for_developers = document.querySelectorAll(".android-link.android-link-menu.mdl-typography--font-light")[1];

for_developers.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:footer',
		'eventAction': 'clique:footer:link',
		'eventLabel': 'for_developers'
	});
});

var blog = document.querySelector("#blog");

blog.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:footer',
		'eventAction': 'clique:footer:link',
		'eventLabel': 'blog'
	});
});

var privacy_policy = document.querySelector("#privacy");

privacy_policy.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:footer',
		'eventAction': 'clique:footer:link',
		'eventLabel': 'privacy_policy'
	});
});

var back_to_top = document.querySelector(".mdl-mega-footer--right-section");

back_to_top.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:footer',
		'eventAction': 'clique:link',
		'eventLabel': 'back_to_top'
	});
});

//-- fim da sessão menu_footer --//

var view_source = document.querySelector(".mdl-button.mdl-js-button.mdl-button--raised.mdl-js-ripple-effect.mdl-color--accent.mdl-color-text--accent-contrast");

view_source.addEventListener("click", function(){

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'generic-event',
		'eventCategory': 'android:geral',
		'eventAction': 'clique:link',
		'eventLabel': 'view_source'
	});
});

// fim dos comits //