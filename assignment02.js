var employee = {
    id: 11,
    name: "Bill",
    dept: "IT",
    company: "TCS",
};
console.log(employee);
console.log("<======================Step 1==========================>");
for (var key in employee) {
    if (Object.prototype.hasOwnProperty.call(employee, key)) {
        var element = employee[key];
        console.log("Key => ".concat(key, ", Value => ").concat(element));
    }
}
console.log("<======================Step 2==========================>");
var vaccinations = ["J&J", "Pfizer", "Sputnik"];
console.log("Given Array = ".concat(vaccinations));
vaccinations.push("covaxin");
console.log("Add Covaxin = ".concat(vaccinations));
console.log("<======================Step 3==========================>");
for (var _i = 0, vaccinations_1 = vaccinations; _i < vaccinations_1.length; _i++) {
    var element = vaccinations_1[_i];
    console.log(element);
}
