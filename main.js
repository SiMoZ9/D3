//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/



//ESERCIZIO 1

let n1 = 10;
let n2 = 20;

if (n1 === n2) {
    console.log(`Il più grande tra i due numeri è ${n1}`);
} else {
    console.log(`Il più grande tra i due numeri è ${n2}`);
}

//ESERCIZIO 2

let num = 20;

if (num < 5)
    console.log("Tiny");

if (num >= 5 && num < 10)
console.log("Small");

if (num >= 10 && num < 15)
    console.log("Medium");

if (num >= 15 && num < 20)
    console.log("Large");

if (num >= 20)
    console.log("Huge");

//ESERCIZIO 3

for (let i = 0; i <= 10; i++) {
    if (i == 3 || i == 8) {
        continue; 
    } else {
        console.log(i);
    }
}

//ESERCIZIO 4

for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
       console.log(`Il numero ${i} è pari`);
    } else {
        console.log(`Il numero ${i} è dispari`);
    }
}

// EXTRA 1

let num_1 = 18;
let num_2 = 10;

if (num_1 == 8 || num_2 == 8)
    console.log(`Almeno uno dei due numeri è 8`);

else if ( (num_1 + num_2 === 8) || (num_1 - num_2 === 8) || (num_2 - num_1 === 8) )
    console.log(`La loro somma/sottrazione è 8`);

else 
    console.log("Né uno dei due né la loro somma/sottrazione è 8");

// EXTRA 2

let totalShoppingCart = 60;

console.log("C'è una promozione: sopra i 50 euro la spedizione è gratis!\n");

if (totalShoppingCart > 50) {
    console.log(`Il totale del tuo carrello è ${totalShoppingCart} euro\nHai diritto alla spedizione gratuita!\nIl costo totale è ${totalShoppingCart}`);
} else {
    console.log(`Il totale del tuo carrello è ${totalShoppingCart} euro\nSpedizione: 10 euro\nIl costo totale è ${totalShoppingCart + 10}`);
}

// EXTRA 3

let totalShoppingCart2 = 100;
let cart20 = totalShoppingCart2 - (totalShoppingCart2 * 20) / 100;

console.log("C'è una promozione: -20% su tutti i prodotti e sopra i 50 euro la spedizione è gratis!\n");

if (cart20 > 50) {
    console.log(`Il totale del tuo carrello (applicato il -20$) è ${cart20} euro\nHai diritto alla spedizione gratuita!\nIl costo totale è ${cart20}`);
} else {
    console.log(`Il totale del tuo carrello è  (applicato il -20$) è ${cart20}\nSpedizione: 10 euro\nIl costo totale è ${cart20 + 10}`);
}

// EXTRA 4

let isMale = false;
let gender = null;

isMale ? gender = "male" : gender = "female" // isMale ? equivale a dire isMale == true ? oppure if (isMale == true)

console.log(gender);

//EXTRA 5

for (let i = 1; i <= 100; i++) {
    if ( (i % 3) == 0 && (i % 5) != 0)
        console.log("Fizz");
    
    else if ( (i % 3) != 0 && (i % 5) == 0)
        console.log("Buzz");
    
    else if ( (i % 3 == 0) && (i % 5 == 0))
        console.log("FizzBuzz");
    
    else
        console.log(i);
}