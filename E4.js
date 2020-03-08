//E.4
console.log('E.4 Dado a seguinte string teste 1 de 2 string 3, substitua todas as ocorrências de números pelo valor [removido]');
const substituir = (s1) => {
    const nums = s1.replace(/\d/g, '[removido]');
    console.log(nums);
}
substituir('teste 1 de 2 string 3');
