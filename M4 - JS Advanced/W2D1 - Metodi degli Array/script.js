/**
 *
 * --- ARRAY
 * Struttura dati che può contenere più valori
 * in un'unica variabile
 *
 * - Può contenere valori di diversi tipi
 * - Ogni elemento ha una posizione (indice)
 * - L'indice inizia da 0
 */

// CREAZIONE
let nomi = ["Simone", "Luca"]; // Standard
let pizza = new Array("pomodoro", "mozzarella", "origano"); // Costruttore

// ACCESSO AGLI ELEMENTI
console.log(nomi[0]);

// MODIFICA DEGLI ELEMENTI
nomi[0] = "Marco";

// LUNGHEZZA DI UN ARRAY
console.log(nomi.length);

/**
 * FILTER
 *
 * let arrayNuovo = arrayVecchio.filter(callback);
 *
 * Metodo che crea un nuovo array.
 * Il nuovo array contiene solo gli elementi
 * che soddisfano una condizione specificata
 * nella callback (che restituisce true o false).
 *
 * La callback riceve 3 argomenti:
 * 1) elemento corrente
 * 2) indice dell'elemento corrente (opz)
 * 3) array originale su cui si lavora (opz)
 *
 *
 */

// Creiamo un array di numeri
let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Utilizziamo filter per trovare solo i numeri pari
let numeriPari = numeri.filter(function (elemento) {
  return elemento % 2 === 0; // Ritorna true se il numero è pari
});

// Stesso passaggio ma con arrow function
// let numeriPari = numeri.filter(element => element % 2 === 0);

// Stampiamo il nuovo array di numeri pari
console.log(numeriPari);

/**
 *
 * --- FILTER
 * Data una lista di persone, filtriamo solo quelle
 * che hanno una età superiore a 20 anni.
 *
 * Stampiamo anche l'indice della persona
 * Verifichiamo il numero totale di persone nell'array originale
 *
 */

// Creiamo un array di oggetti che rappresentano persone
let persone = [
  { nome: "Marco", eta: 25 },
  { nome: "Laura", eta: 19 },
  { nome: "Giovanni", eta: 32 },
  { nome: "Anna", eta: 15 },
  { nome: "Paolo", eta: 29 },
];

// Soglia per l'età
const sogliaEta = 20;

// Filtriamo le persone con età maggiore della soglia
let personeMaggiori = persone.filter(function (element, indice, array) {
  // Stampa l'indice dell'elemento e il numero totale di persone
  console.log(
    `Controllo la persona all'indice ${indice}: ${element.nome}, Età: ${element.eta}`
  );
  console.log(`Numero totale di persone nell'array originale: ${array.length}`);

  // Ritorna true se l'età è maggiore della soglia
  return element.eta > sogliaEta;
});

// Stampiamo il nuovo array di persone maggiori di età
console.log(personeMaggiori);

/**
 * --- FOREACH
 *
 * array.forEach(callback)
 *
 * Metodo che esegue una callback su ogni elemento dell'array
 * (NON RESTITUISCE NUOVO ARRAY)
 *
 * La callback riceve 3 argomenti:
 * 1) elemento corrente
 * 2) indice dell'elemento corrente (opz)
 * 3) array originale su cui si lavora (opz)
 *
 */

// Creiamo un array di numeri
let listaNumeri = [1, 2, 3, 4, 5];

// Utilizziamo forEach per stampare il quadrato di ogni numero
listaNumeri.forEach(function (numero) {
  // Calcoliamo il quadrato
  let quadrato = numero * numero;
  console.log(`Il quadrato di ${numero} è ${quadrato}`);
});

/**
 * --- MAP
 *
 * let nuovoArray = arrayOriginale.map(callback);
 *
 * Crea un nuovo array con i risultati
 * di una callback su ogni elemento
 *
 * (trasformo gli elementi dell'array originale)
 *
 * La callback riceve 3 argomenti:
 * 1) elemento corrente
 * 2) indice dell'elemento corrente (opz)
 * 3) array originale su cui si lavora (opz)
 */

