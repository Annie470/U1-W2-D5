/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array 
    in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", 
    questa volta in ordine invertito.
*/
pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let saveThePet = pets[0]; //che poi muoiono sempre i pesciolini rossi :'(
pets.shift();
pets.push(saveThePet);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi
     una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
// Creiamo una funzione che fornisca le lettere che compongono una targa
const letteraTarga = function () {
  let lettera = Math.floor(Math.random() * 4);
  switch (lettera) {
    case 0:
      lettera = "E";
      break;
    case 1:
      lettera = "Z";
      break;
    case 2:
      lettera = "D";
      break;
    case 3:
      lettera = "H";
      break;
  }
  return lettera;
};

//Lasciamo che lo pseudo-destino scelga il numero di targa...
const targaRandom = function () {
  let targa = Math.ceil(Math.random() * 158399);
  return "C" + letteraTarga() + targa + letteraTarga(); //così è piu verosimile
};
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = targaRandom();
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars",
     rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newElement = {
  brand: "Smart",
  model: "ForTwo",
  color: "white", // sostituisci "white" con "rainbow" per attivare la magia dell'esercizio 8
  trims: ["clever", "style", "city"],
  licensePlate: targaRandom(),
};
cars.push(newElement);
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto 
    nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  let trims = cars[i].trims[0];
  justTrims.push(trims);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi
     messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz");
  } else if (cars[i].color === "rainbow") {
    console.log("Wow, una bellissima unicorno-mobile"); // Incantesimo riuscito!
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico 
    fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let i = 0;
while (i < numericArray.length) {
  console.log(numericArray[i]);
  if (numericArray[i] !== 32) {
    i++;
  } else {
    break;
  }
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, 
    genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const positionArray = [];
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      charactersArray[i] = 1;
      break;
    case "b":
      charactersArray[i] = 2; // e via cosi per tutto l'alfabeto
      break;
    case "d":
      charactersArray[i] = 4;
    case "g":
      charactersArray[i] = 7;
      break;
    case "n":
      charactersArray[i] = 12;
      break;
    case "u":
      charactersArray[i] = 19;
      break;
    case "z":
      charactersArray[i] = 21;
      break;
  }
  positionArray.push(charactersArray[i]);
}
console.log(positionArray);
