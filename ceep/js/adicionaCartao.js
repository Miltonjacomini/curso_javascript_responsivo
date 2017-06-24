(function (){

  'use strict'

    var contador = $('.cartao').length

    $('#novoCartao').on('submit',  function (event){

          //interceptar o comportamento do evento chamado
          event.preventDefault()

          var campoTexto = $('.novoCartao-conteudo')
          var conteudo = campoTexto.val().trim().replace(/\n/g, '<br>')

          if(conteudo){

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

                campoTexto.val('')
          }
    })

    function decideTipoCartao(conteudo){

        debugger;
          var quebras = conteudo.split('<br>').length

          var totalDeLetras = conteudo.replace(/<br>/g, ' ').length

          var ultimoMaior = '';

          conteudo.replace(/<br>/g, ' ')
                  .split(' ')
                  .forEach(function (palavra){
                      if(palavra.length > ultimoMaior.length){
                          ultimoMaior = palavra
                      }
                  })

          var tamanhoMaior = ultimoMaior.length

          var tipoCartao = 'cartao--textoPequeno'

          if(tamanhoMaior < 9 && quebras < 5 && totalDeLetras < 55){
              tipoCartao = 'cartao--textoGrande'
          } else if(tamanhoMaior < 12 && quebras < 6 && totalDeLetras < 75){
              tipoCartao = 'cartao--textoMedio'
          }

          return tipoCartao
    }

})()
