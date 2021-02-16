//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos1 = 0.2 // 20%

var propiedad1 = 0.35 // 35%
var salario1 = 0.05 // 5%

//Recargo
var recargo = 0
var recargo_total = 0
var recargo_total2 = 0
var recargo_total_e = 0
var recargo_total_c = 0
var recargo_total_h = 0 
var recargo_cotizacion = 0
var recargo_salario = 0
//Precio final 
var precio_final = 0
var precio_final_total = 0


//Mensajes de alerta para ingresar datos 



// inicio del while 

var codigo 

while (codigo != "salir"){
  codigo = prompt("Ingrese salir, para no hacer mas cotizaciones")
  
  
  
  
  if ( codigo != "salir"){
  
  
  
   
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
var edad_numero = parseInt(edad)

if (edad_numero >= 18) 
  

  
var casado = prompt("¿Está casado actualmente?","si/no")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
//convirtiendo las edades ingresadas a números 

var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}


var hijos = prompt("¿Tiene hijos o hijas?","si/no")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt("¿Cuantos hijos tiene?")
}

var cantidad_hijos_numero = 0
if("SI"== hijos.toUpperCase()){
  cantidad_hijos_numero = parseInt(cantidad_hijos)
}





//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final


//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if (edad_numero>= 18 && edad_numero<=24){
  recargo = precio_base * edad_18
  recargo_total_e = recargo_total_e + recargo
} else if (edad_numero >= 25 && edad_numero <= 49){
  recargo = precio_base * edad_25
  recargo_total_e = recargo_total_e + recargo
} else if (edad_numero >= 50){
  recargo = precio_base * edad_50
  recargo_total_e = recargo_total_e + recargo
}

/** 
 * 2. Recargo por la edad del conyuge
 */

if (edad_conyuge_numero >= 18 && edad_conyuge_numero <= 24){
  recargo = precio_base * casado_18
  recargo_total_c = recargo_total_c + recargo
} else if (edad_conyuge_numero >= 25 && edad_conyuge_numero <=49){
  recargo = precio_base * casado_25
  recargo_total_c = recargo_total_c + recargo
} else if (edad_conyuge_numero >= 50){
  recargo = precio_base * casado_50
  recargo_total_c = recargo_total_c + recargo
}


/**
 * 3. Recargo por la cantidad de hijos 
 */ 

if ( cantidad_hijos_numero >= 1){
  recargo = precio_base * hijos1 * cantidad_hijos_numero
  recargo_total_h = recargo_total_h + recargo
}


recargo_total= recargo_total_e + recargo_total_c + recargo_total_h 
  
precio_final = precio_base + recargo_total



var propiedad = prompt("¿Tienes propiedades?","si/no")

var propiedad_cantidad
if("SI"== propiedad.toUpperCase()){
propiedad_cantidad = prompt("¿Cuantas propiedades tiene?")
}
var propiedad_cantidad_numero = 0
if("SI"== propiedad.toUpperCase()){
propiedad_cantidad_numero = parseInt(propiedad_cantidad)
}

if ( propiedad_cantidad_numero >= 1){
recargo = precio_final * propiedad1 * propiedad_cantidad_numero
recargo_cotizacion = recargo_cotizacion + recargo
}


var salario = prompt("¿Recibe un salario?","si/no")

var salario_cantidad

if ("SI" == salario.toUpperCase()){
salario_cantidad = prompt("¿cual es su salario?")
}

var salario_cantidad_numero

if ("SI" == salario.toUpperCase()){
salario_cantidad_numero = parseInt(salario_cantidad)
}

if (salario_cantidad_numero >= 1){
recargo = salario_cantidad_numero * salario1
recargo_salario = recargo_salario + recargo
}



recargo_total2 = recargo_total + recargo_cotizacion + recargo_salario

Precio_final_total = precio_final_total + precio_base + recargo_total + recargo_cotizacion + recargo_salario

//Resultado
alert ("Para el asegurado "+nombre)
alert ("Recargo por salario: "+recargo_salario)
alert ("Recargo por propiedad: "+recargo_cotizacion)
alert ("El recargo total sera de: " + recargo_total2)
alert ("El precio sera de: "+precio_final_total)

// else que finaliza el while

  }else{
    alert("codigo correcto")
  }
}
