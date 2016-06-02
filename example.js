$(document).ready(function() {
	
	var step1Height;
	var step2Height;
	var step3Height;
	var splitted;
	var splitted2;
	var splitted3;
	var controller;
	var intro = true;
	var isVideo = false;
	
	//Scroll to top of page when refresh
	$(window).scrollTop(0);
	
	//Detect touch devices
	var  android = ( navigator.userAgent.match(/Android/g) ? true : false );
	var  iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
	if(android || iOS || (/MSIE (\d+\.\d+);/.test(navigator.userAgent))) {
		$('.expetises-video').css({display:'none'});
		$('.expetises-im').css({display:'block'});
		$('.step1 .background .bg-color').addClass('background-texture');
		$('.step3 .background .bg-color').addClass('background-texture');
		$('.footer').addClass('background-texture');
		$('.intro-visuel').addClass('intro-visuel-texture');
	}else{
		$('.expetises-video').css({display:'block'});
		$('.expetises-im').css({display:'none'});
		isVideo = true;
		//Bruit
		var noiseBg = new NoiseBg("noise");
  		noiseBg.init();
	}
	  	
	window.loaded = function(){ 
		
		step1Height = $('.step1').height();
		step2Height = $('.step2').height();
		step3Height = $('.step3').height();

		splitted = $("h1 span:nth-child(1).color-white");
		splitted.html( splitted.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />'));
		splitted2 = $("h1 span:nth-child(2).color-blue");
		splitted2.html( splitted2.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />'));
		splitted2b = $("h1 span:nth-child(3).color-blue");
		splitted2b.html( splitted2b.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />'));
		splitted3 = $("h1 span:nth-child(4).color-white");
		
		splitted3.html( splitted3.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />'));
		splitted3b = $("h1 span:nth-child(5).color-white");
		splitted3b.html( splitted3b.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />'));
		
		$('#block1 .container-data').css('visibility', 'visible');
		
		TweenMax.fromTo($( '.step1 .background .bg-colors > .bg-color:nth-child(1)' ), 2.0, {height:1200, marginTop:1200, immediateRender:true}, {height:$('.step1').height()+1200, marginTop:0, ease:Strong.easeIn});
		TweenMax.fromTo($( '.step1 .background .bg-colors > .bg-color:nth-child(2)' ), 1.9, {height:1200, marginTop:1200, immediateRender:true}, {height:$('.step1').height()+1200, marginTop:0, ease:Strong.easeIn});
		TweenMax.fromTo($( '.step1 .background .bg-colors > .bg-color:nth-child(3)' ), 2.2, {height:1200, marginTop:1200, immediateRender:true}, {height:$('.step1').height()+1200, marginTop:0, ease:Strong.easeIn});
		TweenMax.fromTo($( '.step1 .background .bg-colors > .bg-color:nth-child(4)' ), 2.4, {height:1200, marginTop:1200, immediateRender:true}, {height:$('.step1').height()+1200, marginTop:0, ease:Strong.easeIn});
		
	    TweenMax.to($( '.intro-visuel-shadow'), 3, {autoAlpha:1, marginTop:0, ease:Expo.easeOut, delay:3});
	    TweenMax.to($( '.intro-visuel-halo'), 3, {autoAlpha:1, marginTop:0, ease:Expo.easeOut, delay:2.5});
	    TweenMax.to($( '.intro-visuel'), 3, {autoAlpha:1, marginTop:0, ease:Expo.easeOut, delay:2.1, onComplete:function(){intro = false;}});
	    TweenMax.to($( '.intro-visuel-gouttes'), 3, {autoAlpha:1, marginTop:0, ease:Expo.easeOut, delay:2.1});
	    
	    var tl_teaser_intro = new TimelineMax()
			.append([
				TweenMax.staggerFromTo( splitted.find("span"), 0.2, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:2.3}, 0.03),
				TweenMax.staggerFromTo( splitted2.find("span"), 0.2, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:2.7}, 0.03),
				TweenMax.staggerFromTo( splitted2b.find("span"), 0.2, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:2.9}, 0.03),
				TweenMax.staggerFromTo( splitted3.find("span"), 0.1, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:3.6}, 0.043),
				TweenMax.staggerFromTo( splitted3b.find("span"), 0.1, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:3.9}, 0.03)
			])
			
		initScrollAnimation();
		if(isVideo) setTimeout(addVideo, 3000);
	}
    
    function addMemberSocialIco(){
    	$('.team-member-social').each(function(index, value) {
		       	$(this).append();
		});	
    }
    
	function onResize(){
		$( '#block1 .container-data' ).css('top',($(window).height() - $( '#block1 .container-data' ).height() + $( '#block1 .container-data' ).height()*.5)*.5);
		
	}  
	
	function getFinalHeight(target){
		return target.height();
	}
	
	function addVideo(){
		$('.video').html("<video class='videoplayer' width='320' height='568' autoplay loop><source src='"+base_url+"site2016/home/images/VC_soundoftime.mp4' type='video/mp4'></video>");
	}
    
   	$(window).resize(function(){onResize();});
	onResize();
    
    var didScroll = false;
	var lastScrollTop = 0;
	var delta = 0;
	var navbarHeight = $('header').outerHeight();
	
	//Disable scroll for intro animation
	$(window).scroll(function(event){
		if(intro){
			$(window).scrollTop(0);
		} 
		didScroll = true;
	});
	
	//Hide logo on scroll
	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
			}else{
				var timeNow = new Date().getTime();
				if(timeNow - lastAnimation < quietPeriod) {
			        	//event.preventDefault();
			            return;
			        }
			    TweenMax.to($('#logo-details'), .8, {autoAlpha:1, ease:Expo.easeOut});
			}
		}, 250);
	
	var lastAnimation = 0;
	var quietPeriod = 1500;
		// Hide logo on scroll 
	function hasScrolled() {
		var st = $(this).scrollTop();
		var timeNow = new Date().getTime();
		
	    // If they scrolled down and are past the navbar, hide nav-bar
		if (st > lastScrollTop){
			// Scroll Down
			TweenMax.to($('#logo-details'), .8, {autoAlpha:0, ease:Expo.easeOut});
		} else {
			TweenMax.to($('#logo-details'), .8, {autoAlpha:0, ease:Expo.easeOut});
			
		}
		lastScrollTop = st;
		lastAnimation = timeNow;
	}
	
	//Split slide project name for animation
	$('.project-name').each(function(){
		$(this).html( $(this).html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />').replace('<span>&</span><span>a</span><span>m</span><span>p</span><span>;</span>', '<span>&amp;<span>') );
	});
	
	
	
	//Split Titles for animation
	var block2_splitted = $("#block2 h2 span:nth-child(1).color-white.split");
		block2_splitted.html( block2_splitted.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />') );//replace(/<br ?\/?>/g, "<br>")
	var block2_splitted2 = $("#block2 h2 span:nth-child(2).color-blue");
		block2_splitted2.html( block2_splitted2.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />') );
	var block2_splitted3 = $("#block2 h2 span:nth-child(3).color-white");
		block2_splitted3.html( block2_splitted3.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />') );
	var block2_splitted4 = $("#block2 h2 span:nth-child(4).color-white");
		block2_splitted4.html( block2_splitted4.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />') );
	var block4_splitted = $("#block4 h2");
		block4_splitted.html( block4_splitted.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />') );
	var block4_splittedb = $("#block4 .container-data > span");
		block4_splittedb.html( block4_splittedb.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />') );
	var block6_splitted = $("#block6 h2");
		block6_splitted.html( block6_splitted.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />') );
	var block6_splittedb = $("#block6 .container-data > span");
		block6_splittedb.html( block6_splittedb.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />') );
	var title_lastprojects_splitted = $("#block3 h3");
		title_lastprojects_splitted.html( title_lastprojects_splitted.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />') );
	var title_expertises_splitted = $("#block5 h2");
		title_expertises_splitted.html( title_expertises_splitted.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />') );
	/*var title_expertises_splittedb = $("#block5 .expertises .expertises-data h3");
		title_expertises_splittedb.html( title_expertises_splittedb.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />') );
*/
	//var title_awards_splitted = $("#block5 .container-data .chapter-subtitle h3");
		//title_awards_splitted.html( title_awards_splitted.html().replace("&amp;", "<span>&amp;</span>").replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;").replace('<span><</span><span>b</span><span>r</span><span>></span>', '<br />') );


	function killTweens(){
		TweenMax.killTweensOf($(".intro-visuel"));
	}
	
	
	//Scroll animation
	function initScrollAnimation(){
      	
		////// ScrollMagic //////
		/*var tl_kill_intro = new TimelineMax()
			.append([
				TweenMax.to($('.intro-visuel'), .4, {autoAlpha:1, onStart:killTweens, delay:0})
			])
			*/
		var tl_visuel_intro = new TimelineMax()
			.append([
				TweenMax.to($('.intro-visuel'), .1, {marginTop:-500}),//, onStart:killTweens, delay:.5
				TweenMax.to($('.intro-visuel-shadow'), .1, {marginTop:-100}),
				TweenMax.to($('.intro-visuel-halo'), .1, {marginTop:-300}),
				TweenMax.to($('.intro-visuel-gouttes'), .1, {marginTop:-280})
			])
		
		/*var tl_teaser_hide = new TimelineMax()
			.append([
				TweenMax.to($('#block1 .container-data'), .7, {autoAlpha:0})
			])
		*/	
		
		var tl_title1 = new TimelineMax()
			.append([
				TweenMax.fromTo( $('#block2 .container-data .chapter-count .separator'), .6, {width:0, marginLeft:100, immediateRender:true}, {bezier:[{width:130, marginLeft:50}, {width:110, marginLeft:-150}, {width:80, marginLeft:-59}], ease:Power1.easeInOut})
			])
			.append([
				TweenMax.fromTo($('#block2 .container-data .chapter-count .count'), .4, {autoAlpha:0, marginLeft:-20, immediateRender:true}, {autoAlpha:1, marginLeft:0}),
			]);

		var block2_text = new TimelineMax()
			.append([
				TweenMax.staggerFromTo( block2_splitted.find("span"), 0.2, {autoAlpha:0, immediateRender:true}, {autoAlpha:1}, 0.01),
				TweenMax.staggerFromTo( block2_splitted2.find("span"), 0.2, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:.8}, 0.01),
				TweenMax.staggerFromTo( block2_splitted3.find("span"), 0.2, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:1}, 0.01),
				TweenMax.staggerFromTo( block2_splitted4.find("span"), 0.2, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:1.2}, 0.01)
	    	]);
			
		var slider_projects = new TimelineMax()
			.append([
				TweenMax.to($('.slider-projets'), 1, {autoAlpha:1}),
				TweenMax.fromTo($('.slider-item-first .slide-left-image-container'), 0.7, {width:0, marginLeft:580, immediateRender:true}, {width:580, marginLeft:0, ease:Expo.easeOut}),
				TweenMax.fromTo($('.slider-item-first .slide-right-image-container'), 0.8, {width:0, marginLeft:1600, immediateRender:true}, {width:860, marginLeft:740, ease:Expo.easeOut}),
				TweenMax.fromTo($('#block3 .container-data .chapter-subtitle .separator'), .6, {width:0, marginLeft:-240, immediateRender:true}, {width:240, marginLeft:0, ease:Expo.easeInOut, delay:.8}), 
				TweenMax.staggerFromTo( title_lastprojects_splitted.find("span"), 0.2, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:1.3}, 0.02)
	    	]);
		
		var step1_bg = new TimelineMax()
			.append([
				TweenMax.to($( '.step1 .background .bg-colors > .bg-color:nth-child(1)' ), 1.2, {height:step1Height+410}),
				TweenMax.to($( '.step1 .background .bg-colors > .bg-color:nth-child(2)' ), .7, {height:step1Height+150}),
				TweenMax.to($( '.step1 .background .bg-colors > .bg-color:nth-child(3)' ), .9, {height:step1Height+90}),
				TweenMax.to($( '.step1 .background .bg-colors > .bg-color:nth-child(4)' ), 1.3, {height:step1Height+90})
	    	])			
	    	
	    var tl_title2 = new TimelineMax()
			.append([
				TweenMax.fromTo( $('#block4 .container-data .chapter-count .separator'), .6, {width:0, marginLeft:$(window).width()*.3, immediateRender:true}, {bezier:[{width:$(window).width()*.1, marginLeft:250}, {width:110, marginLeft:-150}, {width:80, marginLeft:-59}], ease:Power1.easeInOut})
			])
			.append([
				TweenMax.fromTo($('#block4 .container-data .chapter-count .count'), .4, {autoAlpha:0, marginLeft:-20, immediateRender:true}, {autoAlpha:1, marginLeft:0}),
				TweenMax.staggerFromTo( block4_splitted.find("span"), 0.2, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:.3}, 0.05),
				TweenMax.staggerFromTo( block4_splittedb.find("span"), 0.2, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:.7}, 0.02),
				TweenMax.fromTo( $('#block4 .container-data > .separator'), .6, {width:0, marginLeft:-240, immediateRender:true}, {width:240, marginLeft:5, ease:Expo.easeInOut, delay:1.1})
			]);	
	   	
	   	var step2_bg = new TimelineMax()
			.append([
				TweenMax.fromTo($( '.step2 .background .bg-colors > .bg-color:nth-child(1)' ), 1.3, {height:0, marginTop:1650, immediateRender:true}, {height:step2Height+500, marginTop:1150}),
				TweenMax.fromTo($( '.step2 .background .bg-colors > .bg-color:nth-child(2)' ), .8, {height:0, marginTop:1870, immediateRender:true}, {height:step2Height+500, marginTop:820}),
				TweenMax.fromTo($( '.step2 .background .bg-colors > .bg-color:nth-child(3)' ), .7, {height:0, marginTop:1585, immediateRender:true}, {height:step2Height+500, marginTop:415}),
				TweenMax.fromTo($( '.step2 .background .bg-colors > .bg-color:nth-child(4)' ), 1, {height:0, marginTop:1470, immediateRender:true}, {height:step2Height+500, marginTop:300}),
				TweenMax.staggerFromTo($('.step2 .clients .client-logo'), 0.4, {autoAlpha:0, rotationY:-180, immediateRender:true}, {autoAlpha:1, rotationY:0, delay:.5}, 0.1)
	    	])		
	   	
	   	
	   	var step3_bg = new TimelineMax()
			.append([
				TweenMax.fromTo($( '.step3 .background .bg-colors > .bg-color:nth-child(1)' ), .9, {height:0, marginTop:1650, immediateRender:true}, {height:step2Height+500, marginTop:1150}),
				TweenMax.fromTo($( '.step3 .background .bg-colors > .bg-color:nth-child(2)' ), .7, {height:0, marginTop:1870, immediateRender:true}, {height:step2Height+500, marginTop:820}),
				TweenMax.fromTo($( '.step3 .background .bg-colors > .bg-color:nth-child(3)' ), 1.2, {height:0, marginTop:1585, immediateRender:true}, {height:step2Height+500, marginTop:415}),
				TweenMax.fromTo($( '.step3 .background .bg-colors > .bg-color:nth-child(4)' ), 1.4, {height:0, marginTop:1470, immediateRender:true}, {height:step2Height+500, marginTop:300}),
			])		
			
		var tl_title5_separator = new TimelineMax()
			.append([
				TweenMax.fromTo($('#block5 .container-data .chapter-count .separator'), .5, {width:0, marginLeft:-159, immediateRender:true}, {bezier:[{width:90, marginLeft:00}, {width:60, marginLeft:-80}, {width:80, marginLeft:-59}], ease:Power1.easeInOut}), 
				TweenMax.fromTo($('#block5 .container-data .chapter-count .count'), .4, {autoAlpha:0, marginLeft:-20, immediateRender:true}, {autoAlpha:1, marginLeft:0, delay:.3}),
				TweenMax.staggerFromTo( title_expertises_splitted.find("span"), 0.2, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:.2}, 0.015),
				//TweenMax.staggerFromTo( title_expertises_splittedb.find("span"), 0.2, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:.2}, 0.015),
				TweenMax.staggerFromTo( $('#block5 .expertises .expertises-data h3'), 0.5, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:.4}, 0.07),
				TweenMax.staggerFromTo( $('#block5 .expertises .expertises-data p span'), 0.5, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:.4}, 0.06)
			])	
			
		var tl_visuel_expertises = new TimelineMax()
			.add([
				TweenMax.fromTo($('.expetises-im'), .3, {marginTop:0}, {marginTop:400}),
				TweenMax.fromTo($('.expetises-video'), .3, {marginTop:0}, {marginTop:400}),
				TweenMax.fromTo($('.expertises-data:nth-child(2)'), .3, {marginTop:200}, {marginTop:700}),
				TweenMax.fromTo($('.expertises-data:nth-child(3)'), .3, {marginTop:200}, {marginTop:700})
			]);
		
		
		var step3_bg = new TimelineMax()
			.append([
				TweenMax.fromTo($( '.step3 .background .bg-colors > .bg-color:nth-child(1)' ), .9, {height:0, marginTop:1650, immediateRender:true}, {height:step3Height+1000-215, marginTop:215}),
				TweenMax.fromTo($( '.step3 .background .bg-colors > .bg-color:nth-child(2)' ), 1.3, {height:0, marginTop:1870, immediateRender:true}, {height:step3Height+1000-395, marginTop:395}),
				TweenMax.fromTo($( '.step3 .background .bg-colors > .bg-color:nth-child(3)' ), 1.2, {height:0, marginTop:1585, immediateRender:true}, {height:step3Height+1000-105, marginTop:105}),
				TweenMax.fromTo($( '.step3 .background .bg-colors > .bg-color:nth-child(4)' ), .7, {height:0, marginTop:1470, immediateRender:true}, {height:step3Height+1000, marginTop:0}),
				TweenMax.fromTo($('.expetises-im'), .7, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:.5})
			])		
		
		var tl_title5_awards = new TimelineMax()
			.append([
				TweenMax.fromTo($('#block5 .container-data .chapter-subtitle .separator'), .6, {width:0, marginLeft:-240, immediateRender:true}, {width:240, marginLeft:0, ease:Expo.easeInOut}), 
				//TweenMax.staggerFromTo( title_awards_splitted.find("span"), 0.2, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:.5}, 0.02),
				
				TweenMax.staggerFromTo( $('#block5 .container-data .chapter-subtitle h3'), 0.2, {autoAlpha:0, left:-36, immediateRender:true}, {autoAlpha:1, left:0, delay:.3}),
				TweenMax.staggerFromTo( $('.awards-data'), 0.2, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:.5}, 0.1),
				TweenMax.staggerFromTo( $('.awards-data').find(".awards-title"), 0.4, {autoAlpha:0, marginTop:40, immediateRender:true}, {autoAlpha:1, marginTop:0, delay:.6}, 0.1),
				TweenMax.staggerFromTo( $('.awards-data').find(".awards-subtitle"), 0.4, {autoAlpha:0, marginTop:40, immediateRender:true}, {autoAlpha:1, marginTop:0, delay:.7}, 0.1),
				TweenMax.staggerFromTo( $('.awards-data').find(".awards-logo"), 0.4, {autoAlpha:0, rotationY:-180, immediateRender:true}, {autoAlpha:1,rotationY:0, delay:1}, 0.1),
				TweenMax.staggerFromTo( $('.awards-data').find(".awards-number"), 0.4, {autoAlpha:0, marginTop:0, immediateRender:true}, {autoAlpha:1, marginTop:0, delay:1.2}, 0.1)
			])	
		
		var step3_bg_move_up = new TimelineMax()
			.append([
				TweenMax.to($( '.step3 .background .bg-colors > .bg-color:nth-child(1)' ), 1.2, {height:step3Height-415-80, marginTop:215}),
				TweenMax.to($( '.step3 .background .bg-colors > .bg-color:nth-child(2)' ), .7, {height:step3Height-595+85, marginTop:395}),
				TweenMax.to($( '.step3 .background .bg-colors > .bg-color:nth-child(3)' ), 1.1, {height:step3Height-305+265, marginTop:105}),
				TweenMax.to($( '.step3 .background .bg-colors > .bg-color:nth-child(4)' ), .9, {height:step3Height-205, marginTop:0})
	    	])		
		
		var tl_title4 = new TimelineMax()
			.append([
				TweenMax.fromTo( $('#block6 .container-data .chapter-count .separator'), .6, {width:0, marginLeft:$(window).width()*.3, immediateRender:true}, {bezier:[{width:$(window).width()*.1, marginLeft:250}, {width:110, marginLeft:-150}, {width:80, marginLeft:-59}], ease:Power1.easeInOut})
			])
			.append([
				TweenMax.fromTo($('#block6 .container-data .chapter-count .count'), .4, {autoAlpha:0, marginLeft:-20, immediateRender:true}, {autoAlpha:1, marginLeft:0}),
				TweenMax.staggerFromTo( block6_splitted.find("span"), 0.2, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:.3}, 0.05),
				TweenMax.staggerFromTo( block6_splittedb.find("span"), 0.2, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, delay:.7}, 0.02),
				TweenMax.fromTo( $('#block6 .container-data > .separator'), .6, {width:0, marginLeft:-240, immediateRender:true}, {width:240, marginLeft:5, ease:Expo.easeInOut, delay:1.1})
			])
			/*.append([
				//TweenMax.fromTo( $('.team-member'), .6, {autoAlpha:0, marginTop:100, zIndex:"", immediateRender:true}, {autoAlpha:1, marginTop:0, ease:Expo.easeOut, delay:1.3})
				TweenMax.staggerFromTo( $('.team-member'), .7, {autoAlpha:0, marginTop:100, zIndex:"", immediateRender:true}, {autoAlpha:1, marginTop:0, ease:Expo.easeOut}, 0.025)
			])*/
			
		
			
		var tl_visuel_hand_card = new TimelineMax()
			.add([
				TweenMax.fromTo($('.hand-card-im'), 3, {autoAlpha:0, marginTop:-1050, immediateRender:true}, {autoAlpha:1, marginTop:-650, ease:Expo.easeOut}),
				TweenMax.fromTo($('.card-im'), 3, {autoAlpha:0, marginTop:-450, immediateRender:true}, {autoAlpha:1, marginTop:0, ease:Expo.easeOut, delay:0}),
				TweenMax.fromTo($('.contact p:nth-child(1)'), 1, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, ease:Expo.easeOut, delay:2}),
				TweenMax.fromTo($('.contact p:nth-child(2)'), 1, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, ease:Expo.easeOut, delay:2.3}),
				TweenMax.fromTo($('.contact a'), 1, {autoAlpha:0, immediateRender:true}, {autoAlpha:1, ease:Expo.easeOut, delay:2.6})
			]);
			
			
		//Init scrollMagic
		controller = new ScrollMagic.Controller();
		
		//kill intro animation on first scroll
		/*var scene_kill_intro = new ScrollMagic.Scene({triggerElement: "#block1", reverse:false, offset:($(window).height()*.51)})
						.setTween(tl_kill_intro)
						.addIndicators()
						.addTo(controller)
		*/
		
		//Scroll scenes
		var scene1 = new ScrollMagic.Scene({triggerElement: "#block1", reverse:true, offset:($(window).height()*.54), duration:2000})
						.setTween(tl_visuel_intro)
						//.addIndicators()()
						.addTo(controller)
		
		/*var scene1_txt = new ScrollMagic.Scene({triggerElement: "#block1", reverse:true, offset:($(window).height()*.51)})
						.setTween(tl_teaser_hide)
						//.addIndicators()
						.addTo(controller)
		*/
		
		var scene2 = new ScrollMagic.Scene({triggerElement: "#block2", reverse:false, offset:-($(window).height()*.25)})
						.setTween(tl_title1)
						//.addIndicators()
						.addTo(controller)
		
		var scene3 = new ScrollMagic.Scene({triggerElement: "#block2", reverse:false, offset:-($(window).height()*.25)})
						.setTween(block2_text)
						//.addIndicators()
						.addTo(controller)
						
		var scene4 = new ScrollMagic.Scene({triggerElement: "#block3", reverse:false, offset: 0})
						.setTween(slider_projects)
						//.addIndicators()
						.addTo(controller)
		
		var scene5 = new ScrollMagic.Scene({triggerElement: "#block4", reverse:false, offset:-600})
						.setTween(step1_bg)
						//.addIndicators()
						.addTo(controller)
						
		var scene6 = new ScrollMagic.Scene({triggerElement: "#block4", reverse:false, offset:-300})
						.setTween(tl_title2)
						//.addIndicators()
						.addTo(controller)
						
		var scene7 = new ScrollMagic.Scene({triggerElement: "#block4", reverse:false, offset:150})
						.setTween(step2_bg)
						//.addIndicators()
						.addTo(controller)
	
		var scene8 = new ScrollMagic.Scene({triggerElement: "#block5", reverse:false, offset:0})
						.setTween(tl_title5_separator)
						//.addIndicators()
						.addTo(controller)
					
		var scene9 = new ScrollMagic.Scene({triggerElement: "#block5", reverse:true, offset:-400, duration:2000})
						.setTween(tl_visuel_expertises)
						//.addIndicators()
						.addTo(controller)
		
		var scene10 = new ScrollMagic.Scene({triggerElement: "#block5", reverse:false, offset:-650})//A TESTER , duration:1700
						.setTween(step3_bg)
						//.addIndicators()
						.addTo(controller)
						
		var scene11 = new ScrollMagic.Scene({triggerElement: ".awards", reverse:false, offset:-250})
						.setTween(tl_title5_awards)
						//.addIndicators()
						.addTo(controller)
						
		var scene12 = new ScrollMagic.Scene({triggerElement: ".step4", reverse:false, offset:-300})
						.setTween(step3_bg_move_up)
						//.addIndicators()
						.addTo(controller)
		
		var scene13 = new ScrollMagic.Scene({triggerElement: "#block6", reverse:false, offset:0})
						.setTween(tl_title4)
						//.addIndicators()
						.addTo(controller)
						
		var scene14 = new ScrollMagic.Scene({triggerElement: ".step5", reverse:false, offset:-200})
						.setTween(tl_visuel_hand_card)
						//.addIndicators()
						.addTo(controller)
						
		$('.team-member').each(function(index){
					//Create timeline
					var tl_member = new TimelineMax()
						.add([
							TweenMax.fromTo( $(this), 0.8, {autoAlpha:0, marginTop:100, zIndex:"", immediateRender:true}, {autoAlpha:1, marginTop:0, ease:Expo.easeOut, delay:0}),

						]);
					
					//Create scene ScrollMagic
					var scene_member = new ScrollMagic.Scene({triggerElement: this, reverse:false, offset:-200})
						.setTween(tl_member)
						//.triggerHook(0.8)
						//.addIndicators()
						.addTo(controller);

				});
						
						
						
		//Force update scroll
		window.addEventListener('scroll', function(e){
			controller.update();
		});
      }

	
	//Team member effect
	$('.team-member').bind("mouseenter", function(event) {
		TweenMax.killTweensOf($(this).children('.team-member-im-on'));
		TweenMax.killTweensOf($(this).children('.team-member-rect'));
		TweenMax.killTweensOf($(this).children('.team-member-data').children('.team-member-name'));
		TweenMax.killTweensOf($(this).children('.team-member-data').children('.team-member-post'));
		TweenMax.killTweensOf($(this).children('.team-member-social').children('.email'));
		TweenMax.killTweensOf($(this).children('.team-member-social').children('.twitter'));
		TweenMax.killTweensOf($(this).children('.team-member-social').children('.linked'));
		
		TweenMax.set($(this).children('.team-member-im-container').children('.team-member-im-on'), {autoAlpha:0, scale:1, z:0.01, transformOrigin:'50% 50%'});
		TweenMax.to($(this).children('.team-member-im-container').children('.team-member-im-on'), .7, {autoAlpha:1, scale:1.1, ease:Expo.easeOut});
		TweenMax.fromTo($(this).children('.team-member-rect'), .5, {height:'0%', autoAlpha:1, top:'108%'}, {height:'33%', top:'75%', ease:Expo.easeOut});
		TweenMax.fromTo($(this).children('.team-member-data').children('.team-member-name'), .8, {marginTop:'15%', autoAlpha:0}, {marginTop:'0%', autoAlpha:1, ease:Expo.easeOut, delay:0});
		TweenMax.fromTo($(this).children('.team-member-data').children('.team-member-post'), .8, {marginTop:'15%', autoAlpha:0}, {marginTop:'0%', autoAlpha:1, ease:Expo.easeOut, delay:.1});
		TweenMax.fromTo($(this).children('.team-member-social').children('.email'), .5, {autoAlpha:0, marginTop:15}, {autoAlpha:1, marginTop:0, ease:Expo.easeOut, delay:.2});
		TweenMax.fromTo($(this).children('.team-member-social').children('.twitter'), .5, {autoAlpha:0, marginTop:15}, {autoAlpha:1, marginTop:0, ease:Expo.easeOut, delay:.3});
		TweenMax.fromTo($(this).children('.team-member-social').children('.linked'), .5, {autoAlpha:0, marginTop:15}, {autoAlpha:1, marginTop:0, ease:Expo.easeOut, delay:.4});
	}).bind("mouseleave", function(event) {
		TweenMax.killTweensOf($(this).children('.team-member-im-on'));
		TweenMax.killTweensOf($(this).children('.team-member-rect'));
		TweenMax.killTweensOf($(this).children('.team-member-data').children('.team-member-name'));
		TweenMax.killTweensOf($(this).children('.team-member-data').children('.team-member-post'));
		TweenMax.killTweensOf($(this).children('.team-member-social').children('.email'));
		TweenMax.killTweensOf($(this).children('.team-member-social').children('.twitter'));
		TweenMax.killTweensOf($(this).children('.team-member-social').children('.linked'));
		
		TweenMax.to($(this).children('.team-member-im-container').children('.team-member-im-on'), .7, {autoAlpha:0, scale:1, ease:Expo.easeOut});
		TweenMax.to($(this).children('.team-member-rect'), .5, {height:'0%', ease:Expo.easeInOut});
		TweenMax.to($(this).children('.team-member-data').children('.team-member-name'), .8, {marginTop:'15%', autoAlpha:0, ease:Expo.easeInOut});
		TweenMax.to($(this).children('.team-member-data').children('.team-member-post'), .8, {marginTop:'15%', autoAlpha:0, ease:Expo.easeInOut});
		TweenMax.to($(this).children('.team-member-social').children('.email'), .5, {autoAlpha:0, ease:Expo.easeOut});
		TweenMax.to($(this).children('.team-member-social').children('.twitter'), .5, {autoAlpha:0, ease:Expo.easeOut});
		TweenMax.to($(this).children('.team-member-social').children('.linked'), .5, {autoAlpha:0, ease:Expo.easeOut});
	})
	
	//Visit site 
	TweenMax.set($('.visit-site'),{borderColor:'rgba(30, 255, 188, 0.3)'});
	$('.visit-site').bind("mouseenter", function(event) {
		TweenMax.to($(this), .4, {borderColor:'rgba(30, 255, 188, 1)'});
	}).bind("mouseleave", function(event) {
		TweenMax.to($(this), .4, {borderColor:'rgba(30, 255, 188, 0.3)'});
	})
	
	//Social ico
	$('.email, .twitter, .linked').bind("mouseenter", function(event) {
		TweenMax.to($(this), .3, {color:'#0d19a3'});
	}).bind("mouseleave", function(event) {
		TweenMax.to($(this), .3, {color:'#1effbc'});
	})
	
	//sayhello
	var underlineW = $(this).children('.underline').width();
	$('.sayhello').bind("mouseenter", function(event) {
		var target = $(this).children('.underline');
		TweenMax.fromTo(target, .5, {width:'100%', marginLeft:'-50%'}, {width:0, marginLeft:'50%', ease:Expo.easeInOut, onComplete:function(){
			TweenMax.fromTo(target, .5, {width:0, marginLeft:'-50%'}, {width:'100%', marginLeft:'-50%', ease:Expo.easeInOut});
		}});
	});
	
	
	//Slider WORK
	$('.slider-projets').flexslider({
					    animation: "fade",
					    animationLoop: true,
					    slideshow: false,
					    slideshowSpeed:200,
					    touch: false,
					    prevText: '',
					    nextText: '',
					    animationSpeed:0,
					    controlNav: false,
					    directionNav: true,
					    video: false,
					    itemMargin: 0,
					    fadeFirstSlide:false,
					    start: function(slider) {
					    	
							var current_slide = slider.slides.eq(slider.currentSlide)
							current_slide.find('.slide-left-image-container').removeClass('left-bg').addClass('right-bg');
							current_slide.find('.slide-right-image-container').removeClass('left-bg').addClass('right-bg');

							TweenMax.to( current_slide.find('.slide-left-image-container'), .7, {width:0, marginLeft:580});
							TweenMax.to( current_slide.find('.slide-right-image-container'), .8, {width:0, marginLeft:1600});
							
							TweenMax.fromTo( current_slide.find('.line1'), .3, {width:0, marginLeft:-60}, {width:20, marginLeft:-60, ease:Expo.easeInOut, delay:.5});
						    //TweenMax.fromTo( current_slide.find('.project-name'), .5, {autoAlpha:0}, {autoAlpha:1, ease:Expo.easeOut, delay:.4});
						    TweenMax.staggerFromTo( current_slide.find('.project-name').find("span"), 0.2, {autoAlpha:0}, {autoAlpha:1, delay:.4}, 0.02),
						    TweenMax.fromTo( current_slide.find('.project-brand'), .5, {autoAlpha:0}, {autoAlpha:1, ease:Expo.easeOut, delay:.5});
						    TweenMax.fromTo( current_slide.find('.visit-site'), .5, {autoAlpha:0, marginRight:20}, {autoAlpha:1, marginRight:0, ease:Expo.easeInOut, delay:.6});
					    },
						before: function(slider) {
							
							var next_slide = slider.slides.eq(slider.animatingTo)
						    var current_slide = slider.slides.eq(slider.currentSlide)
						    
						    next_slide.find('.slide-left-image-container').css('width', 0);
						    next_slide.find('.slide-right-image-container').css('width', 0);
						    next_slide.find('.line1').css('width', 0);
						    //next_slide.find('.project-name').css('visibility', 'hidden');
						    next_slide.find('.project-name').find('span').css('visibility', 'hidden');
						    next_slide.find('.project-brand').css('visibility', 'hidden');
						    next_slide.find('.visit-site').css('visibility', 'hidden');
						    
						    current_slide.find('.slide-left-image-container').removeClass('right-bg').addClass('left-bg');
						    current_slide.find('.slide-right-image-container').removeClass('right-bg').addClass('left-bg');
						    TweenMax.fromTo( current_slide.find('.slide-left-image-container'), .5, {width:580}, {width:0, ease:Expo.easeOut});
						    TweenMax.fromTo( current_slide.find('.slide-right-image-container'), .6, {width:860}, {width:0, ease:Expo.easeOut, delay:0});
						    
						    TweenMax.fromTo( current_slide.find('.line1'), .3, {width:20, marginLeft:-60}, {width:0, marginLeft:-40, ease:Expo.easeInOut});
						    //TweenMax.fromTo( current_slide.find('.project-name'), .5, {autoAlpha:1}, {autoAlpha:0, ease:Expo.easeOut, delay:.1});
						    TweenMax.staggerFromTo( current_slide.find('.project-name').find("span"), 0.2, {autoAlpha:1}, {autoAlpha:0, delay:.1}, 0.02),
						    
						    TweenMax.fromTo( current_slide.find('.project-brand'), .5, {autoAlpha:1}, {autoAlpha:0, ease:Expo.easeOut, delay:.2});
						    TweenMax.fromTo( current_slide.find('.visit-site'), .5, {autoAlpha:1, marginRight:0}, {autoAlpha:0, marginRight:20, ease:Expo.easeOut, delay:.3});
						    
						},
						after: function(slider) {
							
							var current_slide = slider.slides.eq(slider.currentSlide)
							current_slide.find('.slide-left-image-container').removeClass('left-bg').addClass('right-bg');
							current_slide.find('.slide-right-image-container').removeClass('left-bg').addClass('right-bg');

							TweenMax.fromTo( current_slide.find('.slide-left-image-container'), .7, {width:0, marginLeft:580}, {width:580, marginLeft:0, ease:Expo.easeOut, delay:.5});
							TweenMax.fromTo( current_slide.find('.slide-right-image-container'), .8, {width:0, marginLeft:1600}, {width:860, marginLeft:740, ease:Expo.easeOut, delay:.5});
							
							TweenMax.fromTo( current_slide.find('.line1'), .3, {width:0, marginLeft:-60}, {width:20, marginLeft:-60, ease:Expo.easeInOut, delay:.5});
						    //TweenMax.fromTo( current_slide.find('.project-name'), .5, {autoAlpha:0}, {autoAlpha:1, ease:Expo.easeOut, delay:.4});
						    TweenMax.staggerFromTo( current_slide.find('.project-name').find("span"), 0.2, {autoAlpha:0}, {autoAlpha:1, delay:.4}, 0.02),
						    
						    TweenMax.fromTo( current_slide.find('.project-brand'), .5, {autoAlpha:0}, {autoAlpha:1, ease:Expo.easeOut, delay:.5});
						    TweenMax.fromTo( current_slide.find('.visit-site'), .5, {autoAlpha:0, marginRight:20}, {autoAlpha:1, marginRight:0, ease:Expo.easeInOut, delay:.6});
						    
						}
					});	
 
});

$(window).load(function() {
	
});