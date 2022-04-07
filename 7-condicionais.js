console.log(`trabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos Possíveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); // Removendo item
// } else if (estaAcompanhada) { // A pessoa é menor de idade
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Você não é maior de idade, por isso não pode comprar a passagem");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!");
    listaDeDestinos.splice(2, 1); // Removendo item
} else {
    console.log("Você não é maior de idade, por isso não pode comprar a passagem");
}

console.log("Embarque: \n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!");
}else{
    console.log("Você não pode Embarcar");
}


console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <=18);
// console.log(idadeComprador == 18);