const fs = require('fs');
const colors = require('colors');
const crearArchivoTabla = async(listar, hasta, base = 5) => {

    try {

        let salida = '';
        let consola = '';

        for (i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base*i}\n`);
            consola += (`${base} ${colors.cyan('x')} ${i} = ${base*i}\n`);
        }
        if (listar) {
            console.log('==========================='.red);
            console.log(`     ${colors.green('Tabla del')} ${ colors.blue(base)}`);
            console.log('==========================='.red);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw (error);
    }
};

module.exports = {
    crearArchivoTabla
};