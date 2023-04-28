let ratio = 10;
const PI  = 3.1415;

let area = PI * ratio * ratio;

// Tenemos dos formas de esribir fucniones
// Palabra fuction

function getCircleArea(ratio) {
    const PI = 3.1415;
    let area = PI * ratio * ratio;
    console.log(area);
    return area;
}

let circleAreOne = getCircleArea(5);
let circleAreTwo = getCircleArea(3);
let circleAreThree = getCircleArea(7);
console.log(circleAreOne);
console.log(circleAreTwo);
console.log(circleAreThree);

function getrectangleArea(base, height) {
    let area = base * height;
    return area;
}

let areaRectangleOne = getrectangleArea(6, 7);
let areaRectangleTwo = getrectangleArea(4, 9);
let areaRectangleThree = getrectangleArea(7, 2);
console.log(areaRectangleOne);
console.log(areaRectangleTwo);
console.log(areaRectangleThree);


function getPolygonArea(numberOfSides, sideLenght, apothem) {
    let area = numberOfSides * sideLenght * apothem / 2;
    return area;
}
let areaPolygonOne = getPolygonArea(5, 12, 4);


// Las anteriores se definen como funciones convencionales

/*-----------------------------------------------------------------*/

// funciones anonimas
/** son funciones que no tienen nombre */
setTimeout(function(){
    console.log("hola");
}, 600);    

/*-------------------------------------------------------------- */

//Funcion flecha
//Arrow functions
// diferencias
// es una funcion a nonima asignada a una variable. cada que cree una funcion flecha necesito escribir el nombre de la varibale ala que la voy a asignar

//LAS FUNCIONES FLECHA TIENEN EL RETURN IMPLICITO NO NECESITAN TENER EL RETURN
// RETURN IMPLCITO SOLO SI SE PUEDE RESOLVERUN UNA SOLA EXPRESION

const myFuntion =  () => {

}

const arrowEvaluateAddOrEven = numberToEvaluate => numberToEvaluate % 2 !== 0;
let isAddOrEven = arrowEvaluateAddOrEven(7);
console.log(isAddOrEven);

/**------------------------- */
const arrowIsMayor = age => {
    if ( age >= 18 ){
        return  `La persona es mayor de edad ya que tiene ${age} años`
    } else {
        return  `La persona es menor de edad ya que tiene ${age} años`
    }
} 

let personIsMayor = arrowIsMayor(5);
console.log(personIsMayor);