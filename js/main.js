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
    $("#contenido-oculto").show();
//Cierre de sesion
    $("#logout").click(function(){
        localStorage.clear();
        location.reload();
    });
}
//Clanes
var teams = [
    {id: "1-", nombre: 'Los matematicos ',Pais: 'Argentina'},
    {id: "2-", nombre: 'Indestructibles ',Pais: 'Venezuela'},
    {id: "3-", nombre: 'Los Picazos ',Pais: 'Uruguay'},
    {id: '4-',nombre: 'Imparables ' ,Pais: 'Chile'},
    {id: '5-',nombre: 'Revolucionarios ', Pais: 'Mexico'},
    {id: '6-',nombre:'Los Parceros ', Pais: 'Colombia'}
];
$("#clanes").html(
    teams[0].id + teams[0].nombre + teams[0].Pais +"<hr/>"+
    teams[1].id +teams[1].nombre + teams[1].Pais +"<hr/>"+
    teams[2].id +teams[2].nombre + teams[2].Pais +"<hr/>"+
    teams[3].id +teams[3].nombre + teams[3].Pais +"<hr/>"+
    teams[4].id +teams[4].nombre + teams[4].Pais +"<hr/>"+
    teams[5].id +teams[5].nombre + teams[5].Pais +"<br/>" 
);
var users = [
    {id: "1-", nombre: 'Rebeca ',Pais: 'Argentina'},
    {id: "2-", nombre: 'Tony ',Pais: 'Mexico'},
    {id: "3-", nombre: 'Karen ',Pais: 'Chile'},
    {id: '4-',nombre: 'Emiliano ' ,Pais: 'Panama'},
    {id: '5-',nombre: 'Erika ', Pais: 'Bolivia'},
    {id: '6-',nombre:'Jorge ', Pais: 'Honduras'}
];
$("#users").html(
    users[0].id + users[0].nombre + teams[0].Pais +"<hr/>"+
    teams[1].id + users[1].nombre + teams[1].Pais +"<hr/>"+
    teams[2].id + users[2].nombre + teams[2].Pais +"<hr/>"+
    teams[3].id + users[3].nombre + teams[3].Pais +"<hr/>"+
    teams[4].id + users[4].nombre + teams[4].Pais +"<hr/>"+
    teams[5].id + users[5].nombre + teams[5].Pais +"<br/>" 
);
});

