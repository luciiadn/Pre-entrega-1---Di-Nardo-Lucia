class T {
    constructor (servicio, dias, cobertura, especialista){
        this.servicio = parseFloat(servicio);
        this.fecha = new Date();
        this.dias = parseInt(dias);
        this.cobertura = cobertura;
        this.especialista = especialista;
        this.pagoFinal = 0;


    }

    calcularPagoFinal() {
        this.pagoFinal = this.cobertura + this.especialista;
    }

}

const cosultasMedicos = [{

    obraSocial: 'si',
    simbolo: '$',    
    nombre: 'Pagliano Marilina',
    precioConsulta: 3800
    
}, {
    obraSocial: 'si',
    simbolo: '$',
    nombre: 'Sandra Lardone',
    precioConsulta: 3800
}, {
    obraSocial: 'no',
    nombre: 'Juan Pasteur',
    simbolo: '$',
    precioConsulta: 3800
    
}, {
    obraSocial: 'no',
    nombre: 'Delfina Tosselli',
    simbolo: '$',
    precioConsulta: 3800
    
},{
    obraSocial: 'si',
    nombre: 'Magdalena Vissio',
    simbolo: '$',
    precioConsulta: 3800
    
}, {
    obraSocial: 'no',
    nombre: 'Carlos Baerza',
    simbolo: '$',
    precioConsulta: 3800
        
    
}]

const btnSiguiente = document.getElementById('btnSiguiente'),
    btnCancelar = document.getElementById('btnCancelar'),
    btnUltima = document.getElementById('btnUltima'),
    btnVolver = document.getElementById('btnVolver'),
    formDatos = document.getElementById('ingresoDatosT'),
    servicio = document.getElementById('servicio'),
    dias = document.getElementById('dias'),
    cobertura = document.getElementById('cobertura'),
    selectorEspecialistas = document.getElementById('especialistas'),
    tasaParticular = 300,
    tasaObraSocial = 1500;
    checkDatos = document.getElementById('guardarDatos'),
    cardIngreso = document.querySelector('.cardIngreso'),
    confirmacion = document.querySelector('.confirmacion'),
    




function ElegirCobertura (cosultasMedicos, cobertura) {
    return cosultasMedicos.filter(consulta=>consulta.cobertura == cobertura)

}

function mostrarMedicos (cosultasMedicos){
    for(const consultas of cosultasMedicos){
        let option = `<option value="${consultas.numero}" >
        ${consultas.nombre} - ${consultas.simbolo} ${consultas.precioConsulta}
        </option>`
        selectorEspecialistas.innerHTML += option;
    }
}