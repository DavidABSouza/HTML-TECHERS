function CalcularIMC(){
    let Peso = Number(document.getElementById("inputPeso").value)
    let Altura = Number(document.getElementById("inputAltura").value)
    const Resultado = document.getElementById("Resultado")

    let IMC = Peso/(Altura*Altura)

    Resultado.innerText = ("O seu IMC é: " + IMC)
}