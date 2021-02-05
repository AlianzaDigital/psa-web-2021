//FORMULARIO PC
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



//AÑADIR CHECK VALIDO AL ABRIR POPUP
$("#aceptar_terminos_popUp_web").on("click", function() {

  if ($("#checkbox-web").is(':checked')){
      $('#modalTerminosCondiciones').modal('hide');
  }
  else{
      $('#modalTerminosCondiciones').modal('hide');
      $("#checkbox-web").prop("checked", true);
  }
});


// SELECT EVENTS COLLAPSE
$('.event-funciones').on('click', function(event){
  let dataClick = $(event.target).data('click');
  if (dataClick === 'Otra(s)'){
    $('#funciones-otros').removeClass('d-none')
    $('#funciones-otros').focus()

    $('#collapseSelectFunciones').collapse('hide')
    $('#funciones').attr('value', dataClick)

    $("#funciones").removeClass("error");
    $("#funciones").addClass("correcto");

    submitMSG_funciones(true, "");
  }
  else{
    $('#funciones-otros').addClass('d-none')

    $('#collapseSelectFunciones').collapse('hide')
    $('#funciones').attr('value', dataClick)

    $("#funciones").removeClass("error");
    $("#funciones").addClass("correcto");

    submitMSG_funciones(true, "");
  }
})

$('.event-uso-pruebas').on('click', function(event){
  let dataClick = $(event.target).data('click');
  if (dataClick === 'Otra(s)'){
    $('#proceso-seleccion-otra').removeClass('d-none')
    $('#proceso-seleccion-otra').focus()

    $('#collapseProcesoSeleccion').collapse('hide')
    $('#proceso-seleccion').attr('value', dataClick)

    $("#proceso-seleccion").removeClass("error");
    $("#proceso-seleccion").addClass("correcto");

    submitMSG_proceso_seleccion(true, "");
  }
  else{
    $('#proceso-seleccion-otra').addClass('d-none')

    $('#collapseProcesoSeleccion').collapse('hide')
    $('#proceso-seleccion').attr('value', dataClick)

    $("#proceso-seleccion").removeClass("error");
    $("#proceso-seleccion").addClass("correcto");

    submitMSG_proceso_seleccion(true, "");
  }
})

// GET URL UTM CAMPAINGS
$(document).ready(function(){
  let previousURL = document.referrer
  $('#previousURL').attr('value', previousURL)
  
    if (previousURL.includes('pauta-facebook-ads')) {
      $('#getPreviousURL').attr('value','pauta-facebook-ads')
    }
    else if (previousURL.includes('pauta-google-search')) {
      $('#getPreviousURL').attr('value','pauta-google-search')
    }
    else if (previousURL.includes('pauta-linkedin-ads')) {
      $('#getPreviousURL').attr('value','pauta-linkedin-ads')
    }
    else if (previousURL.includes('pauta-google-display')) {
      $('#getPreviousURL').attr('value','pauta-google-display')
    }
    else{
      $('#getPreviousURL').attr('value','seo-sitio-web')
    }
    
});



// VALIDATE ALL VARIABLES OF THE FORM
$('#nit').on('input', function () { 
  this.value = this.value.replace(/[^0-9-]/g,'');
});

$('#telephone').on('input', function () { 
  this.value = this.value.replace(/[^0-9]/g,'');
});

$('#telephone-line').on('input', function () { 
  this.value = this.value.replace(/[^0-9]/g,'');
});

// EMPRESA
$("#empresa").blur(function(){
  if ($("#empresa").val() === ""){
    $("#empresa").removeClass("correcto");
    $("#empresa").addClass("error");
  }
  else{
    $("#empresa").removeClass("error");
    $("#empresa").addClass("correcto");
  }
});
$("#empresa").keyup(function(){
  if ($("#empresa").val() === ""){
    $("#empresa").removeClass("correcto");
    $("#empresa").addClass("error");
  }
  else{
    $("#empresa").removeClass("error");
    $("#empresa").addClass("correcto");
  }
});

// NIT
$("#nit").blur(function(){
  if ($("#nit").val() === ""){
    $("#nit").removeClass("correcto");
    $("#nit").addClass("error");
  }
  else{
    $("#nit").removeClass("error");
    $("#nit").addClass("correcto");
  }
});
$("#nit").keyup(function(){
  if ($("#nit").val() === ""){
    $("#nit").removeClass("correcto");
    $("#nit").addClass("error");
  }
  else{
    $("#nit").removeClass("error");
    $("#nit").addClass("correcto");
  }
});

// FIRST NAME
$("#first-name").blur(function(){
  if ($("#first-name").val() === ""){
    $("#first-name").removeClass("correcto");
    $("#first-name").addClass("error");
  }
  else{
    $("#first-name").removeClass("error");
    $("#first-name").addClass("correcto");
  }
});
$("#first-name").keyup(function(){
  if ($("#first-name").val() === ""){
    $("#first-name").removeClass("correcto");
    $("#first-name").addClass("error");
  }
  else{
    $("#first-name").removeClass("error");
    $("#first-name").addClass("correcto");
  }
});

