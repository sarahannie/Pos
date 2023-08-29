class Car {
    #fuel
    speed

    constructor(fuel, speed){
        this.fuel = fuel;
        this.speed = speed;
    }

    refuel(amount){
        this.fuel += amount;
    }

    getFuel(){
        return this.fuel;
    }
    
    setSpeed(speed){
        this.speed = speed;
    }

    getSpeed(){
        return this.speed;
    }

    drive(){
        console.log(`Driving at ${this.speed} and fuel is ${this.fuel}`);
    }
}



class Totoya extends Car{
    constructor(fuel, speed, enginee){
        super(fuel, speed);
        this.enginee = enginee;
    }

    setEnginee(enginee){
        this.enginee = enginee;
    }
    getEnginee(){
        return this.enginee;
    }

    totoya(){
        console.log(`Totoya is driving at ${this.speed} and fuel is ${this.fuel} and enginee is ${this.enginee}`);
    }
}


const totoyaNew = new Totoya(300, "200Km/H", "V8");

totoyaNew.totoya()