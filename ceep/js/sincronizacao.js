var sync = (function(){

    'use strict'

      var usuario = "miltonjacomini@gmail.com";

      (function getCartoesByUsuario(){

          $.getJSON("https://ceep.herokuapp.com/cartoes/carregar?callback=?",
                    {usuario: usuario},
                    function(res){

                        var cartoes = res.cartoes;
                        cartoes.reverse().forEach(function(cartao){
                            ControllerCartao.adicionaCartao(cartao.conteudo);
                        })
                    }
          )
      })()

      $('#sync').on('click', function(){

            $(document).trigger('precisaSincronizar');

      });

      $(document).on('precisaSincronizar', function(){

        $('#sync').removeClass('botaoSync--sincronizado');
        $('#sync').addClass('botaoSync--esperando');

        var cartoes = [];

        $('.cartao').each(function(){
            var cartao = {};
            cartao.conteudo = $(this).find('.cartao-conteudo').text();
            cartoes.push(cartao);
        });

        var mural = {
              usuario : "miltonjacomini@gmail.com",
              cartoes : cartoes
        }

        $.ajax({
            url: "https://ceep.herokuapp.com/cartoes/salvar",
            method: "POST",
            data: mural,
            success: function(data){
                $('#sync').addClass('botaoSync--sincronizado');
            },
            error: function(){
                $('#sync').addClass('botaoSync--deuRuim');
            },complete: function(){
              $('#sync').removeClass('botaoSync--esperando');
            }
        });

      });

})();
