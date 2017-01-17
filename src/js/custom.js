




//RECUPERAR DATOS PRODUCTOS DE CLIENTE
//var rut = $('#rut').val();

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
/*var datosTrans = "12113333-7,1005,20000";
var datosQr;
function qrDecoder(){
  datosTrans = datosTrans.split(',');
  datosQr = '{"desde": {"cuenta": 1006 }, "hacia": {"cuenta": '+ datosTrans[1]+',"rut": "'+datosTrans[0]+'"},"monto": '+datosTrans[2]+'}';
  
  $.ajax({
   url: 'https://api.us.apiconnect.ibmcloud.com/hackaton-2016-produccion-master/api/transferencias',
   type: 'POST',
   headers: {
    "rut" : "11114444-9"
  },
  body: {datosQr}
});

}
*/
/*function capturarDatos(){
  var cuentaStart = $("#cuentaStart").text();
  var cuentaFin = $("#cuentaFin").text();
  var rutFin = $("#rutFin").text();
  var montoTransf = $("#montoTransf").text();

  datosQr = '{"desde": {"cuenta": '+cuentaStart+' }, "hacia": {"cuenta": '+ cuentaFin+',"rut": "'+rutFin+'"},"monto": '+montoTransf+'}';
  console.log(datosQr);
  transferir(datosQr);
}


function transferir(datosQr){
    $.ajax({
   url: 'https://api.us.apiconnect.ibmcloud.com/hackaton-2016-produccion-master/api/transferencias',
   type: 'POST',
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
}*/

function ajaxCartola(){
  var cuenta = '1006';
  $.ajax({
   url: 'https://api.us.apiconnect.ibmcloud.com/hackaton-2016-produccion-master/api/movimientos_cuenta/'+ cuenta,
   type: 'GET',
   datatype: 'json',
   headers: {
    "rut" : "11114444-9"
  }
})
  .done(function(response) {
    console.log(response);
    dt = response;
    var responseStringCartola = JSON.stringify(response);
    sessionStorage.setItem('cartola', responseStringCartola);
    $('#descripcion').text(response["0"].descripcion);
    $('#fecha').text(response["0"].fecha);
    $('#cargo').text(response["0"].cargo);
    $('#abono').text(response["0"].abono);
    $('#descripcion1').text(response["1"].descripcion);
    $('#fecha1').text(response["1"].fecha);
    $('#cargo1').text(response["1"].cargo);
    $('#abono1').text(response["1"].abono);
    $('#descripcion2').text(response["2"].descripcion);
    $('#fecha2').text(response["2"].fecha);
    $('#cargo2').text(response["2"].cargo);
    $('#abono2').text(response["2"].abono);
    $('#descripcion3').text(response["3"].descripcion);
    $('#fecha3').text(response["3"].fecha);
    $('#cargo3').text(response["3"].cargo);
    $('#abono3').text(response["3"].abono);

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
ajaxCartola();
capturarDatos();
