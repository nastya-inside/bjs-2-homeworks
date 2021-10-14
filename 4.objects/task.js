function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

}

const student1 = new Student("Ivan", "male", 21);
const student2 = new Student("Olga", "female", 20);
const student3 = new Student("Timur", "male", 18);


Student.prototype.setSubject = function (subjectName) {
   this.subjectName = subjectName; 
}

const subject1 = new setSubject("Math");
const subject2 - new setSubject("PE");
const subject3 = new setSubject("Art");


Student.prototype.addMark = function (mark) {
    this.mark = mark;
    
if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
      this.marks.push(mark); 
    }   
}

const mark1 = new addMark(3);
const mark2 = new addMark(4);
const mark3 - new addMark(5); 

