// stampare i numeri da 1 a 100, ogni multiplo di 3 deve aver scritto Fizz, ogni multiplo di 5 Buzz, i multipli di 3 e 5 FizzBuzz

// tramite ciclo for inserisco tutti i numeri da 1 a 100
// tramite if distinguo i multipli di 3, 5, e di 3 e 5, a cui sostituisco il valore Fizz, Buzz, o FizzBuzz.
var array = [];
for (var i = 1; i < 100; i++) {
    array[i] = i;
    if ((array[i] % 5) == 0 && (array[i] % 3) == 0) {
        array[i] = 'FizzBuzz';
    } else if ((array[i] % 5) == 0) {
        array[i] = 'Buzz';
    } else if ((array[i] % 3) == 0) {
        array[i] = 'Fizz';
    }
}

console.log(array);
