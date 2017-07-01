(function (){

      'use strict'
      // var botoes = document.querySelectorAll('.opcoesDoCartao-remove');
      var botoes = $('.opcoesDoCartao-remove')

      for(var i=0; i < botoes.length; i++ ){
          // botoes[i].addEventListener("click", removeCartao);
          botoes[i].click(ControllerCartao.removeCartao)
      }

      //window.removeCartao = function removeCartao(){

          //ControllerCartao.removeCartao(this.dataset.ref);

          /* var cartao = document.querySelector('#cartao_'+ );

          cartao.classList.add('cartao--some');

          setTimeout(function(){
              cartao.remove();
          }, 400)
          */
})()
