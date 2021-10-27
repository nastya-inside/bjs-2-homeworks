// Задача №1 

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null; 
    }
    
    fix() {
       this.state *= 1.5;
    }
    
    set state(newState) {
       let _state;
        
       if (newState < 0){
           newState = 0;
       }
        else if (newState > 100) {
            newState = 100;
        }
        else {
            this._state = newState;
        }
    }
    
    get state() {
        return this._state;
    }
};

const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.name); 
sherlock.state = 10;
console.log(sherlock.state); 
sherlock.fix();
console.log(sherlock.state); 


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = "magazine"; 
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = "book";   
    }
}

class NovelBook extends Book {
    this.type = "novel";
}

class FantasticBook extends Book {
    this.type = "fantastic";
}

class DetectiveBook extends Book {
    this.type = "detective";
}



//Задача №2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    
    addBook(book) {
        let state;
        if (state > 30) {
            books.push(this.book);
        }
    }
    
    findBookBy(type, value) {
        if (type === true && value === true) {
            return this.book;
        }
        else {
            return null;
        }
    }
    
    giveBookByName(bookName) {
        if (bookName === true) {
            delete this.book;
            return this.book;
        }
        else {
            return null;
        }
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3 

*/
    
    
    
    
    
    
    
    
    

