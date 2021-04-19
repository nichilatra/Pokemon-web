//Conectar el boton de enviar y la caja de ingresar datos
var texto = document.getElementById("nombre");
var boton = document.getElementById("botoncito");
var bandera = true
boton.addEventListener("click", enviarPorClick);

//La funcion se activa cuando se opime el boton
function enviarPorClick() {
  let listado_pokemones = httpGet()
  //Cerebro de la app la cual nos compara el nombre ingresado por el usuario y el que tiene la pagina que trajimos.
  for (var contador = 0; contador < 100; contador++) {
    if (texto.value == listado_pokemones[contador].name) {
      //Cerebro que trae la posicion de la imagen y le suma 1 para el momento de mostrar la imagen sea la correcta.
      var numero_de_la_imagen_actualizada = 1 + contador
      let url_imagenes = "https://pokeres.bastionbot.org/images/pokemon/";
      let numero_imagen = numero_de_la_imagen_actualizada + ".png"
      let resultado = url_imagenes + numero_imagen
      //Conecta html con javascript
      var guardar_url = document.getElementById("traer_url");
      var cargar_imagen = document.createElement("img");
      cargar_imagen.src = resultado
      cargar_imagen.id = "imagen"

      if (bandera) {
        guardar_url.appendChild(cargar_imagen);
        bandera = false

      } else {
        var imagenAntigua = document.getElementById("imagen");
        imagenAntigua.src = resultado
      }
      break;
    }
  }
}
//Funcion que trae la web de los pokemones
function httpGet() {
  var url = "https://pokeapi.co/api/v2/pokemon?limit=100"
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, false);
  xmlHttp.send(null);
  resultado_peticion = JSON.parse(xmlHttp.responseText);
  informacion_que_necesito = resultado_peticion.results
  return informacion_que_necesito
}