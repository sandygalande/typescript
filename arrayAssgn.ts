
console.log("<===========Class with Constructor================>");
class Student{
    id:number;
    name:string;
    city:string;
    marks:number;

    constructor(id:number, name: string, city:string, marks:number){
        this.id = id;
        this.name =name;
        this.city =city;
        this.marks =marks;
    }
    getDetails(): void{
        console.log(`ID: ${this.id}, Name: ${this.name}, City: ${this.city}, Marks: ${this.marks}`)
    }
}
const stew: Student = new Student(1,"Stew","Pune",75);
stew.getDetails();
const elon: Student = new Student(2,"Elon","Nashik",60);
elon.getDetails();
const jenny: Student = new Student(3,"Jenny","Mumbai",80);
jenny.getDetails();


console.log("<=====Remove Duplicate Element from array======>");

var inputArr: number[] = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
var uniqueArr: number[] =[];

for (let i = 0; i < inputArr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArr.length; j++) {
        if (inputArr[i]===uniqueArr[j]) {
            isDuplicate = true;
            break;
        }
        
    }
    if (!isDuplicate) {
        uniqueArr.push(inputArr[i]);
    } 
}

console.log("=>Given Array is:");
console.log(inputArr);
console.log("=>Remove Duplicate element from array:");
console.log(uniqueArr);