// TELEPHONE
$("#telephone").blur(function(){
  // if ($("#telephone").val() === ""){
  let valueTelephone = $("#telephone").val()
  if (valueTelephone.length < 10){
    $("#telephone").removeClass("correcto");
    $("#telephone").addClass("error");
    submitMSG_telephone(false, "Por favor, ingresa un número válido");
  }
  else{
    $("#telephone").removeClass("error");
    $("#telephone").addClass("correcto");
    submitMSG_telephone(false, "");
  }
});
$("#telephone").keyup(function(){
  // if ($("#telephone").val() === ""){
  let valueTelephone = $("#telephone").val()
  if (valueTelephone.length < 10){
    $("#telephone").removeClass("correcto");
    $("#telephone").addClass("error");
    submitMSG_telephone(false, "Por favor, ingresa un número válido");
  }
  else{
    $("#telephone").removeClass("error");
    $("#telephone").addClass("correcto");
    submitMSG_telephone(false, "");
  }
});
  

// TELEPHONE LINE - IF REQUIRED
// $("#telephone-line").blur(function(){
//   if ($("#telephone-line").val() === ""){
//     $("#telephone-line").removeClass("correcto");
//     $("#telephone-line").addClass("error");
//   }
//   else{
//     $("#telephone-line").removeClass("error");
//     $("#telephone-line").addClass("correcto");
//   }
// });
// $("#telephone-line").keyup(function(){
//   if ($("#telephone-line").val() === ""){
//     $("#telephone-line").removeClass("correcto");
//     $("#telephone-line").addClass("error");
//   }
//   else{
//     $("#telephone-line").removeClass("error");
//     $("#telephone-line").addClass("correcto");
//   }
// });

// EMAIL
$("#email").blur(function(){
  if ($("#email").val() === ""){
    $("#email").removeClass("correcto");
    $("#email").addClass("error");
  }
  else{
    $("#email").removeClass("error");
    $("#email").addClass("correcto");
  }
});

// FUNCIONES
$("#funciones").click(function(){
  if ($("#funciones").val() === ""){
    submitMSG_funciones(false, "Por favor, selecciona una opción");

    $("#funciones").removeClass("correcto");
    $("#funciones").addClass("error");
  }
  else{
    submitMSG_funciones(false, "");

    $("#funciones").removeClass("error");
    $("#funciones").addClass("correcto");
  }
});

// FUNCIONES OTROS
$("#funciones-otros").blur(function(){
  if ($("#funciones-otros").val() === ""){
    $("#funciones-otros").removeClass("correcto");
    $("#funciones-otros").addClass("error");
  }
  else{
    $("#funciones-otros").removeClass("error");
    $("#funciones-otros").addClass("correcto");
  }
});
$("#funciones-otros").keyup(function(){
  if ($("#funciones-otros").val() === ""){
    $("#funciones-otros").removeClass("correcto");
    $("#funciones-otros").addClass("error");
  }
  else{
    $("#funciones-otros").removeClass("error");
    $("#funciones-otros").addClass("correcto");
  }
});

// PROCESO SELECCION
$("#proceso-seleccion").click(function(){
  if ($("#proceso-seleccion").val() === ""){
    submitMSG_proceso_seleccion(false, "Por favor, selecciona una opción");

    $("#proceso-seleccion").removeClass("correcto");
    $("#proceso-seleccion").addClass("error");
  }
  else{
    submitMSG_proceso_seleccion(false, "");

    $("#proceso-seleccion").removeClass("error");
    $("#proceso-seleccion").addClass("correcto");
  }
});

// PROCESO SELECCION OTRA
$("#proceso-seleccion-otra").blur(function(){
  if ($("#proceso-seleccion-otra").val() === ""){
    $("#proceso-seleccion-otra").removeClass("correcto");
    $("#proceso-seleccion-otra").addClass("error");
  }
  else{
    $("#proceso-seleccion-otra").removeClass("error");
    $("#proceso-seleccion-otra").addClass("correcto");
  }
});
$("#proceso-seleccion-otra").keyup(function(){
  if ($("#proceso-seleccion-otra").val() === ""){
    $("#proceso-seleccion-otra").removeClass("correcto");
    $("#proceso-seleccion-otra").addClass("error");
  }
  else{
    $("#proceso-seleccion-otra").removeClass("error");
    $("#proceso-seleccion-otra").addClass("correcto");
  }
});


