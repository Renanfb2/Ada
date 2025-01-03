// Entrada de dados via arquivos
const path = require("node:path") // carrega a biblioteca path
const fs = require("node:fs")     // carrega a biblioteca fs (file System)
const dotenv = require("dotenv")  // carrega a biblioteca dotenv

dotenv.config()   // configura as variáveis de ambiente
console.log(process.env.NODE_ENV) // exibe qual o ambiente que estamos (desenvolvimento, QA, homologação, ...)

const filePath = path.join(process.cwd(), "Aulas de Node.js", "texto.txt")
const fileOutPath = path.join(process.cwd(), "Aulas de Node.js", "texto-novo.txt")

console.log(filePath)
console.log(fileOutPath)

fs.readFile(filePath, {} , (erro, dados) => {
    if (erro) {
        console.log(`Erro de leitura no arquivo ${filePath}`)
        return
    }
    const texto = dados.toString()  // converte os dados (hex) para string
    const linhas = texto.split("\n") // cria um array com cada linha sendo um elemento

    // console.log(linhas)

    // linhas.forEach((linha, index) =>  // método que percorre um array retornando os elementos e seus índices
    //     console.log(`${index + 1} - ${linha}`) // como o índice começa sempre em 0, o +1 é um artifício para a primeira linha chamar 1, a segunda 2, etc., caso contrário a primeira começaria em 0 e etc.
    // )

    // console.log(dados.toString())

// para criar um novo arquivo e gravar dados nele

    const linhasNovas = linhas.map((linha, index) =>  
        `${index + 1} - ${linha}`
    )
    fs.writeFile(fileOutPath, linhasNovas.join("\n"), {}, (erro) => { // como linhas novas é um array, usamos o join para unir os elementos, quebrando linha com o \n
        if (erro) {
            console.log(`Erro de escrita do arquivo ${fileOutPath}`)
            return
        }
        console.log(`Arquivo salvo no bucket ${process.env.S3_BUCKET}`) // usa o variável global process no método env, com o qual podemos acessar as variáveis de embiente existentes no arquivo .env
    }) 
})