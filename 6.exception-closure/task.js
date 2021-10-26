//Задание №1

const parseCount = (value) => {
    let result = Number.parseInt(value);
    
    if (isNaN(result)) {
        throw new Error ('Невалидное значение');
    } else {
        return result;
    }
}

const validateCount = (value) => {
    
    try {
        let result = parseCount(value);
    }
    catch(err) {
        console.error("Ошибка!"); 
    }
    
    return result;
}

//Задание №2 

class Triangle {
    constructor (a, b, c) {
    }
    
    if ((((a + b) > c) && ((a + c) > b) && ((b + c) > a)) === false) {
         throw new Error ('Треугольник с такими сторонами не существует');
    }
    
    getPerimeter(){
        return a + b + c;
    }

    getArea() {
        let S;
        let p;
        
        p = getPerimeter / 2;
        
        S = (p − a) * (p − b);
        
        return S.toFixed(3);
    }

    const getTriangle = (a, b, c) => {
        try {
            return new Triangle;
        }
        catch {
            return new Object() {
            getArea() {return "Ошибка! Треугольник не существует"};
            getPerimeter(){return "Ошибка! Треугольник не существует"};
            }
            }
    }
}

