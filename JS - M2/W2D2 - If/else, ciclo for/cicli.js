// --- TITLE: W2D2
//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// l'utente deve inserire due numeri
// tra questi due numeri stabilisci quali dei due è maggiore
// se il primo valore è maggiore allora mostralo in console
// altrimenti mostra il secondo

let num1 = 5;
let num2 = 5;
if (typeof num1 === "number" && typeof num2 === "number") {
  if (num1 > num2) {
    console.log("num1 è maggiore di num2", num1);
  } else if (num2 > num1) {
    console.log("num2 è maggiore di num1", num2);
  } else {
    console.log("I numero sono uguali", num1, num2);
  }
} else {
  console.log("Non sono due numeri");
}

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
let num3 = 2;
if (num3 < 5) {
  console.log("Tiny");
} else if (num3 < 10) {
  console.log("Small");
} else if (num3 < 15) {
  console.log("Medium");
} else if (num3 < 20) {
  console.log("Large");
} else {
  console.log("Huge");
}

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
    continue;
  } else {
    console.log(i);
  }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let i = 0;
while (i < 15) {
  i++;
  if (i % 2 === 0) {
    console.log(`${i} è pari`);
  } else {
    console.log(`${i} è dispari `);
  }
}

for (let i = 0; i < 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} è pari`);
  } else {
    console.log(`${i} è dispari`);
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num4 === 8 || num5 === 8) {
  console.log("hello");
}

if (num4 + num5 === 8 || num4 - num5 === 8) {
  console.log("hi");
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// dichiaro la variabile totalShoppingCart
// se il carrello supera 50 metto un console che dice che ha la spedizione gratuita
// altrimenti se è inferiore a 50 gli addebiti 10 alla somma totale

let totalShoppingCart = 50;
let shippingPrice = 10;
if (totalShoppingCart > 50) {
  console.log("Spedizione gratuita");
} else {
  let totalPrice = totalShoppingCart + shippingPrice;
  console.log(
    `Importo totale: ${totalShoppingCart} con aggiunta spedizione di 10 ${totalPrice}`
  );
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// definisci la variabile sconto
// usa lo stesso algoritmo ma introduci lo sconto in caso di spedizione gratuita
// fai il totale con lo sconto applicato
let totalShoppingCartB = 100;
let shippingPriceB = 20;
let blackFriday = true;

if (blackFriday) {
  // total = 120 - 120 * 0,8; esegue prima la moltiplicazione quindi 20/100 = 0,2; 120 * 0.2 = 24 che è lo sconto applicato, 120 - 24 = 96 totale prezzo con lo sconto
  totalShoppingCartB = totalShoppingCartB - (totalShoppingCartB * 20) / 100;
  // t = t(1- 20/100)
  // t = t * (1 - 0.2)
  // t = 0.8 * t
  totalShoppingCartB *= 0.8;
}

if (totalShoppingCartB > 50) {
  console.log("Spedizione extra");
} else {
  totalShoppingCartB += shippingPriceB;
}

console.log(`Il prezzo totale è di ${totalShoppingCartB}`);

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let isMale = true;
const gender = isMale ? "is male" : "is female";

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}