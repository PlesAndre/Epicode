"use strict";

const myAPI = "https://striveschool-api.herokuapp.com/books";

function myFetch() {
  fetch(myAPI)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

window.addEventListener("load", myFetch);
