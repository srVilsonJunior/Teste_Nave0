//E.6
console.log('E.6 Executa alert com endereço, numero, cidade e estado');

axios.get('https://viacep.com.br/ws/96010750/json/',{})
.then(function(response){
    
    let rua = response.data.logradouro;
    let num = response.data.ibge;
    let cidade = response.data.localidade;
    let estado = response.data.uf;
    
    alert(
        `
        ENDERECO: ${rua}
        NUMERO: ${num} 
        CIDADE / ESTADO: ${cidade} ${estado}`);
})
.catch(function(error){
    console.warn(error);
});