console.log("Your combo js file is connected.")

// Challenge #1
// Create a function called evenOdd that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.


const pickANumber = ""

const evenOdd = (pickANumber) => {
 if (pickANumber % 2 === 0) {
     return "The number you picked is even!"
 } else {
     return "The number you picked is odd!"
 }
}

console.log("The number below for for question number one.")
console.log(evenOdd(1))
console.log(evenOdd(2))
console.log(evenOdd(3))





// Challenge #2
// given a number, find its opposite. 2 = -2


const oppositeNumber = (anyNumber) => {
    return anyNumber - (anyNumber * 2)
}

console.log("The number below for for question number two.")
console.log(oppositeNumber(364))





// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.

/*
const amIAPalindrome = (pickAWord) => {
if (pickAWord == pickAWord.reverse) {
    console.log(`${pickAWord} is a palindrome!`)
} else {
    console.log(`${pickAWord} is not a palindrome!`)
}
}

amIAPalindrome('racecar');


const pickAWordReversed = pickAWord.reverse

const amIAPalindrome = (pickAWord) => {
    
    if (pickAWord === pickAWordReversed) {
        console.log("It is a palindrome!")
    } else {
        console.log("It's not a palindrone!")
    }
}

amIAPalindrome("dad")
console.log(pickAWordReversed)
*/

const amIAPalindrome = (pickAWord) => {
const pickAWordReversed = pickAWord.split('').reverse().join('');
if(pickAWord === pickAWordReversed) {
return true;
} else {
return false;
}
}

console.log(amIAPalindrome('dad')) //true
console.log(amIAPalindrome('joe')) //false
console.log(amIAPalindrome('mom')) //true
console.log(amIAPalindrome('bobby')) //false




// Challenge #4
// Lawrence the wide mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat the lips of wide-mouthed frogs!
// Given a string with the animal name, that Lawrence encounters, output small if the animal is an alligator (case insensitive) otherwise return wide.


const animal = (str) => {
if(str === 'alligator' ) {
return "small"
} else {
    return "wide"
}
}

console.log(animal('alligator')) // small
console.log(animal('fish')) // wide