"use strict";
function CalculateGrade(a, b, c) {
    console.log("Math Marks=", a);
    console.log("Physics Marks=", b);
    console.log("Chemistry Marks=", c);
    // calculate the avg of three subj divide result by 3
    var avg = (a + b + c) / 3;
    if (avg <= 70) {
        return `Average= Grade C (${avg})`;
    }
    else if (avg > 70 && avg < 90) {
        return `Average= Grade B (${avg})`;
    }
    else {
        return `Average= Grade A (${avg})`;
    }
}
var math = Number(prompt(`Enter the Math marks`));
var physics = Number(prompt(`Enter the Physics marks`));
var chemistry = Number(prompt(`Enter the Chemistry marks`));
console.log(CalculateGrade(math, physics, chemistry));
