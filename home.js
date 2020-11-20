var previousBtn = document.querySelector('#previous');
var nextBtn = document.querySelector('#next');
var big = document.querySelector('.big');
var topp = document.querySelector('.top');
var bottom = document.querySelector('.bottom');
var crates = document.querySelector('.crates');
var cursor = document.querySelector('.big');
var page = 'index';

window.onload = function(){
	cursor.style.borderColor = 'orange';
	cursor.style.color = 'orange';
}

window.addEventListener('keyup', function(e){
	if(e.keyCode === 13){
		if(cursor.nodeName != 'BUTTON')
			return;
		var id = cursor.getAttribute('id');
		if(id === 'play'){
			var link = document.querySelector('.link2');
			link.click();
		}
		if(id === 'collection'){
			var link = document.querySelector('.link3');
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
			//alert(cursor.nodeName); // MAD AS SHIT RN. IDK WHAT HAPPENED TO CURSOR BUT GOTTA PASS IT IN FOR THIS SHIT TO WORK NOW. 
			// fixed that shit... don't know how
			moveCursorDown();
		}
	}
})

function canMoveRt(){
	var classs = cursor.getAttribute('class');
	var id = cursor.getAttribute('id');
	if(classs == 'top' || classs == 'bottom' || id == 'options')
		return 0;
	big.style.color = 'rgb(217, 220, 224)';
	big.style.borderColor = 'rgb(217, 220, 224)';
	topp.style.color = 'rgb(217, 220, 224)';
	topp.style.borderColor = 'rgb(217, 220, 224)';
	bottom.style.color = 'rgb(217, 220, 224)';
	bottom.style.borderColor = 'rgb(217, 220, 224)';
	cursor.style.color = 'rgb(217, 220, 224)';
	cursor.style.borderColor = 'rgb(217, 220, 224)';
	return 1;
}

function canMoveLt(){
	var classs = cursor.getAttribute('class');
	var id = cursor.getAttribute('id');
	if(classs === 'big' || id === 'home')
		return 0;
	big.style.color = 'rgb(217, 220, 224)';
	big.style.borderColor = 'rgb(217, 220, 224)';
	topp.style.color = 'rgb(217, 220, 224)';
	topp.style.borderColor = 'rgb(217, 220, 224)';
	bottom.style.color = 'rgb(217, 220, 224)';
	bottom.style.borderColor = 'rgb(217, 220, 224)';
	cursor.style.color = 'rgb(217, 220, 224)';
	cursor.style.borderColor = 'rgb(217, 220, 224)';
	for(i = 1; i <= 5; i++){
		var thisCursor = document.querySelector('.c' + i);
		thisCursor.style.color = 'rgb(217, 220, 224)';
		thisCursor.style.borderColor = 'rgb(217, 220, 224)';
	}
	return 1;
}

function canMoveUp(){
	if(cursor.getAttribute('nodeName') == 'NAV')
		return 0;
	var classs = cursor.getAttribute('class');
	if(classs == 'big' || classs == 'top' || classs === 'bottom'){
	  big.style.color = 'white';
	  big.style.borderColor = 'white';
	  topp.style.color = 'white';
	  topp.style.borderColor = 'white';
	  bottom.style.color = 'white';
	  bottom.style.borderColor = 'white';
	  return 1;
	}
}

function canMoveDown(){
	var classs = cursor.getAttribute('class');
	if(classs === 'big' || classs == 'bottom')
		return 0;
	big.style.color = 'white';
	big.style.borderColor = 'white';
	topp.style.color = 'white';
	topp.style.borderColor = 'white';
	bottom.style.color = 'white';
	bottom.style.borderColor = 'white';
	return 1;
}

function moveCursorRt(){
	var classs = cursor.getAttribute('class');
	if(classs === 'big'){
		big.style.borderRight = 'none';
		cursor = document.querySelector('.top');
		topp.style.color = 'orange';
		topp.style.borderColor = 'orange';
		topp.style.borderLeft = 'solid 1px';
		bottom.style.borderLeft = 'solid 1px';
		bottom.style.borderTopColor = 'orange';
	}
	else{
		var pos = cursor.getAttribute('pin');
		pos++;
		cursor = document.querySelector('.c' + pos);
		cursor.style.color = 'orange';
		cursor.style.borderColor = 'orange';
		if(pos !== 5){
			var nextC = document.querySelector('.c' + ++pos);
			nextC.style.borderLeftColor = 'orange';
		}
	}
}

