console.log("Objects objects objects!")

const wordLength = (word) =>{
return word.length
}

console.log(wordLength('cats'))

console.log(`This sentence is ${wordLength('How many letters will this be?')} letters long.`)

//age check function

const ageCheck = (age) => {
if (age < 21) {
    console.log("No drinks for you!");
} else {
    console.log("Have fun, but don't drink and drive!")
}
}

ageCheck(18)
ageCheck(21)
