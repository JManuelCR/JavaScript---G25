/**------------- Obtener las iniciales de un nombre en mayusculas y separadas en mayuscula y separadas por un punto */
const getNameInitialsInUpperCase = (completeName) => {
    let splitWords = getNameSplited(completeName);
    let firstLetters = getFirstLeters(splitWords);
    let letterInUpperCase = getFirstLetersInUpperCase(firstLetters);
    return letterInUpperCase.join(".");   
}

const getNameSplited = name =>  splitWords = name.split(" ");
const getFirstLeters = words => words.map(words => words.charAt(0))
const getFirstLetersInUpperCase = firstLetters => firstLetters.map(letter => letter.toUpperCase());

let initialsOfName1 = getNameInitialsInUpperCase("jose manuel cabrera rojas");
console.log(initialsOfName1);
let initialsOfName2 = getNameInitialsInUpperCase("Alejandra morales Ruiz");
console.log(initialsOfName2);
let initialsOfName3 = getNameInitialsInUpperCase("Carlos lopez ramirez");
console.log(initialsOfName3);

/**------------------------------------------------------------------------------------------------------*/
/** Saber si el nombre de un producto es facil de recordar */

const isEasyToRemenber = productName => {
    let justLetters =  getNameFiltered(productName);
    let howManyLetters = justLetters.length;
    let isDificult = howManyLetters > 5 ? `El nombre ${productName} es dificil de recordar` : `El nombre ${productName} es facil de recordar`;
    return isDificult;
}
const getNameFiltered = name => name.replace(" ", "");

let producto1 = "Victoria";
let producto2 = "Corona";
let producto3 = "XXX";
let producto4 = "BudWeiser";
let producto5 = "U H  U"

let evaluacion1 = isEasyToRemenber(producto1);
let evaluacion2 = isEasyToRemenber(producto2);
let evaluacion3 = isEasyToRemenber(producto3);
let evaluacion4 = isEasyToRemenber(producto4);
let evaluacion5 = isEasyToRemenber(producto5);

console.log(evaluacion1);
console.log(evaluacion2);
console.log(evaluacion3);
console.log(evaluacion4);
console.log(evaluacion5);

/**------------------------------------------------------------------------------------------------------*/

/**---- Dada la entrada de palabras random ejecutar la salida esperada */

const isOddOrEven = word => 
     word.length % 2 === 0 ? getMiddlesOfOddCase(word) :  getMiddlesOfEvenCase(word); 

const getMiddlesOfOddCase = word => `${word.slice(0, word.length/2)}\n${word.slice(word.length/2, word.length)}` 
const getMiddlesOfEvenCase = word => isTheMeddleAVowel(word, word.slice((word.length - 1)/2), word.length);  
const isTheMeddleAVowel = (completeWord, secondPart) => {
    let middleLetterEvaluation = secondPart.charAt(0).toLowerCase() === "a"|| secondPart.charAt(0).toLowerCase() ===  "e" || secondPart.charAt(0).toLowerCase() === "i" || secondPart.charAt(0).toLowerCase() === "o" || secondPart.charAt(0).toLowerCase() === "u"  ? getCapitlizedMiddlesWitoutMiddleLetter(completeWord) : getMiddlesWitoutMiddleLetter(completeWord);
    return middleLetterEvaluation;
}
const getMiddlesWitoutMiddleLetter = wordToDivide =>getMiddles(wordToDivide).reduce((arrray, item ) => arrray + item + "\n", "");

const getCapitlizedMiddlesWitoutMiddleLetter = wordToDivide => getMiddles(wordToDivide).reduce((array, item) => array + `${item.charAt(0).toUpperCase()}${item.slice(1)}\n`, "");

const getMiddles = wordToDivide => {
    let firstMiddle = wordToDivide.slice(0, (wordToDivide.length-1)/2);
    let secondMiddle = wordToDivide.slice(((wordToDivide.length-1)/2)+1, wordToDivide.length);
    return [firstMiddle, secondMiddle]
};


let word1 = isOddOrEven("Salida");
console.log(word1);
let word2 = isOddOrEven("entrada");
console.log(word2);
let word3 = isOddOrEven("Salinas");
console.log(word3);
let word4 = isOddOrEven("ojito");
console.log(word4);
