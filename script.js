var previousBtn = document.querySelector('#previous');
var nextBtn = document.querySelector('#next');
var page = 'home';

window.addEventListener('keyup', function(e){
	
	if(e.keyCode === 13){ //enter
		//go to highlighted object
		//change page variable
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

function canMoveRt(){
	var classs = cursor.getAttribute('class');
	var id = cursor.getAttribute('id');
	if(cursor.nodeName != 'BUTTON' || id == 'options')
		return 0;
	cursor.style.color = 'rgb(217, 220, 224)';
	cursor.style.borderColor = 'rgb(217, 220, 224)';
	return 1;
}

function canMoveLt(){
	var classs = cursor.getAttribute('class');
	var id = cursor.getAttribute('id');
	if(cursor.nodeName != 'BUTTON' || id === 'home')
		return 0;
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
	if(cursor.nodeName == 'BUTTON')
		return 0;
	cursor.style.color = 'rgb(217, 220, 224)';
	cursor.style.borderColor = 'rgb(217, 220, 224)';
	return 1;
}

function canMoveDown(){
	if(cursor.nodeName != 'BUTTON')
		return 0;
	return 1;
}

function moveCursorRt(){
	var classs = cursor.getAttribute('class');
	var pos = cursor.getAttribute('pin');
	pos++;
	cursor = document.querySelector('.c' + pos);
	cursor.style.borderColor = 'orange';
	if(pos !== 5){
		var nextC = document.querySelector('.c' + ++pos);
		nextC.style.borderLeftColor = 'orange';
	}
}

function moveCursorLt(){
	var classs = cursor.getAttribute('class');
	var pos = cursor.getAttribute('pin');
	cursor = document.querySelector('.c' + pos);
	cursor.style.borderColor = 'orange';
	if(pos == 5)
		cursor.style.borderRightColor = 'rgb(217, 220, 224)';
	pos--;
	cursor = document.querySelector('.c' + pos);
	cursor.style.borderColor = 'orange';
}

function moveCursorUp(){
	alert(cursor.nodeName);
	var classs = cursor.getAttribute('class');
	if(classs == 'big' || classs == 'top'){
		cursor = document.querySelector('#home');
		alert(cursor.nodeName);
		cursor.style.color = 'orange';
		cursor.style.borderColor = 'orange';
		var play = document.querySelector('#play');
		play.style.borderColor = 'orange';
	}
}

function moveCursorDown(){
	if(page === 'home'){
		var cursor = document.querySelector('.big');
		cursor.style.color = 'orange';
		cursor.style.borderColor = 'orange';
	}
	if(page === 'play'){
		var cursor = document.querySelector('#campaign');
		var scamp = document.querySelector('#scamp');
		scamp.style.color = 'orange';
		cursor.style.borderColor = 'orange';
	}
	if(page === 'collection'){
		var thisHero = document.querySelector('#class1');
		var topp = document.querySelector('#class2');
		thisHero.style.color = 'orange';
	    thisHero.style.borderColor = 'orange';
		topp.style.borderTopColor = 'orange';
	}
	if(page === 'career'){
		var cursor = document.querySelector('#p1');
		cursor.style.color = 'orange';
		cursor.style.borderColor = 'orange';
	}
	if(page === 'options'){
		//
	}
	
}

document.addEventListener('mouseup', function(e){
})