//FORMULARIO PC
$(document).ready(function(){
  $("#btn_paso_01").click(function(){
    $("#contactForm").submit();
  });
});

$("#aceptar_terminos_popUp").on("click", function() {
  if ($("#checkbox").is(':checked')){
      $('.bd-example-modal-lg.condiciones-modal').modal('hide');
  }
  else{
      $('.bd-example-modal-lg.condiciones-modal').modal('hide');
      $("#checkbox").prop("checked", true);
  }
});

$( '#hover-btn-contacto-02' ).click(function() {
  // $('#hover-btn-contacto-02').addClass('active')
  if(!$("#hover-btn-contacto-02").hasClass('active')) {
    $('#hover-btn-contacto-02').addClass('active')
  } else{
    $('#hover-btn-contacto-02').removeClass('active')
  }
})

$('#telephone').on('input', function () { 
  this.value = this.value.replace(/[^0-9]/g,'');
});

$('#telephone-line').on('input', function () { 
  this.value = this.value.replace(/[^0-9]/g,'');
});

//FORMULARIO DE CONTACTO - ENVIAR DESDE FORMULARIO CONTACTO PC
$("#contactForm").validator().on("submit", function (event) {
  var valido_form_01 = 0;
  var valido_select_01 = 0;
  // var valido_select_02 = 0;

  if (event.isDefaultPrevented("Complete este campo")) {
      // handle the invalid form...
      submitMSG(false, "Complete los campos que faltan.");
  } else {
      event.preventDefault();
      submitMSG(true, "");
      valido_form_01 = 1;
  }

  //Opcion de proceso_seleccion
  if (!$('#proceso_seleccion').val() ){
      submitMSG_proceso_seleccion(false, "Seleccione una opción.");
      //console.log(valido_select_01);
  }
  else {
      event.preventDefault();
      submitMSG_proceso_seleccion(true, "");
      valido_select_01 = 1;
      //console.log(valido_select_01);
  }

  // //Opcion de colaboradores
  // if (!$('#numero_colaboradores').val() ){
  //     submitMSG_colaboradores(false, "Seleccione una opción.");
  // }
  // else {
  //     event.preventDefault();
  //     submitMSG_colaboradores(true, "");
  //     valido_select_02 = 1;
  // }

  if ((valido_form_01)&&(valido_select_01) === 1) {
      event.preventDefault();
      submitMSG(true, "");
      $("#btn_paso_01").attr('data-target','#sliderFormWeb');
  }
  else {
      submitMSG(false, "Complete los campos que faltan");
  }
});



function submitMSG(valid, msg){
  if(valid){
      var msgClasses = "h4 text-center ";
  } else {
      var msgClasses = "h4 text-center ";
  }
  $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_proceso_seleccion(valid, msg){
  if(valid){
      var msgClasses = "h4 text-center ";
  } else {
      var msgClasses = "h4 text-center ";
  }
  $("#msgSubmit_proceso_seleccion").removeClass().addClass(msgClasses).text(msg);
}

// function submitMSG_colaboradores(valid, msg){
//   if(valid){
//       var msgClasses = "h4 text-center ";
//   } else {
//       var msgClasses = "h4 text-center ";
//   }
//   $("#msgSubmit_colaboradores").removeClass().addClass(msgClasses).text(msg);
// }





//PASO 02
$("#contactForm_02").validator().on("submit", function (event) {
  var valido_form_02 = 0;
  var valido_select_03 = 0;
  var valido_check = 0;

  if (event.isDefaultPrevented("Complete este campo")) {
      // handle the invalid form...
      submitMSG_paso_02(false, "Complete los campos que faltan.");
  } else {
      event.preventDefault();
      valido_form_02 = 1;
  }

  //Opcion de funciones
  if (!$('#funciones').val() ){
      submitMSG_funciones(false, "Seleccione una opción.");
  }
  else {
      event.preventDefault();
      submitMSG_funciones(true, "");
      valido_select_03 = 1;
  }

  //Checkbox
  if ($("#checkbox").is(':checked') === false){
      submitMSG_condiciones(false, "Aún no acepta terminos y condiciones.");
  }else {
      event.preventDefault();
      submitMSG_condiciones(true, "");
      valido_check = 1;
  }

  if ((valido_form_02)&&(valido_select_03)&&(valido_check) === 1) {
    event.preventDefault();
    // submitMSG(true, "Estamos procesando sus datos...");
    $("#seccion-formulario").addClass("animacion-form");
      if($("#seccion-formulario").hasClass("animacion-form")) {
        setTimeout( function(){ 
          $("#seccion-formulario").addClass("d-none");
          $("#procesando-datos").removeClass("d-none");
          $("#procesando-datos").addClass("d-block suavizar-opacidad");
        }, 700);
      }
      else{
        $("#seccion-formulario").removeClass("animacion-form");
        $("#seccion-formulario").removeClass("d-none");
      }
    submitForm();
  }

  else {
      submitMSG_paso_02(false, "Complete los campos que faltan");
  }
});

function submitMSG_paso_02(valid, msg){
  if(valid){
      var msgClasses = "h4 text-center ";
  } else {
      var msgClasses = "h4 text-center ";
  }
  $("#msgSubmit_paso_02").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_funciones(valid, msg){
  if(valid){
      var msgClasses = "h4 text-center ";
  } else {
      var msgClasses = "h4 text-center ";
  }
  $("#msgSubmit_funciones").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones(valid, msg){
  if(valid){
      var msgClasses = "h4 text-center  tx_form_error";
  } else {
      var msgClasses = "h4 text-center  tx_form_error";
  }
  $("#msgSubmit_condiciones").removeClass().addClass(msgClasses).text(msg);
}

function formSuccess(){
  $("#contactForm_02")[0].reset();
  submitMSG_paso_02(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitForm(){
  // Initiate Variables With Form Content
  var empresa = $("#empresa").val();
  var nit = $("#nit").val();
  var proceso_seleccion = $('select[id=proceso_seleccion]').val();
  // var numero_colaboradores = ($('select[id=numero_colaboradores]').val());

  var first_name = $("#first_name").val();
  var funciones = $('select[id=funciones]').val();
  // var telephone = $("#telephone").val();
  var telephone = $("input[name=full_number]").val();
  var telephone_line = $("#telephone-line").val();
  var email = $("#email").val();

  $.ajax({
      type: "POST",
      url:  "php/process_formulario_potencial_comercial.php",
      data: "empresa=" + empresa +
            "&nit=" + nit +
            "&proceso_seleccion=" + proceso_seleccion +
            // "&numero_colaboradores=" + numero_colaboradores +
            "&first_name=" + first_name +
            "&funciones=" + funciones +
            "&telephone=" + telephone +
            "&telephone_line=" + telephone_line +
            "&email=" + email,

      success: function(text){
          if (text == "success"){
              formSuccess();
              window.location.href = "mensaje-enviado-potencial-comercial.html";
          } else {
              submitMSG_paso_02(false,text);
          }
      }
  });
}




