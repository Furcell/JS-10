"use strict";

// HomeWork-10
let input = document.getElementById("input-filter");
let ulElement = document.getElementById("result");
let listItem = [];


async function asyncFnc() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        if (!response.ok) {
            throw new Error("Can Not Fetch Data");
        }
        let responseData = await response.json();

        responseData.forEach(el => {
            let li = document.createElement("li");
            li.innerText = `${el.email}`;

            listItem.push(li);
            console.log(listItem);
            ulElement.appendChild(li);
        });

    } catch (error) {
        console.log(error);
    }
}
asyncFnc();



function filterData(searchItem) {        
    listItem.forEach((item) => {
        if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) { 
            item.classList.remove("active");
        } else {
            item.classList.add("active");
        }
    });
}


input.addEventListener("keyup",function () {
    filterData(this.value);
})




