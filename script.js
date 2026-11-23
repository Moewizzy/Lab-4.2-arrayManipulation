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

function filterItems(searchTerm) {
    const term = searchTerm.toLowerCase();
    return shoppingList.filter((item) => item.toLowerCase().includes(term));
}


