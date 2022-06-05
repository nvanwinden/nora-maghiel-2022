console.log("Hello, JavaScript!");

/* ****** BUTTON ****** */
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	mybutton.style.display = "block";
	} else {
	mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

/* ****** TIMER ****** */
var end = new Date('06/12/2022');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {

	var now = new Date();
	var distance = end - now;
	if (distance < 0) {

		clearInterval(timer);
		document.getElementById('countdown').innerHTML = 'Bedankt voor jullie komst // Thank you for coming';
		return;
	}
	var days = Math.floor(distance / _day);
	document.getElementById('countdown').innerHTML = '&#127881; ' + days + ' dagen te gaan // ' + days + ' days to go &#127881;';
}

timer = setInterval(showRemaining, 1000);

$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
