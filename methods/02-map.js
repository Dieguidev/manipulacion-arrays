const letters = ['a', 'b', 'c'];
//*********************************************** */
//metodo sin map
//*********************************************** */
const newArray = [];
for (let i = 0; i < letters.length; i++) {  
    const element = letters[i];
    newArray.push(element + '++');
}

console.log(newArray);

//*********************************************** */
//metodo con map
//*********************************************** */
const newArray2 = letters.map(item => item + '++');
console.log(newArray2);
console.log(letters);