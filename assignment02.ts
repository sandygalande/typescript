
let employee:any ={
    id:11,
    name:"Bill",
    dept:"IT",
    company:"TCS",

}
console.log(employee);

console.log("<======================Step 1==========================>");
for (const key in employee) {
    if (Object.prototype.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(`Key => ${key}, Value => ${element}`);  
    }
}

console.log("<======================Step 2==========================>");
const vaccinations:string[] =["J&J", "Pfizer", "Sputnik"];
console.log(`Given Array = ${vaccinations}`);

vaccinations.push("covaxin");
console.log(`Add Covaxin = ${vaccinations}`);

console.log("<======================Step 3==========================>");
for (const element of vaccinations) {
    console.log(element);
}