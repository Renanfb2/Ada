// OBJETOS
const animal = {
    tipo: "doméstico",
    espécie: "cachorro",
    porte: "pequeno",
    qtd: 10,
    ehVacnado: false
}
console.log(animal) // vai imprimir todos os atributos de animal

animal.raca = "fiapo de manga" // para incluir um novo atributo é só declara-lo

console.log(animal.tipo) // imprime apenas o atributo especificado
console.log(animal.raca)
