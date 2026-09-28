
// comentario de una sola linea 
/*
comantario de 
doble linea
*/

// definicion de variables siempre con LET  
let nombre = "Maria";
let edad_supuesta = "26";
console.log = ('nombre: ' +nombre+ 'edad : '+edad);

// condicionales 
if (nombre == 'Maria'&& edad_supuesta > '18'){
    alert('Eres mayor Maria')
}else if(nombre == "Maria" && edad_supuesta == '18'){
    alert('Tienes 18')
}
else{
    alert('No eres mayor');
}

// funciones 
function saludar(){
    // tambien tiene return como tal 
    console.log('Esto es un saludo desde una funcion');
}

saludar();

// listas 
let lista_javascrip = ['Variables', 'Condicioneles', 'Funciones', 'Interaciones', 'Listas'];

for (let i = 0; i < lista_javascrip.length; i++) {
    console.log(lista_javascrip[i]);
    
}


/*
// entrada de datos 
let edad = prompt('¿Que edad tienes?: ')
console.log('tu edad es: ', edad)

// print de java 
console.log('Hola esto es JavaScrip!')

//alert('hola) -> te hace pop en pantalla y console.log en la consola 
*/

function tocaboton(){
    // con esto campturo lo que hay en el input 
    let texto = document.getElementById('txtMensaje').value;
    // con esto cambio el estilo de una etiqueta html 
    document.getElementById('parrafo').style.color='red';
    // cambiar texto de una etiqueta p 
    document.getElementById('parrafo1').innerHTML='Esto lo cambie con javascrip';
            
    alert(texto)
    }