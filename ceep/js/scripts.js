function mudaLayout(){

  var listaMural = document.querySelector(".mural").classList;

    if(listaMural.contains('mural-linha')){
        listaMural.remove("mural-linha")
    }else{
        listaMural.add("mural-linha")
    }

}

document.querySelector('input').addEventListener('click', mudaLayout)
