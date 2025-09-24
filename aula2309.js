const pessoa1 ={
    nome : "Thales",
    idade : 18,
    hobbies : ['volei', 'correr']
}
console.log(pessoa1.nome)
pessoa1.nome = 'Joao'
pessoa1.idade = 20
pessoa1.hobbies.push('nadar')
pessoa1.cpf = 12345678900
console.log(pessoa1)

//factory
function criarPessoa(nome, idade, hobbies){
    const pessoa ={
        nome,
        idade,
        hobbies
    }
    return pessoa
}   
const pessoa2 = criarPessoa('Maria', 25, ['futebol', 'dancar'])
const pessoa2Jason = JSON.stringify(pessoa2)// tansforma em string
const pessoa2obj = JSON.parse(pessoa2Jason)// transforma em objeto
console.log(pessoa2)
console.log(pessoa2Jason)
console.log(pessoa2obj)

class pessoa {
    constructor(nome, idade, hobbies){
        this.nome = nome
        this.idade = idade
        this.hobbies = hobbies
    }
}
const pessoa3 = new pessoa('Roberto',48,['ler','cozinhar'])
console.log(pessoa3)