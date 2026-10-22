// array
const linguagens = ["HTML", "JS", "CSS"] // 0 1 2 
console.log(linguagens[1]);
//retornar op JS

console.log(linguagens.lenght)
// retornar o valor 3

for (const linguagem of linguagens){
    console.log("Estudando: ", linguagem)
}//HTML JS CSS

////
//Objetos 

const alunos = {
    nome: "Jose",
    idade: 20,
    curso: 'Dev Web'

}
console.log(alunos.curso) // Dev Web

///

//Objetos dentro de arrays - arrays de objetos 
const aluno = [
    {
        nome: "Jose",
        idade: 20,


    },
    {
    nome: "Joana ",
    idade: 24,
}
]
for (const listaAluno of aluno){
    console.log(listaAluno.nome)
    console.log(listaAluno.idade)
}