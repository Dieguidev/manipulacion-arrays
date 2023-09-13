const letters = ['a', 'b', 'c'];
//*********************************************** */
//metodo sin foreach
//*********************************************** */
for (let i = 0; i < letters.length; i++) {  
    const element = letters[i];
    console.log('for', element);
}

//*********************************************** */
//metodo con foreach
//*********************************************** */
letters.forEach(item => console.log('forEach', item));