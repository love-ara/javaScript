class Dayo{
    constructor(name, age, size){
        this.name = name;
        this.age = age;
        this.size = size;
    }

    static  setName(newName){
        this.name = newName;
    }
    getName(){
        return this.name;
    }
    
    setAge(anyAge){
        this.age = anyAge;
    }
    getAge(){
        return this.age;
    }
    
    setSize(oneSize){
        this.size = oneSize;
    }
    getSize(){
        return this.size;
    }


}
let ayomide = new Dayo();
ayomide.setSize(10);
console.log(ayomide);