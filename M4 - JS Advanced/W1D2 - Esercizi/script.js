"use strict";

// --- 1
/*
function controllaNumeri(x, y) {
  if (x === 50 || y === 50) {
    return true;
  } else if (x + y === 50) {
    return true;
  } else {
    return false;
  }
}

console.log(controllaNumeri(50, 0)); // true
console.log(controllaNumeri(0, 50)); // true
console.log(controllaNumeri(25, 25)); // true
console.log(controllaNumeri(20, 0)); // false
console.log(controllaNumeri(0, 36)); // false
console.log(controllaNumeri(40, 15)); // false
*/

// --- 2
/*
function removeChar(string, i) {
  // rimuove il carattere di una stringa, la base di partenza è 0
  return string.charAt(i);
}

console.log(removeChar("Sopratttutto", 8)); // mi restituisce la parola "u"
*/

/*
// --- 3  // ---
function checkNum(x, y) {
    if(x > 40 && x < 60 || x > 70 && x < 100) {
        return true
    } else if(y > 40 && y < 60 || y > 70 && y < 100){
        return true
    } else {
        return false
    }
}

console.log(checkNum(55, 75));

function checkNum(x) {
  if ((x > 40 && x < 60) || (x > 70 && x < 100)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkNum(35));
console.log(checkNum(90));
*/

/*
// --- 4
// funzione che accetti un nome di città come parametro
// ritorni il nome stesso se inizia con "Los" o "New"
// se stringa è uguale a "Los" o "New" mi restituisci il nome stesso
function searchCity(string) {
    return string.startsWith("Los") || string.startsWith("New")
}


console.log(searchCity("Los angeles"));
*/

/*
// --- 5
function sumArray(arr) {
  let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  return sum;
}

console.log(sumArray([20, 40, 90]));
*/

/*
// --- 6 
// funzione controlla un array che non contenga i numeri 1 o 3
// se non li contiene ritorna true altrimentri false
function checkArr(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 1 || arr[i] === 3) {
      return false
    }
  }
  return true
}


console.log(checkArr([2, 3, 4, 5, 6]));
console.log(checkArr([1, 4, 5, 6]));
console.log(checkArr([4, 5, 6]));

// ESEMPIO EPICODE
function non1e3(arr) {
  return !arr.includes(1) && !arr.includes(3) 
}
console.log(non1e3([2, 3, 4, 5, 6])); // contiene 1? false -> true, contiente 3? true -> false = false 
console.log(non1e3([1, 4, 5, 6])); // contiene 1? true -> false, contiente 3? false -> true = false
console.log(non1e3([4, 5, 6])); // contiente 1? false -> true, contiente 3? false -> true = true 
*/

/*
// --- 7 
function angles(grades) {
  if(grades < 90) {
    return "acuto"
  } else if (grades > 90 && grades < 180) {
    return "ottuso"
  } else if (grades === 90){
    return "retto"
  } else if (grades === 180) {
    return "piatto"
  }
}

console.log(angles(180));
*/

/*
// --- 8
function acron(string) {
  return string.split(" ").map(word => word[0]).join("").toUpperCase();
  // split = divide il parametro in un array, dove la frase viene divisa in un array di parole grazie al (" ")
  // map = restituisce un nuovo array che prende il primo elemento della parola
  // join = unisce il primo elemento del metodo map()
  // toUpperCase = trasforma le parole in maiuscole 
}

console.log(acron("Fabbrica Italiana Automobili Torino"));
*/