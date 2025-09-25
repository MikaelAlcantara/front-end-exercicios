let usoDiasDaSemana = [1, 2, 2.4, 5, 1.2, 0.5, 12]; //Domingo, segunda...
let diasDaSemana = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
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



for (let contador = 0; contador<=6 ; contador++) {
     let farol = IndicadorDeUso(usoDiasDaSemana[contador])
     let dia = diasDaSemana[contador];
     let horas = usoDiasDaSemana[contador];
     
     console.log(` ${farol} 📅 ${dia} | ${horas} horas de uso`);

}


// console.log (typeof usoDiasDaSemana);
// console.log (typeof usoDiasDaSemana[0]);
// console.log(typeof IndicadorDeUso);

// usoDiasDaSemana[0]

