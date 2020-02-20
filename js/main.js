// stampare i numeri da 1 a 100, ogni multiplo di 3 deve aver scritto Fizz, ogni multiplo di 5 Buzz, i multipli di 3 e 5 FizzBuzz

// tramite ciclo for inserisco tutti i numeri da 1 a 100
// tramite if distinguo i multipli di 3, 5, e di 3 e 5, a cui sostituisco il valore Fizz, Buzz, o FizzBuzz.
var array = [];
for (var i = 1; i < 101; i++) {
    array[i] = i;
    if ((array[i] % 5) == 0 && (array[i] % 3) == 0) {
        array[i] = 'FizzBuzz';
    } else if ((array[i] % 5) == 0) {
        array[i] = 'Buzz';
    } else if ((array[i] % 3) == 0) {
        array[i] = 'Fizz';
    }
}

// array mostrato come elenco
var text = "<ul>";
var textDue = "<ul>";
var textTre = "<ul>";
var textQuattro = "<ul>";

for (i = 1; i < 26; i++) {
  text += "<li>" + array[i] + "</li>";
}
for (i = 26; i < 51; i++) {
  textDue += "<li>" + array[i] + "</li>";
}
for (i = 51; i < 76; i++) {
  textTre += "<li>" + array[i] + "</li>";
}
for (i = 76; i < array.length; i++) {
  textQuattro += "<li>" + array[i] + "</li>";
}
text += "</ul>";
textDue += "</ul>";
textTre += "</ul>";
textQuattro += "</ul>";

document.getElementById("demo").innerHTML = text;
document.getElementById("demo-due").innerHTML = textDue;
document.getElementById("demo-tre").innerHTML = textTre;
document.getElementById("demo-quattro").innerHTML = textQuattro;
