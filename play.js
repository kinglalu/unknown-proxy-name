var previousBtn = document.querySelector('#previous');
var nextBtn = document.querySelector('#next');
var campaign = document.querySelector('#campaign');
var multiplayer = document.querySelector('#multiplayer');
var arcade = document.querySelector('#arcade');
var cursor = document.querySelector('#campaign');
var scamp = document.querySelector('#scamp');
var smulti = document.querySelector('#smulti');
var sarc = document.querySelector('#sarc');
var page = 'play';

window.onload = function(){
	cursor.style.borderColor = 'orange';
	scamp.style.color = 'orange';
}

window.addEventListener('keyup', function(e){
	if(e.keyCode === 13){
		if(cursor.nodeName != 'BUTTON')
			return;
		var id = cursor.getAttribute('id');
		if(id === 'home'){
			var link = document.querySelector('.link1');
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
			moveCursorDown();
		}
	}
})

function canMoveUp(){
	if(cursor.getAttribute('nodeName') == 'NAV')
		return 0;
	campaign.style.color = 'rgb(217, 220, 224)';
	campaign.style.borderColor = 'rgb(217, 220, 224)';
	multiplayer.style.color = 'rgb(217, 220, 224)';
	multiplayer.style.borderColor = 'rgb(217, 220, 224)';
	arcade.style.color = 'rgb(217, 220, 224)';
	arcade.style.borderColor = 'rgb(217, 220, 224)';
	scamp.style.color = 'rgb(217, 220, 224)';
	smulti.style.color = 'rgb(217, 220, 224)';
	sarc.style.color = 'rgb(217, 220, 224)';
	  return 1;
}

function canMoveRt(){
	var id = cursor.getAttribute('id');
	if(id === 'arcade' || id === 'options')
		return 0;
	campaign.style.color = 'rgb(217, 220, 224)';
	campaign.style.borderColor = 'rgb(217, 220, 224)';
	multiplayer.style.color = 'rgb(217, 220, 224)';
	multiplayer.style.borderColor = 'rgb(217, 220, 224)';
	arcade.style.color = 'rgb(217, 220, 224)';
	arcade.style.borderColor = 'rgb(217, 220, 224)';
	scamp.style.color = 'rgb(217, 220, 224)';
	smulti.style.color = 'rgb(217, 220, 224)';
	sarc.style.color = 'rgb(217, 220, 224)';
	cursor.style.color = 'rgb(217, 220, 224)';
	cursor.style.borderColor = 'rgb(217, 220, 224)';
	return 1;
}

function canMoveDown(){
	if(cursor.nodeName != 'BUTTON')
		return 0;
	return 1;
}

function canMoveLt(){
	var id = cursor.getAttribute('id');
	if(id === 'campaign' || id === 'home')
		return 0;
	campaign.style.color = 'rgb(217, 220, 224)';
	campaign.style.borderColor = 'rgb(217, 220, 224)';
	multiplayer.style.color = 'rgb(217, 220, 224)';
	multiplayer.style.borderColor = 'rgb(217, 220, 224)';
	arcade.style.color = 'rgb(217, 220, 224)';
	arcade.style.borderColor = 'rgb(217, 220, 224)';
	scamp.style.color = 'rgb(217, 220, 224)';
	smulti.style.color = 'rgb(217, 220, 224)';
	sarc.style.color = 'rgb(217, 220, 224)';
	cursor.style.color = 'rgb(217, 220, 224)';
	cursor.style.borderColor = 'rgb(217, 220, 224)';
	for(i = 1; i <= 5; i++){
		var thisCursor = document.querySelector('.c' + i);
		thisCursor.style.color = 'rgb(217, 220, 224)';
		thisCursor.style.borderColor = 'rgb(217, 220, 224)';
	}
	return 1;
}

