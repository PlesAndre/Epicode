"use strict";

const bookLists = document.querySelector("#bookLists");
const bookCard = document.getElementById("bookCard");
const addBook = document.querySelector("#add-book");
const cardTitle = document.getElementsByClassName("card-title");
const cardText = document.getElementsByClassName("card-text");


const myAPI = "https://striveschool-api.herokuapp.com/books";

function myFetch() {
  fetch(myAPI)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function () {
      console.error("Non hai aggiunto libri");
    });
}

window.addEventListener("load", myFetch);
