//E.9
console.log('E.9 Imprima se existir alguem com menos 25 anos.');
for(pessoa of pessoas){
    if(pessoa.idade < 25){
        console.log(`Menor de 25 anos: ${pessoa.nome.substring(0,1).toUpperCase().concat(pessoa.nome.substring(1))}`);
    }
}
