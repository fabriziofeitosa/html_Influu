/*
#	FABRIZIO FEITOSA
#	fabriziofeitosa.me
#
# TUDO AQUI É NECESSÁRIO PARA O FUNCIONAMENTO
*/

jQuery(document).ready(function ($) {

  // Menu Lateral 
  $('header .lateral .clickMenu').click(function(){
    $(this).parents('.lateral').toggleClass('aberto');
    $('header .lateral .itemMenu').removeClass('subAberto');
  });
  $('header .lateral .optSub .titulo').click(function () {
    var state = $(this).parents('.itemMenu').hasClass('subAberto');
    $('.itemMenu').removeClass('subAberto');
    if( state ) $(this).parents('.itemMenu').removeClass('subAberto');
    else $(this).parents('.itemMenu').addClass('subAberto');
  });

});