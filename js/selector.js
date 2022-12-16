const contenedor = document.querySelector('#contenedorTarjetas');
const container = document.querySelector('#cardContainer');
const selectProfesion = document.querySelector('#profesion');
const btnBuscar = document.querySelector('#buscar');
const searchBtn = document.querySelector('#search');

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
    array.forEach ((nombre) => {
        const tarjeta = `
        <div class="col">
                <div class="card h-100">
                     <img src="${nombre.imagen}" class="card-img-top" alt="${nombre.especialidad}">
                     <div class="card-body">
                        <h4 class="card-tittle">${nombre.especialidad}</h4>
                        <p class="card-text">Nombre: ${nombre.nombre}</p>
                    </div>
                </div>
        </div>`;
                contenedor.innerHTML += tarjeta;              
        
    })
}

btnBuscar.addEventListener('click', () => {
    fetch('js/data.json')
        .then((response) => response.json())
        .then ((data) => {
            localStorage.setItem('user',JSON.stringify(data));
            createHTML(filtrarProfesion(data));
        })
})

