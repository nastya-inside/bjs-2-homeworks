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
        
        if (a + b > c || a + c > b || b + c > a) {
        throw new Error ('Треугольник с такими сторонами не существует');
    }
    }
    
    
    P = getPerimeter(){        
        return this.a + this.b + this.c;
    }
    
    p = P / 2;

    getArea() {        
        let S = Math.sqrt(p*(p - a)*(p - b)*(p - c);
                          
        return +S.toFixed(3);
    }
}

   const getTriangle = (a, b, c) => {
        
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