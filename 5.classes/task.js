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
        
       if (newState < 0){
           newState = 0;
       }
        else if (newState > 100) {
            newState = 100;
        }
            this._state = newState;
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
        super(name, releaseDate, pagesCount);
        this.type = "magazine"; 
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book"; 
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, type, releaseDate, pagesCount){
        super(author, name, type, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
       constructor(author, name, type, releaseDate, pagesCount){
        super(author, name, type, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
       constructor(author, name, type, releaseDate, pagesCount){
        super(author, name, type, releaseDate, pagesCount);
        this.type = "detective";
    }
}


const myNovelbook = new NovelBook("No name", "Novel", 1567, 100);
console.log(myNovelbook.pagesCount);

const myNewFantasticBook = new FantasticBook("No name", "Fantasy", 1898, 898);
console.log(myNewFantasticBook.author);
console.log(myNewFantasticBook.pagesCount);



//Задача №2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
             return this.books[i];   
            }
        }
            return null;
    }
    
    giveBookByName(bookName) {
         for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
            this.books.splice(i, 0);
            return this.books[i];
        }
    }
            return null;
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

library.addBook(
  new FantasticBook(
    "No name",
    "A thing",
    1789,
    234
  )
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("no name", "Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Пикник на обочине")); 
console.log(library.findBookBy("releaseDate", 2019));

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
console.log(library.giveBookByName("Пикник на обочине"));
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3 
