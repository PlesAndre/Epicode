/*
CALLBACK 
- Una callback è una funzione che passo come argomento ad un altra funzione
- "quando hai finito questa operazione, esegui questa funzione"
*/

// Definire la callback
function dopoOperazione() {
  console.log("CALLBACK - operazioni concluse");
}

// Creo la funzione che utilizzerà la callback
function funzionePrincipale(callback) {
  console.log("Inzio operazione asincrona");

  setTimeout(function () {
    console.log("Fine operazione asincrona");
    callback();
  }, 2500);
}

console.log("Inizio script js");
funzionePrincipale(dopoOperazione);

/*
PROMISE 
- Azione asincrona che produce un valore
- Si tratta di un OGGETTO che rappresenta il completamento/fallimento di una operazione asincrona

Ha 3 stati: 
1) Pending: richiesta partita, ma non ho ancora il risultato
2) Resolved: ho un valore
3) Rejected: non ho un valore, oppure il valore restituito non è "valido"
*/

function promessaDiTreSecondi() {
  console.log("Inizio della promise");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Operazione completata nella promise");
      resolve("Simone");

      reject("Ops errore");
    }, 3000);
  });
}

console.log("Prima di chiamare la promise");
promessaDiTreSecondi()
  .then((risultato) => {
    console.log("Risultato della promise:", risultato);
  })
  .catch((errore) => {
    console.error("Errore:", errore);
  });

/**
 * ASYNC / AWAIT
 * è un modo moderno e leggibile per utilizzare le promise
 *
 * Come si usa?
 * La funzione che contiene codice asincrono deve esser preceduta
 * dalla keyword "async"
 *
 * L'operazione (all'interno della funzione asincrona) che impiegherà del tempo
 * sarà preceduta dalla keyword "await"
 *
 */

// Funzione che ritorna una Promise
function promessaDiTreSecondi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Operazione completata - caso Async Await");
    }, 3000);
  });
}

async function funzioneAsincrona() {
  console.log("Inizio dell'operazione asincrona");

  try {
    let risultato = await promessaDiTreSecondi();
    console.log("Risultato:", risultato);
  } catch (error) {
    console.error("Errore:", error);
  }

  console.log("Fine dell'operazione asincrona");
}

funzioneAsincrona();

/**
 *
 * FETCH
 * - Funzione built-in in JavaScript per fare richieste di rete
 */

async function ottieniDati() {
  try {
    // Faccio una request di tipo GET all'ENDPOINT di JSONPlaceholder
    let risposta = await fetch("https://catfact.ninja/fact");

    // Se la risposta non è ok, genero un errore
    if (!risposta.ok) {
      throw new Error(`Errore HTTP: ${risposta.status}`);
    }

    // Se la risposta è ok (200-299), allora converto la risposta in JSON
    let dati = await risposta.json();

    // Operazioni con la risposta
    console.log("Dati ricevuti:", dati);
  } catch (error) {
    console.error("Errore durante il fetch", error);
  }
}

ottieniDati();
