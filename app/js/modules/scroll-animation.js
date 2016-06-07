$(document).ready(function() {

	var step1Height = $('.step1').height();
	var step2Height = $('.step2').height();
	var step3Height = $('.step3').height();
	var additMainHeight = $('.addit-block').height();
	var mainHight = window.innerHeight;



	// ======= content
		var content = new TimelineMax().append([
				TweenMax.fromTo( $('.content'), 0.8, {autoAlpha:0}, {autoAlpha:1, delay:.6}, 0.1),
			]);

	// ======= head
		var head_icons_box = new TimelineMax().append([
				TweenMax.staggerFromTo( $('.box'), 0.7, {autoAlpha:0, marginTop:40, immediateRender:true}, {autoAlpha:1, marginTop:0, delay:.6}, 0.1),
			]);

		var head_icons_box_r = new TimelineMax()
			.append([
				TweenMax.staggerFromTo( $('.box'), 0.7, {autoAlpha:1, marginTop:0, immediateRender:true}, {autoAlpha:0, marginTop:40, delay:.7}, 0.1),
			]);

	// ======= bg-animation
		var step2_bg = new TimelineMax()
			.append([
				TweenMax.fromTo($( '.step2 .backgrounds > .bg-color:nth-child(1)' ), 1.3, {height:0, marginTop:0, immediateRender:true}, {height:step2Height+1600, marginTop:0}),
				TweenMax.fromTo($( '.step2 .backgrounds > .bg-color:nth-child(2)' ), 1.1, {height:0, marginTop:0, immediateRender:true}, {height:step2Height+1600, marginTop:0}),
				TweenMax.fromTo($( '.step2 .backgrounds > .bg-color:nth-child(3)' ), 1.7, {height:0, marginTop:0, immediateRender:true}, {height:step2Height+1600, marginTop:0}),
				TweenMax.fromTo($( '.step2 .backgrounds > .bg-color:nth-child(4)' ), 1, {height:0, marginTop:0, immediateRender:true}, {height:step2Height+1600, marginTop:0}),
				TweenMax.fromTo($( '.step2 .backgrounds > .bg-color:nth-child(5)' ), 1.8, {height:0, marginTop:0, immediateRender:true}, {height:step2Height+1530, marginTop:70}),
				TweenMax.fromTo($( '.step2 .backgrounds > .bg-color:nth-child(6)' ), 1.2, {height:0, marginTop:0, immediateRender:true}, {height:step2Height+1476, marginTop:124})
			]);

			var main_bg = new TimelineMax()
			.append([
				TweenMax.fromTo($( '.addit-block .backgrounds > .bg-color:nth-child(1)' ), 1.3, {height:0, marginTop:mainHight, immediateRender:true}, {height:mainHight, marginTop:0}),
				TweenMax.fromTo($( '.addit-block .backgrounds > .bg-color:nth-child(2)' ), 2.1, {height:0, marginTop:mainHight, immediateRender:true}, {height:mainHight, marginTop:0}),
				TweenMax.fromTo($( '.addit-block .backgrounds > .bg-color:nth-child(3)' ), 0.7, {height:0, marginTop:mainHight, immediateRender:true}, {height:mainHight, marginTop:0}),
				TweenMax.fromTo($( '.addit-block .backgrounds > .bg-color:nth-child(4)' ), 2, {height:0, marginTop:mainHight, immediateRender:true}, {height:mainHight-320, marginTop:320}),
				TweenMax.fromTo($( '.addit-block .backgrounds > .bg-color:nth-child(5)' ), 2.8, {height:0, marginTop:mainHight, immediateRender:true}, {height:mainHight-500, marginTop:500}),
				// TweenMax.fromTo($( '.addit-block .backgrounds > .bg-color:nth-child(6)' ), 1.2, {height:0, marginTop:mainHight, immediateRender:true}, {height:mainHight-490, marginTop:490})
			]);


	// ========= elements animation
		var block2_title = new TimelineMax()
			.append([
				TweenMax.staggerFromTo( $('.block-name'), 0.7, {height:0, autoAlpha:0, marginLeft:-40, immediateRender:true}, {height:40,autoAlpha:1, marginLeft:0, delay:.7}, 0.1)
			]);
		var block2_items = new TimelineMax()
			.append([
				TweenMax.staggerFromTo( $('.list--item'), 0.7, {autoAlpha:0, marginTop:0, immediateRender:true}, {autoAlpha:1, marginTop:50, delay:.5}, 0.1)
			]);

		controller = new ScrollMagic.Controller({loglevel: 3});
		
		var scene1 = new ScrollMagic.Scene({triggerElement: ".icons-box", triggerHook: 0.7, reverse:true, offset: -50, loglevel: 3})
						.setTween(head_icons_box)
						// .addIndicators({
						//     colorStart: "rgba(255,0,0,0.5)",
						//     colorEnd: "rgba(255,0,255,0.5)", 
						//     colorTrigger : "rgba(255,255,255,1)",
						//     name: name
						// })
						.loglevel(3)
						.addTo(controller)

		var scene2 = new ScrollMagic.Scene({triggerElement: ".icons-box", triggerHook: 0.5, reverse:true, offset: 100, loglevel: 3})
						.setTween(head_icons_box_r)
						// .addIndicators({
						//     colorStart: "rgba(255,0,0,0.5)",
						//     colorEnd: "rgba(255,0,255,0.5)", 
						//     colorTrigger : "rgba(255,255,255,1)",
						//     name: "2 (duration: 0)"
						// })
						.loglevel(3)
						.addTo(controller)

		var scene3 = new ScrollMagic.Scene({triggerElement: ".step2", reverse:true, offset:-150, loglevel: 3})
						.setTween(step2_bg)
						// .addIndicators({
						//     colorStart: "rgba(255,0,0,0.5)",
						//     colorEnd: "rgba(255,0,255,0.5)", 
						//     colorTrigger : "rgba(255,255,255,1)",
						//     name: "bg-color"
						// })
						.loglevel(3)
						.addTo(controller)

		var scene4 = new ScrollMagic.Scene({triggerElement: ".block2", reverse:true, offset:-250, loglevel: 3})
						.setTween(block2_title)
						.loglevel(3)
						.addTo(controller)

		var scene5 = new ScrollMagic.Scene({triggerElement: ".block2", reverse:true, offset:-150, loglevel: 3})
						.setTween(block2_items)
						.addIndicators({
						    colorStart: "rgba(255,0,0,0.5)",
						    colorEnd: "rgba(255,0,255,0.5)", 
						    colorTrigger : "rgba(255,255,255,1)",
						    name: "icon-items"
						})
						.loglevel(3)
						.addTo(controller)


	// debug
	$("form.loglevel input[type=checkbox]").on("change", function (e) {
		var
			target = $(this).attr("id") == "logcontroller" ? controller : scene,
			level = $(this).prop("checked") ? 3 : 0;

		target.loglevel(level);
	});
	window.addEventListener('scroll', function(e){
		controller.update();
	});
});
