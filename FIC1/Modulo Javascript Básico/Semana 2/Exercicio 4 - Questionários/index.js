let a = 10;
let b = 20;
let c = 30;
let d = 40;

if ((a <= b) && !(c >= d)) {
  if (a > d) {
    alert("Instrução 1");
  } else {
    alert("Instrução 2");
  }
} else {
  if ((b == a) && (c === d)) {
    alert("Instrução 3");
  } else {
    alert("Instrução 4");
  }
}
