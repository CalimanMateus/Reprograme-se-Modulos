perfeitos = 0;

i = 2;
while (perfeitos < 3) {
  soma_divisores = 0;
  j = i - 1;
  while (j > 0) {
    if (i % j == 0) {
      soma_divisores = soma_divisores + j;
    }
    j = j - 1;
  }
  if (soma_divisores == i) {
    perfeitos = perfeitos + 1;
    console.log("Perfeito:", i);
  }
  i = i + 1;
}