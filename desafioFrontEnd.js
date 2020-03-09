
const comentario = (numeroid, post) => {
    let coment;
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
    .then( function(response) {
        response.data.forEach( element => { 
            coment = element.body;
            if(element.postId === numeroid){
                
                let h1 = document.createElement('ul');
                h1.textContent = `Postagem ${element.postId} // ${post}`;
                let seletor = document.querySelector('#postagens');
                seletor.appendChild(h1);
                let h2 = document.createElement('li');
                h2.textContent = `Comentario ${element.id} referente ao post ${element.postId} // ${coment}`;
                seletor.appendChild(h2);
                
            }
            else{
                null;
            }

         });
    })

    .catch(function(error) {
    console.log(error);
    }) 

}


const postagem = () => {
    let post;
    let numberid;
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then( function(response) {
    response.data.forEach(element => 
    {
        post = element.title;
        numberid = element.id;
        comentario(numberid, post);
    });
    
    })
    .catch(function(error) {
    console.log(error);
    }) 
}

postagem();
