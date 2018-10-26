/**
 *  Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
 */

class Prob4 {
    constructor() {
        this.side1 = Number(process.argv[2]);
        this.side2 = Number(process.argv[3]);
        this.side3 = Number(process.argv[4]);
    }
    getArea() {
        let perimeter = (this.side1 + this.side2 + this.side3) / 2;
        let area = Math.sqrt(perimeter * ((perimeter - this.side1) * (perimeter - this.side2) * (perimeter - this.side3)));
        console.log(`Area of triangle is ${area}`);
    }
}

const prob = new Prob4();
prob.getArea();