const linhas = document.getElementsByClassName("linha-filme")

//console.log(linhas)

//console.log(linhas[0])

//console.log(linhas[0].children)

//for(let i = 0; i<3; i++){

    //console.log(linhas[i])
//}

//for(let i = 0; i < 3; i++){
    //const celulas = linhas[i].children
    //console.log(linhas[i])

    //for(let c = 0; c < 4; c++){

        //console.log(celulas[c])
        //celulas[c].textContent = `Coluna ${c}`
    //}
//}

const bancoDados =[
    {titulo: "Xingling 2", ano: 1860, status: "Assistido", nota: 4},
    {titulo: "Beijing: O Filme", ano: 2023, status: "Assistido", nota: 5},
    {titulo: "Chinese CEO", ano: 2012, status: "Não Assistido", nota: 2}
]

for(let i = 0; i < linhas.length; i++){
    const celulas = linhas[i].children

    celulas[0].textContent = bancoDados[i].titulo
    celulas[1].textContent = bancoDados[i].ano
    celulas[2].textContent = bancoDados[i].status

    if(bancoDados[i].status === "Assistido"){
        celulas[2].style.backgroundColor = "green"
    } else{
        celulas[2].style.backgroundColor = "red"
    }

    const nota = document.createElement('img')

    nota.src = `images/star-rating-${bancoDados[i].nota}.png`

    celulas[3].appendChild(nota)
}