// Controle de Fluxo
const num1 = 50
const num2 = 2
const num3 = 20
const numNumerico = 30
const numString = "30"

if (num1 > 1) {
    console.log("Número é maior que 1")
}

if (num1 > 100) {
    console.log("Número é maior que 100")
}
else {
    console.log("Numero não é maior que 100")
}

if (num2 < num1) {
    console.log(`${num2} é menor que ${num1}.`)
}
if (num1 === num2) {
    console.log("Os 2 números não iguais.")
}
else {
    console.log("Os 2 números são diferentes.")
}

if (numNumerico === numString) { // operador === compara o valor e o tipo das variáveis
    console.log("Números são iguais operador ===")
}
if (numNumerico == numString) { // operador == compara apenas o valor das variáveis, independente do tipo delas
    console.log("Números são iguais operador ==")
}

// operadores OR e AND

if (num1 > num2 || num2 > num3) { // operador OU ||
    console.log("Operador OR = Verdadeiro")
}
else {
    console.log("Operador OR = Falso")
}

if (num1 > num2 && num2 > num3) { // operador AND &&
    console.log("Operador AND = Verdadeiro")
}
else {
    console.log("Operador AND = Falso")
}