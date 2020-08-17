const axios = require('axios'); // importo axios para las solicitudes http
const colors = require('colors/safe')

const getLugarLatLng = async (dir) => {

// crear ciudad codificada para poder tener espacios en la url
const encodedUrl = encodeURI(dir); // uso la dirección ingresada con yargs, recibida por la función

// petición get a la api usando axios, enviandole la ciudad desde consola mediante yargs.
// guardo la respuesta en la constante response.
const response = await axios.get(`https://geocode.xyz/?locate=location?city=${encodedUrl}&auth=637133544176993467627x7097&json=1`);

// si la respuesta es igual a 0, no hay datos y lanzo un error.
if(response.data.lenght === 0){
    throw new Error(`No hay resultados para ${dir}`)
}

const data = response.data;
const direccion = data.standard.city;
const lat = data.latt;
const lng = data.longt;

console.log(`La direccion ingresada fue ${colors.red(direccion)}`);

//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });


  return {
      direccion, // hace referencia al objeto json standard.city
      lat, // hace referencia al objeto principal en su propiedad latt
      lng // hace referencia al objeto principal en su propiedad longt
  }



}


module.exports = {
    getLugarLatLng
}