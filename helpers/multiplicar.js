
const fs = require('fs');
const colors = require('colors');
const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
       
        let salida = ''

        for (let index = 0; index < hasta; index++) {
            salida += `${base} X ${index+1} = ${base * (index+1)}\n`
            
        }

        if (listar) {
            console.log('====================================='.red);
            console.log(`=========Tabla del: ${base} ===============`.blue);
            console.log('====================================='.green);
            console.log(salida.rainbow);
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
    
    
}

module.exports = {
    crearArchivo
}