$(document).ready(function(){
	var oBig = document.getElementsByClassName('big-model')[0]
	var oLoad = oBig.getElementsByTagName('img')[0]
	oLoad.src = "img/outer/loading.gif"
})


$(window).load(function(){
	var oModel = $('.big-model')
		oModel.css('display' , 'none')
		document.getElementsByClassName('lion')[0].style.animationPlayState = 'running'
	
	function arrowLeft(cont , pre){
		if(cont.activeIndex == 0){
			document.getElementsByClassName(pre)[0].style.display = 'none'
		}else{
			document.getElementsByClassName(pre)[0].style.display = 'block'
		}
	}
	
	function arrowRight(cont , next){
		if(cont.isEnd){
				document.getElementsByClassName(next)[0].style.display = 'none'
		}else {
			document.getElementsByClassName(next)[0].style.display = 'block'
		}
	}
	

	var nodeSwiper = new Swiper('#node-container', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			arrowRight(nodeSwiper , 'node-next');
			arrowLeft(nodeSwiper , 'node-pre');
		}
	})
	

	var teachSwiper = new Swiper('#teach-container', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
				arrowRight(teachSwiper , 'skill-next');
				arrowLeft(teachSwiper , 'skill-pre');
		}
		
	})
	
	var goodNewsSwiper = new Swiper('#goodnews-container', {
		
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
				arrowRight(goodNewsSwiper , 'news-next');
				arrowLeft(goodNewsSwiper , 'news-pre');
		}
		
	})
	
	
	var workSwiper = new Swiper('#bigSwiper-container', {
		direction: 'vertical',
		onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			for(var i = 0; i < 3; i++) {
				document.getElementsByClassName("circle")[i].style.display = 'block'
				if(workSwiper.isEnd) {
					document.getElementsByClassName("circle")[i].style.display = 'none'
				}
			}
			arrowLeft(goodNewsSwiper , 'news-pre');
			arrowLeft(nodeSwiper , 'node-pre');
			arrowLeft(teachSwiper , 'skill-pre');
		}
	})
	

	var p = [{
			tit: ['PC端网站布局项目', 'HTML5+CSS3基础项目', 'WebApp页面布局'],
			img: ['img/project/1-2.png',
				'img/project/1-1.png',
				'img/project/1-3.png'
			]
		},
		{
			tit: ['原生JavaScript交互功能开发项目', '面向对象进阶与ES5/ES6应用项目', 'JavaScript工具库自主研发项目'],
			img: ['img/project/2-1.png',
				'img/project/2-2.png',
				'img/project/2-3.png'
			]
		},
		{
			tit: ['jQuery经典交互特效开发', 'Ajax进阶、PC端网站开发项目', 'PC端管理信息系统前端开发项目'],
			img: ['img/project/3-1.png',
				'img/project/3-2.png',
				'img/project/3-3.png'
			]
		},
		{
			tit: ['应用Vue.js开发WebApp项目', '应用Vue.js开发WebApp项目', '应用React.js开发WebApp', '应用React.js开发WebApp', '应用React.js开发WebApp', '应用React.js开发WebApp', '应用Angular开发WebApp项目'],
			img: ['img/project/4-1.png',
				'img/project/4-2.png',
				'img/project/4-3.png',
				'img/project/4-4.png',
				'img/project/4-5.png',
				'img/project/4-6.png',
				'img/project/4-7.png',
			]
		},
		{
			tit: ['微信公众号开发', '微信公众号开发', '微信小程序开发', '各类混合应用开发', '各类混合应用开发'],
			img: ['img/project/5-1.png',
				'img/project/5-2.png',
				'img/project/5-3.png',
				'img/project/5-4.png',
				'img/project/5-5.png'
			]
		},
		{
			tit: ['socket 即时通信项目', 'WebApp后端系统开发'],
			img: ['img/project/6-1.png',
				'img/project/6-2.png'
			]
		}]

	var M1 = {}
	$(document).delegate(".pageOneBtn", 'click', function(e) {
		console.log(p[nodeSwiper.activeIndex - 1])
		var str = ""
		for(var i = 0; i < p[nodeSwiper.activeIndex - 1].img.length; i++) {
			str += '<div class="swiper-slide"><p>' + p[nodeSwiper.activeIndex - 1].tit[i] + '</p><img src=' + p[nodeSwiper.activeIndex - 1].img[i] + '></div>'
		}
		var alertBox1 = '<div class="swiper-container pageOne-container">\
						<div class="swiper-wrapper">\
							' + str + '\
						</div>\
						<div class="swiper-pagination"></div>\
					</div>'

		if(M1.dialog1) {
			return M1.dialog.show();
		}
		M1.dialog = jqueryAlert({
			'style': 'pc',
			'content': alertBox1,
			'modal': false,
			'contentTextAlign': 'left',
			'width': '90%',
			'height': '85%',
			'animateType': 'linear',
//			isModalClose' : true,
			'buttons': {
				'关闭': function() {
					M1.dialog.destroy() //销毁掉
				}
			}
		})

		var nodeSwiperSwiper = new Swiper('.pageOne-container', {
			initialSlide: 0,
			pagination: '.swiper-pagination',
		})
//		$('.alert-btn-close').click(function() {
//			console.log(1)
//			nodeSwiperSwiper.slideTo(0, 1000, false)
//		})
		e.stopPropagation();
	})

	var onoff = true
	var music = document.getElementsByClassName("music")[0]
	var ado = document.getElementsByTagName('audio')[0]

	//苹果禁止了自动播放
	
function audioAutoPlay(id){
    var audio = document.getElementById(id);
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
    }, false);
}
audioAutoPlay('apple');

	music.onclick = function() {
		if(onoff) {
			music.style.animationPlayState = "paused"
			music.style.webkitAnimationPlayState = "paused"
			ado.pause()
		} else {
			music.style.animationPlayState = "paused"
			music.style.webkitAnimationPlayState = "running"
			ado.play()
		}
		onoff = !onoff
	}

	$('.backhao').click(function() {
		location.href = "gooder.html"
	})

})  



