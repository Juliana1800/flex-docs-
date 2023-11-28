function mov () {
}  window.addEventListener('scroll', function() {
    var elemento = document.querySelector('#conteudo1');
    var posicaoDoElemento = elemento.getBoundingClientRect().top;
    var alturaDaJanela = window.innerHeight;

    // Adiciona a classe .animar quando o elemento estiver visível na janela
    if (posicaoDoElemento - alturaDaJanela <= 0) {
      elemento.classList.add('conteudo1');
    } else {
      elemento.classList.remove('conteudo1');
    }
  });

// JQuery
// $(window).scroll(function() {
//     $('.conteudo1').addClass('slidein');
//  });