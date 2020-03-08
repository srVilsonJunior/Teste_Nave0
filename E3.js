//E.3
console.log('E.3 Crie uma função que recebe vários argumentos do tipo string e imprime todos juntos');
const varios = (p1, p2, p3, p4, p5, p6) => {
    
    var nomes = [p1, p2, p3, p4, p5, p6];
    for(nome of nomes){
        console.log(nome);
    }   
}
varios('Sandro','Matheus','Lucas','Anderson','Paulo','Rogerio');
