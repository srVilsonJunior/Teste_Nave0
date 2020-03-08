//E.7
console.log('E.7 Imprima uma mensagem de saudação com o nome completo para cada um dos objetos. O nome deve ter a primeira letra maiúscula.');
let pessoas = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
];

console.log(`
     Ola, ${pessoas[0].nome.substring(0,1).toUpperCase().concat(pessoas[0].nome.substring(1))} ${pessoas[0].sobrenome.substring(0,1).toUpperCase().concat(pessoas[0].sobrenome.substring(1))}
     Ola, ${pessoas[1].nome.substring(0,1).toUpperCase().concat(pessoas[1].nome.substring(1))} ${pessoas[1].sobrenome.substring(0,1).toUpperCase().concat(pessoas[1].sobrenome.substring(1))}
     Ola, ${pessoas[2].nome.substring(0,1).toUpperCase().concat(pessoas[2].nome.substring(1))} ${pessoas[2].sobrenome.substring(0,1).toUpperCase().concat(pessoas[2].sobrenome.substring(1))}
     Ola, ${pessoas[3].nome.substring(0,1).toUpperCase().concat(pessoas[3].nome.substring(1))} ${pessoas[3].sobrenome.substring(0,1).toUpperCase().concat(pessoas[3].sobrenome.substring(1))}
    `);

