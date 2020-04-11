function hide() {
    var x = document.getElementById("hide");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

function removeGoose() {
    var y = document.getElementById("goose-item");
    y.remove();
}

function modify() {
    var z = document.getElementById("newName").value;
    document.getElementById("name").innerHTML = z;
    hide();
}