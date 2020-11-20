var previousBtn = document.querySelector('#previous');
var nextBtn = document.querySelector('#next');
var classes = document.querySelector('#cl');
var heroes = document.querySelector('#hl');
var thisHero = document.querySelector('#class1');
var input = document.querySelector('.controls');
var page = 'collection';

window.onload = function(){
	thisHero.style.color = 'orange';
	thisHero.style.borderColor = 'orange';
	var top = document.querySelector('#class2');
	top.style.borderTopColor = 'orange';
}

function canMoveRt(){
	var id = thisHero.getAttribute('id');
	if(id === 'hero4' || id === 'hero8' || id === 'hero12' || id === 'hero16' || id === 'options')
		return 0;
	for(i = 1; i <= 12; i++){
		var thisHero0 = document.querySelector('#class' + i);
		thisHero0.style.color = 'rgb(217, 220, 224)';
		thisHero0.style.borderColor = 'rgb(217, 220, 224)';
	}
	for(i = 1; i <= 16; i++){
		var thisHero0 = document.querySelector('#hero' + i);
		thisHero0.style.color = 'rgb(217, 220, 224)';
		thisHero0.style.borderColor = 'rgb(217, 220, 224)';
	}
	for(i = 1; i <= 5; i++){
		var thisHero0 = document.querySelector('.c' + i);
		thisHero0.style.color = 'rgb(217, 220, 224)';
		thisHero0.style.borderColor = 'rgb(217, 220, 224)';
	}
	return 1;
}

function canMoveLt(){
	var id = thisHero.getAttribute('id');
	if(id.substr(0,5) === 'class' || id === 'home')
		return 0;
	for(i = 1; i <= 12; i++){
		var thisHero0 = document.querySelector('#class' + i);
		thisHero0.style.color = 'rgb(217, 220, 224)';
		thisHero0.style.borderColor = 'rgb(217, 220, 224)';
	}
	for(i = 1; i <= 16; i++){
		var thisHero0 = document.querySelector('#hero' + i);
		thisHero0.style.color = 'rgb(217, 220, 224)';
		thisHero0.style.borderColor = 'rgb(217, 220, 224)';
	}
	for(i = 1; i <= 5; i++){
		var thisHero0 = document.querySelector('.c' + i);
		thisHero0.style.color = 'rgb(217, 220, 224)';
		thisHero0.style.borderColor = 'rgb(217, 220, 224)';
	}
	return 1;
}

function canMoveUp(){
	var id = thisHero.getAttribute('id');
	if(thisHero.nodeName === 'BUTTON')
		return 0;
	for(i = 1; i <= 12; i++){
		var thisHero0 = document.querySelector('#class' + i);
		thisHero0.style.color = 'rgb(217, 220, 224)';
		thisHero0.style.borderColor = 'rgb(217, 220, 224)';
	}
	for(i = 1; i <= 16; i++){
		var thisHero0 = document.querySelector('#hero' + i);
		thisHero0.style.color = 'rgb(217, 220, 224)';
		thisHero0.style.borderColor = 'rgb(217, 220, 224)';
	}
	return 1;
}

function canMoveDown(){
	var id = thisHero.getAttribute('id');
	if(id === 'class12' || id === 'hero13' || id === 'hero14' || id === 'hero15' || id === 'hero16')
		return 0;
	for(i = 1; i <= 12; i++){
		var thisHero0 = document.querySelector('#class' + i);
		thisHero0.style.color = 'rgb(217, 220, 224)';
		thisHero0.style.borderColor = 'rgb(217, 220, 224)';
	}
	for(i = 1; i <= 16; i++){
		var thisHero0 = document.querySelector('#hero' + i);
		thisHero0.style.color = 'rgb(217, 220, 224)';
		thisHero0.style.borderColor = 'rgb(217, 220, 224)';
	}
	return 1;
}

