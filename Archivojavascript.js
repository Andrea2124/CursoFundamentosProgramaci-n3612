// alert("Hola Archivo Javascript")

var nombres = "Andrea";
var apellidos = "Diaz Caballero";
var telefono = 1234567;
var edad = 29;
var estatura = 150;

var concatenar = nombres + " " + edad;
// document.write(concatenar);
 // document.write(nombre);
 // document.write(edad);
 // document.write(estaura);

var datos = document.getElementById("datos");

datos.innerHTML = `
    <h1> Datos Principales </h1>
    <h2> Mi nombre es: ${nombres}</h2>
    <h2> Mi Apellidos son: ${apellidos}</h2>
    <h2> Telefono es: ${telefono}</h2>
    <h2> Edad es: ${edad} años</h2>
    <h2> Estatura: ${estatura} cm</h2>
`;

if(edad >= 18)
{
    datos.innerHTML += '<h1>Eres Mayor de edad</h1>'
}
else
{
    datos.innerHTML += '<h1>Eres Menor de edad</h1>'
}