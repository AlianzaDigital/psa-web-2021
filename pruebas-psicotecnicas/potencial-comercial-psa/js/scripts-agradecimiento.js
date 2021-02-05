// ICONO BTN MENU
$( '#btn-menu-nav-xs' ).click(function() {
  // $('#hover-btn-contacto-02').addClass('active')
  if(!$("#btn-menu-nav-xs").hasClass('active')) {
    $('#btn-menu-nav-xs').addClass('active')
    $('#img-menu-btn-xs').prop('src',"potencial-comercial/images/ico-contraer-nav-xs.webp")
  } else{
    $('#btn-menu-nav-xs').removeClass('active')
    $('#img-menu-btn-xs').prop('src',"potencial-comercial/images/ico-desplegar-nav-xs.webp")
  }
})

//BARRA DE CARGA SCROLL
// window.onscroll = function() { myFunction() };

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 110;
//   document.getElementById("progress-bar-xs").style.width = scrolled + "%";
// }

// DROPDOWN MENU MOVIL
$( '#navbarDropdown' ).click(function() {
  // $('#hover-btn-contacto-02').addClass('active')
  if(!$("#navbarDropdown").hasClass('active')) {
    $('#navbarDropdown').addClass('active')
    $('#img-ico-drop').prop('src',"potencial-comercial/images/ico-cerrar-nav-xs.webp")
  } else{
    $('#navbarDropdown').removeClass('active')
    $('#img-ico-drop').prop('src',"potencial-comercial/images/ico-ir-nav-xs.webp")
  }
})

// MODAL VARIACIONES SOPORTE CONTACTO
$('.bd-example-modal-lg.contacto-soporte-web').on('shown.bs.modal', function () {
  $('.modal-backdrop').removeClass('backdrop-reporte')
  $('.modal-backdrop').addClass('backdrop-contacto-soporte-web')
})

$( '#hover-btn-contacto-02' ).click(function() {
  // $('#hover-btn-contacto-02').addClass('active')
  if(!$("#hover-btn-contacto-02").hasClass('active')) {
    $('#hover-btn-contacto-02').addClass('active')
  } else{
    $('#hover-btn-contacto-02').removeClass('active')
  }
})

// PAUSAR VIDEOS DE YOUTUBE CUANDO SE CIERRA EL POPUP
function pauseVideo_01() { 
  var video = "video/PSICOALIANZA_SITP_Testimonial_evaluación_psicotécnica.mp4";
  $("#video-01").attr("src","");
  $("#video-01").attr("src",video);
}
function pauseVideo_02() { 
  var video = "video/Pruebas_Psicotécnicas_PsicoAlianza.mp4";
  $("#video-02").attr("src","");
  $("#video-02").attr("src",video);
}

