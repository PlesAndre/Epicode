// --- TITLE: W3D2
/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) {
    if (num1 === num2) {
      return (num1 + num2) * 3; // return come break, interrope la funzione
    }
    return num1 + num2;
  }
  
  crazySum(2 + 3);
  
  /* ESERCIZIO 2
   Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  function boundary(integer) {
    if ((integer > 20 && integer <= 100) || integer === 400) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(boundary(30));
  
  /* ESERCIZIO 3
   Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  function reverseString(string) {
    return string.split("").reverse().join("");
  }
  
  console.log(reverseString("Epicode"));
  
  // METODO ALTERNATIVO
  function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return result;
  }
  
  console.log("EPICODE");
  
  /* ESERCIZIO 4
   Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  function upperFirst(str) {
    let splitStr = str.split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i][0] = splitStr[i].charAt(0);
    }
  }
  
  console.log(upperFirst("Ciao come stai io bene"));
  
  /* ESERCIZIO 5
   Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  function giveMeRandom(n) {
    const arr = [];
    for(let i = 0; i <= n; i++) {
      arr.push(Math.floor(Math.random() * 11))
    }
    return arr
  }
  console.log(giveMeRandom(3));
  
  //EXTRA:
  /* ESERCIZIO 1
   Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  function area(l1, l2) {
    return l1 * l2 
  }
  console.log(area(2, 5));

  /* ESERCIZIO 2
   Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
   Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  function crazyDiff(n){
    if(n > 19) {
      return Math.abs(n - 19) * 3
    } else {
      return Math.abs(n - 19)
    }
  }

  console.log(crazyDiff(3));

  /* ESERCIZIO 3
   Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
   La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato,
    ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  function codify(str) {
    if(str.startsWith("code")) {
      return str 
    } else {
      return "code" + str
    }
  }

  console.log(codify("Ciao a tutti"));
  
  /* ESERCIZIO 4
   Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
   La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
   SUGGERIMENTO: operatore modulo
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  function check3and7(num) {
    if(num % 3 === 0 || num % 7 === 0) {
      return true
    } else {
      return false
    }
    } 
    console.log(check3and7(4));

  /* ESERCIZIO 5
   Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  function cutString(str) {
    return str.slice(1, str.length - 1)
  }

  console.log(cutString("Ciao a tutti"));