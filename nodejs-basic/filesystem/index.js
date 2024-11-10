const fs = require("fs");

// Membaca teks dari file 'output.txt'
const data = fs.readFileSync("./filesystem/notes.txt", "UTF-8");
console.log(data);
