// function first() {
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }
// function second() {
//   console.log(2);
// }

// first();
// second();

// -----------------------------------------

// function learnJS(lang, callback) {
//   console.log(`I study ${lang} `);
//   callback();
// }
// learnJS("JavaScript", function () {
//   console.log("I watched this screencast");
// });

function learnJS(lang, callback) {
  console.log(`I study ${lang} `);
  callback();
}
learnJS("JavaScript", function () {
  console.log("I watched this screencast");
});
