let koders = [
    "Max",
    "Manuel",
    "Paola",
    "Damian",
    "Andres",
    "Jorge",
    "Rob",
    "Daniel",
    "Karla",
    "Ana Pao",
    "Israel",
    "Hector"
]
const createItem = (itemText) =>{
let item = document.createElement('li');
item.classList.add("list-group-item", "list-group-item-dark")
let text = document.createTextNode(itemText);
item.appendChild(text);
let list = document.getElementById("list");

list.appendChild(item);
}

koders.forEach(item => createItem(item));