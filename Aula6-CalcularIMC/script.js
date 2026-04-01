console.log("Hello World")
console.log(9+10)

let idade = 15
console.log(idade)

const nome = "David"
console.log(nome)
console.log("Olá, " + nome + "! Bem-vindo ao JavaScript! Você tem " + idade + "anos atualmente.")

//for = loop finito
//while = loop que executa enqaunto verdadeiro

for(let i = 0; i <= 10; i++){
    if(i !== 2){
        console.log(i)
    }
    
}

for(let i = 10; i >= 0; i--){
    if(i !== 2){
        console.log(i)
    }
    
}

//array ou vetor
//listas de coisas ;) Números, strings, posições boleano
let frutas = ["maçã", "banana", "kiwi"]
console.log(frutas)

frutas[3] =  "mango" //Adiciona a fruta manga no array frutas
console.log(frutas)

frutas[1] = "Uva" //Troca a string na posição 1 do array (no caso banana) por Uva
console.log(frutas[1])

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

function mudarTudo(){
    const titulo = document.getElementById("titulo")
    titulo.innerText = "Lista de Compras" //muda o conteúdo do texto do título
    titulo.style.color = "red" //muda cor do título
    titulo.style.fontFamily = "Papyrus" //Muda a fonte do texto

    let itens = ["maçã", "banana", "kiwi", "manga"]
    let container = document.getElementById("lista-frutas")

    container.innerHTML = ""

    for(let i = 0; i < itens.length; i++){
        container.innerHTML += `<p>Item ${i+1}: ${itens[i]} </p>`
    }
}