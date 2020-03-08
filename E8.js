//E.8
console.log('E.8 Imprima a soma das idades (dica: utilize reduce)');    
const soma = [pessoas[0].idade, pessoas[1].idade, pessoas[2].idade, pessoas[3].idade].reduce((a, b) => a + b);
console.log(`A soma das idades é ${soma}!`);

