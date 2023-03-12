let cartItemTextInputElement = document.getElementById("cartItemTextInput")
let cartItemsContainer = document.getElementById("cartItemsContainer")

let addBtnElement = document.getElementById("addBtn")

function onaddCartItem(){
    let inputValue = cartItemTextInputElement.value 
    let liElement = document.createElement("li")
    liElement.classList.add("li-items")
    liElement.textContent = inputValue 
    cartItemTextInputElement.value = "";

    cartItemsContainer.appendChild(liElement)

}