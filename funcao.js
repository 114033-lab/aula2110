function calcularMedia(n1,n2){
    return (n1 + n2) /2;
    console.log(calcularMedia())
}
const media = calcularMedia(8,3)
console.log(media)

console.log("Outra média:",calcularMedia(9,4))

function verificaoAprovacao(valorMedia){
    if(valorMedio>=6){
        return"Aprovado";
    } else{
        return "reprovado"
    }
}

