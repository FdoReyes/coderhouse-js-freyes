class Item {
    constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
    }
}

// Variables Globales

const mochila = [];


// Items Juego
const pistola = new Item("Pistola", 80, "pistol.png");
const escopeta = new Item("Escopeta", 160, "shotgun.png");
const sniper =  new Item("Rifle", 120, "sniper.png")


//Gold
let gold = 1000;

//Elementos
const elementgold = document.querySelector("#gold span");
const elementbag = document.querySelector("#bag");

// Funciones regulares

//Funcion encargada de agregar items al maletin

function buy(item) {
    if (oro - item.price <= 0) {
        alert("No tienes suficiente oro para comprar " + item.name + ".");
    } else if (bag.length > 5) {
        alert ("No tienes más espacio en tu maletin");
    } else  {
        bag.push(item);
        gold = gold - item.price;
        actualizarHTML();
    }
}

//Funcion encargada de quitar items del maletin


function sell(indice) {
    const item = bag[indice];
    gold = gold + item.price;

}


