(function(){

    'use strict'

    $('#ajuda').on('click', function(){

          $.getJSON('https://ceep.herokuapp.com/cartoes/instrucoes',
                    function(ajudas){
                        console.log(ajudas);
                        ajudas.instrucoes.reverse().forEach(function(instrucao){

                              ControllerCartao.adicionaCartao(instrucao.conteudo, instrucao.color);

                        });
                    }
          );
    });

})()
