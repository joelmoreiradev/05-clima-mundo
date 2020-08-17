const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');

const argv = require('yargs').options({ // importo yargs y creo la opción dirección -d
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// argv.direccion

// lugar.getLugarLatLng(argv.direccion)
//   .then(console.log);

// clima.getClima(-34.86023, -56.04939)
//         .then(console.log)
//         .catch(console.log);

const getInfo = async (direccion) => {

    try {
    const coords = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coords.lat, coords.lng);
    
    return `El clima de ${colors.green(direccion)} es de ${colors.yellow(temp)} grados.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);