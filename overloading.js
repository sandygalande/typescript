"use strict";
function doubleMe(x) {
    if (x && typeof x === "number") {
        console.log(x * 2);
    }
    else if (x && typeof x === "string") {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        return x.map(n => console.log(n));
    }
}
doubleMe(2); // 4 
doubleMe('Jack'); // Jack Jack
doubleMe(['a']); //
