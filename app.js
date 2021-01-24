document.addEventListener('DOMContentLoaded', () => {
    // Opciones de las tarjetas:
    const tarjetasArray = [
        {
            nombre: 'kfc',
            img: 'imagenes/kfc.gif'
        },
        {
            nombre: 'caesar',
            img: 'imagenes/caesar.gif'
        },
        {
            nombre: 'fosters',
            img: 'imagenes/fosters.gif'
        },
        {
            nombre: 'just_eat',
            img: 'imagenes/just_eat.png'
        },
        {
            nombre: 'lizarran',
            img: 'imagenes/lizarran.gif'
        },
        {
            nombre: 'pizza_hut',
            img: 'imagenes/pizza_hut.gif'
        },
        {
            nombre: 'popeyes',
            img: 'imagenes/popeyes.gif'
        },
        {
            nombre: 'tgb',
            img: 'imagenes/tgb.gif'
        },
        {
            nombre: 'vadepizza',
            img: 'imagenes/vadepizza.gif'
        },
        {
            nombre: 'vips',
            img: 'imagenes/vips.gif'
        },
        {
            nombre: 'burger_king',
            img: 'imagenes/burger.jpg'
        },
        {
            nombre: '100montados.gif',
            img: 'imagenes/100montados.gif'
        },
        {
            nombre: 'kfc',
            img: 'imagenes/kfc.gif'
        },
        {
            nombre: 'caesar',
            img: 'imagenes/caesar.gif'
        },
        {
            nombre: 'fosters',
            img: 'imagenes/fosters.gif'
        },
        {
            nombre: 'just_eat',
            img: 'imagenes/just_eat.png'
        },
        {
            nombre: 'lizarran',
            img: 'imagenes/lizarran.gif'
        },
        {
            nombre: 'pizza_hut',
            img: 'imagenes/pizza_hut.gif'
        },
        {
            nombre: 'popeyes',
            img: 'imagenes/popeyes.gif'
        },
        {
            nombre: 'tgb',
            img: 'imagenes/tgb.gif'
        },
        {
            nombre: 'vadepizza',
            img: 'imagenes/vadepizza.gif'
        },
        {
            nombre: 'vips',
            img: 'imagenes/vips.gif'
        },
        {
            nombre: 'burger_king',
            img: 'imagenes/burger.jpg'
        },
        {
            nombre: '100montados.gif',
            img: 'imagenes/100montados.gif'
        }

    ]

    tarjetasArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('#grid');
    const resultado = document.querySelector('#resultado')
    var tarjetasElegidas = [];
    var idsElegidos = []
    var tarjetasGanadoras = []

    /* Crear el tablero: */
    
    function crearTablero() {
        for (let i = 0; i < tarjetasArray.length; i++){
            var tarjeta = document.createElement('img');
            tarjeta.setAttribute('src', 'imagenes/vacio.jpg')
            tarjeta.setAttribute('data-id', i)
            tarjeta.addEventListener('click', girarTarjeta)
            grid.appendChild(tarjeta)
        }
    }

    /* Buscar match */
    
    function buscarMatch() {
        var tarjetas = document.querySelectorAll('img')
        const opcionUno = idsElegidos[0]
        const opcionDos = idsElegidos[1]
        console.log(opcionUno)
        console.log(opcionDos)
        if (tarjetasElegidas[0] === tarjetasElegidas[1]) {

            alert('Has encontrado un match')
            tarjetasGanadoras.push(idsElegidos)

        }
        else {
            tarjetas[opcionUno].setAttribute('src', 'imagenes/blank.jpg')
            tarjetas[opcionDos].setAttribute('src', 'imagenes/blank.jpg')
            alert('Intenta de nuevo!')
        }
        tarjetasElegidas = []
        idsElegidos = []
        resultado.textContent = tarjetasGanadoras.length
        if (tarjetasGanadoras.length === tarjetasArray.length / 2) {
            resultado.textContent = 'Felicidades! has encontrado todos los matches!'
        }


    }
    
    
    /* Girar tarjeta */
    
    function girarTarjeta() {
        var idTarjeta = this.getAttribute('data-id')
        tarjetasElegidas.push(tarjetasArray[idTarjeta].nombre)
        idsElegidos.push(idTarjeta)
        this.setAttribute('src', tarjetasArray[idTarjeta].img)
        if (tarjetasElegidas.length === 2) {
            setTimeout(buscarMatch, 500)
        }

    }

    crearTablero();


})