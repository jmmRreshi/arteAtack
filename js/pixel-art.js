var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var colorGuardadoIndicador = document.getElementById("indicador-de-color");

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

//variables agregadas por mi 
var paletaColores = document.getElementById("paleta");


var nuevaGrillaPixeles = document.getElementById("grilla-pixeles");


var tamañoDeGrilla = 1749;


var movimientoMause = document.getElementById("paleta");


var estaApretadoElRaton = false;


//final de variables agregadas
colorPersonalizado.addEventListener('change', 
  function() {
    // Se guarda el color de la rueda en colorActual
        colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
        colorGuardadoIndicador.style.backgroundColor = colorActual;
  }
);


var llenarPaleta = function(){
  for (var i = 0; i < nombreColores.length; i++) {
    var nuevoDivDeColor = document.createElement("div");
    nuevoDivDeColor.classList.add("color-paleta");
    nuevoDivDeColor.style.backgroundColor = nombreColores[i];
    paleta.appendChild(nuevoDivDeColor);
  }
}


var llenarGrilla = function(){
    for (var i = 0; i < tamañoDeGrilla; i++) {
      var nuevoDivPixel = document.createElement("div");
      nuevaGrillaPixeles.appendChild(nuevoDivPixel);
   }
}


paletaColores.addEventListener("click", function(e){
  colorGuardadoIndicador.style.backgroundColor = e.target.style.backgroundColor;

});


/*movimientoMause.addEventListener("mausemove", function(e){
    e.target.style.backgroundColor = "paletaColores";
  });*/
nuevaGrillaPixeles.addEventListener("click",  function(e){
  e.target.style.backgroundColor = colorGuardadoIndicador.style.backgroundColor;
});


function apratoElRaton(){
estaApretadoElRaton = true;
console.log(estaApretadoElRaton);
}


function soltoElRaton(){
  estaApretadoElRaton = false;
  console.log(estaApretadoElRaton);
}

nuevaGrillaPixeles.addEventListener("mousedown", apratoElRaton);

nuevaGrillaPixeles.addEventListener("mouseup", soltoElRaton);

nuevaGrillaPixeles.addEventListener("mousemove", function(e){
if (estaApretadoElRaton){
  e.target.style.backgroundColor = colorGuardadoIndicador.style.backgroundColor;
}
});


var borrarGrilla = document.getElementById('borrar');

borrarGrilla.addEventListener("click", function(){
$(document).ready(function(){
  $("#grilla-pixeles").children().animate({"backgroundColor": "White"}, 1000);
  });
});


var cargarMujerMaravilla = document.getElementById('wonder');


cargarMujerMaravilla.addEventListener("click", function(){
  cargarSuperheroe(wonder);
  });

var cargarHombreRapido = document.getElementById("flash");


cargarHombreRapido.addEventListener("click", function(){
  cargarSuperheroe(flash);
});


var cargarMujerInvisible = document.getElementById("invisible");


cargarMujerInvisible.addEventListener("click", function(){
  cargarSuperheroe(invisible);
});


var cargarHombrePiola = document.getElementById("batman");


cargarHombrePiola.addEventListener("click", function(){
  cargarSuperheroe(batman);
});


var guardarMiArte = document.getElementById("guardar");

guardarMiArte.addEventListener("click", function(){
guardarPixelArt(guardar);
});

function iniciar(){
    llenarPaleta();
    llenarGrilla();
}
iniciar()
  