const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Es la base de la tabla de multiplicar.',
        demandOption: true
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla en consola.'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Número límite a multiplicar por la base',
        default: 10
    })

.argv;

module.exports = argv;