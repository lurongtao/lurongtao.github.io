var alertBox5 = '<div class="swiper-container pageFive-container">\
						<div class="swiper-wrapper">\
							<div class="swiper-slide">\
								<img src="img/UI-05/work1.png" class="works">\
								<img src="img/UI-03/bottom.png" class="sub-mounten">\
							</div>\
							<div class="swiper-slide">\
								<img src="img/UI-05/work2.png" class="works">\
								<img src="img/UI-03/bottom.png" class="sub-mounten">\
							</div>\
							<div class="swiper-slide">\
								<img src="img/UI-05/work3.png" class="works">\
								<img src="img/UI-03/bottom.png" class="sub-mounten">\
							</div>\
							<div class="swiper-slide">\
								<img src="img/UI-05/work4.gif" class="works" id="sub">\
								<img src="img/UI-03/bottom.png" class="sub-mounten">\
							</div>\
							<div class="swiper-slide">\
								<img src="img/UI-05/work5.gif" class="works">\
								<img src="img/UI-03/bottom.png" class="sub-mounten">\
							</div>\
							<div class="swiper-slide">\
								<img src="img/UI-05/work6.gif" class="works" id="tab">\
								<img src="img/UI-03/bottom.png" class="sub-mounten">\
							</div>\
							<div class="swiper-slide">\
								<img src="img/UI-05/work7.gif" class="works" id="side">\
								<img src="img/UI-03/bottom.png" class="sub-mounten">\
							</div>\
						</div>\
						<div class="swiper-pagination" id="pag"></div>\
					</div>'
var M5 = {
			
		}
	$(document).delegate(".pageFiveBtn",'click',function(e){
		console.log(2)
		if(M5.dialog5){
			return M5.dialog5.show();
		}
		M5.dialog = jqueryAlert({
			'style'   : 'pc',
			'content' :  alertBox5,
			'modal'   : false,
			'contentTextAlign' : 'left',
			'width'   : '90%',
			'height'  : '75%',
			'animateType': 'linear',
			 'buttons' : {
        	'' : function(){
            M5.dialog.destroy() //销毁掉
        }
    }
		})
		
		var pageFiveSwiper = new Swiper('.pageFive-container' , {
			initialSlide :0,
			pagination: '.swiper-pagination',
			onInit : function(){
				 //重置分页器的高度和背景
			var cont = document.getElementsByClassName('pageFive-container')[0];
			var pag = document.getElementById('pag')
			console.log(cont)
			pag.style.top = cont.offsetHeight/5 + 'px';	
			}
		})
		$('.alert-btn-close').click(function(){
			console.log(1)
				 pageOneSwiper.slideTo(0, 1000, false)
			})
		 e.stopPropagation();
	})
	


