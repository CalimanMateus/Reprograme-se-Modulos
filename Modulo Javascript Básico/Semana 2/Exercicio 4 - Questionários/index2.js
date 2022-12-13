let a = 0;
let b = 2;
let c = 1;

if (a > 0){
  if (b > 0){
    alert("Tudo ok para decolagem!");
  } else {
    alert("Tanque principal vazio; voando com combustível reserva!");
  }
} else {
  if (c > 0){
    alert("Foguete não tem piloto, mas há outros foguetes disponíveis!");
  }
}