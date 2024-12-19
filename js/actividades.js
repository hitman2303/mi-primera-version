console.log("lautaro vallejos b fulvo");
var b;
b = prompt("escriba una frase");
console.log (b);
var c;
c = prompt("escriba su nombre");
document.write ("hola" + c + "!");
nombre = prompt ("esccriba su nombre y apellido");
console.log(nombre);
edad = prompt ("escriba su edad");
edadHoy= 2024 - edad;
console.log ("tiene" + edadHoy + "años");
peso = prompt("escriba su peso");
altura = prompt("escriba su altura");
BMI = peso / altura^2
document.write("TU BMI ES DE:" + BMI);
cantidadDeVentanas= 10;
console.log(cantidadDeVentanas);
nombreSoyHumano = true;
console.log(nombreSoyHumano);
miGustodePizza = "jamon y morron";
console.log(miGustodePizza);
cuatroVaribles = [false, "hola", 0 , "Minions"];
console.log(cuatroVaribles[0]);
console.log(cuatroVaribles[1]);
console.log(cuatroVaribles[2]);
console.log(cuatroVaribles[3]);
base = prompt("inserte la base del triangulo");
altura = prompt ("ingrese la altura del triangulo");
superficie = base * altura / 2;
perimetro = base * altura;

peso = prompt ("ingrese su peso en libras");
pesoKilos = peso *0,453592;
document.write ("tu peso en kilos es de: " + pesoKilos);
sueldo = prompt ("ingrese su sueldo");
sueldoAumento = (sueldo * 15)/100;
console.log (sueldoAumento);
notaAlumno = prompt ("ingrese la nota de un alumno");
if (notaAlumno >= 7) {
    alert("aprobado")
} else {
    alert("reprobado")
}
matricula = prompt ("escriba el nombre de la matera");
nota1 = prompt ("escriba la primer nota");
nota2 = prompt ("escriba la segunda nota");
nota3 = prompt ("escriba la tercera nota");
nota4 = prompt ("escriba la cuarta nota");
nota5 = prompt ("escriba la quinta nota");
promedio = (nota1 + nota2 + nota3+ nota4 + nota5) / 5;
if (promedio >= 7) {
    document.write (matricula + promedio + "aprobado");
} else {
    document.write (matricula + promedio + "desaprobado");
}

num1 = prompt("ingrese el primer numero");
num2 = prompt ("ingrese el segundo numero");
num3 = prompt ("ingrese el tercer numero");

let mayor;

if (num1 >= num2 && num1 >= num3) {
    mayor = num1;  // num1 es el mayor
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;  // num2 es el mayor
} else {
    mayor = num3;  // num3 es el mayor
}
