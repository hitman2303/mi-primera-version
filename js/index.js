console.log ("soy un javascript");
//Esto es comentario de una linea
/* Comentario multilinea*/
// dos palabras reservadas para crear variables
// var: forma antigua de declarar variables, te permitia generar dos elementos con el mismo nombre
//let es la forma moderna de declarar varibales
let nombre; //declarar una variable
let numero;
let apellido;
let edad;
let mascota = true; //booleanos
//inicializar una variable no pasa nada si no ponemos ;
nombre ="texto"; //string
apellido = "texto2";
edad = 56
console.log (nombre);

//saber el tipo de una variable 
console.log(typeof nombre);

let nombreCompleto = nombre + "" + apellido;
let nombreEdad= "el nombre es " + nombreCompleto + " y la edad es"+ edad;
console.log(nombreCompleto);
console.log (nombreEdad);

//constantes
const PI = 3.1416;
console.log (PI);


let compras = "leche"
if (compras === "leche"){
    console.log ("compra leches");
} else{
    console.log ("no compres nada");
}

let huevos = "huevos"
let cantidad = 5
if (huevos === "huevos" && cantidad >= 5) {
    console.log ("hay mas de 5 huevos");
} else { 
    console.log ("menos de 5 huevos");
}
/* DIAGRAMA DE FLUJO
INICIO/FIN: se representa con un ovalo
ACCION/PROCESO: representado por un rectangulo, indica una operacion o tarea a realizar
DECISION: usado para mostrar una decision de un proceso (si o no), se usa un rombo
FLECHAS:  indican la direccion por la que fluye el proceso
    DIFERENCIAS VAR Y LET
    Var: podemos declarar la misma variable dos veces. Cuando usamos var estamos creando una variable global o una variable local si esta en una funcion
    Let: no podemos declarar la variable dos veces.  Cuando usamos let estamos limitando su uso al bloque donde se define

variable = parseInt(variable) pasa de string a numeros
console.log (typeof variable ) Muestra que tipo de variable es 
Nan= not a number (no es un numero pero es un numero)
variable = parseFloat (variable) pasa a un numero flotante
//-- Number() A diferencia de los dos métodos anteriores, éste y el siguiente (conversión implícita) son  //específicamente para //conversión de tipos. En cambio, parseInt() y parseFloat() son para extraer un número de un string.
        //--Number() es un constructor para crear objetos de tipo Number, pero cuando se utiliza sin el new funciona como //--un conversor a tipo númerico.


        //--como constructor: 
        // var myNumber = new Number(14);
        // console.log(myNumber);

        //--como método: 
        var myNumber =  Number(true);
         
        console.log(myNumber);

        /*Puede utilizarse para números enteros o decimales y acepta también la notación exponencial.

            Number("12"); // 12
            Number("3.14"); // 3.14
            Number("314e-2"); // 3.14
            Number("0.0314E+2"); // 3.14
            Number("e-2"); // NaN
            Number('0x10'); // 16 admite el prefijo 0x para indicar 'hexadecimal'
            Number(" 12 "); // 12
            Number("20 dias"); // NaN
            Number("Hace 20 dias"); // NaN
            Number("44aa33bb"); // NaN
            Number(""); // 0 -> ¡¡el string vacio se convierte a 0!!
            Number(" "); // 0
            Number(null); // 0
            Con Number() podemos convertir booleans en números, false siempre se convierte en 0 y true en 1.
            Number(true); // 1
            Number(false); // 0
            //--también podemos incluir una expresión con resultado boolean
            Number( (1<2) ); // 1
            Number( (1===2) ); // 0 */

          //  var myNumberValue = +"8"; // number 8
           // console.log(myNumberValue); 

            
            // CONVERSION IMPLICITA 
            /* Conversión implicita '+'

             

            La conversión implícita es una forma de conversión rápida a número. Podemos utilizar cualquier operación que fuerce al intérprete a realizar una conversión implícita de tipos pero que no varíe el operando:

            var myNumberValue = "8" - 0; // number 8
            var myNumberValue = "8" * 1; // number 8
            var myNumberValue = "8" / 1; // number 8
            var myNumberValue = +"8"; // number 8
            La forma más utilizada por su simplicidad es +var. El operador unitario + no cambia el valor de var pero lo convierte a número. No confundir con ++var que sí cambia el valor, sumándole uno.   */
            
            /* Como veremos en los siguientes ejemplos, esta forma de conversión es equivalente a Number() y devuelve los mismos resultados:
            +"12"; // 12
            +"3.14"; // 3.14
            +"314e-2"; // 3.14
            +"0.0314E+2"; // 3.14
            +"e-2"; // NaN
            +"0x10"; // 16 admite el prefijo 0x para indicar 'hexadecimal'
            +" 12 "; // 12
            +"20 dias"; // NaN
            +"Hace 20 dias"; // NaN
            +"44aa33bb"; // NaN
            +""; // 0 -> ¡¡el string vacio se convierte a 0!!
            +" "; // 0
            +null; // 0

            //boolean
            +true; // 1
            +false; // 0
            //también podemos incluir una expresión con resultado boolean
            +(1<2); // 1
            +(1===2); // 0*/

            

            //--------------------RESUMEN DE CONVERSIONES----------------------------------
            /*
            parseInt() tiene un parámetro extra para indicar la base del número (radix).
            parseFloat() no admite radix. Todos los números se consideran en base decimal.
            parseInt(), Number() y '+' interpretan el prefijo '0x' como número hexadecimal, parseFloat() no.
            parseInt() y parseFloat() pueden extraer un número al principio de un string.
            Si el string contiene caracteres no numéricos, Number() y '+' no lo convierten, devuelven NaN.
            Cuando el argumento es un objeto, parseInt() y parseFloat() llamarán al método .toString() antes de analizar la cadena. Number() y +var llamarán primero a .valueOf() y despues a .toString() si es necesario.

            parseInt() no entiende la notación exponencial, todos los demás si.
            parseInt() y parseFloat() convierten el string vacio en NaN.
            Number() y '+' convierten el string vacio en 0.
            parseInt() y parseFloat() de un boolean es NaN.
            Number() y '+' de un boolean devuelven 0 para false y 1 para true.*/


        //----------------clase 17  OPERADORES-BUCLES-CONDICIONALES- ------------ 2 JS--------------------------
        // --------------------------OPERACIONES-----------------

        // --suma y resta de dos numeros 
        // var suma = 7 + 12 ;
        // console.log(suma);
        // var resta = 15 - 5 ; 
        // console.log(resta);
        // resta = 5 - 15 ; // puedo actualizar el valor de una variable 
        // console.log(resta);

        //--multiplicacion de dos numeros
        // var producto = 5 * 3 ; 
        // console.log(producto);
        // producto = 9 * 0 ;
        // console.log(producto);

        //--division de dos numeros 
        // var cociente = 10 / 5 ;
        // console.log(cociente);
        // cociente = 17 / 31 ;

        //--la computadora puede guardar un numero finito de resultados, 
        // --el resultado sera una aproximacion 
        // console.log(cociente); 

        //-- vamos a dividir por 0 
         //cociente = 10 / 0 ;
        //console.log(cociente); // devolvera infinity 

        //-- tambien podemos crear numeros decimales(float)
        // var miNumeroDecimal = 23.4 ; 
        // console.log(miNumeroDecimal);
        //-- las operaciones con los numeros decimales son iguales que con los numeros enteros

        //-- como saber si un numero es par o inpar
        //-- nos da el resto entre 10/2, donde el cociente es 5, pero el resto sera 0
        //-- de esta forma si dividimos los numeros por dos y el resto es 0 sabemos que el numero es par 
         //var resto = 5 % 2 ;
         //console.log(resto);  //-- como incrementar el valor de una variable 
        //var frutasCompradas = 10;
        //var naranjas = 0;
        //naranjas++;

        //-- opcion 1 , el lado derecho se evalua primero y luego se realiza la asignacion
        //-- es decir que primero se suma 1 a 10 y luego se pisa el valor en la misma variable
        //frutasCompradas = frutasCompradas + 1 ; 
        //console.log(frutasCompradas);
        //-- opcion 2, suma uno a la variable actual de forma mas resumida 
        //frutasCompradas++;
        //console.log(frutasCompradas);

        //-- reducir el valor de una variable 
        //frutasCompradas--;
        //console.log(frutasCompradas);

        //-- como incrementar en otro valor que no sea 1 
        //var y = 20 ;
        //y = y + 5 ;
        //console.log(y);
        // opcion 2, esto suma en la asignacion 5 
        // y += 5; 
        //console.log(y);
        //-- lo mismo si quiero reducir en un numero que no sea 1 
        //var  restar = 3 ; 

        //var z = 20 ;
        //z = z - restar ;
        //console.log(z);

        //z -= restar;
        //console.log(z);

        //-- asignacion compuesta pero de multiplicaciones 

        //var e = 23 ;
        //e = e * 2 ;
        //console.log(e);

        //e *= 2 ;


        // console.log(e);
        // asingnacion compuesta de division 

        //e /= 2;
        //console.log(e);

        //------------ Clase 18 OPERADORES CONDICIONALES----------------------------

        /*Sirven para realizar expresiones condicionales todo lo complejas que deseemos. Estas expresiones se utilizan para tomar decisiones en función de la comparación de varios elementos, por ejemplo si un numero es mayor que otro o si son iguales.
        Los operadores condicionales se utilizan en las expresiones condicionales para tomas de decisiones.
        Seguidamente podemos ver la tabla de operadores condicionales.
        == Comprueba si dos valores son iguales
        5 == 6 / false 
        != Comprueba si dos valores son distintos
        5 != 6 / true 
        > Mayor que, devuelve true si el primer operando es mayor que el segundo
        6 > 5 / true 
        < Menor que, es true cuando el elemento de la izquierda es menor que el de la derecha

        5 < 6 / verdadero true

        >= Mayor igual

        6 <= 6 / true 

        6 <= 7 / true 
        <= Menor igual

        var numeroSeis = 6;
        var numero = "6";

        numeroSeis == numero / true 

        numeroSeis === numero / false 


        ===
        !==
        Los operadores de estricta igualdad (=== y !==) usan el Algoritmo Estricto Comparativo de Igualdad  para comparar dos operandos:

        -Si los operandos son de diferente tipo de valor, produce false.
        -Si ambos operandos son objetos, produce true solo si se refiere al mismo objeto.
        -Si ambos operandos son de tipo null o ambos operandos son undefined, produce true.
        -Si cualquier operando es de tipo NaN, produce false.
        -En otros casos, compara los valores de ambos operandos:
        --Los números deben tener el mismo valor numérico, aunque +0 y -0 son considerados como del mismo valor.
        --Los strings deben tener los mismos caracteres en el mismo orden.
        --Los booleanos deben ambos ser true o ambos ser false.
        --La diferencia más notable entre este operador y el operador de igualdad regular (==) es que si los operandos    son de distinto tipo de valor, el operador == intenta convertir los valores a un mismo tipo de dato antes de   compararlos.*/


        //---------OPERADORES LOGICOS-----------------------------
        /*Estos operadores sirven para realizar operaciones lógicas, que son aquellas que dan como resultado un verdadero o un falso, y se utilizan para tomar decisiones en nuestros scripts. En vez de trabajar con números, para realizar este tipo de operaciones se utilizan operandos boleanos, que conocimos anteriormente, que son el verdadero (true) y el falso (false). Los operadores lógicos relacionan los operandos boleanos para dar como resultado otro operando boleano.
        Los operadores lógicos de JavaScript son: 

        NOT (!),

        !(5 < 6)  = false 

        AND (&&) 

        (5 < 6) && ( 6 > 5)  / verdadero si los dos son verdaderos


        OR (||). 

        (5 < 6) || ( 5===6)  / true 
        El operador NOT produce falso si su operando es verdadero, y viceversa. 
        El operador AND produce verdadero sólo si ambos operandos son verdaderos; si cualquiera de los operando es falso, produce falso.
        El operador OR produce verdadero si cualquiera de los operandos es verdadero, y falso en caso de que los dos operandos sean falsos. */
        /*
        console.log(4>2);
        console.log(2>4);
        console.log(4>2 && 5>1)
        console.log(4>2 && 1>3)
        console.log(4>2 || 3>1)
        console.log(4>2 || 3<1)
        console.log(! (4>2) )

        console.log(!(1>3))*/

        //var x = 3;
        //var y = 3 ; 

        //var respuesta ="";
        // CONDICIONALES 
        /*

        if ( ( (x==2) && (y!=3) ) )

        {
        
        respuesta ="se cumple" ;
        console.log(respuesta);
        //SI la variable x vale 2 y la variable y es distinta de tres

        }*/



        // ----------TYPEOF--------------------------
        /*Para comprobar el tipo de un dato se puede utilizar el operador typeof, que devuelve una cadena de texto que describe el tipo del operador que estamos comprobando.*/
       // var boleano = true ;
       //var numerico = 6;
       // var numerico_flotante = 6.0;
       // var texto = "mi texto";
       // var fecha = new Date(); 
        /*
        document.write("<br>El tipo de boleano es: " + typeof(boleano))
        document.write("<br>El tipo de numerico es: " + typeof(numerico))
        document.write("<br>El tipo de numerico_flotante es: " + typeof(numerico_flotante))
        document.write("<br>El tipo de texto es: " + typeof(texto))
        document.write("<br>El tipo de fecha es: " + typeof(fecha))

        document.write("<br>El valor de fecha es: " + fecha)
        */
        //-- COMPROBACION DE DATO INDEFINIDO
        /*--Si el tipo de una variable es undefined, puede utilizarse para obtener la respuesta sobre si la variable ha sido inicializada o no. */

        /*
        var vari;
        console.log(vari);

        var variable; 

        if ( (typeof(vari) == 'undefined' ) )
        {
        document.write("<br>La variable vale undefined, no tiene valor definido ");
        console.log('La variable vale undefined, no tiene valor definido');

        }

        */

        // alert ( "Hola Mundo JavaScript" )
       // var texto = 'Hola mundo JavaScript DESDE UNA VARIABLE';
        // alert (texto);

        //var numero = 10;
        // alert (numero);

        //var concateno = 50;
        // alert('Se esta concatenando una variable ' + concateno);

        /*Prompt

        Al igual que la función alert, la función prompt es también un método del objeto Window. Esta función se utiliza cuando el usuario ingresa datos por medio del teclado. Con esta función aparece una ventana en la pantalla, con un espacio para el valor que se debe ingresar y un botón aceptar para que la información sea guardada. */
        /*
        alert("esto es una alerta");
        var nombre = prompt ('Ingrese su nombre');
        document.write("<br>" + nombre );

        var rosa = "rosa";
        var verde ="verde"; 

        */
        //CONDICIONALES ---------------------IF 
        /*IF es una estructura de control utilizada para tomar decisiones. Es un condicional que sirve para realizar unas u otras operaciones en función de una expresión y primero se evalúa una expresión, si da resultado positivo se realizan las acciones relacionadas con el caso positivo.
        La sintaxis de la estructura IF es la siguiente.
        if (expresión) 
        {
        //acciones a realizar en caso positivo
        }
        Opcionalmente se pueden indicar acciones a realizar en caso de que la evaluación de la sentencia devuelva resultados negativos.

        if (expresión) 
        {
        //acciones a realizar en caso positivo
        } else {
        //acciones a realizar en caso negativo
        }
        */

        //   var edad = parseInt(prompt("Ingrese su Edad"));

        //   document.write("<br>" + edad);
        //var edad ; 
        /*
        if (edad >= 18){
        //  document.write("es mayor de 18");
        }else{
        // document.write("no es mayor de 18");
        }*/

        //-------- Operador IF
        //-- Un ejemplo de uso del operador IF se puede ver a continuación.
        //--var Variable = (condición) ? valor1 : valor2

        //var variable = 7;
        // var resultado = (variable > 8) ? "si" : "no" ; 
        // console.log(resultado);

       // condition?true:false;
        //var numero=1;
        //var resultado = numero === 1? "Sí soy un uno":"No, no soy uno";
        
        // juego de piedra papel o tijera
        // generar variable valorElegido
        // generar variable valorMaquina, con piedra papel o tijera inicializado
        //var valorElegido;
        //var valorMaquina = "piedra";
       // valorElegido = ....... ;
        // generar variable resultado
        // pedir mediante prompt que el usuario ingrese piedra, papel o tijera y guardar en valorElegido
        // hacer una logica de validacion de las variables valorElegido contra valorMaquina
        // si la variable seleccionada es igual a la variable del usuario, entonces empate, 
        // si la variable del usuario es piedra y la del programa es tijera, gana usuario
        // si la variable del usuario es papel y la del programa es piedra, gana usuario
        // si la variable del usuario es tijera y la del programa es papel, gana usuario
        // si la variable del usuario es tijera y la del programa es piedra, gana programa
        // si la variable del usuario es piedra y la del programa es papel, gana programa
        // si la variable del usuario es papel y la del programa es tijera, gana programa

        
        /*
        // switch 
       
        /*
        if (dia_de_la_semana==="LUNES") {
             document.write("Es Lunes")
        }
        if (dia_de_la_semana==="MARTES") {
             document.write("Es Martes")
        } *
        var dia_de_la_semana = "LUNES";
        var diaString ="LUNES";

        switch (diaString) {

        case "Lunes":
        document.write("Es Lunes")
        break

        case "Martes":
        document.write("Es Martes")
        break

        case "Miercoles":
        document.write("Es Miércoles")
        break
        
        case "Jueves":
        document.write("Es Jueves")
        break

        case "Viernes":
        document.write("Es viernes")
        break

        case "Sabado":
        case "Domingo":
        document.write("Es fin de semana")
        break
        
        default:
        document.write("Ese día no existe")

        } 

            var numero=30;
            switch (numero){
            case 1:
            console. log("Soy uno!");
            break;
            case 10:
            console. log("Soy un 10!");
            break;
            case 100:
            console. log("Soy un 100!");
            break;
            default:
            console. log("No soy nada");
            }
        */

        //----------BLUCLE FOR-----------------------------------
        /*El bucle FOR se utiliza para repetir una o más instrucciones un determinado número de veces. De entre todos los bucles, el FOR se suele utilizar cuando sabemos seguro el número de veces que queremos que se ejecute. La sintaxis del bucle for se muestra a continuación.

        for (inicialización; condición; actualización) {

        //sentencias a ejecutar en cada iteración

        }*/


        /*

        var i;

        for (i=0;i<=10;i++) {

        document.write(i)

        document.write("<br>")

        } */
        /*
        for (let iteracion=0; iteracion<=10; iteracion+=2){
            document.write(iteracion);

            document.write("<br>");
        } */

        /*
        //-- Para ir de dos en dos 
        for (i=1;i<=1000;i+=2)
        document.write(i)

        //--de forma descendente
        //-- Si queremos contar descendentemente del 200 al 10 utilizaríamos este bucle.
        for (i=200;i>=10;i--)
            document.write(i)


        */
        //---------------------- Bucles WHILE y DO WHILE--------------------------------------

        /* while ----Estos bucles se utilizan cuando queremos repetir la ejecución de unas sentencias un número indefinido de veces, siempre que se cumpla una condición.
        while (condición){

        //sentencias a ejecutar

        }*/

        //--- EJEMPLO

        /*
        var color = "";

        while (color != "rojo"){

        color = prompt("dame un color (escribe rojo para salir)")

        } 
        */

        /* while (contador < 10) {
        
        // document.write(contador);  
        //  document.write("<br>");
        

        //  contador = contador + 1; 
        contador++;
        }*/

        //  document.write("salio del while");



        /* 
        Bucle DO...WHILE

        El bucle do...while es la última de las estructuras para implementar repeticiones de las que dispone en Javascript y es una variación del bucle while visto anteriormente. Se utiliza generalmente cuando no sabemos cuantas veces se habrá de ejecutar el bucle, igual que el bucle WHILE, con la diferencia de que sabemos seguro que el bucle por lo menos se ejecutará una vez.

        do {

        //sentencias del bucle

        } while (condición)

        // El bucle se ejecuta siempre una vez y al final se evalúa la condición para decir si se ejecuta otra vez el bucle o se termina su ejecución. */

        // ejemplo -- no es necesario inicializar, pide un color primero, y luego lo hace si es diferente de rojo

        /*
        var color = "rojo"; 

        do{

        color = prompt("dame un color (escribe rojo para salir)");

        } while (color != "rojo");*/

        /*
        let contador = 11;
        do{
        document.write(contador);
        document.write("<br>");
        contador--;
        }while(contador > 0);*/

        // ejemplos
        /*En este ejemplo vamos a declarar una variable e inicializarla a 0. Luego iremos sumando a esa variable un número aleatorio del 1 al 100 hasta que sumemos 1.000 o más, imprimiendo el valor de la variable suma después de cada operación. Será necesario utilizar el bucle WHILE porque no sabemos exactamente el número de iteraciones que tendremos que realizar (dependerá de los valores aleatorios que se vayan obteniendo).*/
  
        /*var suma = 0

        while (suma < 1000){

        suma += parseInt(Math.random() * 100)

        document.write (suma + "<br>")

        }*/