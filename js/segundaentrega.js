class Producto {

    constructor(nombre, precio, categoria, id){
        this.nombre = nombre.toUpperCase () ;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;

    }

    AplicarDescuento () {
        this.precio = this.precio* 1.25;
     }

     Vender (){
        this.vendido = true
     }

}

const Productos = [
    new Producto('Taza', '830', 'sublimación', 0),
    new Producto('Mate', '650', 'sublimación', 1),
    new Producto('Cartel', '1300', 'vinilos', 2),
    new Producto('sticker', '150', 'vinilos', 3),
    new Producto('Agenda', '3260', 'papelería', 4),

]


let opcion = prompt('Seleccioná una de las siguientes categorias para ver los productos que incluyen: \sublimación. \vinilos.  \papeleria');

const categorias = [
    {categoria: 'sublimación', productos: 'remeras, gorras, tazas '},
    {categoria: 'vinilos', productos: 'sticker, plotteos, carteles'},
    {categoria: 'papeleria', productos: 'agenda, invitaciónes, calendarios'},

]


const resultado = categorias.find ((el) => el.categoria === '1' );
alert ( 'En nuestra categoria de sublimacion podés encontrar los siguientes productos: remeras, gorras, tazas');


const resultado2 = categorias.find ((el) => el.categoria === '2' );
alert ( 'En nuestra categoria de vinilos podés encontrar los siguientes productos: sticker, plotteos, carteles');



const resultado3 = categorias.find ((el) => el.categoria === '3' );
alert ( 'En nuestra categoria de papelería podés encontrar los siguientes productos: agenda, invitaciónes, calendarios');


alert ('continua para agregar un producto');



//Pedir que se ingresen productos nuevos y sumarlos al array//
let continuar = true;

while (continuar) {

    let ingreso = prompt('¿Desea agregar un producto a la lista de compra? Ingresa los datos del producto: nombre, precio, categoria. Separados por un punto (.). n/0 para finalizar');

    if (ingreso == '0') {
        continuar = false;
        break;
    }

    const datos = ingreso.split('.');
    console.log(datos);

    const producto = new Producto(datos[0], datos[1], datos[2], datos[3]);

    Productos.push(producto);
    producto.asignarId(Productos);
    console.log(Productos);

}



//comprar un producto con descuento//



let comprar = alert ('Estas ingresando al área de compras. Enter para continuar');
let ProductoIngresado = prompt ('ingresá el nombre del producto');
let PrecioIngresado = prompt ('ingresá el precio por unidad de venta, sin descuento');

const producto1 = new producto1 (ProductoIngresado, PrecioIngresado);

console.log(producto1);

producto1.AplicarDescuento ();
alert ('El precio final del producto ' + producto1.nombre + ' es $' + producto1.precio * 1.25);

producto1.Vender ();
console.log(producto1.vendido);



alert ('Gracias por su compra, vuelva prontos');

