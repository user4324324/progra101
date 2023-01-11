
export class Car {

    static className = 'Carro';

    readonly brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;

     private readonly createdAt: number;

    constructor (brand: string, type: string) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;

        this.createdAt = 129422384;
   }

   turnOn() {
    if( this.isRunning) {
        console.log('El carro ya estaba encendido... se daño el motor');
        return;
    }

    if ( this.fuelTank <=0 ) {
        console.log('El carro no tiene gasolina');
        return;
    }

        this.isRunning = true;
        console.log('El carro esta encendido ahora');
   }
 
   fillTank( gas: number) {
    if( gas <=0 ) {
    throw new Error(' El gas debe ser positivo');
    return;

   }

   let newFuelTank = this.fuelTank + gas;
   if( newFuelTank >=100) {
    this.fuelTank = 100
   }else {
    this.fuelTank = newFuelTank; 
   }

   
}


}

let myBMW = new Car('BMW', 'Sedan');

//myBMW.brand = 'BMW';
//myBMW.type = 'Sedan';


console.log(myBMW);
myBMW.fillTank(10);
myBMW.fillTank(70);
myBMW.turnOn(); 
console.log(myBMW);

console.log(Car.className);