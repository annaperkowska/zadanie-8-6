var a = prompt('Podaj wartość a'),
	b = prompt('Podaj wartość b'),
	value;
value = (a*a) - (2*a*b) + (b*b);
if (value > 0) {
	alert('wynik dodatni');
	console.log('wynik dodatni');
} else if (value < 0) {
	alert('wynik ujemny');
	console.log('wynik ujemny');
} else if (value == 0) {
	alert('Wynik to 0');
	console.log('Wynik to 0');
} else {
	alert('Błąd');
	console.log('Błąd');
}

