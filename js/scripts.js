// Change Icon Menu - Hamburguesa XS
$("#btn-main-menu-xs").click(function () {
  if ($("#mainMenuPsa").hasClass("show")){
    $('header').removeClass("collapse-show");
    // $('#icon-menu-drop').prop("src","images/icon-hamburguesa.webp")
    $('#icon-menu-drop').removeClass("icon-menu-mobile-close")
    $('#icon-menu-drop').addClass("icon-menu-mobile-default")

    $('#collapsePruebasMobile').collapse('hide')
    // $('#icon-drop-main-menu-xs').prop("src","images/icon-desplegar-xs.webp")
    $('#icon-drop-main-menu-xs').removeClass("icon-arrow-up")
    $('#icon-drop-main-menu-xs').addClass("icon-arrow-down")

    $('#collapse-xs-01').removeClass('active')
  }
  else{
    $('header').addClass("collapse-show");
    // $('#icon-menu-drop').prop("src","images/icon-close-menu-hamburguesa.webp")
    $('#icon-menu-drop').removeClass("icon-menu-mobile-default")
    $('#icon-menu-drop').addClass("icon-menu-mobile-close")

    // $('#icon-drop-main-menu-xs').removeClass("icon-arrow-up")
    // $('#icon-drop-main-menu-xs').addClass("icon-arrow-down")
  }
});

// Cambiar fondo del header en interaccion de reescalado
$(window).resize(function() {
  if (($(window).width() > 991)){
    $('header').removeClass("collapse-show")
  }
  else if (($(window).width() < 991) && $("#mainMenuPsa").hasClass("show")){
    $('header').addClass("collapse-show")
  } 
  else {
    $('header').removeClass("collapse-show")
  }
})

$(document).on("click",function(e) {
                    
  let container = $("#nav-contacto-agil");
                     
    if (!container.is(e.target) && container.has(e.target).length === 0) { 

      $("#navbarMenuAgilMobile").collapse('hide')
      $("#btn_nav_fixed_xs").removeClass('d-none')
      
      $('#img_flecha_fixed').removeClass("icon-slider-anterior-desplegable-abajo");
      $('#img_flecha_fixed').addClass("icon-slider-anterior-desplegable-arriba");

      $("#backdrop-menu-agil").remove();
      $("#nav-contacto-agil").css('z-index','800')
    }
});

// Cambiar icono menu fixed
$("#btn_nav_fixed_xs, .icon-close-agil-xs").on('click', function() {
  $("#btn_nav_fixed_xs").toggleClass('d-none')

  if ($("#navbarMenuAgilMobile").hasClass("show")){
    $("#backdrop-menu-agil").remove();
  }else{
    $('<div id="backdrop-menu-agil" class="modal-backdrop"></div>').appendTo(document.body);

    $("#nav-contacto-agil").css('z-index','1200')
    $("#backdrop-menu-agil").css('z-index','1100')
  }
});


// Change Icon Arrow dropdown menu XS
$("#collapse-xs-01").click(function () {
  if ($("#collapsePruebasMobile").hasClass("show")){
    $('#icon-drop-main-menu-xs').removeClass("icon-arrow-up")
    $('#icon-drop-main-menu-xs').addClass("icon-arrow-down")
    // $('#icon-drop-main-menu-xs').prop("src","images/icon-desplegar-xs.webp")
    $('#collapse-xs-01').removeClass('active')
  }
  else{
    $('#icon-drop-main-menu-xs').removeClass("icon-arrow-down")
    $('#icon-drop-main-menu-xs').addClass("icon-arrow-up")
    // $('#icon-drop-main-menu-xs').prop("src","images/icon-contraer-xs.webp")
    $('#collapse-xs-01').addClass('active')
  }
});

// Change Icon Arrow dropdown fixed web
$("#collapse-fixed-01").click(function () {
  if ($("#collapsePruebasWebFixed").hasClass("show")){
    // $('#icon-drop-main-menu-fixed').prop("src","images/icon-desplegar.webp")
    $('#icon-drop-main-menu-fixed').removeClass("icon-arrow-up")
    $('#icon-drop-main-menu-fixed').addClass("icon-arrow-down")
    $('#collapse-fixed-01').removeClass('active')
  }
  else{
    // $('#icon-drop-main-menu-fixed').prop("src","images/icon-contraer.webp")
    $('#icon-drop-main-menu-fixed').removeClass("icon-arrow-down")
    $('#icon-drop-main-menu-fixed').addClass("icon-arrow-up")
    $('#collapse-fixed-01').addClass('active')
  }
});


// OPEN CLOSE - COLLAPSE MENU WEB
$('#collapse-fixed-01').mouseover(function(){
  $('#collapsePruebasWebFixed').collapse('show')
  // $('#icon-drop-main-menu-fixed').prop("src","images/icon-contraer.webp")
  $('#icon-drop-main-menu-fixed').removeClass("icon-arrow-down")
  $('#icon-drop-main-menu-fixed').addClass("icon-arrow-up")
  $('#collapse-fixed-01').addClass('active')
})
$('#offset-nav-interactions').mouseleave(function(){
  $('#collapsePruebasWebFixed').collapse('hide')
  // $('#icon-drop-main-menu-fixed').prop("src","images/icon-desplegar.webp")
  $('#icon-drop-main-menu-fixed').removeClass("icon-arrow-up")
  $('#icon-drop-main-menu-fixed').addClass("icon-arrow-down")
  $('#collapse-fixed-01').removeClass('active')
})
$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 0){
      $('#collapsePruebasWebFixed').collapse('hide')
      // $('#icon-drop-main-menu-fixed').prop("src","images/icon-desplegar.webp")
      $('#icon-drop-main-menu-fixed').removeClass("icon-arrow-up")
      $('#icon-drop-main-menu-fixed').addClass("icon-arrow-down")
      $('#collapse-fixed-01').removeClass('active')
    } 
  })
})


// OPEN CLOSE - COLLAPSE FIXED CONTACTO AGIL 
$("#btn-contacto-agil-web").click(function () {
  $('#btn-contacto-agil-web').addClass('d-none')
});
// OPEN CLOSE - COLLAPSE FIXED CONTACTO AGIL 
$("#close-collapse-contacto-agil-web").click(function () {
  $('#btn-contacto-agil-web').removeClass('d-none')
});


//BARRA DE CARGA SCROLL
window.onscroll = function() { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 105;
  document.getElementById("progress-bar-xs").style.width = scrolled + "%";
}

