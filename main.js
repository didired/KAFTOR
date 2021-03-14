var first = document.getElementById("first");
var body = document.getElementsByTagName("BODY")[0];
var audio = document.getElementById("sound");
var isStart = true;

body.style.backgroundImage = "url('Click Screen.jpg')";
first.style.display = "none";
body.addEventListener('click', function (e) {
	if (isStart) {
		body.style.backgroundImage = "url('first.jpg')";
		isStart = false;
		first.style.display = "block";
	} else {
		if (stop) {
			stop = false;
			isStart = true;
			body.style.backgroundImage = "url('Click Screen.jpg')";
		}
	}
	e.stopPropagation();

});

var stop = false;
first.addEventListener('mouseover', function() {
	if (!isStart && !stop) {
	    audio.currentTime = 1;
	    audio.play();
	    body.style.backgroundImage = "url('hello1.gif')";
	};
});

first.addEventListener('mouseout', function() {
	if (!stop) {
	    audio.pause();
	    body.style.backgroundImage = "url('first.jpg')";
	}
});

first.addEventListener('click', function(e) {
	if (!isStart) {
		audio.pause();
		body.style.backgroundImage = "url('fine.gif')";
		stop = true;
		first.style.display = "none";
		e.stopPropagation();
	}
});

