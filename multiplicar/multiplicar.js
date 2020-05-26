//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('============================='.green);
    console.log(`Tabla de base ${base} con limite ${limite}`.green);
    console.log('============================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';
        let nombreArchivo = `/tabla-${base}-al-${limite}.txt`;

        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un número`);
            return
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;

        }
        fs.writeFile(`tablas/${nombreArchivo}`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(nombreArchivo);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}