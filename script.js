"use strict";

const searchBox = document.querySelector(".search-section-input");

const radioSearchAuthor = document.getElementById("search-author");

const radioSearchTitle = document.getElementById("search-title");

// Handle radio clicks
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

// For sorting arrays
//THIS DOESN'T WORK, I NEED TO BUILD A DATABASE AND INSERT EVERYTHING INTO THE HTML FROM THERE
const authorNameSorting = document.querySelector(".author-name").textContent;

const titleNameSorting = document.querySelector(".title-name").textContent;

const sortingArray = [];
sortingArray.push(authorNameSorting);
console.log(sortingArray);
