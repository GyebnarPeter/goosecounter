let addButton = document.getElementById("add-btn");
addButton.addEventListener("click", addGoose);

//NEW GOOSE
let idNumber = 0;
let sumWeight = 0;
function addGoose() {
    let gooseList = document.getElementById("goose-list");

    //GOOSE ITEM
    let newItem = document.createElement("div");
    newItem.className = "goose-item";
    newItem.id = "goose" + idNumber;
    let temp = idNumber;
    ++idNumber;
    let gooseWeight = Math.floor(Math.random() * 10);

    //MAIN LIST
    let goose = document.getElementById("new-goose").value;
    let name = document.createTextNode(goose);
    let weight = document.createTextNode(gooseWeight + " kg");
    let mainList = document.createElement("ul");
    mainList.className = "goose-data";
    let nameListItem = document.createElement("li");
    let weightListItem = document.createElement("li");
    let deleteListItem = document.createElement("li");
    let deleteButton = document.createElement("button");
    deleteButton.onclick = () => deleteGoose(temp, gooseWeight);
    let deleteButtonText = document.createTextNode("TÖRLÉS");
    deleteButton.appendChild(deleteButtonText);
    mainList.appendChild(nameListItem);
    mainList.appendChild(weightListItem);
    mainList.appendChild(deleteListItem);
    nameListItem.appendChild(name);
    weightListItem.appendChild(weight);
    deleteListItem.appendChild(deleteButton);
    newItem.appendChild(mainList);
    gooseList.appendChild(newItem);

    sumWeight += gooseWeight
    document.getElementById("sum-weight").innerHTML = `Ludaink összsúlya: ${sumWeight} kg`;
}

//DELETE GOOSE
function deleteGoose(temp, gooseWeight) {
    sumWeight -= gooseWeight;
    document.getElementById("sum-weight").innerHTML = `Ludaink összsúlya: ${sumWeight} kg`;
    document.getElementById("goose" + temp).remove();
}




