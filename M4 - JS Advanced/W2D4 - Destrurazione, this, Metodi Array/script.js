/* 
--- OGGETTO GLOBALE 
si chiama "window" ed esiste in ogni ambiente JS (nel browser). 
Contiene tutte le funzioni e le variabili del nostro codice

---THIS
Keyword che si riferisce all’oggetto su cui si sta lavorando. 
A seconda di dove usiamo il this, possiamo fare riferimento a:

1) l’oggetto "globale" (window)
2) l'oggetto che ha chiamato la funzione
3) un altro oggetto (sempre legato al contesto)

THIS - FUNZIONI NORMALI (function)
- Se la funzione è chiamata come metodo di oggetto, this punta quell'oggetto che la contiene
- Se la funzione non fa parte di un oggetto, this punta all'oggetto globale 

THIS - FUNZIONI FRECCIA (=>)
Le arrow function NON creano un this, ma ereditano quelle del contesto in cui vengono definite
(Non importa dove e come chiami una arrow function, this rimane sempre lo stesso)
*/

// OGGETTO GLOBALE
let sistemaOperativo = "macOs";
console.log(sistemaOperativo);

// window.portatile = "macbook";
// stessa cosa che scrivere
// let portatile = "macbook"
// console.log(portatile); // Sul browser funziona! Su quokka no :(

// Funzione normale - this dipende dal contesto
const docente = {
  nome: "Simone",
  presentati: function () {
    console.log("Ciao mi chiamo " + this.nome);
  },
};

docente.presentati();

// Se provo a salvare quanto abbiamo appena scritto in una nuova costante
const presentatiEsternoDaOggetto = docente.presentati;
// E provo ad eseguire la funzione "esternamente" dall'oggetto "docente"
presentatiEsternoDaOggetto();
// this punta all'oggetto globale, quindi this.nome è undefined.

// Arrow Function - this viene ereditato dal contesto (oggetto globale)
const alunno = {
  nome: "Bob",
  salutaCompagni: () => {
    console.log("Ciao amici, io sono " + this.nome); // "this" qui NON si riferisce a 'alunno'
  },
};

alunno.salutaCompagni(); // Output: Ciao amici, io sono undefined



/*
--- DESTRUTTURAZIONE 
funzionalità che ci permette di estrarre (in un modo super easy)
- valori da array
- proprietà da oggetti

Si usa (di solito) per estrarre velocemente solo alcuni dati (non tutti) da array o oggetti. 
*/

// DESTRUTTURAZIONE DI ARRAY
const numeri = [1, 2, 3, 4, 5];

// Senza destrutturazione
const primoNumero = numeri[0];
const secondoNumero = numeri[1];
const terzoNumero = numeri[2];
console.log(primoNumero, secondoNumero, terzoNumero);

// Con destrutturazione (NB: l'ordine è importante!)
const [primo, secondo, terzo] = numeri;
console.log(primo, secondo, terzo);

// DESTRUTTURAZIONE DI OGGETTI
const docente1 = {
  nome: "Simone",
  età: 28,
  portatile: "MacBook",
  vivo: true,
};

// Senza destrutturazione
const nomeDocente = docente1.nome;
const etàDocente = docente1.età;
const portatileDocente = docente1.portatile;
console.log(nomeDocente, etàDocente, portatileDocente);

// Con destrutturazione
const { nome, età, portatile } = docente1;
console.log(nome, età, portatile);
// NB: nella destrutturazione di oggetti, i nomi degli elementi che mettiamo nelle {}
// DEVONO corrispondere alle chiavi dell'oggetto.
// SE vogliamo rinominarle, possiamo!
const { nome: name, età: age, portatile: notebook } = docente1;
console.log(name, age, notebook);

// DESTRUTTURAZIONE & FETCH
// Facciamo una fetch per ottenere la lista di utenti da jsonplaceholder
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // Convertiamo la risposta in formato JSON
  .then((users) => {
    // Prendiamo solo il primo utente dalla lista
    const [primoUtente] = users;

    // Destrutturiamo l'oggetto utente per estrarre nome, email e città
    const {
      name: nome,
      email,
      address: { city: città },
    } = primoUtente;

    // Stampiamo le informazioni estratte
    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);
    console.log(`Città: ${città}`);
  })
  .catch((error) => console.error("Errore nella fetch:", error));


  /*
--- SPREADING / SPREAD OPERATOR / ... 
Funzionalità che ci permette di "ESPANDERE"
- un array
- un oggetto
- una stringa
in singoli elementi. 

Viene usato spesso per clonare e "combinare". 
*/

// COPIARE ARRAY
const numeriOriginali = [1, 2, 3, 4, 5];
const numeriCopiati = [...numeriOriginali];
console.log(numeriCopiati);

// UNIRE ARRAY
const lista1 = ["a", "b", "c"];
const lista2 = ["d", "e", "f"];

const listaCombinata = [...lista1, ...lista2];
console.log(listaCombinata);

// COPIARE OGGETTI
const animale = { nome: "Rambo", tipo: "Gatto", età: 8 };
const copiaAnimale = { ...animale };
console.log(copiaAnimale);

// UNIRE OGGETTI
const datiDocente = { nome: "Simone", età: 28 };
const indirizzoDocente = { città: "Viareggio", paese: "Italia" };

const docente2 = { ...datiDocente, ...indirizzoDocente };
console.log(docente2);

// UNIRE E SOVRASCRIVERE PROPRIETA'
const datiOriginali = { nome: "Frank", età: 16 };
const datiAggiornati = { età: 17, città: "Roma" };

const oggettoAggiornato = { ...datiOriginali, ...datiAggiornati };
console.log(oggettoAggiornato);

