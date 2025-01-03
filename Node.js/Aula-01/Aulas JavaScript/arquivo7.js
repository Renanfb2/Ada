// While
// 1) impressão de nomes de uma lista
const nomesDeUsuarios = ["Pedro", "Tiago", "João", "Marcos"]

// Para imprimir uma msg para cada usuário fazemos assim: (maneira "burra")
// console.log("Olá,", nomesDeUsiarios[0])
// console.log("Olá,", nomesDeUsiarios[1])
// console.log("Olá,", nomesDeUsiarios[2])
// console.log("Olá,", nomesDeUsiarios[3])

// Isto pode ser simplificado com o uso do while, desta forma
let indice = 0

while (indice < nomesDeUsuarios.length) { // método .length informa o tamanho do array
    console.log("Olá,", nomesDeUsuarios[indice], {indice})
    indice += 1
}

// 2) Separação de Pares e Impares
const numeros = [25, 88, 71, 192, 333, 222, 10, 11, 62]
const pares = []
const impares = []
let index = 0

console.log(numeros)
while (index < numeros.length) {
    if (numeros[index] % 2 === 0) {
        pares.push(numeros[index])
    }
    else {
        impares.push(numeros[index])
    }
    index +=1
}
console.log(pares)
console.log(impares)

// 3) Encontrar um nome específico em uma lista
const contatos = ["Pedro", "Tiago", "João", "André", "Simão", "Bartolomeu", "Felipe", "Mateus", "Tomé"]
let encontrouNome = false
let fimDaLista = false
let indexContato = 0

while (!encontrouNome && !fimDaLista) {
    let contatoAtual = contatos[indexContato] // fez assim para facilitar a visualização, pois poderia ter jogado o contatos[indexContato] diretamente no if abaixo, mas poderia parecer que o método acessado era da lista, quando na verdade é de uma string que é o nome do contato.
    if (contatoAtual.startsWith("B")){ // strings também possuem diversos métodos que podem ser acessados
        encontrouNome = true
        console.log(`Contato encontrado: ${contatoAtual}.`)
    }
    indexContato += 1

    if (indexContato === contatos.length) {
        console.log("Contato não foi encontrado")
        fimDaLista = true
    }
}

// Existe o comamdo "break" que interrompe um while independente da condição ter sido ou não atingida.
// Caso haja um ninho de whiles, o break so interrompe o while onde ele está colocado, mas não os whiles superiores.