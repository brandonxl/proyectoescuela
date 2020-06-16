
//lOGIN FALSO


$(document).ready(function(){

$(".contenedor form").submit(function(){
    var form_name = $("#registro_name").val();

    localStorage.setItem("form_name", form_name);
});

var form_name = localStorage.getItem("form_name");


if(form_name != null && form_name!= "undefined"){
 
    var insertar = $("#usuario p");

    $("#usuario p").html("Bienvenido "+form_name);
    insertar.append("<br/><a href='#' id='logout'>Cerrar Sesion</a> ")
    $(".contenedor").hide();
    $(".formulario").hide();
    $("#posicion").hide();
   
   

    $("#logout").click(function(){
        localStorage.clear();
        location.reload();
    });
}



});

