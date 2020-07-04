/**
 * Yargs permite, entre otras cosas, introducir parametros desde la consola controlando posibles errores
 * 
 * / */


/**
 * listar, crear son comandos que indicamos desde la comsola para realizar la accion que necesitemos
 * base: es un parametro que puedo insertar desde la consola
 * limite: es un parametro que puedo insertar desde la consola
 * / */


let opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv: argv
}