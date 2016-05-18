/**CONSTANTES**/

const LIMITE = 100;

console.log(LIMITE);

/**VARIABLES DE BLOQUE**/

function mostrarProducto() {
    let fruta = "manzana";
    console.log("Dentr de la funcion:"+fruta);
}

mostrarProducto();
//console.log(fruta)
/*;
Cuando ocurre el error de que la variable no
esta definida el script deja de correr, ya no
corre el ciclo for
*/

for (let i=0; i <= 10; i++){
    console.log(i);
}

/**INTERPOLACION DE VARIABLES**/

var fruta = {nombre:"manzana", color:"rojo",
    peso:"250 gramos"};

//var descripcion="";
/*Para hacer la interpolación de variables ya no
utilizamos las comillas dobles, sino,
el acento grave
*/

var descripcion = `La ${fruta.nombre} es de color ${fruta.color} y tiene un peso de ${fruta.peso}`;
console.log("Descripcion: "+descripcion);

/**MAPAS**/
var fruta = new Map();

fruta.set("nombre","Manzana");
fruta.set("peso","250 gramos");
/*Con lo anterior definimos propiedades
a nuestra variable fruta
*/
console.log(fruta);

console.log(fruta.get("nombre"));/*Con esto obtenemos una propiedad*/
console.log(fruta.has("nombre"));/*Con esto preguntamos si existe dicha propiedad*/
console.log(fruta.delete("nombre"));/*Con esto eliminamos una propiedad y nos regresa true/false*/
console.log(fruta.has("nombre"));/*Checamos que ya no exista la propiedad nombre*/

console.log(fruta);

/**CONJUNTOS**/

var  operadores = new Set();

operadores.add("+");
operadores.add("-");
operadores.add("*").add("/");

console.log(operadores);

console.log(operadores.has("*"));/*Checamos si existe*/

console.log(operadores.size);/*Checamos cuantos elementos tiene `operadores`*/

console.log(operadores.delete("+"));

console.log(operadores);

operadores.forEach(
    (operador) => console.log(operador)
);

/**DESESTRUCTURACION**/
/*Ligar varibles con sus datos con un orden y patron*/

var {nombre, peso} = {nombre:"manzana", peso: "250 gramos"};
console.log(nombre,peso);

var [a,b,c] = ["manzana", "pera", "uva"];
console.log(a,b,c);

/**CICLO for-of**/
var frutas = ["manzana","pera","uva"];

for(let fruta of frutas){
    console.log(fruta);
}


/**GENERARADORES**/

function *Contador(){
    var i = 0;
    while(1<2){
        yield i;
        yield "Hola"
        yield "Mundo"
        i++;
    }
}

var contador = Contador();
console.log(contador.next());
console.log(contador.next());
console.log(contador.next());
console.log(contador.next());