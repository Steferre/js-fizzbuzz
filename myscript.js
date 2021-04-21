/*
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

//definisco degli array per raggruppare i multipli
var multiples3 = [];

var multiples5 = [];

var both3And5 = [];

var notMultiples = [];


//scrivere un ciclo da 0 a 100

for (var i = 1; i <= 100; i++) {
    
    //se i numeri sono divisibili sia per 3 che per 5
    if (i % 3 === 0 && i % 5 === 0) {
        both3And5.push(i);
        console.log("FizzBuzz");

        //se divisibili solo per 3
    } else if (i % 3 === 0) {
        multiples3.push(i);
        console.log("Fizz");

        //se divisibili solo per 5
    } else if (i % 5 === 0) {
        multiples5.push(i);
        console.log("Buzz");

        //in ogni altro caso
    } else {
        notMultiples.push(i);
        console.log(i);

    }

}

//stampa ordinata in HTML
document.getElementById('multi3').innerHTML=  multiples3.join( ',' + " ");
document.getElementById('multi5').innerHTML=  multiples5.join( ',' + " ");
document.getElementById('multiBoth').innerHTML=  both3And5.join( ',' + " ");
document.getElementById('notMulti').innerHTML=  notMultiples.join( ',' + " ");
