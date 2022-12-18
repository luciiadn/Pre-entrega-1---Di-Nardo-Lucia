class TS {
    constructor (servicio, dias, cobertura, especialista){
        this.servicio = parseFloat(servicio);
        this.fecha = new Date();
        this.dias = parseInt(dias);
        this.cobertura = cobertura;
        this.especialista = especialista;
        this.pagoFinal = 0;


    }
   
    calcularPagoTotal() {
        this.PagoTotal = this.pagoFinal + this.servicio;
    }

}


const medicosDisponiblesCentro = [
    {
        obraSocial: 'si',
        nombre: 'Pagliano Marilina',
        simbolo: '$',
        costo: 3800
    }, {
        obraSocial: 'si',
        nombre: 'Sandra Lardone',
        simbolo: '$',
        costo: 3800
    },
    {
        obraSocial: 'no',
        nombre: 'Juan Pasteur',
        simbolo: '$',
        costo: 3800
    },
    {
        obraSocial: 'no',
        nombre: 'Delfina Tosselli',
        simbolo: '$',
        costo: 3800
    }, {
        obraSocial: 'si',
        nombre: 'Magdalena Vissio',
        simbolo: '$',
        costo: 3800
    },
    {
        obraSocial: 'no',
        nombre: 'Carlos Baerza',
        simbolo: '$',
        costo: 3800
    }
]

const   btnSiguiente = document.getElementById('btnSiguiente'),
        btnCancelar = document.getElementById('btnCancelar'),
        btnUltima = document.getElementById('btnUltima'),
        btnVolver = document.getElementById('btnVolver'),
        formDatos = document.getElementById('ingresoDatosPF'),
        monto = document.getElementById('monto'),
        dias = document.getElementById('dias'),
        selectorCobertura = document.getElementById('cobertura'),
        selectorOpciones = document.getElementById('opciones'),
        tasaParticular = 300,
        tasaObraSocial = 1500;
        checkDatos = document.getElementById('guardarDatos'),
        cardIngreso = document.querySelector('.cardIngreso'),
        confirmacion = document.querySelector('.confirmacion');
   




function elegirCobertura(medicosDisponibles, cobertura) {
    return medicosDisponibles.filter(medicos => medicos.tipo == cobertura);
}

function verMedicos(medicosDisponibles) {

    

    for (const medicos of medicosDisponibles) {
        let option = `<option value="${medicos.simbolo}" id="medicos${medicos.simbolo}">
        N ${medicos.nombre} C ${medicos.simbolo} - ${cuenta.costo}
        </option>`;
           
        selectorOpciones.innerHTML += opciones;
        
    }
        
}


let medicosDisponibles = elegirCobertura(medicosDisponiblesCentro, selectorCobertura.value);

selectorCobertura.onchange = () => {
    selectorOpciones.innerHTML = 'medicosDisponiblesCentro';
    
    
}


 window.onload = verMedicos(elegirCobertura(medicosDisponiblesCentro, selectorCobertura.value));








function guardarTSenStorage(datos) {
    localStorage.setItem('turnos', JSON.stringify(datos));
}


function recuperarTSDeStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}




function crearHTMLResultados(ts) {
    let lista = confirmacion.querySelector('ul');
    let items = [];
    for (const atributo in ts) {
        let li = ` <li>${atributo}: ${ts[atributo]}</li>`;
        items.push(li);
    }

    items.forEach(item => {
        lista.innerHTML += item;
    });

}


btnSiguiente.addEventListener('click', () => {
    
    const datosTS = new TS(monto.value, dias.value, selectorCobertura.value, selectorOpciones.value);

   
    datosTS.calcularFechaAcreditacion();
    datosTS.calcularIntereses(tasaParticular, tasaObraSocial);
    datosTS.calcularGananciaTotal();

    
    cardIngreso.classList.replace('visible', 'oculta');
    confirmacion.classList.replace('oculta', 'visible');

    crearHTMLResultados(datosTS);

    if (checkDatos.checked) {
        guardarTSenStorage(datosTS);
    }

    formDatos.reset();
})


btnCancelar.addEventListener('click', () => {
    formDatos.reset();
});


btnVolver.addEventListener('click', () => {
    
    cardIngreso.classList.replace('oculta', 'visible');
    confirmacion.classList.replace('visible', 'oculta');
    confirmacion.querySelector('ul').innerHTML = '';
    selectorOpciones.innerHTML = '';
    verMedicos(elegirCobertura(medicosDisponiblesCentro, selectorCobertura.value));

})


btnUltima.addEventListener('click', () => {
    let datosGuardados = recuperarTSDeStorage('turnos');
    console.log(datosGuardados);

    if (!datosGuardados) {
        alert('No se encontraron simulaciones previas');
    } else {
       
        cardIngreso.classList.replace('visible', 'oculta');
        confirmacion.classList.replace('oculta', 'visible');
        
        crearHTMLResultados(datosGuardados);
        formDatos.reset();
    }

})