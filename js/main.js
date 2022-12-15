// aquí va el código

//Campo producto - Name
// Campo cantidad - Number
//Botón agregar btnAgregar
// alertValidacionesTexto
//alertValidaciones
//contadorProductos
//productosTotal
//precioTotal

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let total = document.getElementById("precioTotal");
let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let contadorProductos = document.getElementById("contadorProductos");
let productosTotal = document.getElementById("productosTotal");
let precioTotal = document.getElementById("precioTotal");
let contador=0;
let totalEnProductos=0;
let costoTotal=0;
let precio=0;
let cantidad =0;
let idTimeout;
let btnAgregar = document.getElementById("btnAgregar");

//Genera un precio al azar
     function getPrecio(){
          return Math.floor(Math.random() * 50 *100) / 100;
     }//getPrecio

     function validarNombre(){
          return (txtNombre.value.length>=2)?true:false;
     }//validarNombre

     function validarCantidad(){
          if(txtNumber.value.length==0) {
               return false;
          }// if
          if (isNaN(txtNumber.value)){
              return false;
          }//if
          if (parseFloat(txtNumber.value)<=0) {
              return false;
          }//if
          return true;
     }//validarCantidad

btnAgregar.addEventListener ("click", function(event){
     event.preventDefault();
     clearTimeout(idTimeout);
     alertValidacionesTexto.innerHTML="";
    if ( (! validarNombre()) || (! validarCantidad() ) ){
          let lista ="Los campos deben ser llenados correctamente.<ul>";
          if (! validarNombre()) {
               txtNombre.style.border = "red thin solid";
               lista += "<li>Se debe esribir un nombre válido</li>";
          }//if validarNombre
          if (! validarCantidad()) {
               txtNumber.style.border = "red thin solid";
               lista += "<li>Se debe esribir una cantidad válida</li>";
          }//if validarCantidad
          lista +="</ul>";
          alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
          alertValidaciones.style.display="block";
          idTimeout = setTimeout (function (){
               alertValidaciones.style.display="none";
          }, 5000);
          return false;      
    }// if ! validaciones
    txtNombre.style.border ="";
    txtNumber.style.border ="";
    alertValidaciones.style.display="none";
    contador++;
    contadorProductos.innerHTML= contador;
    cantidad = parseFloat(txtNumber.value); 
    totalEnProductos += cantidad;
    productosTotal.innerHTML=totalEnProductos;
    precio = getPrecio();
    costoTotal += precio * cantidad;
    precioTotal.innerHTML ="$ "+ costoTotal.toFixed(2);

    let row = `<tr>
          <td> ${contador} </td>
          <td> ${txtNombre.value} </td>
          <td> ${txtNumber.value} </td>
          <td> ${precio}</td>
    </tr>`;
    cuerpoTabla[0].insertAdjacentHTML("beforeend", row);
     txtNombre.value="";    
     txtNumber.value="";
    txtNombre.focus();
});