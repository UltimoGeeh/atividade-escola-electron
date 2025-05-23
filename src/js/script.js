var formCadastro = document.getElementById("form-cadastro")

function cadastrarAluno(event) {

    event.preventDefault()

    var listaAlunos = []

    var nome = document.getElementById("nome").value

    var matricula = document.getElementById("matricula").value

    var idade = document.getElementById("idade").value

    var mae = document.getElementById("mae").value

    var telefone = document.getElementById("telefone").value

    console.log(nome)
    console.log(matricula)
    console.log(idade)
    console.log(mae)
    console.log(telefone)

    console.log("Função cadastro chamado")

    var Matriculas = {
        nome: nome,
        matricula: matricula,
        idade: idade,
        mae: mae,
        telefone: telefone,
    }

    listaAlunos.push(Matriculas)
    console.log("lista de matriculas", listaAlunos)

     formCadastro.reset();
}

    var listaAlunos = []

formCadastro.addEventListener("submit", cadastrarAluno)