console.log("🍋", "🫑", "🍞", "🥩", "🥛", "🥣", "🦞", "🥪");

// add btn
const addBtn = document.querySelector("#add-btn");

//this function updates the list by adding items to the cart
const updateList = (event) => {
    const icon = event.target;
    icon.classList.toggle("in-cart");
    icon.classList.toggle("bi-bag")
    icon.classList.toggle("bi-bag-check")

}//end updateList
//this function removes entire e
const removeItem = (event) => {
    const icon = event.target;
    icon.parentElement.remove();
};//

// event listener
addBtn.addEventListener("click", ()=> {
    //get user info
    const emojiSelect = document.querySelector("#department");
    const itemInput = document.querySelector("#item");
    const emoji = emojiSelect.value;
    const item = itemInput.value.trim();

if(item){
    console.log(emoji, item);
    //let's build the component on the right side
    const itemDiv = buildItem(emoji, item);
   // add it to the page
    document.querySelector(".right").append(itemDiv);
} else {
    alert("Please enter an item name")
}

// clear the "form"
itemInput.value = "";
itemInput.focus();
emojiSelect.value = "🥣"; //the other option

}) //end event listener


function buildItem(emoji, item){
    //create the HTML elements
    const itemDiv = document.createElement("div");
    const emojiSpan = document.createElement("span");
    const itemSpan = document.createElement("span");
    const bagIcon = document.createElement("i");
    const trashIcon = document.createElement("i");

    //add classes and text to the elements
    itemDiv.className = "item";
    emojiSpan.className = "emoji";
    emojiSpan.innerText = emoji;
    itemSpan.className = "item-description";
    itemSpan.innerText = item;
    bagIcon.className = "bi bi-bag add-icon"
    bagIcon.addEventListener("click", updateList);
    trashIcon.className = "bi bi-trash delete-icon"
    trashIcon.addEventListener("click", removeItem)

    // now add all te elements to the div 
    itemDiv.append(emojiSpan, itemSpan, bagIcon, trashIcon);

    return itemDiv
};//end funciton