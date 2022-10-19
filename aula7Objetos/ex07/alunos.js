var alunos = {
    aluno1: {
        nome: "guilherme",
        sobrenome: "Nascimento Colin",
        notas:{
            matematica: 10,
            portugues: 7,
            fisica: 8,
            quimica: 5,
        },
        endereco:{
            cidade: "São Paulo",
            rua: "Rua nordestina",
            numero: 83
        },
        sala: 2,
        periodo: "manhã",
        escolaridade: "ensino medio", 
        ano: "1 ano do ensino médio"
    },

    aluno2: {
        nome: "rafaela",
        sobrenome: "martins",
        notas:{
            matematica: 10,
            portugues: 9,
            fisica: 7,
            quimica: 5,
        },
        endereco:{
            cidade: "São Paulo",
            rua: "rua da constelação",
            numero: 50
        },
        sala: 1,
        periodo: "tarde", 
        escolaridade: "ensino medio",
        ano: "3 ano do ensino médio"
        
    },

    aluno3: {
        nome: "eriky",
        sobrenome: "santos",
        notas:{
            matematica: 5,
            portugues: 9,
            fisica: 8,
            quimica: 10,
        },
        endereco:{
            cidade: "São Paulo",
            rua: "rua da jurupinga",
            numero: 100
        },
        sala: 3,
        periodo: "noite", 
        escolaridade: "ensino medio",
        ano: "2 ano do ensino médio"
    }
}

for(let alunos = 0; i < alunos.length; alunos++){
    console.log(alunos)
}

if(media >= 7){
    return "Aluno Aprovado"
}else{
    return "Aluno Reprovado"
}


