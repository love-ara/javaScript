class Shape{
    constructor(name){
        this.__name = name;
    }
    getName(){
        return this.__name;
    }

}

class Rectangle extends Shape{
    constructor(name, side1, side2){
        super(name);
        this.side1 = side1;
        this.side2 = side2;
    }    


    getArea(){
        return this.side1 * this.side2;
    }

    isSquare(){
        return this.side1 === this.side2
        }
}

module.exports = {Shape, Rectangle};
let rec = new Rectangle("rec", 4, 6);

console.log(rec.getArea());
console.log(rec.isSquare());