function moveCursorRt(){
	var id = thisHero.getAttribute('id');
	if(thisHero.nodeName === 'BUTTON'){
		var pos = thisHero.getAttribute('pin');
		pos++;
		thisHero = document.querySelector('.c' + pos);
		thisHero.style.color = 'orange';
		thisHero.style.borderColor = 'orange';
		if(pos !== 5){
			var nextC = document.querySelector('.c' + ++pos);
			nextC.style.borderLeftColor = 'orange';
		}
	}
	if(id.substr(0,5) === 'class'){
		thisHero = document.querySelector('#hero1');
		thisHero.style.color = 'orange';
	    thisHero.style.borderColor = 'orange';
		var top = document.querySelector('#hero5');
		top.style.borderTopColor = 'orange';
		var left = document.querySelector('#hero2');
		left.style.borderLeftColor = 'orange';
	}
	if(id.substr(0,4) === 'hero'){
		var idNum = id.substr(4);
		idNum++;
		thisHero = document.querySelector('#hero' + idNum);
		thisHero.style.color = 'orange';
		thisHero.style.borderColor = 'orange';
		if(thisHero.getAttribute('id') !== 'hero4' && thisHero.getAttribute('id') !== 'hero8' && thisHero.getAttribute('id') !== 'hero12' && thisHero.getAttribute('id') !== 'hero16'){
			idNum++;
			var left = document.querySelector('#hero' + idNum);
			left.style.borderLeftColor = 'orange';
			if(thisHero.getAttribute('id') !== 'hero13' && thisHero.getAttribute('id') !== 'hero14' && thisHero.getAttribute('id') !== 'hero15'){
				idNum++;idNum++;idNum++;
				var top = document.querySelector('#hero' + idNum);
				top.style.borderTopColor = 'orange';
		    }
		}
		if(thisHero.getAttribute('id') === 'hero4' || thisHero.getAttribute('id') === 'hero8' || thisHero.getAttribute('id') === 'hero12'){
			idNum++;idNum++;idNum++;idNum++;
			var top = document.querySelector('#hero' + idNum);
			top.style.borderTopColor = 'orange';
		}
	}
}

function moveCursorLt(){
	var id = thisHero.getAttribute('id');
	if(thisHero.nodeName === 'BUTTON'){
		var pos = thisHero.getAttribute('pin');
		thisHero = document.querySelector('.c' + pos);
		thisHero.style.borderColor = 'orange';
		if(pos == 5)
			thisHero.style.borderRightColor = 'rgb(217, 220, 224)';
		pos--;
		thisHero = document.querySelector('.c' + pos);
		thisHero.style.color = 'orange';
		thisHero.style.borderColor = 'orange';
		return;
	}
	if(id === 'hero1' || id === 'hero5' || id === 'hero9' || id === 'hero13'){
		thisHero = document.querySelector('#class1');
		thisHero.style.color = 'orange';
	    thisHero.style.borderColor = 'orange';
		var top = document.querySelector('#class2');
		top.style.borderTopColor = 'orange';
	}
	if(id !== 'hero1' && id !== 'hero5' && id !== 'hero9' && id !== 'hero13'){
		thisHero.style.borderLeftColor = 'orange';
		var idNum = id.substr(4);
		idNum--;
		thisHero = document.querySelector('#hero' + idNum);
		thisHero.style.color = 'orange';
		thisHero.style.borderColor = 'orange';
		if(id !== 'hero16' && id !== 'hero15' && id !== 'hero14'){
			idNum++;idNum++;idNum++;idNum++;
			var top = document.querySelector('#hero' + idNum);
			top.style.borderTopColor = 'orange';
		}
	}
}

