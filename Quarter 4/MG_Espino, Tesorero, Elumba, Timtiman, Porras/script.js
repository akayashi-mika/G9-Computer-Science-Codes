// Price of Texture
let priceTexture = document.getElementById("hoodieTexture").value;
switch (priceTexture) {
    case "Sweatshirt":
        texturePrice = 500;
        break;

    case "Vintage":
        texturePrice = 650;
        break;

    case "Cotton":
        texturePrice = 700;
}

// Price of cotton
colorPrice = 50;

// Price of Size
let priceSize = document.getElementById("hoodieSize").value;
switch (priceSize) {
    case "Small":
        sizePrice = 200;
        break;

    case "Medium":
        sizePrice = 300;
        break;

    case "Large":
        sizePrice = 500;
        break;
}

// Total Price
function calculatePrice() {
    totalPrice = texturePrice + colorPrice + sizePrice;
    alert(document.getElementById("").value = "This costs " + totalPrice + "$");
    alert("This costs " + totalPrice + "$")
    alert(totalPrice);
    alert("This is a test")
}


function myFunction() {
    let color = document.getElementById("color").value;
    let size = document.getElementById("size").value;
    let texture = document.getElementById("texture").value;

    let Cname = document.getElementById("Cname").value;
    let add = document.getElementById("add").value;
    let CD = document.getElementById("CD").value;
    let MP = document.getElementById("MP").value;
    return false;
}