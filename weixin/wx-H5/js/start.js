//动画控制

function ani(para,name,dur,day,fun,fm,state){
		para.style.animationName = name;
		para.style.animationDuration = dur+'s';
		para.style.animationDelay = day+'s';
		para.style.animationTimingFunction = fun;
		para.style.animationFillMode = fm;
		para.style.animationPlayState = state;
	}

function anirun(){
	var oLogo = document.getElementsByClassName('logo')[0]
	var oImg = oLogo.getElementsByTagName('img')[0]
	var oWork = document.getElementById("jiu")
	var oGood = document.getElementById("hao")
	var oLay = oLogo.getElementsByClassName('layer')[0]
	var oCon = oLogo.getElementsByClassName('word-container')[0]
	var oText = oCon.getElementsByTagName('p')
	var oTextAr = Array.prototype.slice.call(oText);
	var arr = [oImg,oWork,oGood,oLay]
	
	ani(oWork,'showjiu',1,9,'linear','forwards','running')
	ani(oGood,'showhao',1,9,'linear','forwards','running')
	ani(oImg,'logo',1,0,'linear','forwards','running')
	ani(oLay,'flash',2,8,'linear','forwards','running')
	
	console.log(oTextAr)
	//妈的，这个动画CSS3控制不了了，非得拿js来了
	
	oTextAr.forEach(function(v,i,a){
		v.style.animationName = 'word';
		v.style.animationDuration = 0.8+'s';
		v.style.animationDelay = 1+i*0.8+'s';
		v.style.animationFillMode = 'forwards';
		v.style.animationTimingFunction = 'linear';
		v.style.animationPlayState = 'running'
	})
}


function anipause(){
	var oLogo = document.getElementsByClassName('logo')[0]
	var oImg = oLogo.getElementsByTagName('img')[0]
	var oWork = document.getElementById("jiu")
	var oGood = document.getElementById("hao")
	var oLay = oLogo.getElementsByClassName('layer')[0]
	var oCon = oLogo.getElementsByClassName('word-container')[0]
	var oText = oCon.getElementsByTagName('p')
	var oTextAr = Array.prototype.slice.call(oText);
	var arr = [oImg,oWork,oGood,oLay]
	
	ani(oWork,'show',1,9,'linear','forwards','paused')
	ani(oGood,'show',1,9,'linear','forwards','paused')
	ani(oImg,'logo',1,0,'linear','forwards','paused')
	ani(oLay,'flash',2,8,'linear','forwards','paused')
	
	oTextAr.forEach(function(v,i,a){
		v.style.animationName = 'word';
//		v.style.animationDuration = 0.8+'s';
//		v.style.animationDelay = 1+i*0.8+'s';
//		v.style.animationFillMode = 'forwards';
		v.style.animationPlayState = 'paused'
	})
	
}


//loading图
$(document).ready(function(){
	anipause()
})



window.onload = function(){
	var oModel = $('.big-model')
		oModel.css('display' , 'none')
		console.log(2)
		anirun();
		
		
	//音乐播放	
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
}