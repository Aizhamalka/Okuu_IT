// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let users = ["Amina", "Maryam", "Zamir", "Aika"];
// for (let i = 0; i < users.length; i++) {
//   document.write(`<h3>${users[i]}</h3>`);
// }

// let users = ["Amina", "Maryam", "Zamir", "Aika"];
// for (let i = 0; i < users.length; i++) {
//   if (users[i] == "Zamir") break;
//   document.write(`<h3>${users[i]}</h3>`);
// }

// let users = ["Amina", "Maryam", "Zamir", "Aika"];
// for (let i = 0; i < users.length; i++) {
//   if (users[i] == "Maryam") continue;
//   document.write(`<h3>${users[i]}</h3>`);
// }

let users = ["Amina", "Maryam", "Zamir", "Aika"];
let i = 0;
do {
  document.write(`<h3>${users[i]}</h3>`);
  i++;
} while (i < users.length);
