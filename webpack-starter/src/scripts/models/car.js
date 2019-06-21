
import { Vehicle } from "./vehicles";

export class Car extends Vehicle {
    start(){
        return 'in drivers seat... ' + super.start();
    }
}

