

function zatwierdz() {
	var imie = document.getElementById("pole").value;
	
	document.getElementById("szablon").style.display = "none";
	document.getElementById("odpowiedz").style.display = "inline-block";
	document.getElementById("odpowiedz").innerHTML="Witaj, "+imie+" !";

}
