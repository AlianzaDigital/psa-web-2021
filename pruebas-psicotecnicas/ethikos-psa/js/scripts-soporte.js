// ICONO BTN MENU
$( '#btn-menu-nav-xs' ).click(function() {
  // $('#hover-btn-contacto-02').addClass('active')
  if(!$("#btn-menu-nav-xs").hasClass('active')) {
    $('#btn-menu-nav-xs').addClass('active')
    $('#img-menu-btn-xs').prop('src',"images/ico-contraer-nav-xs.webp")
  } else{
    $('#btn-menu-nav-xs').removeClass('active')
    $('#img-menu-btn-xs').prop('src',"images/ico-desplegar-nav-xs.webp")
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
    $('#img-ico-drop').prop('src',"images/ico-cerrar-nav-xs.webp")
  } else{
    $('#navbarDropdown').removeClass('active')
    $('#img-ico-drop').prop('src',"images/ico-ir-nav-xs.webp")
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


$( '#headingOne' ).click(function() {
  if(!$("#click-btn-soporte-01").hasClass('active')) {
    $('#click-btn-soporte-01').addClass('active')
    $('#ico-transicion-02, #ico-transicion-03').attr('src','images/icono_desplegar_soporte.webp')
    $('#ico-transicion-01').attr('src','images/icono_contraer_soporte.webp')
  } else{
    $('#click-btn-soporte-01, #click-btn-soporte-02, #click-btn-soporte-03').removeClass('active')
    $('#ico-transicion-02, #ico-transicion-03').attr('src','images/icono_desplegar_soporte.webp')
    $('#ico-transicion-01').attr('src','images/icono_desplegar_soporte.webp')
  }
})

$( '#headingTwo' ).click(function() {
  if(!$("#click-btn-soporte-02").hasClass('active')) {
    $('#click-btn-soporte-02').addClass('active')
    $('#ico-transicion-01, #ico-transicion-03').attr('src','images/icono_desplegar_soporte.webp')
    $('#ico-transicion-02').attr('src','images/icono_contraer_soporte.webp')
  } else{
    $('#click-btn-soporte-01, #click-btn-soporte-02, #click-btn-soporte-03').removeClass('active')
    $('#ico-transicion-01, #ico-transicion-03').attr('src','images/icono_desplegar_soporte.webp')
    $('#ico-transicion-02').attr('src','images/icono_desplegar_soporte.webp')
  }
})


$( '#headingThree' ).click(function() {
  if(!$("#click-btn-soporte-03").hasClass('active')) {
    $('#click-btn-soporte-03').addClass('active')
    $('#ico-transicion-01, #ico-transicion-02').attr('src','images/icono_desplegar_soporte.webp')
    $('#ico-transicion-03').attr('src','images/icono_contraer_soporte.webp')
  } else{
    $('#click-btn-soporte-01, #click-btn-soporte-02, #click-btn-soporte-03').removeClass('active')
    $('#ico-transicion-01, #ico-transicion-02').attr('src','images/icono_desplegar_soporte.webp')
    $('#ico-transicion-03').attr('src','images/icono_desplegar_soporte.webp')
  }
})




