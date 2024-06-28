
// setTimeout(() => {
    
// }, timeout);





// setTimeout(function showPopup() {
	document.getElementById("card").style.display = "none";
	document.getElementById("popup").style.display = "block";
}, 1000);

function goGoogle() {
	window.location.href = "https://www.google.pl/";
}

function disablePopup() {
	document.getElementById("popup").style.display = "none";
	document.getElementById("card").style.display = "block";
}

// 1. Animacja znikania strony głównej
// 2. Animacja pojawiania się popup-u
// 3. Animacja znikania popup-u
// 4. Animacja pojawiania się strony głównej