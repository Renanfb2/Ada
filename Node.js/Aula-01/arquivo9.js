// FOR (STANDARD)
for (let contador = 10; contador > 0; contador--) {
    console.log(contador)
}

// Os exemplos abaixo chamamos de CÓDIGO IMPERATIVO, pois temos que criar todas as variáveis e codificar todos os incrementos necessários para sua execução

const numeros = [10, 2, 18, 33, 128, 46, -7, -21, 490, 210]
for (let cont = 0; cont < numeros.length; cont++) { 
    console.log(numeros[cont])
}

// fazendo o mesmo mas com o while ficaria
let indice = 0
while (indice < numeros.length) {
    console.log(numeros[indice])
    indice++
}

// FOR-OF 
// Neste exemplo temos o chamado CÓDIGO DECLARATIVO, onde as instruções são simpificadas e não é necessario a criação e evolução dos contadores, nem a condição de termino da execução.
// faz o mesmo que o exemplo de cima, mas muito mais simples
console.log("\ncom for-of") // este \n pula uma linha
for (let num of numeros) { 
    console.log(num)
}

// uso com string diretamente
const palavra = "CASACO"
for (let ctd of palavra) { // funciona também se usar a string "CASACO" diretamente, ao invés da variável palavra
    console.log(ctd)
}