let mentors = [
    {
        name: "Israel",
        lastName: "Salinas"
    },
    {
        name: "Charles",
        lastName: "Silva"
    }
]
/** con for */
// const getFullNames = (dataArray) =>{
//     let fullNames = [];
//     for( leti = 0; i < dataArray.length; i++){
//         let {name, lastName} = dataArray[i];
//         let fulllName = `${name} ${lastName}`;
//         fulllName.push(fullNames);
//     }
//     return fullNames;
// }

/** Con map */

const getFullNames = (mentorArray) => {
    let result = mentorArray.map((item, index, arr) =>{
        let {name, lastName} = item;
        let fullName = `${name} ${lastName}`;
        return fullName;
    })
    return result;
}

let people = [
    {
        name: "Israel",
        lastName: "Salinas Martinez"
    },
    {
        name: "Ariana Naomi",
        lastName: "Lopez Puertos"
    },
    {
        name: "Maydeli Berenice",
        lastName: "Sanchez Loera"
    }
]

/** Necesitamos una lista con las iniciales de cada persona */
const getInitials = (peopleArray) =>{    
    let result = people.map((item, index, arr) => {
        let {name, lastName} = item;
        let fullName = `${name} ${lastName}`;
        let firstLetters =  fullName.split(" ").map(item => {
            let letters = [];
            letters.push(item[0]);
            return letters;
        });
        return firstLetters.join(".");
    })
    return result;
}

let prueba1 = getInitials(people);
console.log(prueba1);

let cars = [
    {
        name: "Sentra",
        year: 2023,
        price: 380000,
        discount: 15
    },
    {
        name: "Toledo",
        year: 2023,
        price: 375000,
        discount: 10
    },
    {
        name: "Versa",
        year: 2023,
        price: 330000,
        discount: 20
    }
]

const getNameAndFinalPrice = carsArray => {
    let result = carsArray.map(item => {
        let {name, price, discount} = item;
        let finalPrice = price * ((price - discount)/100);
        return `El precio final del automovil ${name} es de ${finalPrice}`;
    })
    return result;
}

let arrayCarsPrice = getNameAndFinalPrice(cars);
console.log(arrayCarsPrice);