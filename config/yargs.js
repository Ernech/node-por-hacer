const descripcion = {
    demmand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completada = {

    alias: 'c',
    default: true,
    desc: 'Marcar tarea como completada o pendiente'

}


const optsCrear = {
    descripcion
}
const optsActualizar = {
    descripcion,
    completada
}
const optsBorrar = {
    descripcion
}
const argv = require('yargs').command('crear', 'Crear un nuevo elemento por hacer', optsCrear).command('actualizar', 'Actualiza el estado de un elemento a completado', optsActualizar).command('borrar', 'Elimina una tarea', optsBorrar).help().argv;


module.exports = {
    argv
}