const contenedor = document.querySelector('#contenedorTarjetas');
const container = document.querySelector('#cardContainer');
const selectProfesion = document.getElementById('#profesion');
const btnBuscar = document.querySelector('#btnBuscar');
const buscar = document.getElementById ('buscar')


function filtrarProfesion(array){
    let profesion = selectProfesion.value;
    if (!profesion) {
        return array;

    } else {
        return array.filter((item) => item.especialidad == profesion);
    }
}

function createHTML(array) {
    contenedor.innerHTML = '';
    container.innerHTML = '';
    array.forEach ((especialidad) => {
        const tarjeta = `
        <div class="col">
                <div class="card h-100">
                     <img src="${especialidad.imagen}" class="card-img-top" alt="${especialidad.especialidad}">
                     <div class="card-body">
                        <h4 class="card-tittle">${especialidad.especialidad}</h4>
                        <p class="card-text">Nombre: ${especialidad.nombre}</p>
                    </div>
                </div>
        </div>`;
                contenedor.innerHTML += tarjeta;              
        
    })
    
      
    buscar.addEventListener('click', () => {
        fetch("/js/data.json")
            .then(response => response.json())
            .then (data => {
                localStorage.setItem('user',JSON.stringify(data));
                createHTML(filtrarProfesion(data));
            })
    })
}

