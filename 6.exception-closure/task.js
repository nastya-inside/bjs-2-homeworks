//Задание №1

const parseCount = (value) => {
    let result = Number.parseInt(value);
    
    if (isNaN(result)) {
        throw new Error ('Невалидное значение');
    }
        return result;
    }

const validateCount = (value) => {
    
    try {
    return parseCount(value);
    }
    catch(err) {
        throw new Error('Ошибка!'); 
    }
}

//Задание №2  

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        
        if (a + b < c || a + c < b || b + c < a) {
        throw new Error ('Треугольник с такими сторонами не существует');
    }
    }
    
    getPerimeter(){
        return this.a + this.b + this.c;
    }
        
    getArea() {
        const p = this.getPerimeter() / 2;
        const S = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));                  
        return +S.toFixed(3);
    }
}

let example = new Triangle (20, 13, 10);

console.log(example.getPerimeter());
console.log(example.getArea());


   const getTriangle = (a, b, c) => {
       
        try {
            return new Triangle(a, b, c);
        }
        catch {
            return {
            getArea() {return "Ошибка! Треугольник не существует"}
            getPerimeter() {return "Ошибка! Треугольник не существует"}
            }
            }
    }
