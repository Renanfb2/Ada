// FOR-IN
const user = {
    name: "JOsé MaRia SOUZA santos",
    email: "JOSE.m1@gmail.com",
    age: 23,
    address: "30 XYZ street"
}

console.log("Original\n", user)

for (const key in user) {
    if (key === "name") {
        const nameSplit = user[key].split(" ") // separa cada nome e faz um array chamado nameSplit
        // console.log(nameSplit)
        user[key] = "" // limpa o atributo nome, para poder ser remontdo corretamente

        for (const nameSolo of nameSplit) {  // vai trabalhar em cada um dos elementos (nomes) do array
            const adjustedName = nameSolo.toLowerCase() // normaliza os nomes para tudo minúsculo
            const [firstLetter, ...remainingLetters] = adjustedName // separa este nome em 2 partes, uma a aprimeira letra (agora separada como string) e as demais (mantidas em forma de array ainda)
            // console.log(firstLetter, remainingLetters)
            user[key] = user[key] + firstLetter.toUpperCase() + remainingLetters.join("") +" " // vai juntando cada nome ao nome anterior, porém convertendo a primeira letra para maiuscula e juntando as demais letras à este (pois originalmente estão sob forma de array)
        }
        user[key] = user[key].trim() // elimina o espaço em branco do final do nome completo
    }

    if (key === "email") {
        // user[key] = user[key].toLowerCase() // padroniza o e-mail para letras minusculas
        user.email = user.email.toLowerCase() // poderia ser assim também
    }
}

console.log("Ajustado\n", user)