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
