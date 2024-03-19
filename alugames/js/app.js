function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    
 
    if(imagem.classList.contains('dashboard__item__img--rented')) {


          
        imagem.classList.remove('dashboard__item__img--rented');
        alert('Você devolveu o jogo alugadoooo!'); 
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
       
        
    
     } else {
         
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        alert('O jogo foi alugado com sucesso! Bom jogo!');
        
        

     }

    }