function moveCursorRt(){
	var id = cursor.getAttribute('id');
	if(id === 'campaign'){
		campaign.style.borderRightColor = 'orange';
		cursor = document.querySelector('#multiplayer');
		smulti.style.color = 'orange';
		cursor.style.borderColor = 'orange';
	}
	if(id === 'multiplayer'){
		multiplayer.style.borderRightColor = 'orange';
		cursor = document.querySelector('#arcade');
		sarc.style.color = 'orange';
		cursor.style.borderColor = 'orange';
	}
	if(cursor.nodeName === 'BUTTON'){
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

function moveCursorUp(){
	cursor = document.querySelector('#play');
	cursor.style.color = 'orange';
	cursor.style.borderColor = 'orange';
	var play = document.querySelector('#collection');
	play.style.borderColor = 'orange';	
}

function moveCursorDown(){
    cursor.style.color = 'rgb(217, 220, 224)';
	cursor.style.borderColor = 'rgb(217, 220, 224)';
	var pos = cursor.getAttribute('pin');
	pos++;
	var newC = document.querySelector('.c' + pos);
	newC.style.borderColor = 'rgb(217, 220, 224)';
	cursor = document.querySelector('#campaign');
	cursor.style.color = 'orange';
	cursor.style.borderColor = 'orange';
	scamp.style.color = 'orange';
}

function moveCursorLt(){
	var id = cursor.getAttribute('id');
	if(id === 'multiplayer'){
		cursor = document.querySelector('#campaign');
		scamp.style.color = 'orange';
		cursor.style.borderColor = 'orange';
	}
	if(id === 'arcade'){
		campaign.style.borderRightColor = 'orange';
		cursor = document.querySelector('#multiplayer');
		smulti.style.color = 'orange';
		cursor.style.borderColor = 'orange';
	}
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

document.addEventListener('mouseup', function(e){
	scamp.style.color = 'rgb(217, 220, 224)';
	campaign.style.borderColor = 'rgb(217, 220, 224)';
	smulti.style.color = 'rgb(217, 220, 224)';
	multiplayer.style.borderColor = 'rgb(217, 220, 224)';
	sarc.style.color = 'rgb(217, 220, 224)';
	arcade.style.borderColor = 'rgb(217, 220, 224)';
	if(e.target.nodeName === 'P'){
		var id = e.target.parentNode.parentNode.getAttribute('id');
		if(id === 'campaign'){
			campaign.style.borderColor = 'orange';
			scamp.style.color = 'orange';
		}
		else if(id === 'multiplayer'){
			smulti.style.color = 'orange';
			multiplayer.style.borderColor = 'orange';
			campaign.style.borderRightColor = 'orange';
		}
		else if(id === 'arcade'){
			sarc.style.color = 'orange';
			multiplayer.style.borderRightColor = 'orange';
		}
		cursor = document.querySelector('#' + id);
		cursor.style.borderColor = 'orange';
		return;
	}
	if(e.target.nodeName === 'STRONG'){
		var id = e.target.parentNode.parentNode.parentNode.getAttribute('id');
		if(id === 'campaign'){
			campaign.style.borderColor = 'orange';
			scamp.style.color = 'orange';
		}
		else if(id === 'multiplayer'){
			smulti.style.color = 'orange';
			multiplayer.style.borderColor = 'orange';
			campaign.style.borderRightColor = 'orange';
		}
		else if(id === 'arcade'){
			sarc.style.color = 'orange';
			multiplayer.style.borderRightColor = 'orange';
		}
		cursor = document.querySelector('#' + id);
		cursor.style.borderColor = 'orange';
		return;
	}
	if(e.target.nodeName === 'IMG' || e.target.nodeName === 'SECTION'){
		var id = e.target.parentNode.getAttribute('id');
		if(id === 'campaign'){
			campaign.style.borderColor = 'orange';
			scamp.style.color = 'orange';
		}
		else if(id === 'multiplayer'){
			smulti.style.color = 'orange';
			multiplayer.style.borderColor = 'orange';
			campaign.style.borderRightColor = 'orange';
		}
		else if(id === 'arcade'){
			sarc.style.color = 'orange';
			multiplayer.style.borderRightColor = 'orange';
		}
		cursor = document.querySelector('#' + id);
		cursor.style.borderColor = 'orange';
	}
	if(e.target.getAttribute('id') === 'campaign'){
	  
	  scamp.style.color = 'orange';
	}
	if(e.target.getAttribute('id') === 'multiplayer'){
		smulti.style.color = 'orange';
		campaign.style.borderRightColor = 'orange';
	}
	if(e.target.getAttribute('id') === 'arcade'){
		sarc.style.color = 'orange';
		multiplayer.style.borderRightColor = 'orange';
	}
	return;
})

document.addEventListener('onmouseover', function(e){
	//when hover over should highlight border
})
	