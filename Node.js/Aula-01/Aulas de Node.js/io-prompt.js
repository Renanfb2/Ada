// import readline from 'node:readline'
const rl = require("readline")

const prompt = rl.createInterface({
    input: process.stdin,           // processo é variável global do node, stdin indica a entrada padrão (teclado)
    output: process.stdout          // processo é variável global do node, stdout indica saida padrão (monitor)
  })

// prompt.question("Qual seu número favorito? ", (resposta) => {  // usa o método .question para fazer o input e output - note que não é necessário declarar a variável resposta. o dado recebido na resposta é sempre string.
//     console.log(`O dobro do número favorito é ${parseInt(resposta) * 2} `) // resposta é do tipo string e a função parseInt() faz a conversão de string para numero, de modo a permitir a multiplicação.
//     // para fazer uma nova pergunta temos que colocá-a na sequencia (dentro do prompt anterior)
//     prompt.question("Qual sua cor favorita? ", (resposta) => {
//         console.log(`Sua cor favorita é ${resposta}`)
//         prompt.close()
//         })  
// })

// quando se tem várias perguntas em seuencia, cada uma tem que estar aninhada com a anterior, o que pode tornar o entendimento do código mais difícil.
// uma forma de resolver isso é usando Promise
const promptPromise = {
    question: (pergunta) => new Promise((resolve, reject) => {
        try {
            prompt.question((pergunta), (resposta) => resolve(resposta))
        } catch (error) {
          reject(error)  
        }
    }),
    close: () => prompt.close()
}

async function askUser() {
    const numero = await promptPromise.question("Qual seu número favorito? ")
    console.log(`O dobro do número favorito é ${parseInt(numero) * 2} `)

    const cor = await promptPromise.question("Qual sua cor favorita? ")
    console.log(`Sua cor favorita é ${cor}`)
    promptPromise.close()
}

askUser()