function moveCursorLt(){
	var classs = cursor.getAttribute('class');
	big.style.borderRight = 'solid';
	topp.style.borderLeft = 'none';
	bottom.style.borderLeft = 'none';
	if(classs === 'top'){
		cursor = document.querySelector('.big');
		cursor.style.color = 'orange';
		cursor.style.borderColor = 'orange';
	}
	else if(classs === 'bottom'){
		cursor = document.querySelector('.big');
		cursor.style.color = 'orange';
		cursor.style.borderColor = 'orange';
	}	
	else{
		var pos = cursor.getAttribute('pin');
		cursor = document.querySelector('.c' + pos);
		cursor.style.borderColor = 'orange';
		if(pos == 5)
			cursor.style.borderRightColor = 'rgb(217, 220, 224)';
		pos--;
		cursor = document.querySelector('.c' + pos);
		cursor.style.color = 'orange';
		cursor.style.borderColor = 'orange';
	}
}

function moveCursorUp(){
	var classs = cursor.getAttribute('class');
	if(classs == 'big' || classs == 'top'){
		cursor = document.querySelector('#home');
		cursor.style.color = 'orange';
		cursor.style.borderColor = 'orange';
		var play = document.querySelector('#play');
		play.style.borderColor = 'orange';
	}
	else if(classs === 'bottom'){
		cursor = document.querySelector('.top');
		cursor.style.color = 'orange';
		cursor.style.borderColor = 'orange';
		bottom.style.borderTopColor = 'orange';
	}
}

function moveCursorDown(){
	var classs = cursor.getAttribute('class');
	if(classs === 'top'){
		cursor = document.querySelector('.bottom');
		cursor.style.color = 'orange';
		cursor.style.borderColor = 'orange';
		return cursor;
	}
	if(cursor.nodeName === 'BUTTON' && page === 'index'){
		cursor.style.color = 'rgb(217, 220, 224)';
		cursor.style.borderColor = 'rgb(217, 220, 224)';
		var pos = cursor.getAttribute('pin');
		pos++;
		var newC = document.querySelector('.c' + pos);
		newC.style.borderColor = 'rgb(217, 220, 224)';
		cursor = document.querySelector('.big');
		cursor.style.color = 'orange';
		cursor.style.borderColor = 'orange';
	}
}

document.addEventListener('mouseup', function(e){
	big.style.color = 'rgb(217, 220, 224)';
	big.style.borderColor = 'rgb(217, 220, 224)';
	topp.style.color = 'rgb(217, 220, 224)';
	topp.style.borderColor = 'rgb(217, 220, 224)';
	bottom.style.color = 'rgb(217, 220, 224)';
	bottom.style.borderColor = 'rgb(217, 220, 224)';
	if(e.target.nodeName === 'P'){
		var classs = e.target.parentNode.getAttribute('class');
		if(classs === 'big'){
			big.style.borderRight = 'solid';
	        topp.style.borderLeft = 'none';
			bottom.style.borderLeft = 'none';
			cursor = document.querySelector('.big');
			big.style.borderColor = 'orange';
			big.style.color = 'orange';
		}
		else if(classs === 'top'){
			big.style.borderRight = 'none';
			topp.style.borderLeft = 'solid 1px';
		    bottom.style.borderLeft = 'solid 1px';
			cursor = document.querySelector('.top');
			topp.style.color = 'orange';
			topp.style.borderColor = 'orange';
			bottom.style.borderTopColor = 'orange';
		}
		else if(classs === 'bottom'){
			big.style.borderRight = 'none';
			topp.style.borderLeft = 'solid 1px';
		    bottom.style.borderLeft = 'solid 1px';
			cursor = document.querySelector('.bottom');
			bottom.style.color = 'orange';
			bottom.style.borderColor = 'orange';
		}
		//cursor = document.querySelector('#' + classs);
		//cursor.style.borderColor = 'orange';
		return;
	}
	if(e.target.getAttribute('class') === 'big'){
	  big.style.borderRight = 'solid';
	  topp.style.borderLeft = 'none';
	  bottom.style.borderLeft = 'none';
	  cursor = document.querySelector('.big');
	  big.style.color = 'orange';
	  big.style.borderColor = 'orange';
	}
	if(e.target.getAttribute('class') === 'top'){
		big.style.borderRight = 'none';
		topp.style.borderLeft = 'solid 1px';
	    bottom.style.borderLeft = 'solid 1px';
		cursor = document.querySelector('.top');
		topp.style.color = 'orange';
		topp.style.borderColor = 'orange';
		bottom.style.borderTopColor = 'orange';
	}
	if(e.target.getAttribute('class') === 'bottom'){
		big.style.borderRight = 'none';
		topp.style.borderLeft = 'solid 1px';
	    bottom.style.borderLeft = 'solid 1px';
		cursor = document.querySelector('.bottom');
		bottom.style.color = 'orange';
		bottom.style.borderColor = 'orange';
	}
	//e.target.style.color = 'orange';			//might scrap last two lines and do in above conditionals
	//e.target.style.borderColor = 'orange';
})
