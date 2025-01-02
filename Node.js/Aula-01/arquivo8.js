// DO WHILE
// 1) Outra forma de Encontrar um nome específico em uma lista
const contatos = ["Pedro", "Tiago", "João", "André", "Simão", "Bartolomeu", "Felipe", "Mateus", "Tomé"]
let encontrouNome = false
let fimDaLista = false
let indexContato = 0

do {
    let contatoAtual = contatos[indexContato] // fez assim para facilitar a visualização, pois poderia ter jogado o contatos[indexContato] diretamente no if abaixo, mas poderia parecer que o método acessado era da lista, quando na verdade é de uma string que é o nome do contato.
    if (contatoAtual.startsWith("A")){ // strings também possuem diversos métodos que podem ser acessados
        encontrouNome = true
        console.log(`Contato encontrado: ${contatoAtual}.`)
    }
    indexContato += 1

    if (indexContato === contatos.length) {
        console.log("Contato não foi encontrado")
        fimDaLista = true
    }
}
while (!encontrouNome && !fimDaLista)