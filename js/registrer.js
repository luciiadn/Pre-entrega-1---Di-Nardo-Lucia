bfetch ('./data.json')
.then(rest => rest.json() )
.then(data => filtrarProfesion(data));

let Profesion = JSON.parse(localStorage.getItem('profesion')) || [];

const contenedor = document.getElementById('#contenedorTarjetas');
const container = document.getElementById('#cardContainer');
const selectEspecialidad = document.getElementById('#especialidad');
const btnBuscar = document.querySelectorAll('.btnBuscar');


function crearHTML(data) {
    
    data.forEach((Nombre) => {
        const tarjeta = document.createElement ('div')
        tarjeta.innerHTML `
                <div class="col">
                    <div class="card h-100">
                        <img src="${Nombre.imagen}" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text">Nombre: ${Nombre.Nombre}</p>
                            <p class="card-text">Profesion: ${Nombre.especialidad}</p>
                            <button id="{$Nombre.id}" class="btn btnBuscar btn-primary> Buscar</button>
                        </div>
                    </div>
                </div>`;
        contenedor.innerHTML += tarjeta;
    })
}

btnBuscar.forEach=>(el => {
    el.addEventListener('click', (e) =>{
        buscarEspecialidad (e.target.id, data)
    })
})


// searchBtn.addEventListener('click',()=>{
//     bringData();
// })


// LOGIN //



const usuarios = [{
    nombre: 'lucia',
    mail: 'luciiadn@mail.com',
    pass: 'lucia123'
},{
    nombre: 'francisco',
    mail: 'franciscop@mail.com',
    pass: 'francisco123'
},{
    nombre: 'marilina',
    mail: 'mari86@mail.com',
    pass: 'marilina123'
},
]

  

    const inputMailLogin = document.getElementById('emailLogin'),
    inputPassLogin = document.getElementById('passwordLogin'),
    inputEdad = document.querySelector('Edad'),
    checkRecordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    contTarjetas = document.getElementById('tarjetas'),
    elementosToggleables = document.querySelectorAll('.toggeable');
    

const medicos = [{
    nombre: "Pagliano Marilina",
    especialidad: "Médica clínica",
    precioConsulta: 3800,
    img: './imagenes/medico2.jpg'
    
}, {
    nombre: "Sandra Lardone",
    especialidad: "pediatría",
    precioConsulta: 2350,
    img: './imagenes/medico1.jpg'

}, {
    nombre: "Juan Pasteur",
    especialidad: "Radiologia",
    precioConsulta: 2800,
    img: './imagenes/medico5.jpg'
    
}, {
    nombre: "Delfina Tosselli",
    especialidad: "Psico- pedagogía",
    precioConsulta: 2000,
    img: './imagenes/medico4.jpg'
    
},{
    nombre: "Magdalena Vissio",
    especialidad: "Psicología",
    precioConsulta: 1500,
    img: './imagenes/medico3.jpg'
    
}, {
        nombre: "Carlos Baerza",
        especialidad: "Odontología",
        precioConsulta: 3500,
        img: './imagenes/medico6.jpg'
        
    
}]

function validarUsuario(usersDB, user, pass) {
    let encontrado = usersDB.find((userDB) => userDB.mail == user);
    console.log(encontrado)
    console.log(typeof encontrado)

    if (typeof encontrado === 'undefined') {
        return false;
    } else {
        
        if (encontrado.pass != pass) {
            return false;
        } else {
            return encontrado;
        }
    }
}


function guardarDatos(usuarioDB, storage) {
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }

    storage.setItem('usuario', JSON.stringify(usuario));
}

function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}


function recuperarUsuario(storage) {
    return JSON.parse(storage.getItem('usuario'));
}


function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}


function mostrarInfoMedicos(array) {
    contTarjetas.innerHTML = '';
    array.forEach(element => {
        let html = `<div class="card cardMedicos" id="tarjeta${element.nombre}">
                <h3 class="card-header" id="nombreMedicos"> ${element.nombre}</h3>
                <img src="${element.img}" alt="${element.nombre}" class="card-img-bottom" id="fotoMedico">
                <div class="card-body">
                    <p class="card-text" id="especialidadMedicos">Especialidad: ${element.especialidad}</p>
                    
                </div>
            </div>`;
        contTarjetas.innerHTML += html;
    });
}


function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}


function estaLogueado(usuario) {

    if (usuario) {
        saludar(usuario);
        mostrarInfoMedicos(medicos);
        presentarInfo(elementosToggleables, 'd-none');
    }
}


btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    
    if (!inputMailLogin.value || !inputPassLogin.value) {
        swal("Campo obligatorio", {
            buttons: false,
            timer: 2000,
          });
    } else {
        
        let data = validarUsuario(usuarios, inputMailLogin.value, inputPassLogin.value);

        if (!data) {
            swal("Contraseña no válida", {
                buttons: false,
                timer: 2000,
              });
        } else {

            
            if (checkRecordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }

           
  

            
            modal.hide();
            
            mostrarInfoMedicos(medicos);
            presentarInfo(elementosToggleables, 'd-none');
        }
    }
});

btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(elementosToggleables, 'd-none');
});

estaLogueado(recuperarUsuario(localStorage));




//TURNERO//

//VER//

const btn = document.querySelector('#btn')
const foto = document.querySelector ('.fotoDudas')

let tiempo = 10000;

btn.onclick =()=>{
    fotoDudas.classList.add ('visible')

    setTimeout(()=> {
        fotoDudas.classList.remove ('visible')
    }, tiempo)
}

// const btn = document.querySelector('#btn')
// const foto = document.querySelector('.foto')

// let tiempo = 2500;
// btn.onclick=()=>{
//     foto.classList.add('visible');
//     setTimeout(()=>{
//         foto.classList.remove('visible')
//     },tiempo);
