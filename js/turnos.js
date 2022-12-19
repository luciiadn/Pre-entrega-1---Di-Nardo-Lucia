class TS {
    constructor (servicio, dias, cobertura, especialista){
        this.servicio = parseFloat(servicio);
        this.fecha = new Date();
        this.dias = parseInt(dias);
        this.cobertura = 1000;
        this.especialista = especialista;
        this.costo = 3800;
        this.pagoTotal = 0;

    } 
  
    
    
     
    calcularPagoTotal(){
        this.pagoTotal = this.costo - this.cobertura
    }
      
    
}
   



const medicosDisponiblesCentro = [
    {
        obraSocial: true,
        nombre: 'Pagliano Marilina',
        simbolo: '$',
        costo: 3800
    },
    {
        obraSocial: true,
        nombre: 'Sandra Lardone',
        simbolo: '$',
        costo: 3800
    },
    {
        obraSocial: false,
        nombre: 'Juan Pasteur',
        simbolo: '$',
        costo: 3800
    },
    {
        obraSocial: false,
        nombre: 'Delfina Tosselli',
        simbolo: '$',
        costo: 3800
    },
    {
        obraSocial: true,
        nombre: 'Magdalena Vissio',
        simbolo: '$',
        costo: 3800
    },
    {
        obraSocial: true,
        nombre: 'Carlos Baerza',
        simbolo: '$',
        costo: 3800
    }
]

const   btnSiguiente = document.getElementById('btnSiguiente'),
        btnCancelar = document.getElementById('btnCancelar'),
        btnUltima = document.getElementById('btnUltima'),
        btnVolver = document.getElementById('btnVolver'),
        formDatos = document.getElementById('ingresoDatosTS'),
        dias = document.getElementById('dias'),
        selectorCobertura = document.getElementById('cobertura'),
        selectorOpciones = document.getElementById('opciones'),
        tasaParticular = 300,
        tasaObraSocial = 1500;
        checkDatos = document.getElementById('guardarDatos'),
        cardIngreso = document.querySelector('.cardIngreso'),
        confirmacion = document.querySelector('.confirmacion');
   

function elegirCobertura(medicosDisponibles) {
    return medicosDisponibles.filter(medicos => medicos. ObraSocial == true);

}
   

function verMedicos(medicosDisponibles) {

    
    for (const medicos of medicosDisponibles) {
       
        let option = `<option value="${medicos.simbolo}" id="medicos${medicos.simbolo}">
        N ${medicos.nombre} C ${medicos.simbolo} - ${medicos.costo}</option>`;
        selectorOpciones.innerHTML += option;
    }
}


selectorOpciones.onchange = () => {
    selectorOpciones.innerHTML = '';
    verMedicos (elegirCobertura(medicosDisponiblesCentro, selectorOpciones.value));
   
    
}

window.onload = verMedicos(medicosDisponiblesCentro, selectorOpciones.value);











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
    
    const datosTS = new TS(servicio.value, dias.value, selectorCobertura.value, selectorOpciones.value);

   
    datosTS.calcularPagoTotal();

    
    cardIngreso.classList.replace('visible', 'oculta');
    confirmacion.classList.replace('oculta', 'visible');

    crearHTMLResultados(datosTS);

    if (checkDatos.checked) {
        guardarTSenStorage(datosTS);
    }

    formDatos.reset();
})




btnUltima.addEventListener('click', () => {
    let datosGuardados = recuperarTSDeStorage('turnos');
    console.log(datosGuardados);

    if (!datosGuardados) {
        alert('No se encontraron turnos anteriores');
    } else {
       
        cardIngreso.classList.replace('visible', 'oculta');
        confirmacion.classList.replace('oculta', 'visible');
        
        crearHTMLResultados(datosGuardados);
        formDatos.reset();
    }

})
