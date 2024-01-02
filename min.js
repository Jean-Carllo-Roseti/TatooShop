const aluno1 = {
    nome:"Rubens",
    nota: 6,
}
const aluno2 = {
    nome:"Alberto",
    nota: 7,
}
const aluno3 = {
    nome:"Clovis",
    nota: 4,
}
const aluno4 = {
    nome:"Laura",
    nota: 2,
}
const aluno5 = {
    nome:"Julia",
    nota: 10,   
}

const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

for (let i = 0; i < alunos.length; i++) {
    
    const  notaAtual  = alunos[i].nota;
    
    if (notaAtual >= 6) {
        console.log( alunos[i].nome + ' este aluno(a) foi aprovado(a).')
    } else {
        console.log( alunos[i].nome + ' este aluno(a) foi reprovado(a).')
    }
}









