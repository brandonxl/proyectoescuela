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
//usuarios json

var usuarios_destacados = [
    {id: 1, nombres: 'Alex', Nacionalidad: 'Mexicano', Puntos: 325},
    {nombres: 'Maria', Nacionalidad: 'Peruano', Puntos: 225},
    {nombres: 'Jorge', Nacionalidad: 'Colombiano', Puntos: 175},
    {nombres: 'Karen', Nacionalidad: 'Argentino', Puntos: 150},
    {nombres: 'Antony', Nacionalidad: 'Mexicano', Puntos: 115},
    {nombres: 'Paco', Nacionalidad: 'Mexicano', Puntos: 325},
    {nombres: 'Rebeca', Nacionalidad: 'Peruano', Puntos: 225},
    {nombres: 'Fernando', Nacionalidad: 'Colombiano', Puntos: 175},
    {nombres: 'Karen', Nacionalidad: 'Argentino', Puntos: 150},
    {nombres: 'Ruben', Nacionalidad: 'Mexicano', Puntos: 115}
];

var nombres_usuarios = usuarios_destacados.map(function(user){
 return user.nombres
});
var lista = $("#myList");
var newList = document.createElement("li");
newList.append(nombres_usuarios)
lista.append(newList);

//json
var tabla = $("#listado_usuarios tbody");
function cargarUsuarios(){
    fetch('tabla.json')
    .then(respuesta => respuesta.json() )
    .then(respuesta =>{
        tabla.forEach(usuario =>{
            const row = document.createElement('tr');
            row.innerHTML += `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.puntos}</td>
            <td>${usuario.nacionalidad}</td>
            `;
            tabla.append(row);
        })
    })
}


});

