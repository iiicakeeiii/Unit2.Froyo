/**
 * The objFlavors function takes in an array of flavors
 * provided by the user and returns an object showing
 * the flavor and count.
 * @return {string[]} an array of flavors.
 * */
function getUserFlavors() {

    //Prompt user for flavors and store into variable
    const flavors = prompt("Enter the flavors separated by a comma", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

    //Turn string into an array separated by the comma
    return flavors.split(",");
}

/**
 * The getTotal function provides sums the values
 * from the values in the provided object and returns
 * the total.
 * @param {object} object the object to be counted.
 * @return {number} The total amount.
 */

function getTotal(object) {
    let total = 0;
    for (const i in object) {
        total += object[i];
    }
    return total;
}

/**
 * Generates a message on the total amount of flavors
 * requested by the user.
 * @param {object} object an array of flavors.
 * @return {string} generated message.
 * */
function countMessage(object) {
    return `You've provided ${getTotal(object)} flavors`;
}

/**
 * The objFlavors function takes in an array of flavors
 * provided by the user and returns an object showing
 * the flavor and count.
 * @param {string[]} strArr an array of Strings.
 * @return {object} An object key of flavors and object value of amount.
 * */
function objFlavors(strArr) {
    let obj = {};
    for (const i in strArr) {
        //Assign to flavor variable for readability
        const flavor = strArr[i];
        //If is not defined begin with a count of 1.
        if (obj[flavor] === undefined) {
            obj[flavor] = 1;
            //Else increment value by 1.
        } else {
            obj[flavor] += 1;
        }
    }
    return obj;
}

//Assigning inputs to variables
const flavorArray = getUserFlavors();
const flavorObject = objFlavors(flavorArray);

//Displaying total amount from values.
console.log(countMessage(flavorObject));

// Iterate through key and values in flavorObject and print to screen.
console.log("The flavors you've requested are: ")
for (const key in flavorObject) {
    console.log(`${flavorObject[key]} - ${key} froyo(s)`);
}
console.log(flavorObject);