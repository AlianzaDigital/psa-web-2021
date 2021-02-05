<?php

$errorMSG = "";

// URL DECODE ORIGIN
if (empty($_POST["getPreviousURL"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $getPreviousURL= $_POST["getPreviousURL"];
}

// URL
if (empty($_POST["previousURL"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $previousURL = $_POST["previousURL"];
}

// EMPRESA
if (empty($_POST["empresa"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $empresa = $_POST["empresa"];

}

// NIT
if (empty($_POST["nit"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $nit = $_POST["nit"];

}

// FIRST NAME
if (empty($_POST["firstName"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $firstName = $_POST["firstName"];
}

// TELEPHONE
if (empty($_POST["telephone"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $telephone = $_POST["telephone"];
}

// TELEPHONE LINE
$telephoneLine = $_POST["telephoneLine"];


// EMAIL
if (empty($_POST["email"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $email = $_POST["email"];
}

// FUNCIONES
if (empty($_POST["funciones"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $funciones = $_POST["funciones"];
}

// FUNCIONES OTROS
$funcionesOtras = $_POST["funcionesOtras"];

// PROCESO SELECCION
if (empty($_POST["procesoSeleccion"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $procesoSeleccion = $_POST["procesoSeleccion"];
}

// PROCESO SELECCION OTRA
$procesoSeleccionOtra = $_POST["procesoSeleccionOtra"];


/****************************** ENVIAR A CRM SALES UP ******************************/
$url = 'https://api.salesup.com/integraciones/P02APBC2557AB-840C-4D43-A33A-4E2BDEA84B2F';
$params = array(
    'empresa' => ($empresa), 
    'nombre' => ($firstName),
    'puesto' => ($funciones)." | ".($funcionesOtras),
    'movil' => ($telephone),
    'telefono' => ($telephoneLine),
    'correo' => ($email),
    'origen' => ($getPreviousURL),
    'comentarios' => ("Nuevo lead PSA 2020: Formulario Acción")." | ".("NIT: ".$nit)." | ".("Proceso Seleccion: ".$procesoSeleccion)." | ".("Otro(s) tipo(s) de prueba(s): ".$procesoSeleccionOtra)." | ".("Call UTM: ".$previousURL)
);


$request = curl_init();
curl_setopt($request, CURLOPT_URL, $url);
curl_setopt($request, CURLOPT_POST, 1);
curl_setopt($request, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($request, CURLOPT_POSTFIELDS, http_build_query($params));
curl_setopt($request, CURLOPT_CONNECTTIMEOUT, 60);
curl_setopt($request, CURLOPT_TIMEOUT, 60);

$result = curl_exec($request);

curl_close($request);
//print_r($result); 



/****************************** ENVIAR EMAIL ******************************/
//CONTACTOS Y ASUNTO
$Contacts = array('soluciones@grupo-alianza.com');
$Subject = "Nuevo lead PSA 2020: Formulario Acción";

// CUERPO DE TEXTO MENSAJE
$Body = "";

$Body .= utf8_decode("Empresa: ");
$Body .= utf8_decode($empresa);
$Body .= "\n";

$Body .= utf8_decode("NIT: ");
$Body .= utf8_decode($nit);
$Body .= "\n";

$Body .= utf8_decode("Nombre y Apellido: ");
$Body .= utf8_decode($firstName);
$Body .= "\n";

$Body .= utf8_decode("Celular: ");
$Body .= utf8_decode($telephone);
$Body .= "\n";

$Body .= utf8_decode("Telefono Fijo: ");
$Body .= utf8_decode($telephoneLine);
$Body .= "\n";

$Body .= utf8_decode("Correo eletrónico: ");
$Body .= utf8_decode($email);
$Body .= "\n";

$Body .= utf8_decode("Descripción de funciones: ");
$Body .= utf8_decode($funciones);
$Body .= "\n";

$Body .= utf8_decode("Otra(s) funcion(es): ");
$Body .= utf8_decode($funcionesOtras);
$Body .= "\n";

$Body .= utf8_decode("Proceso Selección: ");
$Body .= utf8_decode($procesoSeleccion);
$Body .= "\n";

$Body .= utf8_decode("Otro(s) tipo(s) de prueba(s): ");
$Body .= utf8_decode($procesoSeleccionOtra);
$Body .= "\n";


// send email
foreach ($Contacts as $Contact){
    $to =  $Contact;
    $success = mail($to, $Subject, $Body, "From:".$email);
}

// redirect to success page
if ($success && $errorMSG == ""){
    echo "success";
}
else{
    if($errorMSG == ""){
        echo "Algo salío mal :(";
    }
    else {
        echo $errorMSG;
    }
}

?>
