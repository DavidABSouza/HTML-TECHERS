/* let src = "cachorro.png";
let text  = "Um cachorro muito fofo";
let titulo = "Cachorro";

const imgCard = document.getElementById("img1");
const tituloCard = document.getElementById("titulo1");
const infoCard = document.getElementById("info1");

imgCard.setAttribute("src", src);
tituloCard.textContent = titulo;
infoCard.textContent = text; */

/* const nomes = ["Ana", "David", "Luis", "Gabriel"]

nomes[0] = "Barbara"; //Substitui elemento 0 do array por "Barbara" */

const headings = [
  "Pikachu",
  "Bulbasaur",
  "Charmander",
  "Squirtle",
  "Caterpie",
  "Pidgeotto",
  "Butterfree",
  "Meowth",
  "Ekans",
  "Koffing"
];

const dataInfo = [
  "Pikachu é o Pokémon elétrico parceiro de Ash. Ele inicialmente se recusa a obedecer, mas torna-se extremamente leal e poderoso.",
  "Bulbasaur é um Pokémon planta/veneno muito calmo e responsável. No anime, ele frequentemente age como um líder entre os Pokémon de Ash.",
  "Charmander é um Pokémon de fogo abandonado por seu antigo treinador. Ash o resgata e ele demonstra grande coragem e determinação.",
  "Squirtle liderava o grupo chamado Squirtle Squad. Depois de conhecer Ash, decide juntar-se à sua equipe.",
  "Caterpie é um dos primeiros Pokémon capturados por Ash. Apesar de pequeno, ele mostra grande coragem e evolui rapidamente.",
  "Pidgeotto é a evolução de Pidgey, capturado por Ash no início da jornada. Ele ajuda bastante em batalhas aéreas.",
  "Butterfree é a evolução final de Caterpie. No anime, Ash acaba libertando-o para que possa viver com outros Butterfree.",
  "Meowth é um membro da Equipe Rocket que aprendeu a falar como um humano. Ele é astuto e vive tentando roubar o Pikachu.",
  "Ekans é o Pokémon de Jessie da Equipe Rocket. Ele é usado frequentemente para atacar e capturar outros Pokémon.",
  "Koffing é o Pokémon de James da Equipe Rocket. Ele libera gases tóxicos e participa das tentativas de capturar Pikachu."
];

const imgScr = [
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png"
]

const imgCard = document.getElementsByClassName("img-card");
const tituloCard = document.getElementsByClassName("titulo");
const infoCard = document.getElementsByClassName("info");

for(let i = 0; i < 10; i++){
    imgCard[i].setAttribute("src", imgScr[i])
    tituloCard[i].textContent = headings[i]
    infoCard[i].textContent = dataInfo[i]
}