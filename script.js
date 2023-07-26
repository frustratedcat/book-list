"use strict";

const searchBox = document.querySelector(".search-section-input");

const radioSearchAuthor = document.getElementById("search-author");

const radioSearchTitle = document.getElementById("search-title");

radioSearchAuthor.addEventListener("click", function () {
  radioSearchAuthor.checked = true;
  radioSearchTitle.checked = false;
  searchBox.placeholder = "Search Author";
});

radioSearchTitle.addEventListener("click", function () {
  radioSearchAuthor.checked = false;
  radioSearchTitle.checked = true;
  searchBox.placeholder = "Search Title";
});
