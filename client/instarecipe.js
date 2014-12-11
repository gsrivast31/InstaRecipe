/*
Jot Chrome Extension

Matt O'Hagan

github.com/mattohagan/jot

Background images from http://imgur.com/a/3Woti
*/

window.onload = function(){
	var storage = {};
	var stor = true;
	var timer;
	var lineNum = 0;
	
	// set background
	var n = Math.floor((Math.random() * 12) + 1);
	document.body.style.backgroundImage = "url('bg/"+n+".jpg')";

	/*$('.search-field').keypress(function(event) {
		if (event.which === 13) {
			event.preventDefault();
			search();
		}
	});*/

}
