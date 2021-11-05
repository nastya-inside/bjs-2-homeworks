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
        
         if (a + b > c || a + c > b || b + c > a) {
         throw new Error ('Треугольник с такими сторонами не существует');
    }
    }
    
    
    getPerimeter(){        
        return this.a + this.b + this.c;
    }

    getArea() {        
        let S = Math.sqrt(getPerimeter*(getPerimeter - a)*(getPerimeter - b)*(getPerimeter - c);
                          
        return +S.toFixed(3);
    }
}

   const getTriangle = (a, b, c) => {
        Triangle.a = a;
        Triangle.b = b;
        Triangle.c = c;
        
        try {
            return new Triangle;
        }
        catch {
            return {
            getArea() {return "Ошибка! Треугольник не существует"};
            getPerimeter(){return "Ошибка! Треугольник не существует"};
            }
            }
    }

