// const fs = require('./'); creados por nosotros
// const fs = require('express'); no son nativos de noce
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch( comando ){
	case 'listar':
		listarTabla( argv.base, argv.limite);
	break;
	case 'crear':
		crearArchivo(argv.base, argv.limite)
		.then( archivo => console.log(`Archivo creado ${ archivo.green }`))
		.catch( (err) => console.log(err));
	break;
	default:
		console.log('comando no recomoncido');
	break;
}


// let parametro = argv[2];
// let base = parametro.split('=')[1];

