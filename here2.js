/*var x;
var endOfDay = x - 24hours(however you are going to put it)
*/
function countdown(){
	var now = new Date();
	var eventDate = new Date(2052 , 12  , 24);

	var currentTime = now.getTime();
	var eventTime = eventDate.getTime();

	var remTime = eventTime - currentTime;

	var s = Math.floor(remTime / 1000);
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);

	h %= 24;
	m %= 60;
	s %= 60;

	h = (h < 10) ? "0" + h: h;
	m = (m < 10) ? "0" + m: m;
	s = (s < 10) ? "0" + s: s;

	document.getElementById("hours").textContent = h;
	document.getElementById("minutes").textContent = m;
	document.getElementById("seconds").textContent = s;

	setTimeout(countdown , 1000);

}

countdown();