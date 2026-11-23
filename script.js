////Created List
const shoppingList = [];


//////push=add to the end of list
function addItem(item) {
    shoppingList.push(item);
}

//////pop=remove from end of list
function removeLastItem() {
    shoppingList.pop();
}

////////forEach() runs the function once every time
function displayList() {
    shoppingList.forEach((item) => console.log(item));
}

////Change 'addItem' so it checks the array first.
function addItem(item) {
    if (shoppingList.includes(item)) {
        return;   // already there, do nothing
    }
    shoppingList.push(item);
}

//// checks whether the item is already on the list,
//  ignoring capital letters.
const alreadyThere = shopppingList.some(
    (existing) => existing.toLowerCasr() === item.toLowerCase()

);
////////////////////////////////////////////

// ///- shoppingList.filter(...) means "go through the pile one note at a time and make a found pile."
// - item is the note in your hand right now.
// - item.toLowerCase().includes(term) asks "does this note, in lowercase, have 'apple' anywhere in it?" Yes goes in the found pile. No gets skipped.
// - return means "hand the found pile back."

function filterItems(searchTerm) {
    const term = searchTerm.toLowerCase();
    return shoppingList.filter((item) => item.toLowerCase().includes(term));
}


////Hook the buttons
const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const itemList = document.getElementById("itemList")




