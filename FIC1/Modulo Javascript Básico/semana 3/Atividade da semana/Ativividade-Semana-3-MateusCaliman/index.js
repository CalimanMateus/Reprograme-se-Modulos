const prompt = require("prompt-sync")();
im = 0
p = 0

for (var i = 1; i <= 20; i++) {
  console.log(Math.pow(i, 2))
  if (i % 2 == 0) {
    p = Math.pow(i, 2) + p;
  } else {
    im = Math.pow(i, 2) + im;
  }
}
console.log("P = ", p);
console.log("I = ", im);
