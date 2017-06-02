$(document).foundation();



$(document).ready(function(){

// var elem = new Foundation.Magellan('.hyapps-menu-bar');


	var controller = new ScrollMagic.Controller();


	// create a loop through all the projects classes
	$('.project').each(function(){
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			duration: '90%',
			triggerHook: 0.9
		})
		.setClassToggle(this, 'fade-in') // add class to project01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'red',
			colorStart: 'red',
			colorEnd: 'red'
		}) // this requires a plugin
		.addTo(controller);

	});


//section-2-bike animation
var bikeAnimation = new ScrollMagic.Scene({
	triggerElement : '#section-2-bike img',
	duration: '90%',
	triggerHook: 0.9
})
.setClassToggle('#section-2-bike', 'fade-in-right')
.addIndicators({
	name: 'fade-bike',
	colortrigger: 'black',
	colorStart: '#75c695',
	colorEnd: 'pink'
})
.addTo(controller);

// section-2-text
var textAnimation = new ScrollMagic.Scene({
	triggerElement : '#section-2-text h2',
	duration: '90%',
	triggerHook: 0.9
})
.setClassToggle('#section-2-text', 'fade-in-left')
.addIndicators({
	name: 'fade-text',
	colortrigger: '',
	colorStart: '#75c695',
	colorEnd: 'pink'
})
.addTo(controller);

// parallax scene

var bikeparallax = new TimelineMax();
bikeparallax
.from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
.from('.parallax-bg-container', 2, {y: '-50%', ease:Power0.easeNone}, 0)
;

var slideParallaxScene = new ScrollMagic.Scene({
	triggerElement: '.parallax-bg',
	triggerHook: 1,
	duration: '100%'
})
.setTween(bikeparallax)
.addTo(controller);
});
























