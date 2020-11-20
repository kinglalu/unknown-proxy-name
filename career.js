var previousBtn = document.querySelector('#previous');
var nextBtn = document.querySelector('#next');
var cursor = document.querySelector('#p1');
var page = 'career';

window.onload = function(){
	cursor.style.color = 'orange';
	cursor.style.borderColor = 'orange';
}

function canMoveUp(){
	if(cursor.nodeName === 'BUTTON')
		return 0;
	for(i = 1; i <= 7; i++){
		var current = document.querySelector('#p' + i);
		current.style.color = 'rgb(217, 220, 224)';
		current.style.borderColor = 'rgb(217, 220, 224)';
	}
	cursor.style.color = 'rgb(217, 220, 224)';
	cursor.style.borderColor = 'rgb(217, 220, 224)';
	return 1;
}

function canMoveDown(){
	var id = cursor.getAttribute('id');
	if(id === 'p7')
		return 0;
	for(i = 1; i <= 7; i++){
		var current = document.querySelector('#p' + i);
		current.style.color = 'rgb(217, 220, 224)';
		current.style.borderColor = 'rgb(217, 220, 224)';
	}
	return 1;
}

function canMoveRt(){
	var id = cursor.getAttribute('id');
	if(cursor.nodeName != 'BUTTON' || id === 'options')
		return 0;
	cursor.style.color = 'rgb(217, 220, 224)';
	cursor.style.borderColor = 'rgb(217, 220, 224)';
	return 1;
}

function canMoveLt(){
	var id = cursor.getAttribute('id');
	if(cursor.nodeName != 'BUTTON' || id === 'home')
		return 0;
	cursor.style.color = 'rgb(217, 220, 224)';
	cursor.style.borderColor = 'rgb(217, 220, 224)';
	return 1;
}

function moveCursorUp(){
	  var id = cursor.getAttribute('id');
	  if(id === 'p1'){
		cursor = document.querySelector('#career');
		cursor.style.color = 'orange';
		cursor.style.borderColor = 'orange';
		var play = document.querySelector('#options');
		play.style.borderLeftColor = 'orange';	
		return;
	  }
	  if(id !== 'p2'){
		var top = document.querySelector('#' + id);
		top.style.borderTopColor = 'orange';
	}
	  var idNum = cursor.getAttribute('id').substr(1);
	  idNum--;
	  cursor = document.querySelector('#p' + idNum);
	  cursor.style.color = 'orange';
	  cursor.style.borderColor = 'orange';
}

function moveCursorDown(){
	if(cursor.nodeName != 'BUTTON'){
	var id = cursor.getAttribute('id');
		var idNum = cursor.getAttribute('id').substr(1);
		idNum++;
		cursor = document.querySelector('#p' + idNum);
		cursor.style.color = 'orange';
		cursor.style.borderColor = 'orange';
		if(cursor.getAttribute('id') !== 'p7'){
		  idNum++;
		  var top = document.querySelector('#p' + idNum);
		  top.style.borderTopColor = 'orange';
		}
	}
	else{
		cursor.style.color = 'rgb(217, 220, 224)';
		cursor.style.borderColor = 'rgb(217, 220, 224)';
		var pos = cursor.getAttribute('pin');
		pos++;
		var newC = document.querySelector('.c' + pos);
		newC.style.borderColor = 'rgb(217, 220, 224)';
		cursor = document.querySelector('#p1');
		cursor.style.color = 'orange';
		cursor.style.borderColor = 'orange';
	}
}

function moveCursorLt(){
	var pos = cursor.getAttribute('pin');
	cursor = document.querySelector('.c' + pos);
	cursor.style.borderColor = 'orange';
	if(pos == 5){
		cursor.style.borderRightColor = 'rgb(217, 220, 224)';
		pos--;
		cursor = document.querySelector('.c' + pos);
		cursor.style.color = 'orange';
		cursor.style.borderColor = 'orange';
		return;
	}
	pos++;
	cursor = document.querySelector('.c' + pos);
	cursor.style.borderColor = 'rgb(217, 220, 224)';
	pos--;
	pos--;
	cursor = document.querySelector('.c' + pos);
	cursor.style.color = 'orange';
	cursor.style.borderColor = 'orange';
}

function moveCursorRt(){
	var pos = cursor.getAttribute('pin');
	cursor = document.querySelector('.c' + pos);
	cursor.style.borderColor = 'rgb(217, 220, 224)';
	pos++;
	cursor = document.querySelector('.c' + pos);
	if(pos === 5){
		cursor.style.borderColor = 'orange';
		cursor.style.color = 'orange';
		return;
	}
	cursor.style.borderColor = 'orange';
	cursor.style.color = 'orange';
	pos++;
	cursor = document.querySelector('.c' + pos);
	cursor.style.borderLeftColor = 'orange';
	pos--;
	cursor = document.querySelector('.c' + pos);
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
		if(id === 'home'){
			var link = document.querySelector('.link1');
			link.click();
		}
		if(id === 'options'){
			var link = document.querySelector('.link5');
			link.click();
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
})


document.addEventListener('mouseup', function(e){
	for(i = 1; i <= 7; i++){
		var current = document.querySelector('#p' + i);
		current.style.color = 'rgb(217, 220, 224)';
		current.style.borderColor = 'rgb(217, 220, 224)';
	}
	cursor = e.target;
	e.target.style.color = 'orange';
	e.target.style.borderColor = 'orange';
	if(cursor.getAttribute('id') !== 'p7' && cursor.getAttribute('id') !== 'p1'){
		var idNum = cursor.getAttribute('id').substr(1);
		idNum++;
		var top = document.querySelector('#p' + idNum);
		top.style.borderTopColor = 'orange';
	}
})