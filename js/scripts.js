var a = prompt("Podaj wartość zmiennej a"),
	b = prompt("Podaj wartość zmiennej b");
var value = (a * a) + (2 * a * b) - (b * b);

console.log(value);

if (value === 0) {
	console.log("Wynik równy zero");
} else {
	var result = (value > 0) ? "Wynik jest większy od zera" : "Wynik jest mniejszy od zera";
	consoe.log(result);
}


