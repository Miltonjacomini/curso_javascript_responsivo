
document.querySelector('#mudaLayout').addEventListener('click', function mudaLayout(){

        var mural = document.querySelector('.mural');

        mural.classList.toggle('mural--linhas');

        if(mural.classList.contains('mural--linhas')){
            this.textContent = 'Colunas';
        } else {
            this.textContent = 'Linhas';
        }

    }
);


var botoes = document.querySelectorAll('.opcoesDoCartao-remove');

for(var i=0; i < botoes.length; i++ ){
    botoes[i].addEventListener("click", removeCartao);
}

function removeCartao(){

    var cartao = document.querySelector('#cartao_'+ this.dataset.ref);

    cartao.classList.add('cartao--some');

    setTimeout(function(){
        cartao.remove();
    }, 400)

}
