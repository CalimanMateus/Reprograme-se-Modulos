//imprime apenas os ímpares menores que 10//

x = 10;
while (!(x == 0)) {
  x = x - 1;
  if (x % 2 != 0) {
    console.log(x);
  }
}