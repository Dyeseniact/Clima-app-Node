const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() => {

    const busquedas = new Busquedas;
    let opt;

    do{

        opt = await inquirerMenu();

        switch(opt){

            case 1: 
            //Mostar mensaje 
            const lugar = await leerInput('Ciudad: ');
            await busquedas.ciudad(lugar);
            
            //Buscar los lugares 
            //Seleccionar lugar 

            // Clima
            //Mostrar resultados
            console.log('\n Informacion de la ciudad\n'.blue);
            console.log('Ciudad:',);
            console.log('Lat:',);
            console.log('Lng:',);
            console.log('Temperatura:',);
            console.log('Minima:',);
            console.log('Maxima:',);
        break;
        }

        if (opt !== 0) await pausa();


    }while(opt !== 0)
}

main();