const lugar = require('./lugar/lugar');

const argv = require('yargs').options({ // importo yargs y creo la opción dirección -d
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// argv.direccion

lugar.getLugarLatLng(argv.direccion)
  .then(console.log);

