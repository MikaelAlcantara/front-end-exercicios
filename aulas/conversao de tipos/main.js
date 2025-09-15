//EXEMPLO 1


//let numero = prompt ("Insira sua idade")


//if (numero >10) {
 
//console.log ("Parabéns seu numero é maior que 10")

//} else {
//    console.log ("Seu numero não é maior que 10")
//} 


//EXEMPLO 2


//let numero = prompt ("Insira um numero")

//if (numero >532 && numero <743 ) {
//    console.log ("SEU NUMERO ESTÁ ENTRE OS CRITERIOS REQUISITADOS.")
//} else {
//    alert ("VOCE NAO ATENDE OS REQUISITOS ALUCINOGENOS")
//}


//EXEMPLO 3

////let Mikael = 'Mikael123'
//let Nostodos = 'aidento'


//let login = prompt ("Insira sua senha")

//if (login == Mikael || login == Nostodos) {
//   console.log ("Está senha já está sendo utilizada por" + Mikael)
//} else {
//    alert ("Senha cadastrada com sucesso !")
//}


//let idade = Number(prompt('Insira sua idade'));
//let renda = Number(prompt('Insira sua renda (em salários mínimos)'));

//if (idade >= 18 && renda >= 2) {
//    console.log('Parabéns você está apto para realizar um consórcio.');
//} else {
//    console.log('Você não possui os requisitos mínimos para fazer um financiamento.');
//}



//let experiencia = Number(prompt("Quantos anos de experiência você possui?"));
//let formacao = prompt("Qual sua formação? (superior, pos-graduacao, mestrado, doutorado)").toLowerCase();

//let pontosExperiencia = experiencia < 5 ? 10 : 20;

//let pontosFormacao = 0;
//if (formacao === "superior") {
//    pontosFormacao = 10;
//} else if (formacao === "pos-graduacao" || formacao === "pós-graduação") {
//    pontosFormacao = 20;
//} else if (formacao === "mestrado") {
//    pontosFormacao = 30;
//} else if (formacao === "doutorado") {
//    pontosFormacao = 40;
//} else {
//    alert("Formação inválida.");
//}

//let pontuacaoTotal = pontosExperiencia + pontosFormacao;

//console.log("Sua pontuação para o concurso é: " + pontuacaoTotal + " pontos.");

/////////////////////parseFloat//////////////////////////

let notaUsuario = Number(prompt("Insira uma nota"));

if (notaUsuario >= 7.0 && notaUsuario <= 10.0) {
    console.log("A nota está entre 7.0 e 10.0.");
} else {
    console.log("A nota não está entre 7.0 e 10.0.");
}
