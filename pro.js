class Person {
    name;

    constructor(name){
        this.name = name;
    }

    proP(){
        console.log(`Hi, i am ${this.name}`)
    }
}
//  INSTANCE
const queen = new Person("Prosper")
queen.proP()

