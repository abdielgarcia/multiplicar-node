//cargo la configuracion del paquete yargs realizada en ./config/yargs
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicacion');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`)).
        catch(err => console.log(err));
        break;
    default:
        console.log('Parametro no reconocido');
        break;
}