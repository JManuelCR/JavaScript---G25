let phrase1 = "Esto es una preba para el programa que se esta realizando"

const printWordByWord = (phrase) => {
    let wordsArray = phrase.split(" ");
    for( let i = 0 ; i < wordsArray.length; i++){
        console.log( wordsArray[i])
    }
}

printWordByWord(phrase1);
