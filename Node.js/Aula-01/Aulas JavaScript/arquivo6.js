// Atribuição condicional
const idade = 19
const temCNH = true
const podeDirigir = idade > 18 && temCNH // atribuição feita a podeDirigir está condicionada ao resultado das 2 comparações das variáveis idade e temCNH

if (podeDirigir) {
    console.log("Pessoa está habilitada para dirigir")
}   
else {
    console.log("Pessoa não está habilitada para dirigir")
}

// Ternário
// vamos refazer o código acima, simplificando a atribuição da variável numPassageiros
const numPassageiros = podeDirigir ? 4 : 0 // neste caso ele atribui 4 se pode dirigir for true e 0 se for false. Este ternário tem o mesmo efeito de fazer com if, que fica um código maior, assim:

// let numPassageiros = 0
// if (podeDirigir) {
//    numPassageiros = 4
//}
//else {
//    numPassageiros = 0
//}
console.log({ numPassageiros }) // quando coloco a variável dentro de {}, indico que é um "objeto" e ele retorna o nome da variável e o valor dela -> { numPassageiros: 4 }, facilitando a identificação do resultado