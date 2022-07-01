// // get element by className
// var elementByclassName = document.getElementsByClassName("wrapper");
// console.log("elementByClassName-->", elementByclassName);

// // get element by id
// var elementByid = document.getElementById("header");
// console.log("elementByid-->", elementByid);
// // get element by tagName
// var elementBytagName = document.getElementsByTagName("span");
// console.log("elementBytagName-->", elementBytagName);
// // get element by querySelector
// var elementByquerySelector = document.querySelector(".inputField button");
// console.log("elementByquerySelector-->", elementByquerySelector);

// // get element by querySelectorAll
// var elementByquerySelectorAll = document.querySelectorAll(".inputField input");
// console.log("elementByquerySelectorAll-->", elementByquerySelectorAll);
// //set attribute value
// elementByid.setAttribute("id", "header1");
// //get attribute value
// console.log(
//     "elementByid.getAttribute('id')-->",
//     elementByid.getAttribute("id")
// );
// // change style
// elementByclassName[0].style.border = "1px solid red";
// // modified dom date
// console.log("last modified", document.lastModified);
// // create element
// var wrapper = document.getElementsByClassName("wrapper");
// console.log("wrapper-->", wrapper);
// var newElement = document.createElement("div");
// newElement.innerHTML = "new element";
// newElement.setAttribute("id", "newElement");
// wrapper[0].appendChild(newElement);

//geting all required elements
var inputField = document.querySelector(".inputField input");
var button = document.querySelector(".inputField button");
var todoList = document.querySelector(".todoList");
var deleteButton = document.querySelector(".footer button");
var pending = document.querySelector(".pendingTasks");
console.log("inputField-->", inputField);
console.log("button-->", button.classList);

//onkeyup event
inputField.onkeyup = () => {
    let userInput = inputField.value; // getting user input

    if (userInput.trim() != 0) {
        // if the user value is  not only space
        button.classList.add("active"); // active the add button
    } else {
        button.classList.remove("active"); // remove the active class from add button
    }
};

//onclick event
showTasks();

button.onclick = () => {
    let userInput = inputField.value; // getting user input
    let getLocalStorage = localStorage.getItem("todoList"); // getting the local storage
    if (getLocalStorage == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorage);
    }
    listArray.push(userInput); // pushing the user input to the array
    localStorage.setItem("todoList", JSON.stringify(listArray)); // setting the local storage
    showTasks();
    button.classList.remove("active"); // remove the active class from add button
    console.log("listArray-->", listArray);
    console.log("localStorage-->", JSON.stringify(listArray));
    //Explication du Json parse and json stringify
    // obj = {};
    // obj.task = userInput;
    // obj.status = "active";
    // localStorage.setItem("obj", JSON.stringify(obj));
    // console.log("obj-->", JSON.stringify(obj));
    // console.log("obj", obj);
};
function showTasks() {
    let getLocalStorage = localStorage.getItem("todoList"); // getting the local storage
    if (getLocalStorage == null) {
        listArray = [];
    } else {
        //Json parse convert data to javascript
        listArray = JSON.parse(getLocalStorage);
    }
    var pendingTasks = listArray.length;
    console.log("pending-->", pendingTasks);
    pending.innerHTML = pendingTasks;

    if (pendingTasks > 0) {
        deleteButton.classList.add("active");
    } else {
        deleteButton.classList.remove("active");
    }

    //Display listArray to user interface
    let newList = "";
    for (let i = 0; i < listArray.length; i++) {
        newList += `<li class="listItem">${listArray[i]}<span class="icon" onclick="deleteTask(${i})"><i class="fas fa-trash"></i></span></li></li>`;
        console.log("newList", newList);
    }
    todoList.innerHTML = newList;
}
function deleteTask(taskIndex) {
    let getLocalStorage = localStorage.getItem("todoList"); // getting the local storage
    listArray = JSON.parse(getLocalStorage);
    listArray.splice(taskIndex, 1);
    localStorage.setItem("todoList", JSON.stringify(listArray)); // setting the local storage
    showTasks();
}
//delete all tasks function
deleteButton.onclick = () => {
    localStorage.clear();
    showTasks();
};

//Shopping card

var minus = document.querySelectorAll(".minus-btn");
var plus = document.querySelectorAll(".plus-btn");
var quantity = document.querySelectorAll(".Quant");
var finalPrice = document.getElementById("finalPrice");

console.log("minus-->", minus);
console.log("plus-->", plus);
console.log("quantity-->", quantity);

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", () => {
        if (quantity[i].value > 1) {
            quantity[i].value--;
            totalPrice();
        }
    });
}
for (let i = 0; i < plus.length; i++) {
    plus[i].onclick = () => {
        quantity[i].value++;
        totalPrice();
    };

    console.log("quantity[0].value-->", quantity[0].value);
    console.log(minus[i].nextElementSibling.value);
}

// remove()
//style.color==red
//total
function totalPrice() {
    var sum = 0;
    var prices = document.querySelectorAll(".price");
    var qty = document.querySelectorAll(".Quant");
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i].innerHTML * qty[i].value;
    }

    document.getElementById("finalPrice").value = sum;
    console.log("sum", sum);
}
