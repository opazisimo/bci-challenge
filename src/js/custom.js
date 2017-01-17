




//RECUPERAR DATOS PRODUCTOS DE CLIENTE
var rut = $('#rut').val();

function ajaxProductos(){
  $.ajax({
   url: 'https://api.us.apiconnect.ibmcloud.com/hackaton-2016-produccion-master/api/cliente/perfil',
   type: 'GET',
   datatype: 'json',
   headers: {
    "rut" : "11114444-9"
  }
})
  .done(function(response) {
    console.log(response);
    var responseString = JSON.stringify(response);
    sessionStorage.setItem('perfil', responseString);
    $('#nombre').text(response.nombre.toUpperCase());
    $('#cantidad').text(response.saldo_total_cuentas);

   //console.log(response);
 })
  .fail(function() {
   console.log("error");
 });  
}

$('#btn-login').click(function(event) {
  console.log("Entro");
  $("#elementos").empty();
});

ajaxProductos();
