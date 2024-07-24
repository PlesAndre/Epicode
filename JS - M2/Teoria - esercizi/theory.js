// --- M2 - W2D1 [IF/ELSE -- CICLI FOR, WHILE, DO WHILE]

const PASSKEY = "segreto";
let tentativo = 4;

// for (let i = 0; i < 3; i++) {
//     let indovina = prompt("Indovina password")
//  if(indovina === PASSKEY){
//     console.log("Puoi entrare");
//     break
//  } else {
//     console.log("non puoi entrare");
//  }
// }

do {
  let input = prompt("Indovina password");
  if (input === PASSKEY) {
    console.log("ok");
    break;
  } else {
    console.log("non puoi entrare");
  }
  tentativo++;
} while (tentativo < 3);

// --- W2D4 [ARRAY]
/*
let studenti = [
    { nome: "Andrei", codStud: "745", voti: [10, 8] },
    { nome: "Marco", codStud: "987", voti: [7, 9] },
    { nome: "Luca", codStud: "234", voti: [6, 8] }
];

console.log(studenti[1]);
console.log(studenti[2].voti[0]);
console.log(studenti[0].voti + studenti[1].voti); // contatenzione ma non somma
console.log(studenti[0].voti[0] + studenti[1].voti[0]); // contatenzione ma con somma perchè ha gli stessi data types
*/

// ARRAY con CICLO FOR
const macchine = ["bmw", "volvo", "tesla", "audi", "Mercedes"];
for(let i = 0; i < macchine.length; i++) {
    console.log(`La macchina ${macchine[i]} è alla posizione ${i}`);
}

// METODI degli ARRAY
// .slice 
let linguaggi = ["Python", "Java", "JavaScritp", "C#"];
let ultimoRisultato = linguaggi.slice(0, 2);
console.log(ultimoRisultato); // è un metodo non distruttivo, nel senso che conserva gli elementi selezionati in una nuova variabile

// .concat
let messaggio = [1, 2, 3, 4];
console.log(messaggio.join(" - ")); // join mi unisce gli elementi all'interno dell'array tramite il trattino, dichiarato tra parentesi

// ESEMPIO PRATICO 
let listaSpesa = ["Patate", "Pomodori", "Latte", "Acqua", "Lattuga", "Pasta"];
let inputUtente = prompt("Controlla l'alimento nella lista della spesa");
let controlla = listaSpesa.includes(alimento);

if(controlla) {
    console.log("Manca l'alimento");
} else {
    listaSpesa.push(alimento);
    console.log(`Hai aggiunto l'alimento ${listaSpesa}`);
}


// --- TITLE: W3D1 - SWITCH, METODI DELLE STRINGHE, FUNZIONI

// METODI DELLE STRINGHE
let frase = "JavaScript è bello";
let nuovaFrase = frase.toLocaleLowerCase()
console.log(frase.includes("bello")); // controlla se è presente quel valore, è CASE SENSITIVE

const augurio = "Buone vacanze";
console.log(augurio.repeat(3)); // ripete la variabile tot volte, dichiarato tra parentesi

console.log(frase.charAt(0));
console.log(frase.endsWith(1));

let espressione = /Script/ig // - i = insensitive, anche se è minuscolo o maiuscolo, g = global, controlla tutti valori uguali della stringa 
let output = espressione.match("script")
console.log(output);

// FUNZIONI
let utente = "Andrei";
buongiorno(utente)
function buongiorno(nome){
  console.log("Buongiorno" + nome);
}

let numero1 = 10;
let numero2 = 20;

function sum(a, b) {
  return a + b // restituisce il blocco della funzione 
} 
console.log(sum(numero1, numero2));

