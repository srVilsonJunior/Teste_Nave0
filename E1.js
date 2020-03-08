//E.1
console.log('E.1 Crie uma função que recebe dois argumentos string e retorna o de maior comprimento.');
const maior = (p1, p2) => {

    if(p1.length > p2.length){
        console.log(p1);
    }else{
        console.log(p2);
    }
}

maior('Paulo Cesar', 'Rogerio');