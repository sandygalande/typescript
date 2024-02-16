console.log("<===========Class with Constructor================>");
var Student = /** @class */ (function () {
    function Student(id, name, city, marks) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.marks = marks;
    }
    Student.prototype.getDetails = function () {
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name, ", City: ").concat(this.city, ", Marks: ").concat(this.marks));
    };
    return Student;
}());
var stew = new Student(1, "Stew", "Pune", 75);
stew.getDetails();
var elon = new Student(2, "Elon", "Nashik", 60);
elon.getDetails();
var jenny = new Student(3, "Jenny", "Mumbai", 80);
jenny.getDetails();
console.log("<=====Remove Duplicate Element from array======>");
var inputArr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
var uniqueArr = [];
for (var i = 0; i < inputArr.length; i++) {
    var isDuplicate = false;
    for (var j = 0; j < uniqueArr.length; j++) {
        if (inputArr[i] === uniqueArr[j]) {
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
