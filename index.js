
function getUserFlavors() {
    //Prompt user for flavors and store into variable
    const flavors = prompt("Enter the flavors separated by a comma", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

    //Turn string into an array separated by the comma
    return flavors.split(",");
}
function countMessage(array) {
    return `You've provided ${array.length} flavors`
}
//Turn flavorArray into an object and
function objFlavors(array) {
    let obj = {};
    let count = 0;
    for (let i in array) {
        let flavor = array[i];
        if (obj[flavor] === undefined) {
            obj[flavor] = 1;
        } else {
            obj[flavor] += 1;
        }
    }
    return obj;
}

function flavorsMessage(object) {

}
let flavorArray = getUserFlavors();
console.log(countMessage(flavorArray));
let flavorObject = objFlavors(flavorArray);
console.log(flavorObject);
