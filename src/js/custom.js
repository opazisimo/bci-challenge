




//RECUPERAR DATOS PRODUCTOS DE CLIENTE
var rut = $('#rut').val();

var ajaxProductos = function(productos){
  $.ajax({
   url: 'https://api.us.apiconnect.ibmcloud.com/hackaton-2016-produccion-master/api/cliente/cuentas',
   type: 'GET',
   datatype: 'json',
   headers: {
    "rut" : "11114444-9"
  }
})
  .done(function(response) {
   console.log(response);
 })
  .fail(function() {
   console.log("error");
 });  
}

$('#btn-login').click(function(event) {
  console.log("Entro");
  $("#elementos").empty();
  ajaxProductos(productos);
});