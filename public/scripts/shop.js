setTimeout(function showPopup() {
	document.getElementById("popup-wrapper").style.display = "block";
}, 1000);

function goGoogle() {
	window.location.href = "../index.html";
}

function disablePopup() {
	document.getElementById("popup-wrapper").style.display = "none";
}
