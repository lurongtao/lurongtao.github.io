var alertBox1 = '<div class="swiper-container pageOne-container">\
						<div class="swiper-wrapper">\
							<div class="swiper-slide">\
								<img src="img/UI-02/freashmeat.png">\
							</div>\
							<div class="swiper-slide">\
								<img src="img/UI-02/working.png">\
							</div>\
							<div class="swiper-slide">\
								<img src="img/UI-02/change.png">\
							</div>\
						</div>\
					</div>'
var M1 = {
			
		}
	$(document).delegate(".pageOneBtn",'click',function(e){
		console.log(2)
		if(M1.dialog1){
			return M1.dialog.show();
		}
		M1.dialog = jqueryAlert({
			'style'   : 'pc',
			'content' :  alertBox1,
			'modal'   : false,
			'contentTextAlign' : 'left',
			'width'   : '90%',
			'height'  : '75%',
			'animateType': 'linear',
			 'buttons' : {
        	'' : function(){
            M1.dialog.destroy() //销毁掉
        }
    }
		})
		
		var pageOneSwiper = new Swiper('.pageOne-container' , {
			initialSlide :0
		})
		$('.alert-btn-close').click(function(){
			console.log(1)
				 pageOneSwiper.slideTo(0, 1000, false)
			})
		 e.stopPropagation();
	})
	


