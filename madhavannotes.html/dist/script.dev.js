"use strict";

var addpopupbutton = document.getElementById("add-popup-button");
var popupbox = document.querySelector(".popup-box");
var popupoverlay = document.querySelector(".popup-overlay");
addpopupbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});
var cancelpopup = document.getElementById("cancel");
cancelpopup.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});
var containerbook = document.querySelector(".container");
var booktitle = document.getElementById("book-title-input");
var bookauthor = document.getElementById("book-author-input");
var bookdescription = document.getElementById("book-description-input");
var addbook = document.getElementById("add");
addbook.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = "<h2>".concat(booktitle.value, "</h2>\n    <h5>").concat(bookauthor.value, "</h5>\n    <p>").concat(bookdescription.value, "</p>\n    <button onclick=\"deletee(event)\">delete</button>");
  containerbook.append(div);
  popupbox.style.display = "none";
  popupoverlay.style.display = "none";
});

function deletee(event) {
  event.target.parentElement.remove();
}
//# sourceMappingURL=script.dev.js.map
