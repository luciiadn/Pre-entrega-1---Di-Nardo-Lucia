let password = '1234';

function ingresar() {

    let ingresar = false;

    for (let i = 1 ; i <= 3; i++) {

        let passUser = prompt('Ingresá código de cliente');

        if (passUser === password) {

            alert('Bienvenidos a nuestra tienda oficial');
            ingresar = true;
            break;

        }

    }

    return ingresar;

}

if (ingresar()) {
    
    let Taza = '800';
    let Mate = '600';
    let Agenda = '2350';


    let opcion = prompt('Elegí una opción: \n1- Elegir un producto. \n2 - Cupón de descuento.  \n0 - para cerrar sesión');

    while ( opcion ) {

        switch (opcion) {

            case '1':
                let Elegir = parseInt(prompt('Selecciona el producto: \n1- Taza  $800. \n2 - Mate  $600. \n3 - Agenda $2350. '));
            
                    if (Elegir == 1)
                    alert('Elegiste una taza con un valor de $800, continua para aplicar un descuento');

                    else if (Elegir == 2)
                    alert('Elegiste un mate con un valor de $600, continua para aplicar un descuento');

                    else if (Elegir == 3)
                    alert('Elegiste una agenda con un valor de $2350, continua para aplicar un descuento');
         
            case '2':

                let descuento = parseInt(prompt('Ingresa el precio final del producto para conocer tu descuento'));
                

                if (descuento == 800 ) {
                    alert('El total a pagar el igual a ' + ( Taza * 0.80 ) +'. ');
                    
                } else if (descuento == 600 ) {
                    alert('El total a pagar el igual a ' + ( Mate * 0.80 ) +'. ');
                    
                } else if (descuento == 2350 ) {
                    alert('El total a pagar el igual a ' + ( Agenda * 0.80 ) +'. ');
                    
                }

                break;

                alert ('Gracias por tu compra');

                break;
            
            
        
        }

        opcion = prompt('Elegí una opción: \n1- Elegir un producto. \n2 - Cupón de descuento.  \n0 - para cerrar sesión');
    
    }

} 

alert('Gracias por visitarnos');