// Creiamo un array di numeri
let elencoNumeri = [1, 2, 3, 4, 5];

// Utilizziamo map per calcolare il quadrato di ogni numero
let quadrati = elencoNumeri.map(function (numero) {
  // Ritorna il quadrato del numero
  return numero * numero;
});

// Oppure con arrow function
// let quadrati = numeri.map(element => element * element);

// Stampiamo il nuovo array di quadrati
console.log(quadrati);

/**
 * --- REDUCE
 *
 * let risultato = array.reduce(callback, valoreIniziale);
 *
 * esegue una funzione di callback su ciascun elemento di un array,
 * accumulando un valore finale.
 *
 *  * La callback riceve 4 argomenti:
 * 1) accumulatore (valore accumulato fino a quel momento)
 *    l'accumulatore inizialmente è "valoreIniziale"
 * 2) elemento corrente
 * 3) indice dell'elemento corrente (opz)
 * 4) array originale su cui si lavora (opz)
 *
 * valoreIniziale:
 * il valore iniziale da utilizzare come primo argomento
 * per il primo chiamata della funzione di callback.
 * Se non viene fornito, viene usato il primo elemento dell’array
 * come valore iniziale e il ciclo inizia dal secondo elemento.
 */

// Creiamo un array di numeri
let array = [1, 2, 3, 4, 5];

// Utilizziamo reduce per calcolare la somma di tutti i numeri
let somma = array.reduce(function (accumulatore, element) {
  return accumulatore + element; // Aggiungiamo l'elemento all'accumulatore
}, 0); // Iniziamo con 0

// Oppure con arrow
// let somma = numeri.reduce((accumulatore, element) => accumulatore + element, 0);

// Stampiamo il risultato della somma
console.log(somma);

/**
 * --- JOIN
 *
 * let stringa = array.join(separatore);
 *
 * Metodo che crea e restituisce una nuova stringa
 * unendo tutti gli elementi dell'array
 *
 * Si può specificare un separatore (default virgola)
 *
 *
 */

// Creiamo un array di parole
let parole = ["Ciao", "come", "va", "oggi?"];

// Utilizziamo join per unire le parole in una singola stringa
let frase = parole.join(" "); // Usiamo uno spazio come separatore

// Stampiamo la frase risultante
console.log(frase); // Stampa: "Ciao come va oggi?"

// ESEMPIO CON SEPARATORE DIVERSO
// Creiamo un array di numeri
let listaNumerica = [1, 2, 3, 4, 5];

// Utilizziamo join per unire i numeri con un trattino
let numeriUniti = listaNumerica.join("-");

// Stampiamo il risultato
console.log(numeriUniti);

// ESEMPIO MAP + JOIN
// Uniamo i nomi di un array in una stringa

let alunni = [
  { nome: "Mark" },
  { nome: "Spongebob" },
  { nome: "Leone" },
  { nome: "Anna" },
  { nome: "Jack" },
];

// Utilizziamo map per estrarre i nomi e poi join per unirli
let nomiUniti = alunni
  .map(function (persona) {
    return persona.nome; // Estraiamo il nome
  })
  .join(", "); // Usiamo una virgola e uno spazio come separatore

// Stampiamo la stringa risultante
console.log(nomiUniti);

// Esercizio eseguito insieme a Simone
const prendiLista = document.getElementById("listaUtenti");

async function users() {
  try {
    let utenti = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!utenti.ok) {
      throw new Error("Errore try");
    }

    let datiUtenti = await utenti.json();

    let nuoviUtenti = datiUtenti.map((current) => {
      return `<li>${current.name}</li>`;
    });

    prendiLista.textContent = nuoviUtenti.join("");
  } catch (e) {
    console.error(e);
  }
}

users();
