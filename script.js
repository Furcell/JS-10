"use strict";

// HomeWork-10
let input = document.getElementById("input-filter");
let ulElement = document.getElementById("result");
let listItems = [];
const API_URL = "https://jsonplaceholder.typicode.com/users";



async function fetchData(url) {
  try {
    const response = await fetch(url);
    console.log(response);
    if (!!response) {
      return await response.json();
    }
  } catch (error) {
    throw new Error("Can Not Fetch Data");
  }
}

async function createListItem() {
  const responseData = await fetchData(API_URL);
  if (Array.isArray(responseData) && responseData.length != 0) {
    responseData.forEach((el) => {
      let li = document.createElement("li");
      li.innerText = `${el.email}`;

      listItems.push(li);
      ulElement.appendChild(li);
    });
  }
}
createListItem();



function filterData(searchItem) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });
}

input.addEventListener("keyup", function () {
  filterData(this.value);
});
