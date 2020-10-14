for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("Loop Finished");

const names = ["Ali", "Noora", "Fathima"];
for (let r = 0; r < names.length; r++) {
  // console.log(names[r]);
  let html = `<div>${names[r]}<div>`;
  console.log(html);
}

//While
let count = 0;
while (count < 5) {
  console.log("Loop in ", count);
  count++;
}
