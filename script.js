console.log("Hello, JavaScript!");

var end = new Date('06/11/2022');

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