// PASSARE ARGOMENTI A FUNZIONI
const numeri = [1, 2, 3];

// Funzione che somma tre numeri
function somma(a, b, c) {
  return a + b + c;
}

// Usa lo spread per passare gli elementi dell'array come argomenti
console.log(somma(...numeri));

// ESPANDERE STRINGHE
const parola = "supercalifragilistichespiralidoso";
const lettere = [...parola];
console.log(lettere);


// --- ALTRI METODI DEGLI ARRAY 
/*
--- FIND

array.find(callback(element, index, array))

Il metodo find() restituisce il PRIMO elemento di un array (non tutti, solo il primo!)
che soddisfa la condizione indicata nella callback
(Se nessun elemento la soddisfa, restituisce undefined)
*/

const array = [10, 20, 30, 40, 50, 60, 70];

// Trova il primo numero maggiore di 46
const risultatoFind = array.find((numero) => numero > 46);
console.log(risultatoFind);

// find() con oggetti
const classe = [
  { nome: "Arnold", città: "Boston" },
  { nome: "Bob", città: "Chicago" },
  { nome: "Charlie", città: "Miami" },
];

const alunnoBoston = classe.find((alunno) => alunno.città === "Boston");
console.log(alunnoBoston);

/*
--- FIND INDEX

array.findIndex(callback(element, index, array))

findIndex() è simile a find(), ma invece di restituire l’elemento stesso, 
restituisce l’INDICE del primo elemento che soddisfa la callback. 
(Se nessun elemento soddisfa la condizione, restituisce -1)
*/

const lista = [10, 20, 30, 40, 50];

// Trova l'indice del primo numero maggiore di 18
const indice = lista.findIndex((numero) => numero > 18);
console.log(indice);

// findIndex() con oggetti
const dipendentiAzienda = [
  { nome: "Anna", età: 25 },
  { nome: "Bob", età: 35 },
  { nome: "Claudia", età: 28 },
];

const indiceMaggioreTrenta = dipendentiAzienda.findIndex(
  (persona) => persona.età > 30
);
console.log(indiceMaggioreTrenta);

/*
--- INCLUDES

array.includes(valore, inizio)

- valore: elemento che stiamo cercando
- inizio (OPZ): indice da cui iniziare a partire (0 di default)

includes() verifica se un array contiene il dato specificato. 
(Restituisce true se l’elemento è presente nell’array, altrimenti false)


*/

const cibo = ["mela", "pizza", "banana", "hamburger"];

// Verifica se "banana" è nell'array
console.log(cibo.includes("banana"));

// Verifica se "mango" è nell'array
console.log(cibo.includes("mango"));

// Includes con valori numerici
const numeriACaso = [5, 10, 15, 20];

console.log(numeriACaso.includes(15)); // Output: true
console.log(numeriACaso.includes(25)); // Output: false

/*
NB: includes() NON funziona direttamente su array di oggetti
perché verifica se un valore è identico a un altro valore, 
confrontando i riferimenti (per gli oggetti) 
e non le singole proprietà dell’oggetto.

Quando usi .includes() su un array di oggetti, 
l’operatore confronta solo se due oggetti puntano 
allo stesso riferimento in memoria, 
non se hanno proprietà uguali.

*/

const amici = [
  { nome: "Luca", età: 30 },
  { nome: "Anna", età: 25 },
];

// Questo non funzionerà come ti aspetti,
// perché gli oggetti sono riferimenti unici in memoria
console.log(amici.includes({ nome: "Luca", età: 30 })); // Output: false

/*
Anche se l’oggetto { nome: "Luca", età: 30 } 
sembra essere presente nell’array, 
.includes() restituisce false perché 
l’oggetto passato non ha lo stesso 
riferimento in memoria dell’oggetto nell’array.
*/

// --- Esercizio E-COMMERCE
/*
Hai una lista di prodotti in un negozio, 
ciascuno con un nome, una categoria e un prezzo. 

Richiesta:
1) Trovare il primo prodotto della categoria "elettronica"
2) Trovare l'indice del primo prodotto che costa più di 100€
3) Verificare se tra i prodotti è presente una "tastiera"
*/

const prodotti = [
  { nome: "televisore", categoria: "elettronica", prezzo: 299 },
  { nome: "sedia", categoria: "arredamento", prezzo: 45 },
  { nome: "laptop", categoria: "elettronica", prezzo: 999 },
  { nome: "penna", categoria: "cartoleria", prezzo: 1.5 },
  { nome: "scrivania", categoria: "arredamento", prezzo: 150 },
  { nome: "tastiera", categoria: "elettronica", prezzo: 25 },
];

// 1. Usa .find() per trovare il primo prodotto nella categoria "elettronica"
const primoElettronica = prodotti.find(
  (prodotto) => prodotto.categoria === "elettronica"
);
console.log("Primo prodotto elettronico:", primoElettronica);

// 2. Usa .findIndex() per trovare l'indice del primo prodotto con un prezzo maggiore di 100
const indicePrezzoAlto = prodotti.findIndex(
  (prodotto) => prodotto.prezzo > 100
);
console.log("Indice del primo prodotto con prezzo > 100:", indicePrezzoAlto);

// 3. Usa .includes() per verificare se esiste un prodotto chiamato "tastiera"
// NB: includes() NON funziona direttamente su array di oggetti.
// Prima creiamo un array solo con i nomi dei prodotti per usare includes
const nomiProdotti = prodotti.map((prodotto) => prodotto.nome);
const esisteTastiera = nomiProdotti.includes("tastiera");
console.log("Esiste 'tastiera' nella lista?", esisteTastiera);