let soma = 0;

for (let i = 1; i <= 10; i++) {
    soma += Number(prompt('Peso da pessoa ' + i + ':'));
}

alert('Média dos pesos: ' + (soma / 10));
