setTimeout(function showPopup() {
	document.getElementById("popup").style.display = "block";
}, 1000);

function goGoogle() {
	window.location.href = "https://www.google.pl/";
}

function disablePopup() {
	document.getElementById("popup").style.display = "none";
	document.getElementById("card").style.display = "block";
}
