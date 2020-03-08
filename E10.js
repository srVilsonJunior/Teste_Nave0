
//E.10
console.log('E.10 Imprima todos os elementos em que a idade é menor que 30 anos.');
for(pessoa of pessoas){
    if(pessoa.idade < 30){
        console.log(`Menor de 30 anos: ${pessoa.nome.substring(0,1).toUpperCase().concat(pessoa.nome.substring(1))}`);
    }
}
