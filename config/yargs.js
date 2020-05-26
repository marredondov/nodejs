const opts = {
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
    .command('listar', 'Imprime en consola la tabla de mulplicar', opts)
    .command('crear', 'crear en un archivo la tabla de mulplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}