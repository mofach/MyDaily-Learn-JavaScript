// TODO 1
const { EventEmitter } = require("events");

const birthdayEventListener = (name, age) => {
  console.log(`Happy birthday ${name}, yang ke ${age} tahun!`);
};

const myEmitter = new EventEmitter(); // TODO 2

myEmitter.on("birthday", birthdayEventListener); // TODO 3

myEmitter.emit("birthday", "Aqil", 21); // TODO 4
