var ControllerCartao = (function() {

    var contador = $('.cartao').length

    function adicionaCartao(conteudo, color) {

      contador++

      var buttonOpcoes = $('<button>').addClass('opcoesDoCartao-opcao')
                                      .addClass('opcoesDoCartao-remove')
                                      .attr('data-ref', contador)
                                      .text('Remover')
                                      .click(removeCartao)

      var divOpcoes = $('<div>').addClass('opcoesDoCartao')
                                .append(buttonOpcoes)

      var cartaoConteudo = $('<p>').addClass('cartao-conteudo')
                                   .append(conteudo)

      var tipoCartao = decideTipoCartao(conteudo)

      var cartao = $('<div>').attr('id', 'cartao_'+ contador)
                             .addClass('cartao')
                             .addClass(tipoCartao)
                             .append(divOpcoes)
                             .append(cartaoConteudo)
                             .prependTo('.mural')

    }

    function removeCartao(){

        var cartao = document.querySelector('#cartao_'+ this.dataset.ref);

        cartao.classList.add('cartao--some');

        setTimeout(function(){
            cartao.remove();
        }, 400)

    }

    return {
        adicionaCartao: adicionaCartao,
        removeCartao: removeCartao
    }

})();
