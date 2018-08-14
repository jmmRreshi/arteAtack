$(document).ready(function {
$("h1").hide();
$("h1").fadeIn();
});
//por convencion se nombra a todas las variables con el $ (jQuery) al principio.
// ejemplo:
var $elemento = $("#encabezado");
var $elemento = $(".destacado");
//----
$(document).ready(function(){
  $("#encabezado").hide();
  $("#encabezado").fadeIn();
});

//para abreviar se usa de esta forma 
$(document).ready(function(){
  var $elemento = $("#encabezado");
  $elemento.hide();
  $elemento.fadeIn();
});
//-------//
//seleccionar elementos
$(document).ready(function(){
  var $elemento = $(".destacado");
  $elemento.hide();
  $elemento.fadeIn();
});
//-------los signos pesos se esan por convencion para indicar q estas usando la libreria jqueri//

//Selectores complejos jquery//
$(document).ready(function(){
  var $elemento = $("#botonera li.actual a");
  $elemento.hide();
  $elemento.fadeIn();
});
//----Aca podemos seleccionar cual tipo de elemento del css o html//

//No entendi//
$(document).ready(function(){
$(".link [data="valor"]");
});
//----//

//---Seleccion del padre---//esto no tiene mucho sentido pero sirve para seleccionar al padre de se elemento 
$(document).ready(function(){
  $("#principal").parent().slideUp();
});
-----------------------------
//para seleccionar al padre del padre, osea al acentro mas cercano que cumpla una caracteristica
$(document).ready(function(){
  $("li a").closest("ul").slideUp();
});
closest : va a buscar a buscar al acentro mas cercano del elemento que estamos seleccionando y que cumpla como selector. 
--------------------------

//para seleccionar a los hijos 
$(document).ready(function(){
  $("#botonera").children(".actual").slideUp();
});
---------------------------

//Elementos que permiten hacer aparecer o desaparecer elementos
$("#elemento1").fadeIn(1000);
fadeIn; permite hacer aparecer un elemento si esta previamente oculto

$("#elemento2").fadeOut(1000);
fadeOut; hace desaparecer el elemento, esto solo sucede si el elmento esta visible 

estos dos elementos pueden funcionar sin parametro, pero tambien podemos indicarles atraves de un parametro cuanto	
tipo queremos que desaparesca o aparesca. siempre es un numero y son mili segundos.

$("#elemento2").fadeToggle(1000);
fadeToggle: chequea si el elemento esta oculto y si lo esta lo hace aparecer, y tambien de lo contrario
si el elemento esta visible lo hace desaparecer

----------------

$("#elemento1").slideDown(1000);
slideDown: hace aparecer un elemento de modo animado de arriba hacia abajo
$("#elemento2").slideUp(1000);
slideUp: hace desaparecer un elemento de modo animado de abajo hacia arriba 
$("#elemento2").slideToggle(1000);
slideToggle:chequea si el elemento esta oculto y si lo esta lo hace aparecer, y tambien de lo contrario
si el elemento esta visible lo hace desaparecer

tambien estos elementos pueden recibir parametros 

----------
$("#elemento1").show();
show: nos permite mostrar intastaneamente un elemento
$("#elemento2").hide();
hide: nos permite ocultar un elemento al instante 
-------------

//DEFINICION DE ANIMACION
$("#elemento").animate({"opacity": "0.5", "margin-left": "10px", "height": "toggle"}, 1000);
define la animacion para esto le tenemos que pasar dos parametros, el primero son elementos de css
y el segundo el tiempo que debe aparecer 
//
//Sintaxis para desancadenar varias acciones a un mismo elemento
$("h1").hide().fadeIn();

----------------
//Eventos jquery

cuando queremos estar atentos a los click que haga el usuario hacemos lo siguiente 
$("h1").click(); dentro del click vamos a darle una funcion  ejemplo
$("h1").click( function(){
	$(this).fadeOut();----->this se refiere al elemento que fue clicleado. es una referencia del html
			le adosas una function.
});

---------
cuando el maus pasa por arriba de un elemento.
 la primera funcion vamos a definir que ocurre cuando entra el elemento.
 La segunda function. define que hace cuando sale del elemento 
$("h1").hover( function(){} , function(){} );

segundo ejemplo 
$("h1").hover( function(){
  $(this).animate({"opacity": "0.5"}, 500);
}, function(){
  $(this).animate({"opacity": "1"}, 500);
});
--------------

// para modificar contenidos del html atraves de jq le podemos indicar dos cosas un string nuevo. 

$("#botonera").html("<li>Nuevo item</li>");

el thml sin parametros nos devuelve el contenido del mismo
var contenido = $("h2").html();