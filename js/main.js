$(document).ready(function(){
  var $alto = $(window).height();
  //var ancho = $(window).width();
  alert($alto);
  $('section.principal').css('height',$alto);
});
