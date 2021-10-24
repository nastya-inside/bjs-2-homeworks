class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null; 
    }
    
    fix() {
       return this.state * 1.5;
    }
    
    set (newState) {
       let newState;
       if (newState < 0){
           newState = 0;
       }
        else if (newState > 100) {
            newState = 100;
        }
        else {
            this.state = state;
        }
    }
    
    get () {
        return this.state;
    }
};

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





    
    
    
    
    
    
    
    
    

