function consultarHoroscopo() {
  // Recibimos la fecha como un string en formato "AAAA-MM-DD"
  var nacimiento = document.getElementById("fechaNac").value;
  /* Requerimos los datos referentes a MM y DD, por lo que es necesario dividir la cadena para obtener estos datos, el método split tiene la siguiente sintaxis:
        stringObject.split('separator', limit)
    donde el separador es el simbolo o caracter que se usara para dividir el string y el limite es la cantidad de divisiones, nos regresa un array del mismo tamaño que el limite
    */
  var fechaNacimiento = nacimiento.split("-", 3);
  /* Recordar que al programar, se empieza a contar desde el 0, por lo que el dato correspondiente al mes esta en la posicion 1 del array*/
  var mesNacimiento = parseInt(fechaNacimiento[1]);
  var diaNacimiento = parseInt(fechaNacimiento[2]);
  // console.log(fechaNacimiento);
  // console.log(mesNacimiento);
  // console.log(diaNacimiento);

  /*********La logica sigue intacta**********/
  var valor = mesNacimiento * 100 + diaNacimiento;
  // console.log(valor)
  var name = '';
  var description = '';
  if ((valor < 1223 && valor > 1231) || (valor >= 101 && valor <= 119)) {
    name = "capricornio";
    description = "Los Capricornios son personas muy leales";
    componentesImagen(name, description);
  } else if (valor > 120 && valor < 218) {
    name = "acuario";
    description = "Los acuarios son personas muy mentirosas";
    componentesImagen(name, description);
  } else if (valor > 219 && valor < 320) {
    name = "piscis";
    description = "Los piscis son personas muy flojas";
    componentesImagen(name, description);
  } else if (valor > 321 && valor < 419) {
    name = "aries";
    description = "Los aries son personas muy creativos";
    componentesImagen(name, description);
  } else if (valor > 420 && valor < 520) {
    name = "tauro";
    description = "Los tauro son personas muy inteligentes";
    componentesImagen(name, description);
  } else if (valor > 521 && valor < 620) {
    name = "geminis";
    description = "Los géminis son personas muy malhumorados";
    componentesImagen(name, description);
  } else if (valor > 621 && valor < 722) {
    name = "cancer";
    description = "Los cáncer son personas muy talentosas";
    componentesImagen(name, description);
  } else if (valor > 723 && valor < 822) {
    name = "leo";
    description = "Los leo son personas muy confiables";
    componentesImagen(name, description);
  } else if (valor > 823 && valor < 922) {
    name = "virgo";
    description = "Los virgo son personas muy analíticas";
    componentesImagen(name, description);
  } else if (valor > 923 && valor < 1022) {
    name = "libra";
    description = "Los libra son personas muy balanceadas y que entrenan a Shiru en las cascadas";
    componentesImagen(name, description);
  } else if (valor > 1023 && valor < 1121) {
    name = "escorpio";
    description = "Los escorpianos son personas muy irritantes";
    componentesImagen(name, description);
  } else if (valor > 1122 && valor < 1221) {
    name = "sagitario";
    description = "Los sagitarios son personas muy nobles";
    componentesImagen(name, description); 
  }
}
function checarCompatibilidad(){
    var signo1 = document.getElementById("selectorZodiacal").value;
    var signo2 = document.getElementById("zodiacalCompatible").value;
    switch (signo1){
        case "capricornio":
            if(signo2 == "cancer" || signo2 == "tauro" || signo2 == "Virgo"){
                goodResult();
            }else{
                badResult();
            }
        case "acuario":
            if(signo2 == "aires" || signo2 == "geminis" || signo2 == "leo" || signo2 == "libra"){
                goodResult();
            }else{
                badResult
            }
        case "piscis":
            if(signo2 == "aries" || signo2 == "tauro" || signo2 == "cancer" || signo2 == "virgo" || signo2 == "escorpio" || signo2 == "piscis"){
                goodResult();
            }else{
                badResult();
            }
        case "aries":
            if(signo2 == "geminis" || signo2 == "leo" || signo2 == "libra" || signo2 == "sagitario" || signo2 == "acuario" || signo2 == "piscis"){
                goodResult();
            }else{
                badResult();
            }
        case "tauro":
            if(signo2 == "tauro" || signo2 == "cancer" || signo2 == "Virgo" || signo2 == "escorpio" || signo2 == "capricornio" || signo2 == "piscis"){
                goodResult();
            }else{
                badResult();
            }
        case "geminis" :
            if(signo2 == "aries" || signo2 == "geminis" || signo2 == "libra" || signo2 == "sagitario" || signo2 == "acuario"){
                goodResult()
            }else{
                badResult()
            }
        case "cancer" :
            if(signo2 == "cancer" || signo2 == "tauro" || signo2 == "escorpio" || signo2 == "capricornio" || signo2 == "piscis"){
                goodResult();
            }else{
                badResult();
            }
        case "leo" :
            if(signo2 == "aries" || signo2 == "libra" || signo2 == "sagitario" || signo2 == "acuario"){
                goodResult();
            }else{
                badResult();
            }
        case "virgo" :
            if(signo2 == "capricornio" || signo2 == "tauro" || signo2 == "piscis"){
                goodResult();
            }else{
                badResult();
            }
        case "libra" :
            if(signo2 == "aries" || signo2 == "geminis" || signo2 == "leo" || signo2 == "libra" || signo2 == "acuario" ){
                goodResult();
            }else{
                badResult();
            }
        case "escorpio" :
            if(signo2 == "tauro" || signo2 == "cancer" || signo2 == "escorpio" || signo2 == "piscis"){
                goodResult();
            }else{
                badResult();
            }
        case "sagitario" :
            if(signo2 == "aries" || signo2 == "geminis" || signo2 == "leo"){
                goodResult();
            }else{
                badResult();
            }
        default:
            console.log("Sorry!")
    }
}
function componentesImagen(signo, descripcion){
    icono.src = `img/zodiaco/${signo}.jpg`;
    nombreSigno.innerHTML = signo.toUpperCase();
    descripcionSigno.innerHTML = descripcion;
}
function goodResult(){
    resultado.innerHTML ="¡Fantástico!";
    descriptionResult.innerHTML = "¡Son altamente compatibles!";
}
function badResult(){
    resultado.innerHTML ="¡Oh no!";
    descriptionResult.innerHTML = "¡Esto no funcionará!";
}