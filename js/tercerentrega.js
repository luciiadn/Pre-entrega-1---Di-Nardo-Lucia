class Carrito {

    constructor(producto, cantidad, tarjeta, cuotas) {
        this.producto = producto;
        this.fecha = new Date();
        this.cantidad = parseInt(cantidad);
        this.tarjeta = tarjeta;
        this.cuotas = cuotas;
        this.pago = 0;
    }

    
    calcularTotal(debito, credito) {
        if (this.tarjeta == 'debito') {
            this.pago = this.producto;
        } else {
            this.pago = (this.producto * (this.producto *0.10));
        }
    }

    calcularTotal() {
        this.Total = this.pago + this.producto;
    }


}



const ComboElegido = [
    {
        numero: '1',
        tipo: 'sublimacion',
        total: 3000
    }, {
        numero: '2',
        tipo: 'papelería',
        total: 4500
    },
    {   numero: '3',
        tipo: 'vinilos',
        total: 7300
    },
   
]



const btnSiguiente = document.getElementById('btnSiguiente'),
    btnCancelar = document.getElementById('btnCancelar'),
    btnUltima = document.getElementById('btnUltima'),
    btnVolver = document.getElementById('btnVolver'),
    formDatos = document.getElementById('ingresoDatosCarrito'),
    monto = document.getElementById('monto'),
    selectorCuotas = document.getElementById('Cuotas'),
    checkDatos = document.getElementById('guardarDatos'),
    cardIngreso = document.querySelector('.cardIngreso'),
    confirmacion = document.querySelector('.confirmacion'),
    tasaCredito = 0.10;



function guardarCarritoenStorage(datos) {
    localStorage.setItem('Carrito', JSON.stringify(datos));
}

function recuperarPFDeStorage(key) {
        return JSON.parse(localStorage.getItem(key));
}


btnSiguiente.addEventListener('click', () => {
    
    const datosPF = new Carrito(producto.value, selectorTarjeta.value, selectorCuotas.value);


    datosCarrito.calcularTotal();
    datosCarrito.calcularCredito(TresCuotas, SeisCuotas);
    datosCarrito.calcularTotal();

    
    cardIngreso.classList.replace('visible', 'oculta');
    confirmacion.classList.replace('oculta', 'visible');

    crearHTMLResultados(datosCarrito);

    if (checkDatos.checked) {
        guardarCarritoEnStorage(datosCarrito);
    }

    formDatos.reset();
})


btnCancelar.addEventListener('click', () => {
    formDatos.reset();
});



btnVolver.addEventListener('click', () => {
    //Mostrar y ocultar las secciones que corresponden
    cardIngreso.classList.replace('oculta', 'visible');
    confirmacion.classList.replace('visible', 'oculta');
    confirmacion.querySelector('ul').innerHTML = '';
})



btnUltima.addEventListener('click', () => {
    let datosGuardados = recuperarCarritoDeStorage('Carrito');
    console.log(datosGuardados);

    if (!datosGuardados) {
        alert('Sin compras anteriores');
    } else {
        cardIngreso.classList.replace('visible', 'oculta');
        confirmacion.classList.replace('oculta', 'visible');
        crearHTMLResultados(datosGuardados);
        formDatos.reset();
    }

})