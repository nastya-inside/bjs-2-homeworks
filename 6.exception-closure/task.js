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
        return console.error("Ошибка!"); 
    }
}

//Задание №2 

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        
         if (a + b > c || a + c > b || b + c > a === false) {
         throw new Error ('Треугольник с такими сторонами не существует');
    }
    }
    
    
    getPerimeter(){        
        return this.a + this.b + this.c;
    }

    getArea() {        
        let S = ((this.a + this.b + this.c)/2 - this.a) * ((this.a + this.b + this.c)/2 - this.b);
        
        return +S.toFixed(3);
    }

    const getTriangle = (a, b, c) => {
        this.a = a;
        this.b = b;
        this.c = c;
        
        try {
            return new Triangle;
        }
        catch {
            
            const newObject = {
            getArea() {return "Ошибка! Треугольник не существует"};
            getPerimeter(){return "Ошибка! Треугольник не существует"};
            }
            return newObject;
            }
    }
}

