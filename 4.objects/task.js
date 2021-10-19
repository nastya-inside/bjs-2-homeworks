function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

const student1 = new Student("Ivan", "male", 21);
const student2 = new Student("Olga", "female", 20);
const student3 = new Student("Timur", "male", 18);


Student.prototype.setSubject = function (subjectName) {
   this.subjectName = subject; 
}

student1.setSubject("Math");
student2.setSubject("PE");
student3.setSubject("Art");


Student.prototype.addMark = function (mark) {
if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
      this.marks.push(mark); 
    }   
}

student1.addMark(3);
student2.addMark(4);
student3.addMark(5); 

Student.prototype.addMarks = function (...mark) {
    this.marks = [mark];
    this.marks.push(...mark); 
}


Student.prototype.getAverage = function () {
   const sum = this.marks.reduce(function (acc, value){
       return acc + value;
   }, 0);
    return sum / this.marks.length;
}


Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    
    this.excluded = reason;
}






