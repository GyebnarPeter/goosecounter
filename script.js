var addButton = document.getElementById("add-btn");

addButton.addEventListener("click", addGoose);

var idNumber = 0;

function addGoose() {
    var gooseList = document.getElementById("goose-list");

    //GOOSE ITEM
    var newItem = document.createElement("div");
    newItem.className = "goose-item";
    newItem.id = "goose" + idNumber;
    ++idNumber;

    //MAIN LIST
    var goose = document.getElementById("new-goose").value;
    var name = document.createTextNode(goose);
    var weight = document.createTextNode(Math.floor(Math.random() * 10) + " kg");
    var mainList = document.createElement("ul");
    mainList.className = "goose-data";
    var nameListItem = document.createElement("li");
    var weightListItem = document.createElement("li");
    var deleteListItem = document.createElement("li");
    var deleteButton = document.createElement("button");
    var deleteButtonText = document.createTextNode("TÖRLÉS");
    deleteButton.appendChild(deleteButtonText);
    mainList.appendChild(nameListItem);
    mainList.appendChild(weightListItem);
    mainList.appendChild(deleteListItem);
    nameListItem.appendChild(name);
    weightListItem.appendChild(weight);
    deleteListItem.appendChild(deleteButton);
    newItem.appendChild(mainList);

    gooseList.appendChild(newItem);

    //MODIFY LIST...

}