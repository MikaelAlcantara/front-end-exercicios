let count = 0;
for (let i = 0; i < 10; i++) {
    let num = Number(prompt("Digite um número:"));
    if (num > 50) count++;
}
alert("Quantidade de números maiores que 50: " + count);