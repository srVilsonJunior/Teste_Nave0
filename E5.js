//E.5
console.log('E.5 Dado o dicionário {4: a, 3: e, 1: i, 5: s} substitua os números na frase T35t3 d3 35t4g1o conforme o dicionário.');
const subsFrase = (f1) => {
    
    const dicionario = {4: 'a', 3: 'e', 1: 'i', 5: 's'};   
    let frase = f1.replace(/1/g, dicionario[1])
    .replace(/3/g, dicionario[3])
    .replace(/4/g, dicionario[4])
    .replace(/5/g, dicionario[5]);

    console.log(frase);
}
subsFrase('t35t3 d3 35t4g1o');
