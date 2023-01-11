
 export let weekDay = 6; // lunes=1, martes=2...

if( weekDay <= 0 ) {
    throw new Error(' Este día no existe')
}

switch ( weekDay  ) {
    case 1 :
        console.log(' Es lunes')
        break;
    
    case 2 : 
        console.log(' Es martes ')    
        break;

    case 3 : 
        console.log(' Es miercoles  ')      
        break;
    default:
        console.log('No es lunes, martes o miercoles')
}

