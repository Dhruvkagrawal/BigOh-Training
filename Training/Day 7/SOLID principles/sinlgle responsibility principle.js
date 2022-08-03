class Square {

    constructor(length) {
        this.length = length;
    };

};

let square1 = new Square(4);

class Circle {

    constructor(radius) {
        this.radius = radius;
    };

}

let circle1 = new Circle(5);

class AreaCalculator {

    constructor(shapes) {
        this.shapes = shapes;
    };

    sum() {
        this.totalArea = 0;
        this.shapes.forEach(element => {
            if (element.constructor.name === "Square") {
                this.totalArea += element.length * element.length;
            } else if (element.constructor.name === "Circle") {
                this.totalArea += +(Math.PI * (element.radius * element.radius)).toFixed(2)
            }
        });
        return this.totalArea
    };

    totalArea() {
        return `totalArea of all the Shapes Provided id ${this.sum()}`
    }

};

let shapes = [new Square(4), new Circle(5), new Circle(6)]

let sum1 = new AreaCalculator(shapes);

console.log("sum1", sum1.totalArea());