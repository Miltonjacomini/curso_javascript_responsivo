var contador = $('.cartao').length

function adicionaCartao(event){

      event.preventDefault();

      var campoTexto = $('.novoCartao-conteudo')
      var conteudo = campoTexto.val()

      if(conteudo.trim()){

            contador++

            var buttonOpcoes = $('<button>').addClass('opcoesDoCartao-opcao')
                                            .addClass('opcoesDoCartao-remove')
                                            .attr('data-ref', contador)
                                            .text('Remover')
                                            .click(removeCartao)

            var divOpcoes = $('<div>').addClass('opcoesDoCartao')
                                   .append(buttonOpcoes)

            var cartaoConteudo = $('<p>').addClass('cartao-conteudo')
                                        .text(conteudo.trim())

            var cartao = $('<div>').attr('id', 'cartao_'+ contador)
                                   .addClass('cartao')
                                   .append(divOpcoes)
                                   .append(cartaoConteudo)
                                   .prependTo('.mural')

            campoTexto.val('')
      }

}

$('#novoCartao').on('submit', adicionaCartao)
