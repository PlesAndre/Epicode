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

    prendiLista.textContent = nuoviUtenti.join("")


  } catch (e) {
    console.error(e);
  }
}

users();
