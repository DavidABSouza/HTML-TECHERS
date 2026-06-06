const botao = document.querySelector("#btn-tema")

function MudarTema(){

    let head = document.querySelector(".head")

    head.innerHTML = `    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LinkTree Charmander</title>
    <link rel="stylesheet" href="style2.css">`
}

botao.addEventListener('click', MudarTema)