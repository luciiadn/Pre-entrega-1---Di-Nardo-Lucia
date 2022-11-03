class producto {
    constructor (nombre, precio, categoria){
        this.nombre = nombre.toUpperCase () ;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
        this.vendido = false
     }

     AplicarDescuento () {
        this.precio = this.precio* 1.25;
     }

     Vender (){
        this.vendido = true
     }
     
}

let ProductoIngresado = prompt ('ingresá el nombre del producto');
let PrecioIngresado = prompt ('ingresá el precio por unidad de venta, sin descuento');
let CategoriaIngresada = prompt ('ingresá la categoría del producto');

const producto1 = new producto (ProductoIngresado, PrecioIngresado, CategoriaIngresada );

console.log(producto1);

producto1.AplicarDescuento ();
alert ('El precio final del producto ' + producto1.nombre + ' es $' + producto1.precio * 1.25);

producto1.Vender ();
console.log(producto1.vendido);









