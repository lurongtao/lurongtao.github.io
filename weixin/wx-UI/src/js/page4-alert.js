var alertBox3 = '<div class="swiper-container pageThree-container">\
						<div class="swiper-wrapper">\
							<div class="swiper-slide">\
								<div class="middle-icon ani" swiper-animate-effect="custom" swiper-animate-duration="3s" swiper-animate-delay="1s" ></div>\
								<img src="img/UI-03/icons.png" class="middle-icon-img">\
								<div class = "icon-content">\
									<img src="img/UI-04/NO1.png" class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.2s">\
									<img src="img/UI-04/NO2.png" class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.5s">\
									<img src="img/UI-04/NO3.png" class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="2.2s">\
									<img src="img/UI-04/NO4.png" class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="2.5s">\
									<img src="img/UI-04/NO6.png" class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="3.2s">\
									<img src="img/UI-04/NO5.png" class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="3.5s">\
								</div>\
								<img src="img/UI-03/bottom.png" class="sub-mounten">\
							</div>\
							<div class="swiper-slide">\
								<img src="img/UI-04/yue.png" class="introduce">\
							</div>\
							<div class="swiper-slide">\
								<img src="img/UI-04/rui.png" class="introduce">\
							</div>\
							<div class="swiper-slide">\
								<img src="img/UI-04/wei.png" class="introduce">\
							</div>\
							<div class="swiper-slide">\
								<img src="img/UI-04/guan.png" class="introduce">\
							</div>\
							<div class="swiper-slide">\
								<img src="img/UI-04/zhang.png" class="introduce">\
							</div>\
							<div class="swiper-slide">\
								<img src="img/UI-04/chen.png" class="introduce">\
							</div>\
						</div>\
						<div class="swiper-pagination" id="pag"></div>\
					</div>'
var M4 = {
			
		}
	$(document).delegate(".pageThreeBtn",'click',function(e){
		var oBtn = document.getElementsByClassName('pageThreeBtn')[0],
			oSlogn = document.getElementsByClassName('slogn')[2];	
		if(M4.dialog4){
			return M4.dialog4.show();
		}
		M4.dialog = jqueryAlert({
			'style'   : 'pc',
			'content' :  alertBox3,
			'modal'   : false,
			'contentTextAlign' : 'left',
			'width'   : '90%',
			'height'  : '75%',
			'animateType': 'linear',
			 'buttons' : {
        	'' : function(){
            M4.dialog.destroy() //销毁掉
        }
    }
		})
		
		var pageThreeSwiper = new Swiper('.pageThree-container' , {
			pagination: '.swiper-pagination',
			onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		    //重置分页器的高度和背景
			var cont = document.getElementsByClassName('pageThree-container')[0];
			var pag = document.getElementById('pag')
			var but = pag.getElementsByClassName('swiper-pagination-bullet')[0]
			console.log(pag)
			console.log(cont)
			pag.style.top = cont.offsetHeight/5 + 'px';
		 },   
		  onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			oSlogn.style.visibility='visible';
			oBtn.style.visibility = 'visible';
		  }
		})
			oSlogn.style.visibility='visible';
			oBtn.style.visibility = 'visible';
	})
		
	


