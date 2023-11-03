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
 * Generates a message on the total amount of flavors
 * requested by the user.
 * @param {string[]} array an array of flavors.
 * @return {string} generated message.
 * */
/
function countMessage(array) {
    return `You've provided ${array.length} flavors`
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
    for (let i in strArr) {
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

const flavorArray = getUserFlavors();

console.log(countMessage(flavorArray));

const flavorObject = objFlavors(flavorArray);

console.log("The flavors you've requested are: ")

//Iterate through key and values in flavorObject and print to screen.
for (const key in flavorObject) {
    console.log(`${flavorObject[key]} - ${key} froyo(s)`);
}

console.log(flavorObject);