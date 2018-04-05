/*
#	FABRIZIO FEITOSA
#	fabriziofeitosa.me
#
# TUDO AQUI É NECESSÁRIO PARA O FUNCIONAMENTO
*/

jQuery(document).ready(function ($) {

  // Menu Lateral 
  $('.lateral .clickMenu').click(function(){
    $(this).parents('.lateral').toggleClass('aberto');
    $('.lateral .itemMenu').removeClass('subAberto');
  });
  $('.lateral .optSub .titulo').click(function () {
    $(this).parents('.itemMenu').toggleClass('subAberto');
  });

});