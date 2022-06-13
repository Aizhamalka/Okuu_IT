const options = {
  name: "test",
  width: 1000,
  height: 1000,
  colors: {
    border: "black",
    bg: "red",
  },
};
// console.log(options.name);
// delete options.name;
// console.log(options);
let counter = 0;
for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Свойство ${i} значение ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`Свойство ${key} значение ${options[key]}`);
  }
}
console.log(counter);
