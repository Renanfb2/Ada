let numero1 = 10
let numero2 = 30
let soma = numero1 + numero2 // faz a soma normalmente
console.log(soma)

let numero3 = null

soma = numero1 + numero3 // soma normalmente, porém atribuindo zero ao null
console.log(soma)

soma = "abc" + numero2 // ele faz uma CONVERSÃO IMPLÍCITA para uma string e CONCATENA os 2 valores
console.log(soma)

soma = numero1 + "123abc" // idem ao anterior, na importanto qual a posição da string
console.log(soma)

soma = numero3 + "123abc" // idem ao anterior, porém trata o valor null como uma string e não como zero
console.log(soma)