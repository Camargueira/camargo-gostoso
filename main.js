function tocaSom (seletorAudio) {
   document.querySelector(seletorAudio);
   const elemento = document.querySelector(seletorAudio);


   if(elemento != null && elemento.localName === 'audio') {
     elemento.play();
   }

 else{
   console.log('elemento não encontrado ou seletor inválido');

  }

}

const listaDeTeclas = document.querySelectorAll('.tecla');
@@ -15,15 +26,16 @@ for (let contador = 0; contador < listaDeTeclas.length; contador++) {
       tocaSom(idAudio);
   }

   listaDeTeclas.onkeydown = function (evento)  {

   tecla.onkeydown = function(evento){

    if (evento.code === 'Space' ||evento.code === 'Enter') {
       tecla.classList.add('ativa');
    }

       if (evento.code === 'Space' ||evento.code === 'Space') {
           tecla.classList.add('ativa');
       }

   }

   }

   tecla.onkeyup = function() {
       tecla.classList.remove('ativa');
   }
