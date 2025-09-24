class estudante {
    constructor(nome, email, RA, curso, diciplinas){
        this.nome = nome;
        this.email = email;
        this.RA = RA;
        this.curso = curso;
        this.diciplinas = diciplinas;
    }

    primeraDiciplina(){
        return this.diciplinas[0];
}
    ultimaDiciplina(){
        return this.diciplinas[this.diciplinas.length -1];
}}

const estudante1 = new estudante('Thales', 'thales@gmail','123456','ADS',['logica','SO','EngSoftware']);
const estudante2 = new estudante('Maria', 'maria@gmail','654321','Fisica',['calculo','algebra','fisica1']);
console.log(estudante1);
console.log(estudante2);
console.log(estudante1.primeraDiciplina());
console.log(estudante2.ultimaDiciplina());