//FORMULARIO DE CONTACTO - contactForm_psa
$("#contactForm").validator().on("submit", function (event) {
  let valido_form = 0;
  let valido_select_01 = 0;
  let valido_select_02 = 0;
  let valido_check = 0;

  //Var Telefono Nombre Correo Etc
  if (event.isDefaultPrevented("")) {
    // handle the invalid form...
    if ($("#empresa").val() === ""){
      $("#empresa").addClass("error");
    }
    if ($("#nit").val() === ""){
      $("#nit").addClass("error");
    }
    if ($("#first-name").val() === ""){
      $("#first-name").addClass("error");
    }
    if ($("#telephone").val() === ""){
      submitMSG_telephone(false, "Por favor, completa este campo");
      $("#telephone").addClass("error");
    }
    if ($("#email").val() === ""){
      $("#email").addClass("error");
    }
  }else {
    event.preventDefault();
    valido_form = 1;
  }

  //Opcion de tipo casa
  if ($('#funciones').val() === ''){
    submitMSG_funciones(false, "Por favor, selecciona una opción");
    $("#funciones").addClass("error");
  }else {
    event.preventDefault();
    submitMSG_funciones(true, "");
    valido_select_01 = 1;
  }

  if ($('#proceso-seleccion').val() === ''){
    submitMSG_proceso_seleccion(false, "Por favor, selecciona una opción");
    $("#proceso-seleccion").addClass("error");
  }else {
    event.preventDefault();
    submitMSG_proceso_seleccion(true, "");
    valido_select_02 = 1;
  }

  //Checkbox
  if ($("#checkbox-web").is(':checked') === false){
    submitMSG_condiciones(false, "No has aceptado los términos y condiciones");
  }else {
    event.preventDefault();
    submitMSG_condiciones(true, "");
    valido_check = 1;
  }

  //Validacion de que los campos estan completos
  if ((valido_form)&&(valido_select_01)&&(valido_select_02)&&(valido_check) === 1) {
    $("#form-submit").prop("disabled", true);

    $("#seccion-formulario").addClass("animacion-form");
    if($("#seccion-formulario").hasClass("animacion-form")) {
      setTimeout( function(){ 
        $("#seccion-formulario").addClass("d-none");
        $(window).scrollTop(0);
        $("#procesando-datos").removeClass("d-none");
        $("#procesando-datos").addClass("d-block suavizar-opacidad");
      }, 700);
    }
    else{
      $("#seccion-formulario").removeClass("animacion-form");
      $("#seccion-formulario").removeClass("d-none");
    }

    submitForm();
    submitMSG(true, "");
  }else {
    event.preventDefault();
    submitMSG(false, "Completa los campos que faltan");
  }
});

function submitForm(){
  // Initiate Variables With Form Content
  let empresa = $("#empresa").val();
  let nit = $("#nit").val();
  let firstName = $("#first-name").val();
  // var telephone = $("#telephone").val();
  let telephone = $("input[name=full_number]").val();
  let telephoneLine = $("#telephone-line").val();
  let email = $("#email").val();
  let funciones = $("#funciones").val();
  let funcionesOtras = $("#funciones-otros").val();
  let procesoSeleccion = $("#proceso-seleccion").val();
  let procesoSeleccionOtra = $("#proceso-seleccion-otra").val();

  let getPreviousURL = ($('#getPreviousURL').val());
  let previousURL = ($('#previousURL').val());

  $.ajax({
      type: "POST",
      url:  "php/process_formulario.php",
      data: "empresa=" + empresa +
            "&nit=" + nit +
            "&firstName=" + firstName +
            "&telephone=" + telephone +
            "&telephoneLine=" + telephoneLine +
            "&email=" + email +
            "&funciones=" + funciones +
            "&funcionesOtras=" + funcionesOtras +
            "&procesoSeleccion=" + procesoSeleccion +
            "&procesoSeleccionOtra=" + procesoSeleccionOtra +

            "&getPreviousURL=" + getPreviousURL +
            "&previousURL=" + previousURL,

      success: function(text){
          if (text == "success"){
              formSuccess();
              window.location.href = "mensaje-enviado-accion.html";
          } else {
              submitMSG(false,text);
          }
      }
  });
}

function formSuccess(){
  $("#contactForm")[0].reset();
  submitMSG(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG(valid, msg){
  if(valid){
    var msgClasses = "tx-msg-form center";
  } else {
    var msgClasses = "tx-msg-form center";
  }
  $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_telephone(valid, msg){
  if(valid){
    var msgClasses = "tx-msg-form";
  } else {
    var msgClasses = "tx-msg-form";
  }
  $("#msgSubmit_telephone").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_funciones(valid, msg){
  if(valid){
    var msgClasses = "tx-msg-form";
  } else {
    var msgClasses = "tx-msg-form";
  }
  $("#msgSubmit_funciones").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_proceso_seleccion(valid, msg){
  if(valid){
    var msgClasses = "tx-msg-form";
  } else {
    var msgClasses = "tx-msg-form";
  }
  $("#msgSubmit_proceso_seleccion").removeClass().addClass(msgClasses).text(msg);
}


function submitMSG_condiciones(valid, msg){
  if(valid){
      var msgClasses = "tx-msg-form";
  } else {
      var msgClasses = "tx-msg-form";
  }
  $("#msgSubmit_condiciones").removeClass().addClass(msgClasses).text(msg);
}
