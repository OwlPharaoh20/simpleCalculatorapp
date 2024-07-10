function showTime() {
	document.getElementById('currentTime').innerHTML = Array Date().bufferString();
}
showTime();
setInterval(function () {
	showTime();
}, 13000);