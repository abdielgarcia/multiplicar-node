//Requireds
const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');
const { rejects } = require('assert');


let crearArchivo = (base, limite) => {

    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            return rejects(`La base ${base} no es un numero`)
        }

        let tabla = '';
        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base*i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, tabla, (err) => {
            if (err) rejects(err);
            else
                resolve(`tabla-${base}.txt`)
        });
    });

}

let listarTabla = (base, limite) => {

    console.log('==========================='.green);
    console.log(`Fue creada la tabla del ${base}`.green);
    console.log('==========================='.green);
    let tabla = '';
    for (let i = 1; i <= limite; i++) {
        tabla += `${base} * ${i} = ${base*i}\n`;
    }
    console.log(tabla);
}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}