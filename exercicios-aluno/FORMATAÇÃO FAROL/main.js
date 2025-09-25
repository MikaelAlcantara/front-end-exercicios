let usoDiasDaSemana = [1, 2, 2.4, 5, 1.2, 0.5, 12]; //Domingo, segunda...
let diasDaSemana = [
    'Domingo      ',
    'Segunda-feira',
    'Terça-feira  ',
    'Quarta-feira ',
    'Quinta-feira ',
    'Sexta-feira  ',
    'Sábado       '
];

// Determinar se o uso do dia é verde, amarelo ou vermelho
const IndicadorDeUso = (numeroDeHoras) => {
    if (numeroDeHoras <= 1 ) {
        return '🟢';
    } else if ( numeroDeHoras <= 3) {
        return '🟡';
    } else {
        return '🔴';
    }
}



for (let contador = 0; contador<= usoDiasDaSemana.length ; contador++) {
     let farol = IndicadorDeUso(usoDiasDaSemana[contador])
     let dia = diasDaSemana[contador];
     let horas = usoDiasDaSemana[contador];
    //  let mensagem = 'hora de uso'

     
    //  if ( horas > 1 ) {
    //     mensagem = 'horas de uso';
    //  } 
     let mensagem = (horas > 1) ? 'horas de uso' : 'hora de uso'; // Operador ternário

     console.log(` ${farol} 📅 ${dia} | ${horas} ${mensagem}`);

}


// console.log (typeof usoDiasDaSemana);
// console.log (typeof usoDiasDaSemana[0]);
// console.log(typeof IndicadorDeUso);

// usoDiasDaSemana[0]

