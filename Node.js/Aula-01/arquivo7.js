// LOOPS
// 1) while
const nomesDeUsiarios = ["Pedro", "Tiago", "João", "Marcos"]

// Para imprimir uma msg para cada usuário fazemos assim: (maneira "burra")
// console.log("Olá,", nomesDeUsiarios[0])
// console.log("Olá,", nomesDeUsiarios[1])
// console.log("Olá,", nomesDeUsiarios[2])
// console.log("Olá,", nomesDeUsiarios[3])

// Isto pode ser simplificado com o uso do while, desta forma
let indice = 0

while (indice < nomesDeUsiarios.length) { // método .length informa o tamanho do array
    console.log("Olá,", nomesDeUsiarios[indice], {indice})
    indice += 1
}