function moveCursorUp(){
	var id = thisHero.getAttribute('id');
	if(id === 'class1' || id === 'hero1' || id === 'hero2' || id === 'hero3' || id === 'hero4'){
		thisHero = document.querySelector('#collection');
		thisHero.style.color = 'orange';
		thisHero.style.borderColor = 'orange';
		var play = document.querySelector('#career');
		play.style.borderLeftColor = 'orange';
		return;
	}
	if(id.substr(0,5) === 'class'){
		if(thisHero.getAttribute('id') !== 'class5' && thisHero.getAttribute('id') !== 'class7' && thisHero.getAttribute('id') !== 'class10'){
			thisHero.style.borderTopColor = 'orange';
		}
		var idNum = thisHero.getAttribute('id').substr(5);
		idNum--;
		thisHero = document.querySelector('#class' + idNum);
		thisHero.style.color = 'orange';
		thisHero.style.borderColor = 'orange';
	}
	if(id.substr(0,4) === 'hero'){
		thisHero.style.borderTopColor = 'orange';
		var idNum = thisHero.getAttribute('id').substr(4);
		idNum--;idNum--;idNum--;idNum--;
		thisHero = document.querySelector('#hero' + idNum);
		thisHero.style.borderColor = 'orange';
		if(thisHero.getAttribute('id') !== 'hero4' && thisHero.getAttribute('id') !== 'hero8' && thisHero.getAttribute('id') !== 'hero12' && thisHero.getAttribute('id') !== 'hero16'){
			idNum++;
			var left = document.querySelector('#hero' + idNum);
		    left.style.borderLeftColor = 'orange';
		}
	}
}

function moveCursorDown(){
	if(thisHero.nodeName == 'BUTTON'){
		thisHero.style.color = 'rgb(217, 220, 224)';
		thisHero.style.borderColor = 'rgb(217, 220, 224)';
		var pos = thisHero.getAttribute('pin');
		if(pos != 5){
			pos++;
			var newC = document.querySelector('.c' + pos);
			newC.style.borderColor = 'rgb(217, 220, 224)';
		}
		thisHero = document.querySelector('#class1');
		thisHero.style.color = 'orange';
		thisHero.style.borderColor = 'orange';
		var top = document.querySelector('#class2');
		top.style.borderTopColor = 'orange';
		return;
	}
	var id = thisHero.getAttribute('id');
	if(id.substr(0,5) === 'class'){
		var idNum = thisHero.getAttribute('id').substr(5);
		idNum++;
		thisHero = document.querySelector('#class' + idNum);
		thisHero.style.color = 'orange';
		thisHero.style.borderColor = 'orange';
		if(thisHero.getAttribute('id') !== 'class4' && thisHero.getAttribute('id') !== 'class6' && thisHero.getAttribute('id') !== 'class9' && thisHero.getAttribute('id') !== 'class12'){
		  idNum++;
		  var top = document.querySelector('#class' + idNum);
		  top.style.borderTopColor = 'orange';
		}
	}
	if(id.substr(0,4) === 'hero'){
		var idNum = thisHero.getAttribute('id').substr(4);
		idNum++;idNum++;idNum++;idNum++;
		thisHero = document.querySelector('#hero' + idNum);
		thisHero.style.color = 'orange';
		thisHero.style.borderColor = 'orange';
		if(thisHero.getAttribute('id') !== 'hero8' && thisHero.getAttribute('id') !== 'hero16' && thisHero.getAttribute('id') !== 'hero12'){
		  idNum++;
		  var left = document.querySelector('#hero' + idNum);
		  left.style.borderLeftColor = 'orange';
		  if(thisHero.getAttribute('id') !== 'hero13' && thisHero.getAttribute('id') !== 'hero14' && thisHero.getAttribute('id') !== 'hero15' && thisHero.getAttribute('id') !== 'hero16'){
		    idNum++;idNum++;idNum++;
		    var top = document.querySelector('#hero' + idNum);
		    top.style.borderTopColor = 'orange';
		  }
	    }
		if(thisHero.getAttribute('id') === 'hero4' || thisHero.getAttribute('id') === 'hero8' || thisHero.getAttribute('id') === 'hero12'){
			idNum++;idNum++;idNum++;idNum++;
			var top = document.querySelector('#hero' + idNum);
			top.style.borderTopColor = 'orange';
		}
	}
}

window.addEventListener('keyup', function(e){
	if(e.keyCode === 13){
		if(thisHero.nodeName != 'BUTTON')
			return;
		var id = thisHero.getAttribute('id');
		if(id === 'play'){
			var link = document.querySelector('.link2');
			link.click();
		}
		if(id === 'home'){
			var link = document.querySelector('.link1');
			link.click();
		}
		if(id === 'career'){
			var link = document.querySelector('.link4');
			link.click();
		}
		if(id === 'options'){
			var link = document.querySelector('.link5');
			link.click();
		}
	}
	
	if(e.keyCode === 39){ //right
		if(canMoveRt()){
			moveCursorRt();
		}
	}
	
	if(e.keyCode === 37){ //left
		if(canMoveLt()){
			moveCursorLt();
		}
	}
	
	if(e.keyCode === 38){ //up
		if(canMoveUp()){
			moveCursorUp();
		}
	}
	
	if(e.keyCode === 40){ //down
		if(canMoveDown()){
			moveCursorDown();
		}
	}
})

