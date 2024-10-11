const myURL = "https://api.pexels.com/v1/curated";
const myApi = "qyQX7lV0d78536bCCksMlHLZP6AlaSXRWFTFV1NCgXXCP1pTdbx9c6vo";

let selectDiv = document.getElementById("photoGallery");

window.addEventListener("load", function () {
  fetch(myURL, { headers: { Authorization: myApi } })
    .then(function (data) {
      return data.json();
    })
    .then(function (jsonData) {
      addPhotos(jsonData.photos);
    });
});

function addPhotos(photos) {
  photos.forEach(createElement);
}

function createElement(pexelPhotos) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  div.appendChild(img);
  div.classList.add("col-3");
  img.src = pexelPhotos.src.medium;
  selectDiv.appendChild(div);
}
