// --- TITLE: W2D5
// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.


- A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
- Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
- Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
- In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.



In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
- Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
- Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  };
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  };
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  };
  
  const prices = [34, 5, 2];
  const shippingCost = 50;
  let utenteCheEffettuaLAcquisto = amy; //cambia il valore qui per provare se il tuo algoritmo funziona!
  
  // COSTO TOTALE
  let totalChart = 0;
  for (let i = 0; i < prices.length; i++) {
    totalChart += prices[i];
  }
  
  console.log(totalChart);
  
  // Se è un ambassador gli applichi lo sconto 30%
  if (utenteCheEffettuaLAcquisto.isAmbassador) {
    totalChart *= 0.7;
  }
  
  // Applichi il costo della spedizione
  if (totalChart < 100) {
    totalChart += shippingCost;
  }
  
  console.log(totalChart);
  
  // Array utenti con nome e cognome e se sono o meno ambassador
  let utenti = [];
  let onlyAmbassadors = [];
  utenti.push(marco, paul, amy);
  
  for (let i = 0; i < utenti.length; i++) {
    console.log(
      `${utenti[i].name} ${utenti[i].lastName} ${
        utenti[i].isAmbassador ? "è" : "non è"
      } un ambassador`
    );
    utenti[i].isAmbassador ? onlyAmbassadors.push(utenti[i]) : null;
  }
  
  console.log(onlyAmbassadors);