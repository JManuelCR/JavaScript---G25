console.log();
document.write();
String.charAt();

let text = " la mejor forma de predecir el futuro es creandolo";
let text2 = new String("Otro string");

let mentor = {
  name: "Carlos",
  lastName: " salinas Martinez",
  age: 33,
  height: 1.72,
  weight: 75,
  experienceYears: 8,
  signatures: ["HTML", "CSS", "JS", "BS", "TW", "FIREBASE", "REACTJS"],
  gender: "male",
  greating: (koderToGreet) => {
    console.log(`Si buenas noches estimad@ ${koderToGreet}`);
  },
  brringSomething: () => {
    "Lo que sea que se me ocurra";
  },
};
console.log(mentor);
console.log(mentor.age);
console.log(mentor.height);

let somethig = mentor.brringSomething();
// console.log(something);

// greetAKoder("sam"); //error porque no se puede accesar a un metodo de un objeto si no es a traves del objeto

const printMentorName = (mentor) => {
  console.log(
    `Hola Mi nombre es ${mentor.name} ${mentor.lastName} y tengo ${age} años!`
  );
  console.log(
    `Hola, soy ${mentor.name} ${mentor.lastName} y tengo ${mentor.age} años`
  );
  console.log(
    `Hola, soy ${mentor.name} ${mentor.lastName} y tengo ${mentor.age} años`
  );
};

mentor.hobbies = ["chess", "music", "starcraft", "diablo", "kodding"];

mentor.isReady = true;
console.log(mentor);
delete mentor.age;
console.log(mentor);

console.log(mentor.hasOwnProperty("hobies"));
console.log(mentor.adress);
if (mentor.adress === undefined) {
  console.log("El mentor no tiene dirccion");
} else {
  console.log(`La direccion del mentor es ${mentor.adress}`);
}
/** -------------------------------------------------------------------------------- */

let televisionProgram = {
  name: "El chavo del 8",
  genere: "crime",
  launch: 2008,
  showPresentation: () => {
    return `This program is named ${televisionProgram.name} is about ${
      televisionProgram.genere
    } and it was launched in ${parseInt(televisionProgram.launch)}`;
  },
};

let launching = televisionProgram.showPresentation();
console.log(launching);

const asksomething = (question) => {
  let answer = televisionProgram[question];
  return `The question was, what is the program ${question} and the answer is ${answer}`;
};

let askAboutProgram = asksomething("name");
console.log(askAboutProgram);

const produto1 = {
  name: "Mayonesa",
  color: "Blanco",
  smell: "agrio",
  size: "500ml",
  expirationDate: 2023,
};
const produto2 = {
  name: "Frijoles",
  color: "Blanco",
  smell: "agrio",
  size: "500ml",
  expirationDate: 2026,
};
const today = new Date();
const checkRotten = (obj, actualDate) =>
  obj.expirationDate > actualDate
    ? `El producto ${obj.name} esta fresco`
    : `El producto ${obj.name} esta caducado`;

console.log(checkRotten(produto1, today.getFullYear()));
console.log(checkRotten(produto2, today.getFullYear()));

const produto3 = {
  name: "Mayonesa",
  color: "Blanco",
  smell: "agrio",
  size: "500ml",
  expirationDate: "03/2023",
};
const produto4 = {
  name: "Frijoles",
  color: "Blanco",
  smell: "agrio",
  size: "500ml",
  expirationDate: "05/2026",
};

const today2 = new Date();
const checkRotten2 = (obj) => {
const date = getActualDateFormatted(today2); 
  if (obj.expirationDate.slice(1) > date) {
    return `El producto ${obj.name} esta fresco`;
  }
  return `El producto ${obj.name} esta caducado`;
};
const getActualDateFormatted = actualDate => actualDate.getMonth()+"/"+actualDate.getFullYear();
console.log(checkRotten2(produto3));
console.log(checkRotten2(produto4));

