//E.11
console.log('E.11 Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id.');

pessoas.sort(function (a, b) {
    if (a.idade < b.idade) {
      return 1;
    }
    if (a.idade > b.idade) {
      return -1;
    }

    if(a.idade == b.idade){
        if(a.id < b.id){
            return 1;
        }
        if(a.id > a.id){
            return -1;
        }
    }
    return 0;
  });

  for(pessoa of pessoas){
    console.log(pessoa);
  }