document.addEventListener('mouseup', function(e){
	for(i = 1; i <= 12; i++){
		var thisHero0 = document.querySelector('#class' + i);
		thisHero0.style.color = 'rgb(217, 220, 224)';
		thisHero0.style.borderColor = 'rgb(217, 220, 224)';
	}
	for(i = 1; i <= 16; i++){
		var thisHero0 = document.querySelector('#hero' + i);
		thisHero0.style.color = 'rgb(217, 220, 224)';
		thisHero0.style.borderColor = 'rgb(217, 220, 224)';
	}
	e.target.style.color = 'orange';
	e.target.style.borderColor = 'orange';
	if(e.target.getAttribute('class') === 'loadout' || e.target.getAttribute('class') === 'special' || e.target.getAttribute('class') === 'object' || e.target.getAttribute('class') === 'starfighter'){
	  thisHero = document.querySelector('#' + e.target.getAttribute('id'));
	  if(e.target.getAttribute('id') !== 'class4' && e.target.getAttribute('id') !== 'class6' && e.target.getAttribute('id') !== 'class9' && e.target.getAttribute('id') !== 'class12'){
		var idNum = e.target.getAttribute('id').substr(5);
		idNum++;
		var top = document.querySelector('#class' + idNum);
		top.style.borderTopColor = 'orange';
	  }
	}
	var inHeroes = 0;
	for(i = 1; i <= 16; i++){
		if(e.target.getAttribute('id') === 'hero' + i){
			inHeroes = 1;
		}
	}
	if(inHeroes === 0){
	  if(e.target.nodeName === 'IMG'){ 
		  var id = e.target.parentNode.getAttribute('id');
		  thisHero = document.querySelector('#' + id);
		  thisHero.style.borderColor = 'orange';
		  if(e.target.parentNode.getAttribute('id') !== 'hero13' && e.target.parentNode.getAttribute('id') !== 'hero14' && e.target.parentNode.getAttribute('id') !== 'hero15' && e.target.parentNode.getAttribute('id') !== 'hero16'){
			var idNum = e.target.parentNode.getAttribute('id').substr(4);
			idNum++;idNum++;idNum++;idNum++;
			var top = document.querySelector('#hero' + idNum);
			top.style.borderTopColor = 'orange';
	     }
	    if(e.target.parentNode.getAttribute('id') !== 'hero4' && e.target.parentNode.getAttribute('id') !== 'hero8' && e.target.parentNode.getAttribute('id') !== 'hero12' && e.target.parentNode.getAttribute('id') !== 'hero16'){
		  var idNum0 = e.target.parentNode.getAttribute('id').substr(4);
		  idNum0++;
		  var left = document.querySelector('#hero' + idNum0);
		  left.style.borderLeftColor = 'orange';
	    }
	}
	return;
	}
	if(e.target.getAttribute('id') !== 'hero13' && e.target.getAttribute('id') !== 'hero14' && e.target.getAttribute('id') !== 'hero15' && e.target.getAttribute('id') !== 'hero16'){
		var idNum1 = e.target.getAttribute('id').substr(4);
		idNum1++;idNum1++;idNum1++;idNum1++;
		var top = document.querySelector('#hero' + idNum1);
		top.style.borderTopColor = 'orange';
	}
	if(e.target.getAttribute('id') !== 'hero4' && e.target.getAttribute('id') !== 'hero8' && e.target.getAttribute('id') !== 'hero12' && e.target.getAttribute('id') !== 'hero16'){
		var idNum2 = e.target.getAttribute('id').substr(4);
		idNum2++;
		var left = document.querySelector('#hero' + idNum2);
		left.style.borderLeftColor = 'orange';
	}
})